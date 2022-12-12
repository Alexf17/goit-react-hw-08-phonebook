import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'redux/contacts/slices/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

import { Input, Wrap } from './Filter.styled';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <Wrap>
      <Input
        placeholder="need to filter contacts? write here"
        name="filter"
        type="filter"
        value={value}
        onChange={e => dispatch(setFilter(e.target.value))}
      ></Input>
    </Wrap>
  );
};
