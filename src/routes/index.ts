import express from "express";
import { userSignUp } from "../controllers/user.controller";
import { createUser } from "../services/user.service";
import chefRouter from "./chefs.routes";
import DishRouter from "./dishes.routes";
import restaurantRouter from "./restaurants.routes";
import userRouter from "./user.routes";

const router = express.Router();

router.use("/api/chefs", chefRouter);
router.use("/api/restaurants", restaurantRouter);
router.use("/api/dishes", DishRouter);
router.use("/api/users", userRouter);

export default router;
