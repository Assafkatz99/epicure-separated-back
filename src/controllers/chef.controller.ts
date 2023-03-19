import express, { Request, Response } from "express";
import {
  createChef,
  getChefs,
  editChef,
  deleteChef,
} from "../services/chefs.service";

export const getAllChefs = async (req: Request, res: Response) => {
  try {
    const chefs = await getChefs();
    return res.status(200).json(chefs);
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};

export const createNewChef = async (req: Request, res: Response) => {
  try {
    const new_chef = req.body.chefInformation;

    if (typeof req.body.restaurant_ids === "string") {
      new_chef.restaurant_ids = req.body.restaurant_ids
        .replace(/\s/g, "")
        .split(",");
    }

    const response = await createChef(new_chef);
    return res.status(200).json(response);
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};

export const editExistingChef = async (req: Request, res: Response) => {
  try {
    const edited_chef = req.body.chefInformation;
    console.log(edited_chef);

    if (typeof req.body.restaurant_ids === "string") {
      edited_chef.restaurant_ids = req.body.restaurant_ids
        .replace(/\s/g, "")
        .split(",");
    }

    const response = await editChef(edited_chef);
    return res.status(200).json(response);
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};
export const deleteExistingChef = async (req: Request, res: Response) => {
  try {
    const response = await deleteChef(req.body.chef_id);
    return res.status(200).json(response);
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};
