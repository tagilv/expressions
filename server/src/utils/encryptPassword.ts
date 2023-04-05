import bcrypt from "bcrypt"

// This function will recive as parameter the password of the user.So whenever we call this function we have to send as a parameter the password of the user
const encryptPassword = async (password: string) => {
  const saltRounds = 10;

  const salt = await bcrypt.genSalt(saltRounds)
  // Here we need to pass the password of the user and the salt we just generated as arguments
  const hashedPassword = await bcrypt.hash(password, salt)
  console.log("hashedPassword", hashedPassword)
  // retunr it so we can use it when we call the function
  return hashedPassword
}

export default encryptPassword
