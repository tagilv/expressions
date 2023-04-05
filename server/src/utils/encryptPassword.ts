import bcrypt from "bcrypt"

// Function receives user pw as parameter, so when we call this function, we need to pass in the pw of user as parameter
const encryptPassword = async (password: string) => {
  const saltRounds = 10;

  const salt = await bcrypt.genSalt(saltRounds)
  // Pass pw of user and salt just created as arguments
  const hashedPassword = await bcrypt.hash(password, salt)
  console.log("hashedPassword", hashedPassword)
  // return it so we can use it when we call the function
  return hashedPassword
}

export default encryptPassword
