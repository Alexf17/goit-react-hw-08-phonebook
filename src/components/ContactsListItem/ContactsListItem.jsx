// import PropTypes from 'prop-types';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import { Name, Number, Button } from './ContactsListItem.styled';

export const ContactsListItem = ({ name, number, id, Updating }) => {
  const dispatch = useDispatch();

  return (
    <>
      <TableBody>
        <TableRow>
          <TableCell>
            <Name>{name}:</Name>
          </TableCell>
          <TableCell>
            <Number>{number}</Number>
          </TableCell>
          <TableCell>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </TableCell>
          <TableCell>
            <Button type="button" onClick={Updating}>
              Update?
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

// ContactsListItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
// };
