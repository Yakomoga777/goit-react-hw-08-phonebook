import { ContactItem } from 'components/ContactList/ContactItem';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'Redux/slises/operations';
import { FlexList } from './ContactList.stiled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const changedList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <FlexList>
      {changedList.map(item => {
        const { id, name, number } = item;
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </FlexList>
  );
};
