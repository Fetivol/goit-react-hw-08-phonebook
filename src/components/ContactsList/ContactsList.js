import {
  List,
  ListElem,
  Button,
} from 'components/ContactsList/ContactsList.styled';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';

export const ContactsList = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const visibleItems = useSelector(selectVisibleContacts);

  return (
    <>
      {isLoading && <Loader />}
      {visibleItems.length > 0 ? (
        <List>
          {visibleItems.map(({ id, name, number }) => {
            return (
              <ListElem key={id}>
                {name}: {number}
                <Button
                  type="button"
                  onClick={() => {
                    dispatch(deleteContact(id));
                  }}
                >
                  Delete
                </Button>
              </ListElem>
            );
          })}
        </List>
      ) : (
        <span>We didn't find this person</span>
      )}
    </>
  );
};
