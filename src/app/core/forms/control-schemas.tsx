import { ControlNames } from '@core/constants';
import { TFunction } from 'i18next';
import { z, ZodTypeAny } from 'zod';

export type FieldSchemaMap = Record<ControlNames, ZodTypeAny>;

export const getControlSchemas = (t: TFunction): FieldSchemaMap => ({
  [ControlNames.EMAIL]: z
    .string({ required_error: t('form.email_required') })
    .nullable()
    .email(t('form.email_invalid')),

  [ControlNames.PASSWORD]: z
    .string({ required_error: t('form.password_required') })
    .nullable()
    .min(6, t('form.password_min')),
});
