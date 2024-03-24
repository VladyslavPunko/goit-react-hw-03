import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
const Contact = ({ contact }) => {
  return (
    <li className={css.wrapper_contact}>
      <div>
        <h2>
          <FaUser size="16" /> {contact.name}
        </h2>
        <p>
          <FaPhone size="16" /> {contact.number}
        </p>
      </div>
      <button type="button" className={css.delete_button}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
