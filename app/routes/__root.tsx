import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Body, Head, Html, Meta, Scripts } from '@tanstack/start';

import { DefaultCatchBoundary } from '~/components/errors/default-catch-boundary';
import { NotFound } from '~/components/errors/not-found';
import { Toaster } from '~/components/ui/sonner';
import { ThemeProvider } from '~/providers/theme-provider';
import appCss from '~/styles/globals.css?url';
import { seo } from '~/utils/seo';

/**
 * Defines the root route configuration for the application.
 *
 * @constant
 * @type {object}
 *
 * @property {Function} meta - Returns an array of meta tags for the document head.
 * @property {Function} links - Returns an array of link tags for the document head.
 * @property {Function} beforeLoad - Asynchronously fetches the user from the session and adds it to the context.
 * @property {Function} errorComponent - Renders the error component when an error occurs.
 * @property {Function} notFoundComponent - Renders the component when a route is not found.
 * @property {React.ComponentType} component - The main component for the root route.
 */
export const Route: object = createRootRoute({
  component: RootComponent,
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  links: () => [
    { href: appCss, rel: 'stylesheet' },
    {
      href: '/apple-touch-icon.png',
      rel: 'apple-touch-icon',
      sizes: '180x180',
    },
    {
      href: '/favicon-32x32.png',
      rel: 'icon',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      href: '/favicon-16x16.png',
      rel: 'icon',
      sizes: '16x16',
      type: 'image/png',
    },
    { color: '#fffff', href: '/site.webmanifest', rel: 'manifest' },
    { href: '/favicon.ico', rel: 'icon' },
  ],
  meta: () => [
    {
      charSet: 'utf8',
    },
    {
      content: 'width=device-width, initial-scale=1',
      name: 'viewport',
    },
    ...seo({
      description: `TanStack Start is a type-safe, client-first, full-stack React framework. `,
      title:
        'TanStack Start | Type-Safe, Client-First, Full-Stack React Framework',
    }),
  ],
  notFoundComponent: () => <NotFound />,
});

/**
 * RootComponent is the main component for the root route.
 * It wraps the content in a RootDocument component and renders
 * an Outlet for nested routes.
 *
 * @returns {JSX.Element} The rendered root component.
 */
function RootComponent(): JSX.Element {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

/**
 * RootDocument component is responsible for rendering the main structure of the application.
 * It includes the HTML, Head, and Body tags, and provides navigation links and user authentication status.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components to be rendered within the body.
 *
 * @returns {JSX.Element} The rendered RootDocument component.
 *
 * @example
 * <RootDocument>
 *   <YourComponent />
 * </RootDocument>
 */
function RootDocument({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <Meta />
      </Head>
      <Body>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <ScrollRestoration />
        <TanStackRouterDevtools />
        <Scripts />
      </Body>
    </Html>
  );
}
