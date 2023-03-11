import express from "express";
import expressionModel from "../models/expressionModel.js";
import { getAllExpressions } from "../controllers/expressionController.js";
const router = express.Router();

// Find all expressions
router.get("/all", getAllExpressions);

export default router;
