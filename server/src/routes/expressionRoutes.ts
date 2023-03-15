import express from "express";
import expressionModel from "../models/expressionModel.js";
import { getAllExpressions, getAllShortExpressions } from "../controllers/expressionController.js";
const router = express.Router();

// Find all expressions
router.get("/all", getAllExpressions);
router.get("/all/:short", getAllShortExpressions);

export default router;
