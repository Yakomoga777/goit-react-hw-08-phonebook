import { ContactForm } from 'components/ContactForm/ContactForm';
import { H1, StyledContainer } from 'components/Container/Container';

export default function HomePage() {
  return (
    <div>
      <StyledContainer>
        <H1>Phonebook</H1>
        <ContactForm btn="Add contact" />
      </StyledContainer>
    </div>
  );
}
