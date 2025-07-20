import { EControlName } from '@core/constants';

export type TRegistrationForm = {
  [EControlName.EMAIL]: string;
  [EControlName.PASSWORD]: string;
  [EControlName.USER_NAME]: string;
};
