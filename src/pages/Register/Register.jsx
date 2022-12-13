import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import TextField from '@mui/material/TextField';
import { register } from 'redux/auth/operations';

import { Form, PageTitle } from './Register.styled';
import { Button } from '@mui/material';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (password.length < 7) {
      toast.warning(`Password must contain at least 7 characters !`, {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
        pauseOnHover: true,
      });
      return;
    }
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <PageTitle>Sign up page</PageTitle>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          type="text"
          name="name"
          value={name}
          autoComplete="current-password"
          onChange={handleChange}
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          margin="normal"
          value={email}
          autoComplete="current-password"
          onChange={handleChange}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          margin="normal"
          value={password}
          autoComplete="current-password"
          onChange={handleChange}
        />
        <Button type="submit" variant="outlined" size="small">
          Submit and Sign up
        </Button>
      </Form>
    </div>
  );
}
