export const findVillagers = async () => {
  const res = await fetch('https://ac-vill.herokuapp.com/villagers');
  const json = await res.json();
  return json.map((villager) => ({
    id: villager._id,
    name: villager.name,
    image: villager.image,
    species: villager.species,
    personality: villager.personality,
    quote: villager.quote,
  }));
};

export const findOneVillager = (id) => {
  return fetch(`https://ac-vill.herokuapp.com/villagers/${id}`)
    .then((res) => res.json())
    .then((villager) => {
      return {
        id: villager._id,
        name: villager.name,
        image: villager.image,
        species: villager.species,
        personality: villager.personality,
        quote: villager.quote,
      };});
};
