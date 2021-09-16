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

export const findOneVillager = (id) => {
  // eslint-disable-next-line max-len
  return fetch(`https://ac-vill.herokuapp.com/villagers/${id}`)
    .then((res) => res.json())
    .then((villager) => 
      ({
        id: villager._id,
        name: villager.name,
        image: villager.image,
        species: villager.species,
        personality: villager.personality,
        quote: villager.quote,
      })
    );
};
