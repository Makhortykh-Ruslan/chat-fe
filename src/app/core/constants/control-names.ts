export const EControlNames = {
  EMAIL: 'email',
  PASSWORD: 'password',
} as const;

export type TControlName = (typeof EControlNames)[keyof typeof EControlNames];
