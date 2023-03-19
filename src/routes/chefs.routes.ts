import express, { Request, Response } from "express";
import {
  getAllChefs,
  createNewChef,
  editExistingChef,
  deleteExistingChef,
} from "../controllers/chef.controller";
import { authCheck } from "../controllers/user.controller";

const chefRouter = express.Router();

chefRouter.get("/", getAllChefs);
chefRouter.post("/", authCheck(["admin"]), createNewChef);
chefRouter.put("/", authCheck(["admin"]), editExistingChef);
chefRouter.post("/delete", authCheck(["admin"]), deleteExistingChef);

export default chefRouter;
