import * as Yup from "yup";
import { Form, Formik, Field } from "formik";
import css from "./ContactForm.module.css";
import { useId } from "react";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ addContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    addContact(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.forms}>
        <div className={css.add}>
          <label htmlFor={nameFieldId} name="name">
            Name
          </label>
          <Field id={nameFieldId} className={css.inp} type="text" name="name" />
          <br />

          <label htmlFor={numberFieldId} name="number">
            Number
          </label>
          <Field
            id={numberFieldId}
            className={css.inp}
            type="number"
            name="number"
          />
          <br />
        </div>

        <button className={css.btn} type="submit">
          Add Contacts
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
