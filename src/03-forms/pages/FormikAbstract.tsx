import * as Yup from "yup";
import "../styles/styles.css";
import { Form, Formik } from "formik";
import { MyTextInput, MySelect, MyCheckbox } from "../components";

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "debe de tener 15 caracteres o menos")
            .required("requerido"),
          lastName: Yup.string()
            .max(15, "debe de tener 15 caracteres o menos")
            .required("requerido"),
          email: Yup.string()
            .email("Email no tiene un fotmato valido")
            .required("requerido"),
          terms: Yup.boolean().oneOf([true], "Debe aceptar los terminos"),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "esta opcion no esta permitida")
            .required("requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput name="firstName" label="First Name" />
            <MyTextInput name="lastName" label="Last Name" />
            <MyTextInput name="email" label="Email" type="email" />

            <MySelect label="Job Type" name="jobType">
              <option value="">Elige uno</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">Senior</option>
              <option value="it-jr">Junior</option>
            </MySelect>

            <MyCheckbox name="terms" label="Terms & conditions" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
