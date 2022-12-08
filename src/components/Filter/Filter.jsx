import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'redux/slices/filterSlice';
import { selectFilter } from 'redux/selectors';

import { Input, Wrap } from './Filter.styled';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <Wrap>
      <Input
        name="filter"
        type="filter"
        value={value}
        onChange={e => dispatch(setFilter(e.target.value))}
      ></Input>
    </Wrap>
  );
};
