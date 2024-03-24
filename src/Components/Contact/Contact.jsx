import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  return (
    <li className={css.wrapper_contact}>
      <div>
        <h2>{contact.name}</h2>
        <p>{contact.number}</p>
      </div>
      <button type="button" className={css.delete_button}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
