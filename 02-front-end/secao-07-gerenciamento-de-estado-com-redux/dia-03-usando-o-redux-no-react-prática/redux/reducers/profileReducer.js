import { PERSONAL_FORM, PROFESSIONAL_FORM } from '../actions/index';

const INITIAL_STATE = {
  personalInfo: {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    uf: '',
  },
  professionalInfo: {
    curriculum: '',
    job: '',
    description: '',
  },
};

export const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PERSONAL_FORM:
    return { ...state, personalInfo: { ...action.payload } };
  case PROFESSIONAL_FORM:
    return { ...state, professionalInfo: { ...action.payload } };
  default:
    return state;
  }
};

export default profileReducer;
