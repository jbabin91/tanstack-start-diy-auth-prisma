import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/login')({
  component: LoginComponent,
});

function LoginComponent() {
  return (
    <>
      <div>Hello /_auth/login!</div>
    </>
  );
}
