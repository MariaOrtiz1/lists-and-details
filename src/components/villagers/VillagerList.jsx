import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager';

const VillagerList = ({ villagers }) => (
  <ul aria-label="villagers" style={{
    
  }}>
    {villagers.map((villager) => (
      <li key={villager.id}>
        <Villager
          id={villager.id}
          name={villager.name}
          image={villager.image}
          species={villager.species}
          personality={villager.personality}
          quote={villager.quote}
        />
      </li>
    ))}
  </ul>
);

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      personality: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VillagerList;
