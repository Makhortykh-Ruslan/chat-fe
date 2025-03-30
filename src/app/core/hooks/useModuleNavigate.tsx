import { NavigateOptions, useLocation, useNavigate } from 'react-router-dom';

export const useModuleNavigate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (relativePath: string, opts?: NavigateOptions | undefined): void => {
    const base = location.pathname.split('/')[1];
    const fullPath = `/${base}/${relativePath}`;
    navigate(fullPath, opts);
  };
};
