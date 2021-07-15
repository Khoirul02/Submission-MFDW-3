import listRestaurant from '../views/pages/list-restaurant';
import DetailRestaurant from '../views/pages/detail-restaurant';
import FavoriteRestaurant from '../views/pages/favorite-restaurant';

const routes = {
  '/': listRestaurant, // default page
  '/detail-restaurant/:id': DetailRestaurant,
  '/favorite': FavoriteRestaurant,
};

export default routes;
