import { vi } from 'vitest';

export const generalMocks = () => {
  vi.mock('@core/context', () => ({
    useAlertSnackbar: () => ({
      error: vi.fn(),
      success: vi.fn(),
    }),
  }));

  vi.mock('@core/hooks', () => ({
    useModuleNavigate: () => vi.fn(),
  }));

  vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual<any>('react-router-dom');
    return {
      ...actual,
      useNavigate: () => vi.fn(),
    };
  });

  vi.mock('@core/store/useStore', () => ({
    useStore: () => () => ({
      setUser: vi.fn(),
    }),
  }));

  vi.mock('@core/services', () => ({
    AuthService: {
      login: vi.fn(),
    },
  }));

  vi.mock('@/app/pages/auth/hooks', async () => {
    const { useForm } = await import('react-hook-form');
    const actual = await vi.importActual<any>('@/app/pages/auth/hooks');

    return {
      ...actual,
      useAuthForm: () => {
        const form = useForm({
          defaultValues: {
            email: '',
            password: '',
          },
          mode: 'onChange',
          reValidateMode: 'onChange',
        });

        return {
          ...form,
          getValues: () => form.getValues(),
        };
      },
    };
  });

  vi.mock('@core/context', async () => {
    const actual =
      await vi.importActual<typeof import('@core/context')>('@core/context');
    return {
      ...actual,
      useAlertSnackbar: () => ({
        error: vi.fn(),
        success: vi.fn(),
      }),
    };
  });
};
