// ACTIONS TYPES
export const PERSONAL_FORM = 'PERSONAL_FORM';
export const PROFESSIONAL_FORM = 'PROFESSIONAL_FORM';

// ACTIONS CREATORS
export const personalFormSubmit = (personalForm) => ({
  type: PERSONAL_FORM,
  payload: personalForm,
});

export const professionalFormSubmit = (professionalForm) => ({
  type: PROFESSIONAL_FORM,
  payload: professionalForm,
});
