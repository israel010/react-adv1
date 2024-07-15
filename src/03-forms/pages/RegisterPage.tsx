import { useForm } from "../hooks/useForm";
import "../styles/styles.css";
export const RegisterPage = () => {
  const {
    isValidEmail,
    onChange,
    email,
    name,
    password,
    password2,
    resetForm,
  } = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>RegisterPage</h1>

      <form onSubmit={onSubmit}>
        <input
          name="name"
          value={name}
          onChange={(e) => onChange(e)}
          type="text"
          placeholder="Name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          type="email"
          placeholder="Email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no valido</span>}
        <input
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          type="passwor"
          placeholder="Password"
          className={`${password.trim().length <= 0 && "has-error"}`}
        />
        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span>La contraseña tiene que tener 6 caracteres</span>
        )}
        <input
          name="password2"
          value={password2}
          onChange={(e) => onChange(e)}
          type="password"
          placeholder="Repeat password"
          className={`${password.trim().length <= 0 && "has-error"}`}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password !== password2 && (
          <span>Las contraseñas deben coincidir</span>
        )}
        <button type="submit">Enviar</button>
        <button type="submit" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
