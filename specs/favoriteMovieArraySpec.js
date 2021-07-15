/* eslint-disable no-const-assign */
/* eslint-disable eqeqeq */
/* eslint-disable no-return-assign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

let favoriteRestaurant = [];
const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }
    return favoriteRestaurant.find((restaurant) => restaurant.id == id);
  },
  getAllRestaurants() {
    return favoriteRestaurant;
  },
  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    if (this.getRestaurant(restaurant.id)) {
      return;
    }
    favoriteRestaurant.push(restaurant);
  },
  deleteRestaurant(id) {
    favoriteRestaurant = favoriteRestaurant.filter((restaurant) => restaurant.id != id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestaurant = []);
  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
