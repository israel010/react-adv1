import * as Yup from "yup";
import "../styles/styles.css";
import { Form, Field, Formik, ErrorMessage } from "formik";

export const FormikComponent = () => {
  return (
    <div>
      <h1>Formik Componet</h1>

      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", terms: false }}
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
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" />
            <ErrorMessage component={"span"} name="firstName" />
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" />
            <ErrorMessage component={"span"} name="lastName" />

            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage component={"span"} name="email" />

            <label htmlFor="jobType">Select ajob</label>
            <Field name="jobType" as="select">
              <option value="">Elige uno</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">Senior</option>
              <option value="it-jr">Junior</option>
            </Field>
            <ErrorMessage component={"span"} name="jobType" />

            <label>
              <Field type="checkbox" name="terms" />
              Terms and conditions
            </label>
            <ErrorMessage component={"span"} name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
