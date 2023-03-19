import mongoose, { Schema } from "mongoose";

export interface ICons {
  isSpicy: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
}

export interface IDishTiming {
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
}

export interface IDish {
  id: number;
  name: string;
  img_url: string;
  changes: Array<string>;
  ingredients: Array<string>;
  price: number;
  icons: ICons;
  sides: Array<string>;
  is_signature: boolean;
  dishTiming: IDishTiming;
}

const dishSchema = new Schema<IDish>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  img_url: { type: String, required: true },
  changes: { type: [String], required: true },
  ingredients: { type: [String], required: true },
  price: { type: Number, required: true },
  icons: {
    type: {
      isSpicy: { type: Boolean, required: true },
      isVegan: { type: Boolean, required: true },
      isVegetarian: { type: Boolean, required: true },
    },
    required: true,
  },
  sides: { type: [String], required: true },
  is_signature: { type: Boolean, required: true },
  dishTiming: {
    type: {
      breakfast: { type: Boolean, required: true },
      lunch: { type: Boolean, required: true },
      dinner: { type: Boolean, required: true },
    },
    required: true,
  },
});

export const DishesModel = mongoose.model<IDish>("dishes", dishSchema);
