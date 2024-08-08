import * as Yup from "yup";

import { Form, Field, Formik, ErrorMessage } from "formik";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  // const {
  //   isValidEmail,
  //   onChange,
  //   email,
  //   name,
  //   password,
  //   password2,
  //   resetForm,
  // } = useForm({
  //   name: "",
  //   email: "",
  //   password: "",
  //   password2: "",
  // });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{ name: "", email: "", password: "", password2: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "debe de tener minimo 2 caracteres")
            .max(12, "debe de tener maximo 15 caracteres")
            .required("requerido"),
          email: Yup.string()
            .email("Email no tiene un fotmato valido")
            .required("requerido"),
          password: Yup.string().min(6, "debe de tener minio 6 carcteres"),
          password2: Yup.string()
            .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
            .required("Debes confirmar tu contraseña"),
        })}
      >
        {(formik) => (
          <Form>
            <Field type="text" name="name" placeholder="name" />
            <ErrorMessage name="name" component="span" />
            <Field type="email" name="email" placeholder="email" />
            <ErrorMessage name="name" component="span" />
            <Field type="password" name="password" placeholder="password" />
            <ErrorMessage name="password" component="span" />
            <Field
              type="password2"
              name="password2"
              placeholder="Reafirmar contraseña"
            />
            <ErrorMessage name="password2" component="span" />
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
