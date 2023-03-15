import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json("Hello from backend");
});

export default router;
