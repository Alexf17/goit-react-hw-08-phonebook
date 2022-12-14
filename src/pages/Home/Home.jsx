import { Button } from '@mui/material';
import { PageTitle } from 'pages/Register/Register.styled';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';

import { Wrapper, NavLi, HelloText, Block } from './Home.styled';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Wrapper>
      {isLoggedIn ? (
        <>
          <PageTitle>
            Now you can store and edit your contacts in one place!
          </PageTitle>
        </>
      ) : (
        <>
          <PageTitle>Welcome to Phonebook</PageTitle>
          <Block>
            <HelloText>To use our application you mast to</HelloText>
            <NavLi to="/register">
              <Button variant="text" size="small">
                Register
              </Button>
            </NavLi>
            or
            <NavLi to="/login">
              <Button variant="text" size="small">
                LogIn
              </Button>
            </NavLi>
          </Block>
        </>
      )}
    </Wrapper>
  );
}
