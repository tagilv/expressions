import mongoose from 'mongoose';
const { Schema } = mongoose;

interface Iexpression {
  text: string;
  likes: Number;
  short?: Boolean;
  organization: mongoose.Types.ObjectId;
}

// The schema constructor takes the Iexpression interface as a generic argument and defines the fields with their respective data types, including the organization field that references the Organization model by its ObjectId.

const expressionSchema = new Schema<Iexpression>({
  text: { type: String, required: true, unique: true },
  likes: { type: Number, required: false },
  short: { type: Boolean, required: false },
  organization: { type: Schema.Types.ObjectId, ref: 'Organization' }
});

// The Iexpression interface is used as the type argument to provide typing to the model.

const expressionModel = mongoose.model<Iexpression>('expression', expressionSchema);

export default expressionModel
