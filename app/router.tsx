import { createRouter as createTanStackRouter } from '@tanstack/react-router';

import { DefaultCatchBoundary } from './components/errors/default-catch-boundary';
import { NotFound } from './components/errors/not-found';
import { routeTree } from './routeTree.gen';

export function createRouter() {
  const router = createTanStackRouter({
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => <NotFound />,
    defaultPreload: 'intent',
    routeTree,
  });

  return router;
}

declare module '@tanstack/react-router' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
