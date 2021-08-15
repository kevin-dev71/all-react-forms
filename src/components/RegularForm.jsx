import { useState } from "react"
import FormErrors from "./FormErrors"

const RegularForm = () => {
  const [formState, setFormState] = useState({
    formValues: {
      email: "",
      password: "",
    },
    formErrors: {
      email: "",
      password: "",
    },
    formValidity: {
      email: false,
      password: false,
    },
  })

  const handleValidation = (target) => {
    const { name, value } = target
    const fieldValidationErrors = formState.formErrors
    const validity = formState.formValidity
    const isEmail = name === "email"
    const isPassword = name === "password"
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    validity[name] = value.length > 0

    fieldValidationErrors[name] = validity[name]
      ? ""
      : `${name} is required and cannot be empty`

    if (validity[name]) {
      if (isEmail) {
        validity[name] = emailTest.test(value)
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should be a valid email address`
      }
      if (isPassword) {
        validity[name] = value.length >= 3
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should be 3 characters minimum`
      }
    }

    setFormState({
      ...formState,
      formErrors: fieldValidationErrors,
      formValidity: validity,
    })
  }

  const handleChange = ({ target }) => {
    const { formValues } = formState
    formValues[target.name] = target.value
    setFormState({ ...formState, formValues })
    handleValidation(target)
  }

  const handleSubmit = event => {
    event.preventDefault();
    const { formValues, formValidity } = formState;
    if (Object.values(formValidity).every(Boolean)) {
      // Form is valid
      console.log(formValues);
    } else {
      for (let key in formValues) {
        let target = {
          name: key,
          value: formValues[key]
        };
        handleValidation(target);
      }
    }
  };

  return (
    <div className="l-form">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form__title">Sign In</h1>

        <div className="form__div">
          <input
            type="email"
            className="form__input"
            placeholder=" "
            autoComplete="off"
            name="email"
            onChange={handleChange}
            value={formState.formValues.email}
          />
          <label htmlFor="" className="form__label">
            Email
          </label>
        </div>

        <div className="form__div">
          <input
            type="password"
            className="form__input"
            placeholder=" "
            autoComplete="off"
            name="password"
            onChange={handleChange}
            value={formState.formValues.password}
          />
          <label htmlFor="" className="form__label">
            Password
          </label>
        </div>

        <FormErrors 
          emailErrorMsg={formState.formErrors.email} 
          passwordErrorMsg={formState.formErrors.password}
        />

        <input type="submit" className="form__button" value="Sign In" />
      </form>
    </div>
  )
}

export default RegularForm
