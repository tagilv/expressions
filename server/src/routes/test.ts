import express from "express";

const router = express.Router();

//Callback with two arguments,(req, res)
router.get("/test", (req, res) => {
  res.json("Hello from backend");
});

export default router;
