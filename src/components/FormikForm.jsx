import { Formik, Form, Field, ErrorMessage } from "formik"
import FormErrors from "./FormErrors";

const FormikForm = () => {

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Email is required and cannot be empty";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address format";
    }
    
    return error;
  }

  function validatePassword(value) {
    let error;
    if (!value) {
      error = "Password is required and cannot be empty";
    } else if (value.length < 3) {
      error = "Password must be 3 characters at minimum";
    }
    
    return error;
  }

  const onSubmit = (values) => {
    // will be run only when the form values are valid
    // form is valid
    console.log(values)
  }

  return (
    <div className="l-form">
      <div className="form">
        <h1 className="form__title">Sign In</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => {
            return <Form>
              <div className="form__div">      
                <Field
                  name="email"
                  placeholder=" "
                  className="form__input"
                  validate={validateEmail}
                  autoComplete="off"
                />
                <label className="form__label" htmlFor="email">Email</label>
              </div>
              <div className="form__div">                
                <Field
                  name="password"
                  type="password"
                  placeholder=" "
                  className="form__input"
                  validate={validatePassword}
                  autoComplete="off"
                />
                <label className="form__label" htmlFor="password">Password</label>
              </div>

              <FormErrors
                emailErrorMsg={errors.email} 
                passwordErrorMsg={errors.password}
                emailTouched={touched.email}
                passwordTouched={touched.password}
                />

              <button className="form__button" type="submit">
                Sign In
              </button>
            </Form>
          }}
        </Formik>
      </div>
    </div>
  )
}

export default FormikForm
