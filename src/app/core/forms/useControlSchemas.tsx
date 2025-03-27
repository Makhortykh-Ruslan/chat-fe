import {
  FieldSchemaMap,
  getControlSchemas,
} from '@core/forms/control-schemas.tsx';
import { useTranslation } from 'react-i18next';

export const useControlSchemas = (): FieldSchemaMap => {
  const { t } = useTranslation();

  return getControlSchemas(t);
};
