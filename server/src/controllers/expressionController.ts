import expressionModel from "../models/expressionModel.js";
import { Response, Request } from "express"

// Note on types for allExpressions varaible
// The type for allExpressions is inferred by TypeScript based on the type of the expressionModel and the return type of the find() method. The expressionModel has been typed with the Iexpression interface, which specifies the shape of the document. The find() method returns an array of documents of the same shape as Iexpression, so TypeScript can infer that allExpressions is an array of documents that match the Iexpression interface.

 const getAllExpressions = async (req: Request, res: Response): Promise<void> => {
  try {
    const allExpressions = await expressionModel.find({
    });
    console.log(allExpressions)
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

export {getAllExpressions}
