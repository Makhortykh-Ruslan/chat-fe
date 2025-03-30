import { EControlNames } from '@core/constants';
import { getFormValidators } from '@core/forms/form-validators.ts';
import { TAuthForm } from '@core/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

export const useLoginForm = (): UseFormReturn<TAuthForm> => {
  const { t } = useTranslation();
  const schema = z.object(getFormValidators(t));

  return useForm<TAuthForm>({
    resolver: zodResolver<TAuthForm>(schema),
    mode: 'onChange',
    defaultValues: {
      [EControlNames.EMAIL]: '',
      [EControlNames.PASSWORD]: '',
    },
  });
};
