import mongoose from 'mongoose';
const { Schema } = mongoose;

interface Iexpression {
  text: string;
  likes: Number;
  short?: Boolean;
  organization: mongoose.Types.ObjectId;
}

const expressionSchema = new Schema<Iexpression>({
  text: { type: String, required: true, unique: true },
  likes: { type: Number, required: false },
  short: { type: Boolean, required: false },
  organization: { type: Schema.Types.ObjectId, ref: 'Organization' }
});

const expressionModel = mongoose.model<Iexpression>('expression', expressionSchema);

export default expressionModel
