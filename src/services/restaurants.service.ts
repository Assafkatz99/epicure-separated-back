import { RestaurantModel } from "../models/restaurant.model";

export const getRestaurants = async () => {
  try {
    const restaurants = await RestaurantModel.find();
    return restaurants;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const createRestaurant = async (rest: any) => {
  try {
    const usedIds = new Set(await RestaurantModel.distinct("id"));
    let nextId = 1;
    while (usedIds.has(nextId)) {
      nextId++;
    }

    const restaurants = await RestaurantModel.create({
      id: nextId,
      name: rest.name,
      img_url: rest.img_url,
      hours: rest.hours,
      is_favorite: rest.is_favorite,
      address: rest.address,
      opening_year: rest.opening_year,
      dish_ids: rest.dish_ids,
      rating: rest.rating,
    });
    console.log("restaurant created");

    return restaurants;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const editRestaurant = async (rest: any) => {
  try {
    await RestaurantModel.updateOne(
      { id: rest.id },
      {
        id: rest.id,
        name: rest.name,
        img_url: rest.img_url,
        hours: rest.hours,
        is_favorite: rest.is_favorite,
        address: rest.address,
        opening_year: rest.opening_year,
        dish_ids: rest.dish_ids,
        rating: rest.rating,
      }
    );

    console.log("restaurant updated");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteRestaurant = async (rest_id: any) => {
  try {
    await RestaurantModel.deleteOne({ id: rest_id });

    console.log("restaurant deleted");
  } catch (err) {
    console.log(err);
    throw err;
  }
};
