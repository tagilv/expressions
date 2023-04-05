import { Response, Request } from "express"
import { v2 as cloudinary } from 'cloudinary'
import userModel from "../models/userModel.js"
import encryptPassword from "../utils/encryptPassword.js"

// const imageUpload = async (req: Request, res: Response) => {
//   console.log("req.file", req.file)

//   try {
//       const uploadResult = await cloudinary.uploader.upload(req?.file?.path!, {
//     folder: "Expressions"
//   })
//   res.status(200).json({
//     msg: "image uploaded succcessfully",
//     image: uploadResult.url,
//   })
//   } catch (error) {
//     console.log(error, "error uploading the file")
//   }
// }

const signup = async (req: Request, res: Response) => {
  const { email, password, userName } = req.body
  console.log("req.body from controller", req.body)

  // Find user
  try {
    // With the use of userModel go to DB and find one (userModel.find() user with that email (in req.body.email)
    const existingUser = await userModel.findOne({ email: email })
    console.log("existingUser", existingUser)
    if (existingUser) {
      res.status(300).json({
        msg: "email already in use"
      })
    }
    // No email found in DB, we know the user doesnt exist
    else {
      // Before creating new user we hash the pw of our the that will be created, using the encryptPassword and give as argument the pw that we want hashed. encryptPassword is async so need to await
      const hashedPassword = await encryptPassword(password)
      console.log("hashedPassword", hashedPassword)

      // Create new object for the new user with the use of userModel, email and userName will be from our req but pw will be our new hashedPassword
      const newUser = new userModel({
        email: email,
        password: hashedPassword,
        userName: userName,
      });
      // Now take that new user and save it into our database
      try {
        const savedUser = await newUser.save()
        res.status(201).json({
          msg: "user registered successfully",
          user: savedUser,
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

export {signup}
