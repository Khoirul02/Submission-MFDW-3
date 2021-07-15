import FavoriteRestaurantsIdb from '../../data/favoriterestaurant-idb';
import TopMenusSource from '../../data/TOP.json';
// eslint-disable-next-line no-unused-vars
import { createRestaurantItemTemplate, createTopMenusItemTemplate, requestDataEmpty } from '../templates/template-creator';

const FavoriteRestaurant = {
  async render() {
    return `
        <section class="content">
        <article class="headline">
            <figure class="headline__figure">
                <h1 class="headline__title">Top 4 Menu Cafe & Resto</h1>
                <img src="images/headline.png" alt="Rekomendasi Cafe & Resto">
            </figure>
            <div class="headline__content" id="topmenus"></div>
        </article>
        <div class="latest">
            <h1 class="latest__label">Favorite Cafe & Resto</h1>
            <div id="restaurants" class="posts"></div>
        </div>
      </section>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantsIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    const topmenusDiv = document.querySelector('#topmenus');
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML += requestDataEmpty();
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
    TopMenusSource.topmenus.forEach((topmenus) => {
      topmenusDiv.innerHTML += createTopMenusItemTemplate(topmenus);
    });
  },
};

export default FavoriteRestaurant;
