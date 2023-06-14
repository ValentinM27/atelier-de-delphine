import { Schema, model } from "mongoose";

// Interface
export interface IUser {
  _id: string;
  password: string;
  name: string;
  mail: string;
  status: "admin" | "user";
  createdAt?: Date;
}

// Schema
const userSchema = new Schema<IUser>({
  _id: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  mail: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: Date,
});

// Model
export const User = model<IUser>("User", userSchema);
