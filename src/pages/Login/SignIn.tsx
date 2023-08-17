/* eslint-disable jsx-a11y/label-has-associated-control */
import { Form, useActionData, useLocation, useNavigation } from 'react-router-dom';

export function SignIn() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get('from') ?? '/';

  const navigation = useNavigation();
  const isLoggingIn = navigation.formData?.get('username') != null;

  const actionData = useActionData() as { error: string } | undefined;

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <Form method='post' replace>
        <input type='hidden' name='redirectTo' value={from} />
        <label>
          Username:
          <input type='text' name='username' />
        </label>{' '}
        <button type='submit' disabled={isLoggingIn}>
          {isLoggingIn ? 'Logging in...' : 'Login'}
        </button>
        {actionData?.error ? <p style={{ color: 'red' }}>{actionData.error}</p> : null}
      </Form>
    </div>
  );
}
