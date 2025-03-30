import { EControlNames } from '@core/constants';
import { TFunction } from 'i18next';
import { z } from 'zod';

export const getFormValidators = (t: TFunction<'translation'>) => ({
  [EControlNames.EMAIL]: z
    .string({ required_error: t('field_required') })
    .min(1, t('field_required'))
    .email(t('email_invalid')),

  [EControlNames.PASSWORD]: z
    .string({ required_error: t('field_required') })
    .min(1, t('field_required'))
    .min(6, t('password_min')),
});
