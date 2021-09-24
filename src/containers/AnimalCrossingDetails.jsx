import React from 'react';
import { useVillagerDetailEvents } from '../hooks/useEvents';

const AnimalCrossingDetails = () => {
  const { loading, villager } = useVillagerDetailEvents();

  if(loading) return <img 
    src="https://i.giphy.com/media/XE7hLtlphwAK70mP3i/giphy.webp" 
    alt="loading spinner of flying package with balloon" 
    style={{
      'display': 'flex',
      'justifyContent': 'center',
      'alignSelf': 'center',
    }}/>;

  return (
    <div role="div" aria-label="villager">
      <p>{villager.id}</p>
      <p>{villager.name}</p>
      <img src={villager.image} alt={villager.name} style={{
        'height': '300px',
        'width': '250px',
        'backgroundColor': '#edcadb',
        'borderRadius': '30px',
        'border': '3px dotted #a27cbf',
      }}/>
      <p>{villager.species}</p>
      <p>{villager.personality}</p>
      <p>{villager.quote}</p>
    </div>
  );
};

export default AnimalCrossingDetails;
