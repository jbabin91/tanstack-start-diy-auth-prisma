import {
  ErrorComponent,
  type ErrorComponentProps,
  Link,
  rootRouteId,
  useMatch,
  useRouter,
} from '@tanstack/react-router';

import { Button, buttonVariants } from '../ui/button';

/**
 * DefaultCatchBoundary component is used to handle errors in the application.
 * It displays an error message and provides options to retry the action or navigate back.
 *
 * @param {ErrorComponentProps} props - The properties passed to the component.
 * @param {Error} props.error - The error object that contains information about the error.
 *
 * @returns {JSX.Element} A JSX element that renders the error message and navigation buttons.
 *
 * @example
 * <DefaultCatchBoundary error={new Error("Something went wrong")} />
 */
export function DefaultCatchBoundary({
  error,
}: ErrorComponentProps): JSX.Element {
  const router = useRouter();
  const isRoot = useMatch({
    select: (state) => state.id === rootRouteId,
    strict: false,
  });

  console.error(error);

  return (
    <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-6 p-4">
      <ErrorComponent error={error} />
      <div className="flex flex-wrap items-center gap-2">
        <Button
          onClick={() => {
            router.invalidate();
          }}
        >
          Try Again
        </Button>
        {isRoot ? (
          <Link className={buttonVariants({ variant: 'secondary' })} to="/">
            Home
          </Link>
        ) : (
          <Link
            className={buttonVariants({ variant: 'secondary' })}
            to="/"
            onClick={(e: any) => {
              e.preventDefault();
              globalThis.history.back();
            }}
          >
            Go Back
          </Link>
        )}
      </div>
    </div>
  );
}
