import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';

export default function Contacts() {
  const isLoggedIn = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <h2>Contacts</h2>
      <ContactForm />
      <ContactsList />
    </>
  );
}
