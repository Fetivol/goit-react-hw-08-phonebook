import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { Phonebook } from 'components/Phonebook/Phonebook';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import { ContactsWrapper } from './Pages.styled';
import { Loader } from 'components/Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsWrapper>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <Phonebook />
      <Filter />
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      {isLoading ? <Loader /> : <ContactsList />}
      {/* <ContactsList /> */}
    </ContactsWrapper>
  );
}
