import AuthForm from '../AuthForm/AuthForm';

import { SIGNIN } from '../../../helpers/constants';

export default function ForgetPasswordForm({ handler, toggleActiveComponentType }) {
  const fields = [{ name: 'email', label: 'Email', type: 'text', placeholder: 'Email' }];

  return (
    <AuthForm
      title='Fyll i din epost för att få ett mail med en återställningslänk.'
      button='Alright!'
      fields={fields}
      handler={handler}
    >
      <p
        className='authforms__changeview authforms__link'
        onClick={(e) => toggleActiveComponentType(e, SIGNIN)}
      >
        Jag kom på mitt lösenord!
      </p>
    </AuthForm>
  );
}
