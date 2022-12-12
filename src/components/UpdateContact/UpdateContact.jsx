import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeContact } from 'redux/contacts/operations';

export const UpdateContact = ({ toggleUpdatePage, id, name, number }) => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(changeContact({ id: id, name: newName, number: newNumber }));
    toggleUpdatePage();
  };
  return (
    <div>
      <h3>want to update some data of {name}?</h3>
      <form type="submit" onSubmit={handleSubmit}>
        <TextField
          label="New name"
          type="name"
          name="name"
          value={newName}
          autoComplete="current-password"
          onChange={e => setNewName(e.currentTarget.value)}
        />
        <TextField
          label="New number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={newNumber}
          autoComplete="current-password"
          onChange={e => setNewNumber(e.currentTarget.value)}
        />
        <button type="submit"> Update data of {name} </button>
        <button onClick={toggleUpdatePage}> close update window</button>
      </form>
    </div>
  );
};
