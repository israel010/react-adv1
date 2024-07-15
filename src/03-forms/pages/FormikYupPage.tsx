import * as Yup from "yup";
import "../styles/styles.css";
import { useFormik } from "formik";

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values: any) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "debe de tener 15 caracteres o menos")
        .required("requerido"),
      lastName: Yup.string()
        .max(15, "debe de tener 15 caracteres o menos")
        .required("requerido"),
      email: Yup.string()
        .email("Email no tiene un fotmato valido")
        .required("requerido"),
    }),
  });
  return (
    <div>
      <h1>Form Yup Page</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
