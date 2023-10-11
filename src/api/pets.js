import instance from ".";

const getAllPets = async () => {
  const res = await instance.get("/pets");
  return res.data;
};
const getPet = async (petId) => {
  const res = await instance.get(`/pets/${petId}`);
  return res.data;
};
const addPet = async (name, type, image, adopted) => {
  const res = await instance.post("/pets", {
    name: name,
    type: type,
    image: image,
    adopted: adopted,
  });
  return res.data;
};
const updatePet = async (name, type, image, petId) => {
  const res = await instance.put(`/pets/${petId}`, {
    name: name,
    type: type,
    image: image,
    adopted: 1,
  });
  return res.data;
};
const deletePet = async (petId) => {
  const res = await instance.delete(`/pets/${petId}`);
  return res.data;
};

export { getAllPets, getPet, addPet, updatePet, deletePet };
