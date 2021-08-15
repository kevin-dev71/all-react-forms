import { useForm } from "react-hook-form";
import FormErrors from "./FormErrors";

const ReactHookForm = () => {
  const { register, handleSubmit, formState: {errors}, watch } = useForm();

  const onSubmit = values => {
		// form is valid
		console.log(values);
	}
  console.log(watch())
  console.log(errors)
  return (
    <div className="l-form">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form__title">Sign In</h1>

        <div className="form__div">
          <input
            type="email"
            className="form__input"
            placeholder=" "
            autoComplete="off"            
            {...register("email", {
              required: 'Email is required and cannot be empty',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address format',
              },
            })}
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
            {...register("password", {
              required: "Password is required and cannot be empty",
              validate: value => value.length > 3 || "Password must be 3 characters at minimum"
            })}
          />
          <label htmlFor="" className="form__label">
            Password
          </label>
        </div>

        <FormErrors 
          emailErrorMsg={errors?.email?.message} 
          passwordErrorMsg={errors?.password?.message}
        />

        <input type="submit" className="form__button" value="Sign In" />
      </form>
    </div>
  )
}

export default ReactHookForm
