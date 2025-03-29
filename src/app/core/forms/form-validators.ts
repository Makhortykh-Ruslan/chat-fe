import { EControlNames } from '@core/constants';
import { TFunction } from 'i18next';
import { z } from 'zod';

export const getFormValidators = (t: TFunction) => ({
  [EControlNames.EMAIL]: z
    .string({ required_error: t('form.field_required') })
    .min(1, t('form.field_required'))
    .email(t('form.email_invalid')),

  [EControlNames.PASSWORD]: z
    .string({ required_error: t('form.field_required') })
    .min(1, t('form.field_required'))
    .min(6, t('form.password_min')),
});
