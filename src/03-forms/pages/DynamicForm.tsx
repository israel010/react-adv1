import { Formik, Form, FormikHelpers, FormikValues, Field } from "formik";
import formjson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";
import { Exception } from "sass";
import * as Yup from "yup";

export const DynamicForm = () => {
  const initialValues: { [key: string]: any } = {};
  const requiredFields: { [key: string]: any } = {};

  for (const input of formjson) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
      if (rule.type === "required") {
        schema = schema.required("Este campo es obligatorio");
      }
      if (rule.type === "minLength") {
        schema = schema.min(
          (rule as any).value || 2,
          `Minimo de ${(rule as any).value || 2} caracteres`
        );
      }
      if (rule.type === "email") {
        schema = schema.email("El formato del email no es valido");
      }
    }
    requiredFields[input.name] = schema;
  }

  const validationSchema = Yup.object({ ...requiredFields });

  return (
    <div>
      DynamicForm
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            {formjson.map(({ type, name, label, placeholder, options }) => {
              if (type === "input" || type === "email" || type === "password") {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect name={name} label={label} key={name}>
                    <option value="">Select an option</option>

                    {options?.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </MySelect>
                );
              }

              throw new Error(`EL type: ${type},no es soportado`);
            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
