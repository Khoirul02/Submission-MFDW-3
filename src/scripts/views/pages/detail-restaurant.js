/* eslint-disable no-unused-vars */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createDetailRestaurantTemplate, createLoding } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const DetailRestaurant = {
  async render() {
    return `
      <section class="content">
        <div id="detail-restaurant"></div>
        <div id="likeButtonContainer"></div>
        <div id="loading" class="loading"></div>
      </section>  
      `;
  },

  async afterRender() {
    const loadingDiv = document.querySelector('#loading');
    loadingDiv.innerHTML += createLoding();
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    loadingDiv.style.display = 'none';
    const restaurantDiv = document.querySelector('#detail-restaurant');
    restaurantDiv.innerHTML += createDetailRestaurantTemplate(restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
    // eslint-disable-next-line no-undef
    buttonReview.onclick = async (e) => {
      e.preventDefault();
      const form = document.querySelector('#reviewRestaurant');
      const data = {
        id: url.id,
        name: form.querySelector('input[name="name"]').value,
        review: form.querySelector('input[name="review"]').value,
      };
      const response = await RestaurantSource.Review(data);
      if (response === 'success') {
        window.location.reload();
      } else {
        console.log(response);
      }
    };
  },
};

export default DetailRestaurant;
