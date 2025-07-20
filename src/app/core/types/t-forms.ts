import { EControlNames } from '@core/constants';

export type TAuthForm = {
  [EControlNames.EMAIL]: string;
  [EControlNames.PASSWORD]: string;
};
