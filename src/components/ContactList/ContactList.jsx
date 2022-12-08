import { useSelector } from 'react-redux';

import { selectContacts, selectFilter } from 'redux/selectors';

import { renderFilteredContact } from 'components/App/helpers';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';

import { Wrapper } from './ContactList.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = renderFilteredContact(contacts, filter);
  return (
    <Wrapper>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactsListItem key={id} name={name} phone={phone} id={id} />
      ))}
    </Wrapper>
  );
};
