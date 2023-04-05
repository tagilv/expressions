import express from "express"
import path from "path"
import multer, { FileFilterCallback } from 'multer'

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

// .diskStorage lets us temp store files on local machine
// .filefilter used to filter the files we will allow to upload

const upload = multer({
  storage: multer.diskStorage({}),
  // The file is the file of our image, cb is callback, if everthing is okay, (line 20), we will pas "no error" and a true
  fileFilter: (req: express.Request, file: Express.Multer.File, cb:FileFilterCallback ): void => {


    // With path, gettin ogname from file and using that to get extension
    let extension = path.extname(file.originalname);
    if (extension !== ".jpg" && extension !== ".jpeg" && extension !== ".png") {
      cb(null, false);
      return
    }
  cb(null, true)
  }
})

export default upload
