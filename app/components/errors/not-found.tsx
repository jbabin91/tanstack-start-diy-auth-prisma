import { Link } from '@tanstack/react-router';

import { Button, buttonVariants } from '../ui/button';

/**
 * NotFound component renders a message indicating that the requested page does not exist.
 * It provides options to navigate back to the previous page or start over from the home page.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} [props.children] - Optional children to be displayed instead of the default message.
 *
 * @returns {JSX.Element} The rendered NotFound component.
 */
export function NotFound({ children }: { children?: any }): JSX.Element {
  return (
    <div className="space-y-2 p-2">
      <div className="text-gray-600 dark:text-gray-400">
        {children || <p>The page you are looking for does not exist.</p>}
      </div>
      <p className="flex flex-wrap items-center gap-2">
        <Button onClick={() => globalThis.history.back()}>Go back</Button>
        <Link className={buttonVariants({ variant: 'secondary' })} to="/">
          Start Over
        </Link>
      </p>
    </div>
  );
}
