import { IUser, UserModel } from "../models/user.model";

export const getUser = async () => {
  try {
    const Chefs = await UserModel.find();
    return Chefs;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const createUser = async (user: IUser) => {
  try {
    await UserModel.create({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      role: "user"
    });
    console.log("user created");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const checkIfUserEmailExists = async (email: string) => {
  try {
    const checking_email = await UserModel.findOne({ email });
    console.log(checking_email);
    return checking_email;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
