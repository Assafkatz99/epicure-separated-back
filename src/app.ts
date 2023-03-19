import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDB } from "./connection";
import routes from "./routes/index";

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

connectToDB();

app.listen(8000, () => console.log("Listening..."));
