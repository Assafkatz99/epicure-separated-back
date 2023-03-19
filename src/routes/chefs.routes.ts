import express, { Request, Response } from "express";
import { getAllChefs , createNewChef, editExistingChef, deleteExistingChef } from "../controllers/chef.controller";

const chefRouter = express.Router();

chefRouter.get("/",getAllChefs);
chefRouter.post("/", createNewChef)
chefRouter.put("/", editExistingChef)
chefRouter.post("/delete", deleteExistingChef)


export default chefRouter;
