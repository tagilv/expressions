import expressionModel from "../models/expressionModel.js";
import { Response, Request } from "express"

 const getAllExpressions = async (req: Request, res: Response): Promise<void> => {
  try {
    const allExpressions = await expressionModel.find({
    });
    console.log("allExpressions", allExpressions)
    res.status(200).json({
      number: allExpressions.length,
      allExpressions
    })
  } catch (error) {
    res.status(500).json({
      error,
      message: "there was a problem in the server getting all expressions"
    })
    console.log("error getting expressions", error)
  }
 }

const getAllShortExpressions = async (req: Request, res: Response) => {
  console.log("req", req.params)
  console.log("query", req.query)

}

export { getAllExpressions, getAllShortExpressions}
