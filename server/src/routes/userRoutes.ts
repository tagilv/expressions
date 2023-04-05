import express from "express";
import upload from "../middlewares/multer.js";
import { signup } from "../controllers/userController.js";
const router = express.Router();

// Hitting endpoint api/users..uploadImage, first to run is upload.single("image") function (middlewear)
// router.post("/uploadImage", upload.single('image'), imageUpload);


router.post("/signup", signup);

export default router;
