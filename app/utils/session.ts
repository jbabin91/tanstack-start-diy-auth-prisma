import { useSession } from 'vinxi/http';

export type SessionUser = {
  id: string;
  email: string;
  role: string;
};

export function useAppSession() {
  return useSession<SessionUser>({
    password: 'MySuperAwesomeSecretPassword',
  });
}
