import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactItem } from 'components/ContactList/ContactItem';
import { H1, H2, StyledContainer } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedIsToken } from 'Redux/auth/selectors';
import { fetchContacts } from 'Redux/slises/operations';
import { selectIsLoading } from 'Redux/slises/selectors';
import { FlexList } from './ContactList.stiled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const isLoading = useSelector(selectIsLoading);
  const isToken = useSelector(selectedIsToken);
  const dispatch = useDispatch();

  const changedList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <StyledContainer>
        <H1>Phonebook</H1>
        <ContactForm btn="Add contact" />
        <H2>Contacts</H2>
        <Filter />
        {isLoading && <p>Loading...</p>}
        {isToken && (
          <FlexList>
            {changedList.map(item => {
              const { id, name, number } = item;
              return (
                <ContactItem key={id} id={id} name={name} number={number} />
              );
            })}
          </FlexList>
        )}
      </StyledContainer>
    </>
  );
};

export default ContactList;
