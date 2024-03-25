import * as Yup from "yup";
import { Form, Formik, Field } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={css.forms}>
        <div className={css.add}>
          <label name="contactName"> Name</label>
          <Field className={css.inp} type="text" name="contactName" />
          <br />

          <label name="contactNumber"> Number</label>
          <Field className={css.inp} type="text" name="contactNumber" />
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
