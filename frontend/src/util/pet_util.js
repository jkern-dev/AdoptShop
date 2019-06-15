import axios from 'axios';

export const getPets = () => {
  return axios.get('api/pets')
};

export const getPet = id => {
  return axios.get(`/api/pets/${id}`)
};

export const createPet = data => {
  return axios.post('/api/pets', data)
};

