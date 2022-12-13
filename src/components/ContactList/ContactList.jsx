import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { selectContacts, selectFilter } from 'redux/contacts/selectors';

import { renderFilteredContact } from 'components/App/helpers';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';

import { Wrapper } from './ContactList.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { UpdateContact } from 'components/UpdateContact/UpdateContact';
import { Filter } from 'components/Filter/Filter';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from '@mui/material';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = renderFilteredContact(contacts, filter);
  const [isOpen, setIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState('');
  const [currentName, setCurrentName] = useState('');
  const [currentNumber, setCurrentNumber] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const startUpdating = ({ id, name, number }) => {
    setCurrentId(id);
    setCurrentName(name);
    setCurrentNumber(number);
    setIsOpen(true);
  };

  const toggleUpdatePage = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      {isOpen && (
        <UpdateContact
          id={currentId}
          name={currentName}
          number={currentNumber}
          toggleUpdatePage={toggleUpdatePage}
        />
      )}

      {!isOpen && (
        <>
          {contacts.length > 0 && <Filter />}
          <TableContainer
            component={Paper}
            sx={{ bgcolor: 'rgb(240, 240, 240, 0.4)' }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ color: 'blue' }}>
                <TableRow>
                  <TableCell
                    sx={{ color: '#1976d3', fontWeight: 'bold', fontSize: 16 }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={{ color: '#1976d3', fontWeight: 'bold', fontSize: 16 }}
                  >
                    Number
                  </TableCell>
                  <TableCell
                    sx={{ color: '#1976d3', fontWeight: 'bold', fontSize: 16 }}
                  >
                    Delete
                  </TableCell>
                  <TableCell
                    sx={{ color: '#1976d3', fontWeight: 'bold', fontSize: 16 }}
                  >
                    Update
                  </TableCell>
                </TableRow>
              </TableHead>
              {filteredContacts.map(({ id, name, number }) => (
                <ContactsListItem
                  key={id}
                  name={name}
                  number={number}
                  id={id}
                  Updating={() => startUpdating({ id, name, number })}
                />
              ))}
            </Table>
          </TableContainer>
        </>
      )}
    </Wrapper>
  );
};
