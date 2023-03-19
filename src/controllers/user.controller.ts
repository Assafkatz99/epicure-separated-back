import express, { Request, Response } from "express";
import { checkIfUserEmailExists, createUser } from "../services/user.service";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export const userSignUp = async (req: Request, res: Response) => {
  console.log(req);
  try {
    const { first_name, last_name, email, password } = req.body;

    if (!(email && password && first_name && last_name)) {
      return res.send("All input is required");
    }

    const oldUser = await checkIfUserEmailExists(email);

    if (oldUser) {
      return res.status(201).send("User Already Exist. Please SignIn");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    await createUser({
      first_name: first_name,
      last_name: last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    res.status(201).send("Welcome! Please sign-in");
  } catch (err) {
    console.log(err);
  }
};

export const userSignIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.send("All input is required");
    }

    const user = await checkIfUserEmailExists(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email: email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      return res.status(201).json({ user: user, token: token });
    }
    res.send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
};
