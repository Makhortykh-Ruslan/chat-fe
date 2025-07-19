import { EControlNames } from '@core/constants';
import { z } from 'zod';

export const getFormValidators = {
  [EControlNames.EMAIL]: z
    .string({ required_error: 'Field is required' })
    .min(1, 'Field is required')
    .email('Email is not correctly'),

  [EControlNames.PASSWORD]: z
    .string({ required_error: 'Filed is required' })
    .min(1, 'Field is required')
    .min(6, 'Password must by minimum 6 symbols'),
};
