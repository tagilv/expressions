import { Response, Request } from "express"
import { v2 as cloudinary } from 'cloudinary'
import userModel from "../models/userModel.js"
import encryptPassword from "../utils/encryptPassword.js"

const imageUpload = async (req: Request, res: Response) => {
  console.log("req.file", req.file)

  try {
      const uploadResult = await cloudinary.uploader.upload(req?.file?.path!, {
    folder: "Expressions"
  })
  // console.log("req.file", req.file)
    console.log("uploadResult", uploadResult)
  res.status(200).json({
    msg: "image uploaded succcessfully",
    image: uploadResult.url,
  })
  } catch (error) {
    console.log(error, "error uploading the file")
  }


  // the output of this function is going to be the result of our uploadl with all the data
  // In the req.file we get the path where the image will be stored, so we can add it in the upload function below as option
  // Note: alternative way to req?.file?.path!

}

const signup = async (req: Request, res: Response) => {
  // req.body we sohuld have the email and password of user
  const { email, password, userName } = req.body
  console.log("req.body from controller", req.body)
  // then find user
  try {
    // First check, with the use if the user model (userMode) go to our database, and find one (userModel.find(), one user with that email)
    // email below is the req.body.email
    const existingUser = await userModel.findOne({ email: email })
    if (existingUser) {
      res.status(300).json({
        msg: "email already in use"
      })
    }
    // When we are in this else we know that the user isnt existing so need to create it. Ie we didnt find the email inside our database
    else {

      // before creating our user, we will hash the password of our users
      // below, take the encryptPassword function from enpyrt file and the password that we have already desctrcutured above
      // Since its asynchronous the enctprytpassword function) we also need to await it here
      const hashedPassword = await encryptPassword(password)
      console.log("hashedPassword", hashedPassword)

      // create the new object for the new user
      // Is going to be a new userModel object
      // theta will contain, email: as email from our request, password as hashedpasswrd etc

      const newUser = new userModel({
        email: email,
        password: hashedPassword,
        userName: userName,
      });
      // Now we want to take that new user and save it into our database
      try {
        const savedUser = await newUser.save()
        res.status(201).json({
          msg: "user registered successfully",
          user: newUser,
        })
      } catch (error) {
        console.log("error", error)
        res.status(500).json({
          msg: "signup not successfull"
        })
      }

    }
  } catch (error) {
    res.status(500).json({
      msg: "Something went wrong during signup",
      error: error
    })
  }
}

export {imageUpload, signup}
