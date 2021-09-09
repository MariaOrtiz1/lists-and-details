export const findVillagers = () => {
  return fetch('https://ac-vill.herokuapp.com/villagers')
    .then((res) => res.json())
    .then((json) => 
      json.map((villager) => ({
        id: villager._id,
        name: villager.name,
        image: villager.image,
        species: villager.species,
        personality: villager.personality,
        quote: villager.quote,
      }))
    );
};
