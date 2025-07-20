import { EControlName } from '@core/constants';

export type TAuthForm = {
  [EControlName.EMAIL]: string;
  [EControlName.PASSWORD]: string;
};
