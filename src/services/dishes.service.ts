import { DishesModel } from "../models/dishes.model";

export const getDishes = async () => {
  try {
    const Dishes = await DishesModel.find();
    return Dishes;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const createDish = async (dish: any) => {
  try {
    const usedIds = new Set(await DishesModel.distinct("id"));
    let nextId = 1;
    while (usedIds.has(nextId)) {
      nextId++;
    }

    const dishes = await DishesModel.create({
      id: nextId,
      name: dish.name,
      img_url: dish.img_url,
      changes: dish.changes,
      ingredients: dish.ingredients,
      price: dish.price,
      icons: {
        isSpicy: dish.icons.isSpicy,
        isVegan: dish.icons.isVegan,
        isVegetarian: dish.icons.isVegetarian,
      },
      sides: dish.sides,
      is_signature: dish.is_signature,
      dishTiming: {
        breakfast: dish.dishTiming.breakfast,
        lunch: dish.dishTiming.lunch,
        dinner: dish.dishTiming.dinner,
      },
    });
    console.log("dish created");

    return dishes;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const editDish = async (dish: any) => {
  try {
    await DishesModel.updateOne(
      { id: dish.id },
      {
        id: dish.id,
        name: dish.name,
        img_url: dish.img_url,
        changes: dish.changes,
        ingredients: dish.ingredients,
        price: dish.price,
        icons: {
          isSpicy: dish.icons.isSpicy,
          isVegan: dish.icons.isVegan,
          isVegetarian: dish.icons.isVegetarian,
        },
        sides: dish.sides,
        is_signature: dish.is_signature,
        dishTiming: {
          breakfast: dish.dishTiming.breakfast,
          lunch: dish.dishTiming.lunch,
          dinner: dish.dishTiming.dinner,
        },
      }
    );

    console.log("dish updated");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteDish = async (dish_id: any) => {
  try {
    await DishesModel.deleteOne({ id: dish_id });

    console.log("dish deleted");
  } catch (err) {
    console.log(err);
    throw err;
  }
};
