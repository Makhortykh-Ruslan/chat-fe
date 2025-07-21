export const ERegistrationStep = {
  FORM: 'form',
  SUBMITTED_EMAIL: 'submitted-email',
} as const;

export type TRegistrationStep =
  (typeof ERegistrationStep)[keyof typeof ERegistrationStep];
