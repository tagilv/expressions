import mongoose from 'mongoose';
const { Schema } = mongoose;

interface IExpression {
  text: string;
  likes: Number;
  _id: mongoose.Types.ObjectId;
}

const expressionSchema = new Schema<IExpression>({
  text: { type: String, required: true, unique: true },
  likes: { type: Number, required: true },
  _id: { type: Schema.Types.ObjectId, required: true}
});

// The IExpression interface is used as the type argument to provide typing to the model.
const ExpressionModel = mongoose.model<IExpression>('expression', expressionSchema);

export default ExpressionModel
