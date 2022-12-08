import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import { Item, Name, Number, Button } from './ContactsListItem.styled';

export const ContactsListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Name>{name}:</Name>
      <Number>{phone}</Number>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Item>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
