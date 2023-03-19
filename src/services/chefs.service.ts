import { ChefsModel, IChef } from "../models/chefs.model";

export const getChefs = async () => {
  try {
    const Chefs = await ChefsModel.find();
    return Chefs;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const createChef = async (chef: any) => {
  try {
    const usedIds = new Set(await ChefsModel.distinct("id"));
    let nextId = 1;
    while (usedIds.has(nextId)) {
      nextId++;
    }

    await ChefsModel.create({
      id: nextId,
      first_name: chef.first_name,
      last_name: chef.last_name,
      about: chef.about,
      img_url: chef.img_url,
      restaurant_ids: chef.restaurant_ids,
    });

    console.log("chef created");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const editChef = async (chef: any) => {
  try {
    await ChefsModel.updateOne(
      { id: chef.id },
      {
        id: chef.id,
        first_name: chef.first_name,
        last_name: chef.last_name,
        about: chef.about,
        img_url: chef.img_url,
        restaurant_ids: chef.restaurant_ids,
      }
    );

    console.log("chef updated");
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const deleteChef = async (chef_id: any) => {
  try {
    await ChefsModel.deleteOne({ id: chef_id });

    console.log("chef deleted");
  } catch (err) {
    console.log(err);
    throw err;
  }
};
