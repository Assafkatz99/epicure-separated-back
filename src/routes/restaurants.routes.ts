import express, { Request, Response } from "express";
import {
  createNewRestaurant,
  deleteExistingRestaurant,
  editExistingRestaurant,
  getAllRestaurants,
} from "../controllers/restaurant.controller";
import { authCheck } from "../controllers/user.controller";

const restaurantRouter = express.Router();

restaurantRouter.get("/", getAllRestaurants);
restaurantRouter.post("/", authCheck(["admin"]), createNewRestaurant);
restaurantRouter.put("/", authCheck(["admin"]), editExistingRestaurant);
restaurantRouter.post(
  "/delete",
  authCheck(["admin"]),
  deleteExistingRestaurant
);

export default restaurantRouter;
