import { Schema } from "mongoose";
import mongoose from "mongoose";

export interface IRestaurant {
  id: number;
  name: string;
  img_url: string;
  hours: Array<number>;
  is_favorite: boolean;
  address: string;
  rating: number;
  dish_ids: Array<number>;
  opening_year: number;
}

export const restaurantSchema = new Schema<IRestaurant>({
  id: { type: Number},
  name: { type: String },
  img_url: { type: String },
  hours: [{ type: Number }],
  is_favorite: { type: Boolean },
  address: { type: String },
  rating: { type: Number },
  dish_ids: [{ type: Number }],
  opening_year: { type: Number },
});

export const RestaurantModel = mongoose.model<IRestaurant>(
  "restaurants",
  restaurantSchema
);
