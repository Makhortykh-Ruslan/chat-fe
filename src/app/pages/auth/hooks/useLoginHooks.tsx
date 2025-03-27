import { ControlNames } from '@core/constants';
import { useControlSchemas } from '@core/forms';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

const controls = useControlSchemas();

const schema = z.object({
  [ControlNames.EMAIL]: controls[ControlNames.EMAIL],
  [ControlNames.PASSWORD]: controls[ControlNames.PASSWORD],
});

type LoginFormData = z.infer<typeof schema>;

export const useLoginForm = (): UseFormReturn<LoginFormData> =>
  useForm<LoginFormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      [ControlNames.EMAIL]: null,
      [ControlNames.PASSWORD]: null,
    },
  });
