import express from "express"
import path from "path"
import multer, { FileFilterCallback } from 'multer'

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void


// Note .diskStoraage lets us temporarily store files in our local machine
// Then we need to know which file we are uploading, so use filefileter
const upload = multer({
  storage: multer.diskStorage({}),
  // The file is the file of our image
  // cb is the callback that will run and tell us if there is an error, we will inser t an error and not continue (line 17), if everthing is okay, (line 20), we will pas "no error" and a true
  fileFilter: (req: express.Request, file: Express.Multer.File, cb:FileFilterCallback ): void => {


    //Note
    // For example, if the path is /path/to/file, the extname() method would return an empty string, since there is no extension in this file name. Similarly, if the file name is .gitignore, the extname() method would return an empty string, since the . character is the first character of the file name.


    // gettin originalname from file and using that to get the extension
    let extension = path.extname(file.originalname);
    if (extension !== "jpg" && extension !== ".jpeg" && extension !== ".png") {
      cb(null, false);
      return
    }
  cb(null, true)
  }
})

export default upload
