import { Schema } from "mongoose";
import mongoose from "mongoose";

export interface IChef {
  id: number;
  first_name: string;
  last_name: string;
  about: string;
  img_url: string;
  restaurant_ids: Array<number>;
}

export const chefSchema = new Schema<IChef>({
  id: { type: Number, unique: true },
  first_name: { type: String },
  last_name: { type: String },
  about: { type: String },
  img_url: { type: String },
  restaurant_ids: [{ type: Number }],
});

export const ChefsModel = mongoose.model<IChef>("chefs", chefSchema);
