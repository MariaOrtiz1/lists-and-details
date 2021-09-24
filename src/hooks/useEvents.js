import { findVillagers, findOneVillager } from '../services/animalCrossing';
import { useParams } from 'react-router-dom';
import { useEffect,  useState } from 'react';

export const useVillagerListEvents = () => {
  const [loading, setLoading] = useState(true);
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    findVillagers()
      .then((villagers) => setVillagers(villagers))
      .finally(() => setLoading(false));
  }, []);

  return { loading, villagers };
};

export const useVillagerDetailEvents = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [villager, setVillager] = useState({});

  useEffect(() => {
    findOneVillager(id)
      .then((villager) => setVillager(villager))
      .finally(() => setLoading(false));
  }, [id]);

  return { loading, villager };
};
