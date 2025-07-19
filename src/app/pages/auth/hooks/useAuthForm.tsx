import { EControlNames } from '@core/constants';
import { getFormValidators } from '@core/forms/form-validators.ts';
import { TAuthForm } from '@core/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

export const useAuthForm = (): UseFormReturn<TAuthForm> => {
  const schema = z.object(getFormValidators);

  return useForm<TAuthForm>({
    resolver: zodResolver<TAuthForm>(schema),
    mode: 'onChange',
    defaultValues: {
      [EControlNames.EMAIL]: '',
      [EControlNames.PASSWORD]: '',
    },
  });
};
