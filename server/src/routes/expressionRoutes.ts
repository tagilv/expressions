import express from "express";
import expressionModel from "../models/expressionModel.js";
import { getAllExpressions, getExpressionById } from "../controllers/expressionController.js";
const router = express.Router();

router.get("/all", getAllExpressions);

router.get("/:id", getExpressionById );

export default router;
