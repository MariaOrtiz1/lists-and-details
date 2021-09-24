import React from 'react';
import Villager from './Villager';
import { useVillagerListEvents } from '../../hooks/useEvents';

const VillagerList = () => {
  const { villagers, loading } = useVillagerListEvents();
  if(loading) 
    return  <img 
      src="https://i.giphy.com/media/XE7hLtlphwAK70mP3i/giphy.webp" 
      alt="loading spinner of flying package with balloon" 
      style={{
        'display': 'flex',
        'justifyContent': 'center',
        'alignSelf': 'center',
      }}/>; 
  return (
    <ul aria-label="villagers" role="list">
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
};

export default VillagerList;


