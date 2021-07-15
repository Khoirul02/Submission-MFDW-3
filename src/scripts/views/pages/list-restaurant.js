/* eslint-disable no-unused-vars */
import RestaurantSource from '../../data/restaurant-source';
import TopMenusSource from '../../data/TOP.json';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import {
  // eslint-disable-next-line max-len
  createRestaurantItemTemplate, createTopMenusItemTemplate, createLoding, requestDataEror, requestDataEmpty,
} from '../templates/template-creator';

const listRestaurant = {
  async render() {
    return `
      <section class="content">
        <article class="headline">
            <figure class="headline__figure">
                <h1 class="headline__title">Top 4 Menu Cafe & Resto</h1>
                <img class="lazyload" data-src="images/headline.png" alt="Rekomendasi Cafe & Resto">
            </figure>
            <div class="headline__content" id="topmenus"></div>
        </article>
        <div class="latest">
            <h1 class="latest__label">Jelajahi Cafe & Resto</h1>
            <div id="restaurants" class="posts"></div>
            <div id="loading" class="loading"></div>
        </div>
      </section>
      `;
  },

  async afterRender() {
    const loadingDiv = document.querySelector('#loading');
    loadingDiv.innerHTML += createLoding();
    const restaurant = await RestaurantSource.listRestaurant();
    loadingDiv.style.display = 'none';
    const restaurantsDiv = document.querySelector('#restaurants');
    const topmenusDiv = document.querySelector('#topmenus');
    // eslint-disable-next-line no-shadow
    if (restaurant.error === false) {
      // eslint-disable-next-line no-shadow
      if (restaurant.count === 0) {
        restaurantsDiv.innerHTML += requestDataEmpty();
      } else {
        restaurant.restaurants.forEach((restaurants) => {
          restaurantsDiv.innerHTML += createRestaurantItemTemplate(restaurants);
        });
      }
    } else {
      restaurantsDiv.innerHTML += requestDataEror();
    }
    TopMenusSource.topmenus.forEach((topmenus) => {
      topmenusDiv.innerHTML += createTopMenusItemTemplate(topmenus);
    });
  },
};

export default listRestaurant;
