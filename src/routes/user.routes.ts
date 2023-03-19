import express, { Request, Response } from "express";
import { userSignIn, userSignUp } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.post("/sign-up", userSignUp);
userRouter.post("/sign-in", userSignIn);

export default userRouter;
