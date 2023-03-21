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
      // returnerar ett object, Json skickas, kolla nextjs servern, maste matcha
      // Skulle bara kunna skicka expression och int eobjeteted, da utan {}
    })
  } catch (error) {
    // 400 client har gjort fel, client skickat fel info
    // 500 servern har et ohanterat error, kunde inte hantera aven om den borde kunnat
    /// 404 valid request men fanns ingen resuoruse (item)
    console.log("error", error)
    res.status(500).json({
    error,
    })
  }
}


export { getAllExpressions, getExpressionById}
