import express, { Request, Response } from "express";
import {
  createNewDish,
  deleteExistingDish,
  editExistingChef,
  getAllDishes,
} from "../controllers/dishes.controller";
import { authCheck } from "../controllers/user.controller";

const DishRouter = express.Router();

DishRouter.get("/", getAllDishes);
DishRouter.post("/", authCheck(["admin"]), createNewDish);
DishRouter.put("/", authCheck(["admin"]), editExistingChef);
DishRouter.post("/delete", authCheck(["admin"]), deleteExistingDish);

export default DishRouter;
