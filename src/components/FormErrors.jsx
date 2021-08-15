const FormErrors = ({
  emailErrorMsg = "",
  passwordErrorMsg = "",
  emailTouched = false,
  passwordTouched = false,
}) => {
  if (!emailErrorMsg && !passwordErrorMsg) {
    return null
  }

  return (
    <div className="form__errors">
      {emailErrorMsg && (
        <div className="invalid-feedback">❌{emailErrorMsg}</div>
      )}
      {passwordErrorMsg && (
        <div className="invalid-feedback">❌{passwordErrorMsg}</div>
      )}
    </div>
  )
}

export default FormErrors
