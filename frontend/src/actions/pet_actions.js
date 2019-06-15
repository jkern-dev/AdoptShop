import {
  getPets,
  getPet,
  createPet
} from '../util/pet_util';

export const RECEIVE_PETS = 'RECEIVE_PETS';
export const RECEIVE_NEW_PET = 'RECEIVE_NEW_PET';
export const RECEIVE_PET = 'RECEIVE_PET';

export const receivePets = pets => ({
  type: RECEIVE_PETS,
  pets
});

export const receivePet = pet => ({
  type: RECEIVE_PET,
  pet
});

export const fetchPets = () => dispatch => (
  getPets()
    .then(pets => dispatch(receivePets(pets)))
    .catch(err => console.log(err))
);

export const fetchPet = id => dispatch => (
  getPet(id)
    .then(pet => dispatch(receivePet(pet)))
    .catch(err => console.log(err))
);

export const composePet = data => dispatch => (
  createPet(data)
    .then(pet => dispatch(receivePet(pet)))
    .catch(err => console.log(err))
);
