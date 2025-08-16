const EMAIL_VALIDATE_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PASSWORD_VALIDATE_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
export const checkValidData = (email, password) => {

  const isEmailValid = EMAIL_VALIDATE_REGEX.test(email)
  const isPasswordValid = PASSWORD_VALIDATE_REGEX.test(password)

  if(!isEmailValid) return 'Invalid email id'
  if(!isPasswordValid) return 'Invalid password'
  if(isEmailValid && isPasswordValid) return null
}
