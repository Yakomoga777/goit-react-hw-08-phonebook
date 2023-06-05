import { ContactForm } from 'components/ContactForm/ContactForm';
import { H1 } from 'components/Container/Container';

export default function HomePage() {
  return (
    <div>
      <H1>Phonebook</H1>
      <ContactForm btn="Add contact" />
    </div>
  );
}
