import { EControlName } from '@core/constants';
import { TRegistrationForm } from '@core/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

export const useRegistrationForm = (): UseFormReturn<TRegistrationForm> => {
  const schema = z.object({
    [EControlName.EMAIL]: z
      .string({ required_error: 'Field is required' })
      .min(1, 'Field is required')
      .email('Email is not correctly'),

    [EControlName.PASSWORD]: z
      .string({ required_error: 'Filed is required' })
      .min(1, 'Field is required')
      .min(6, 'Password must by minimum 6 symbols'),
    [EControlName.USER_NAME]: z
      .string({ required_error: 'Filed is required' })
      .min(1, 'Field is required')
      .min(6, 'Password must by minimum 6 symbols'),
  });

  return useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      [EControlName.EMAIL]: '',
      [EControlName.PASSWORD]: '',
      [EControlName.USER_NAME]: '',
    },
  });
};
