import { EControlNames } from '@core/constants';
import { useControlSchemas } from '@core/forms';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

export const useLoginForm = (): UseFormReturn => {
  const controls = useControlSchemas();

  const schema = z.object({
    [EControlNames.EMAIL]: controls[EControlNames.EMAIL],
    [EControlNames.PASSWORD]: controls[EControlNames.PASSWORD],
  });

  return useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      [EControlNames.EMAIL]: '',
      [EControlNames.PASSWORD]: '',
    },
  });
};
