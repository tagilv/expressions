import express from "express";
import upload from "../middlewares/multer";
const router = express.Router();


// When we hit the endpoint api/users/....uploadImage
router.get("/uploadImage", upload);

export default router;
