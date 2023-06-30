import { Schema, model, models } from "mongoose";

// Interface
export interface IUser {
  password: string;
  name: string;
  email: string;
  createdAt?: Date;
}

// Schema
const userSchema = new Schema<IUser>({
  password: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: Date,
});

// Model
const User = models.User || model<IUser>("User", userSchema);

export default User;
