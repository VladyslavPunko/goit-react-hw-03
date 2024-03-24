import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  return (
    <li>
      <div className={css.wrapper_contact}>
        <h2>{contact.name}</h2>
        <p>{contact.number}</p>
      </div>
    </li>
  );
};

export default Contact;
