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

const getExpressionById = async (req: Request, res: Response) => {
  console.log("req.params from frontend", req.params)
  console.log("req.params.id from frontend", req.params.id)
  const {id} = req.params
  try {
    const expressionById = await expressionModel.findById(id)
    console.log("expressionById", expressionById)
    res.status(200).json({
      expressionById,
      // Returning json object, check it matches return in nextjs server, refactor to just return expression
      })
  } catch (error) {
    console.log("error", error)
    res.status(500).json({
    error,
    })
  }
}


export { getAllExpressions, getExpressionById}
