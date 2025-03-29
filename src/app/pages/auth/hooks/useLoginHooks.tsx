import { EControlNames } from '@core/constants';
import { getFormValidators } from '@core/forms/form-validators.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

export type TLoginForm = {
  [EControlNames.EMAIL]: string;
  [EControlNames.PASSWORD]: string;
};

export const useLoginForm = (): UseFormReturn<TLoginForm> => {
  const { t } = useTranslation();
  const schema = z.object(getFormValidators(t));

  return useForm<TLoginForm>({
    resolver: zodResolver<TLoginForm>(schema),
    mode: 'onChange',
    defaultValues: {
      [EControlNames.EMAIL]: '',
      [EControlNames.PASSWORD]: '',
    },
  });
};
