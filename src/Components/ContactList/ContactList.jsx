import Contact from "../Contact/Contact";

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.lenght === 0 ? (
        <p>You do not have any contact!</p>
      ) : (
        contacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })
      )}
    </ul>
  );
};

export default ContactList;
