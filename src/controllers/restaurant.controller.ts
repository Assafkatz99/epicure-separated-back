import express, { Request, Response } from "express";
import { createRestaurant, deleteRestaurant, editRestaurant, getRestaurants } from "../services/restaurants.service";

export const getAllRestaurants = async (req: Request, res: Response) => {
  try {
    const chefs = await getRestaurants();
    return res.status(200).json(chefs);
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};

export const createNewRestaurant = async (req: Request, res: Response) => {

  try {
    const new_rest = req.body;
    new_rest.dish_ids = req.body.dish_ids.replace(/\s/g, '').split(',');
    const response = await createRestaurant(new_rest);
    return res.status(200).json(response);
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};


export const editExistingRestaurant = async (req: Request, res: Response) => {
  try {
    const edited_restaurant = req.body;
    if (typeof(edited_restaurant.dish_ids) === "string"){
    edited_restaurant.dish_ids = req.body.dish_ids.replace(/\s/g, '').split(',');}
    const response = await editRestaurant(edited_restaurant);
    return res.status(200).json(response);
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};


export const deleteExistingRestaurant = async (req: Request, res: Response) => {
  try {
    const response = await deleteRestaurant(req.body.rest_id);
    return res.status(200).json(response);
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};