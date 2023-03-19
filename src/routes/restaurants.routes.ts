import express, { Request, Response } from "express";
import { createNewRestaurant, deleteExistingRestaurant, editExistingRestaurant, getAllRestaurants } from "../controllers/restaurant.controller";

const restaurantRouter = express.Router();

restaurantRouter.get("/", getAllRestaurants);
restaurantRouter.post("/", createNewRestaurant)
restaurantRouter.put("/", editExistingRestaurant)
restaurantRouter.post("/delete", deleteExistingRestaurant)

export default restaurantRouter;
