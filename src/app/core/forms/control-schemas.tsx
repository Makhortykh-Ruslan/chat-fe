import { EControlNames, TControlName } from '@core/constants';
import { z, ZodTypeAny } from 'zod';

export type FieldSchemaMap = Record<TControlName, ZodTypeAny>;

export const getControlSchemas = (t: any): FieldSchemaMap => ({
  [EControlNames.EMAIL]: z
    .string({ required_error: t('form.email_required') })
    .min(1, t('form.email_required'))
    .email(t('form.email_invalid')),

  [EControlNames.PASSWORD]: z
    .string({ required_error: t('form.password_required') })
    .min(1, t('form.email_required'))
    .min(6, t('form.password_min')),
});
