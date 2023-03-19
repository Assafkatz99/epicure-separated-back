import express, { Request, Response } from "express";
import { createNewDish, deleteExistingDish, editExistingChef, getAllDishes } from "../controllers/dishes.controller";

const DishRouter = express.Router();

DishRouter.get("/", getAllDishes);
DishRouter.post("/", createNewDish)
DishRouter.put("/", editExistingChef)
DishRouter.post("/delete", deleteExistingDish)

export default DishRouter;
