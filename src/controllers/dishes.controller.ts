import express, { Request, Response } from "express";
import { createDish, deleteDish, editDish, getDishes } from "../services/dishes.service";

export const getAllDishes = async (req: Request, res: Response) => {
  try {
    const dishes = await getDishes();
    return res.status(200).json(dishes);
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};

export const createNewDish = async (req: Request, res: Response) => {
  try {
    const new_dish = req.body;
    if (typeof(req.body.changes) === "string"){new_dish.changes = req.body.changes.replace(/\s/g, "").split(",");}
    if (typeof(req.body.ingredients) === "string"){new_dish.ingredients = req.body.ingredients.replace(/\s/g, "").split(",");}
    
    const response = await createDish(new_dish);
    return res.status(200).json(response);
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};


export const editExistingChef = async (req: Request, res: Response) => {
  try {
    const edited_dish = req.body;
    if (typeof edited_dish.changes === "string") {
      edited_dish.changes = req.body.changes.replace(/\s/g, "").split(",");
    }
    if (typeof edited_dish.ingredients === "string") {
      edited_dish.ingredients = req.body.ingredients.replace(/\s/g, "").split(",");
    }
    const response = await editDish(edited_dish);
    return res.status(200).json(response);
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};

export const deleteExistingDish = async (req: Request, res: Response) => {
  try {
    const response = await deleteDish(req.body.dish_id);
    return res.status(200).json(response);
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};