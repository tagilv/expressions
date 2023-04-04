import { Response, Request } from "express"
import { v2 as cloudinary } from 'cloudinary'

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

export {imageUpload}
