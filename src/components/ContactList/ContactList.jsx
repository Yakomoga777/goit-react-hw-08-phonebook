import { ContactItem } from 'components/ContactList/ContactItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { FlexList } from './ContactList.stiled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);

  const changedList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <FlexList>
      {changedList.map(item => {
        const { id, name, number } = item;
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </FlexList>
  );
};
