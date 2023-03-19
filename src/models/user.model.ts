import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: string;
}

export const userSchema = new Schema<IUser>({
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  password: { type: String },
  role: { type: String }
});

export const UserModel = mongoose.model<IUser>("users", userSchema);
