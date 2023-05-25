import { Order } from '../utils/interfaces';
import { Restaurant } from '../restaurant/Restaurant';
import { BurgerType, SauceType } from '../utils/types';
import { capitalizeFirstLetter } from '../utils/helpers';

export const restaurantController = (props: Order) => {
  const { burger, sauce } = props;

  const restaurant = Restaurant.getInstance();

  const response = restaurant.takeOrder({ burger, sauce });

  return response.getDescription();
};

export const getAvailableOptions = () => {
  const burgerOptions: BurgerType[] = [
    'royal',
    'classic',
    'vegetarian',
    'cheeseburger',
    'baconburger',
    'mushroomburger',
    'chiliburger',
    'avocadoburger',
  ];

  const sauceOptions: SauceType[] = [
    'garlic',
    'ketchup',
    'bbq',
    'mayo',
    'mustard',
  ];

  const availableBurgers = burgerOptions.map((burger, index) => {
    return `${index}. ${capitalizeFirstLetter(burger)},`;
  });

  const availableSauces = sauceOptions.map((sauce, index) => {
    return `${index}. ${capitalizeFirstLetter(sauce)},`;
  });

  const result = [
    'Burgers: ',
    ...availableBurgers,
    'Sauce:',
    ...availableSauces,
  ];

  return result;
};
