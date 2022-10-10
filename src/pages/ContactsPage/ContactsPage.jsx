import { ContactsForm } from 'components/ContactsForm';
import { ContactsFilter } from 'components/ContactsFilter';
import { Contacts } from 'components/Contacts';

export const ContactsPage = () => {
  return (
    <>
      <ContactsFilter />
      <ContactsForm />
      <Contacts />
    </>
  );
};
