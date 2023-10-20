import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { selectFilter } from 'redux/contacts/selectors';
import { filterAction } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        placeholder="Enter Contact"
        value={filter}
        onChange={e => {
          dispatch(filterAction(e.target.value));
        }}
      ></Input>
    </Label>
  );
};
