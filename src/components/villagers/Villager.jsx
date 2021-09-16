import React from 'react';
import PropTypes from 'prop-types';

const Villager = ({ id, name, image, species, personality, quote }) => (
  <button onClick={() => {location.replace(`/${id}`);}} 
    style={{
      'display': 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'backgroundColor': '#a27cbf',
      'borderRadius': '30px',
    }}>
    <p>{id}</p>
    <p>{name}</p>
    <img src={image} alt={name} style={{
      'height': '300px',
      'width': '250px',
      'backgroundColor': '#edcadb',
      'borderRadius': '30px',
      'border': '3px dotted #a27cbf',
    }}/>
    <p>{species}</p>
    <p>{personality}</p>
    <p>{quote}</p>
  </button>
);

Villager.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image:  PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default Villager;
