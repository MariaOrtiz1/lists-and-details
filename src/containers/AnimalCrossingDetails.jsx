import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { findOneVillager } from '../services/animalCrossing';

const AnimalCrossingDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [villager, setVillager] = useState({});

  useEffect(() => {
    findOneVillager(id)
      .then((villager) => setVillager(villager))
      .finally(() => setLoading(false));
  }, [id]);

  if(loading) return <img 
    src="https://i.giphy.com/media/XE7hLtlphwAK70mP3i/giphy.webp" 
    alt="loading spinner of flying package with balloon" 
    style={{
      'display': 'flex',
      'justifyContent': 'center',
      'alignSelf': 'center',
    }}/>;

  return (
    <div role="div" arai-label="villager">
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

export default AnimalCrossingDetail;
