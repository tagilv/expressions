import mongoose from 'mongoose';
const { Schema } = mongoose;

// interface IExpression {
//   text: string;
//   likes: Number;
//   _id: mongoose.Types.ObjectId;
// }

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: {type: String, required: true}
});

// The Iexpression interface is used as the type argument to provide typing to the model.
const userModel = mongoose.model('user', userSchema);

export default userModel
