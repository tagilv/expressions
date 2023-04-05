import mongoose from 'mongoose';
const { Schema } = mongoose;

interface IUser {
  userName: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: {type: String, required: true}
});

// The Iexpression interface is used as the type argument to provide typing to the model.
const userModel = mongoose.model<IUser>('user', userSchema);

export default userModel
