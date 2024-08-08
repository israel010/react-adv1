import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import logo from "../logo.svg";
import {
  FormikBasicPage,
  FormikAbstract,
  FormikComponent,
  FormikYupPage,
  RegisterPage,
  RegisterFormikPage,
  DynamicForm,
} from "../03-forms/pages";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik" activeClassName="nav-active" exact>
                Formik basic
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-component"
                activeClassName="nav-active"
                exact
              >
                Formik Componetn
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstract" activeClassName="nav-active" exact>
                Formik Abstract
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-register" activeClassName="nav-active" exact>
                Register Formik
              </NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" activeClassName="nav-active" exact>
                Dyanamic Form
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="nav-active" exact>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/formik">
            <FormikBasicPage />
          </Route>
          <Route path="/formik-yup">
            <FormikYupPage />
          </Route>
          <Route path="/formik-component">
            <FormikComponent />
          </Route>
          <Route path="/formik-abstract">
            <FormikAbstract />
          </Route>
          <Route path="/formik-register">
            <RegisterFormikPage />
          </Route>
          <Route path="/dynamic-form">
            <DynamicForm />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
