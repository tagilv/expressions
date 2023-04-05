import express from "express";
import upload from "../middlewares/multer.js";
import { imageUpload, signup } from "../controllers/userController.js";
const router = express.Router();
// import upload from "../middlewares/multer"

// When we hit the endpoint api/users/....uploadImage
// When we hit this endpoint, first thing we will run is the upload.single("image") function, the second thing we will run is the imageUpload function
router.post("/uploadImage", upload.single('image'), imageUpload);


router.post("/signup", signup);

export default router;
