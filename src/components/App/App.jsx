import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { Wrap, TitleBook, ContactTitle, ContactWrap } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Wrap>
      <TitleBook>Phonebook</TitleBook>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <ContactWrap>
        <Filter />
        {isLoading && 'Loading data, please wait...'}
        {error && { error }}
        {!!selectContacts.length && <ContactsList />}
      </ContactWrap>
    </Wrap>
  );
};
