import { Button, TextField } from '@mui/material';
import { Form, PageTitle } from 'pages/Register/Register.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <div>
      <PageTitle>Please Login</PageTitle>
      <Form type="submit" autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          name="email"
          margin="normal"
          autoComplete="current-password"
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          margin="normal"
          autoComplete="current-password"
        />
        <Button type="submit" variant="outlined" size="small">
          Submit
        </Button>
      </Form>
    </div>
  );
}
