import { 
  RECEIVE_PETS,
  RECEIVE_NEW_PET,
  RECEIVE_PET
} from '../actions/pet_actions';

const PetReducer = (state = { all: {}, pets: {}, user: {}, new: undefined}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PETS:
      newState.all = action.pets.data;
      return newState;
    case RECEIVE_PET:
      newState.pet = action.pet.data;
      return newState;
    case RECEIVE_NEW_PET:
      newState.new = action.pet.data;
      return newStatel
    default:
      return state;    
  }
};

export default PetReducer;