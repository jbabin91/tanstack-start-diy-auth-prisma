import { createFileRoute, Link } from '@tanstack/react-router';

import { ModeToggle } from '~/components/mode-toggle';
import { buttonVariants } from '~/components/ui/button';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-2">
      <h3 className="py-4 text-3xl font-semibold">Welcome Home!!!</h3>

      <div>
        <p>You are not logged in.</p>
        <div className="mt-6 flex gap-2">
          <Link className={buttonVariants({ variant: 'default' })} to="/login">
            Login
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
