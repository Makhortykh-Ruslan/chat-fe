export const EControlName = {
  EMAIL: 'email',
  PASSWORD: 'password',
  USER_NAME: 'userName',
} as const;

export type TControlName = (typeof EControlName)[keyof typeof EControlName];
