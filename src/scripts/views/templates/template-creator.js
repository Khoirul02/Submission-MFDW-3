import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantItemTemplate = (restaurant) => `
    <article tabindex="0" class="post-item">
        <div class="post-ribbon">
            <p>${restaurant.name}</p>
        </div>
        <img class="post-item__thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name}">
        <div class="post-item__content">
            <p class="post-item__rate">Rating : ${restaurant.rating}</p>
            <h1 class="post-item__title">${restaurant.name}
            </h1>
            <div class="post-item__description">
              <p>${restaurant.description}</p>
            <div>
        </div>
        <a href="#/detail-restaurant/${restaurant.id}">
            <button class="button-item">Detail</button>
        </a>
    </article>
`;

const createDetailRestaurantTemplate = (restaurant) => `
    <div class="latest">
        <h1 class="latest__label">Restaurant ${restaurant.name}</h1>
        <form id="reviewRestaurant">
              <input type="text" name="name" placeholder="Nama Anda.." />
              <input type="text" name="review" placeholder="Masukan Review Anda.." />
              <button id="buttonReview" class="button-review">Kirim</button>
        </form>
        <div class="post-item-detail">
            <img class="post-item-detail__thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name}">  
            <div class="post-item-detail__content">
                    <div class="post-ribbon">
                        <p>Kota ${restaurant.city}</p>
                    </div>
                    <h1 class="post-item__title">${restaurant.address}
                    </h1>
                    <div class="post-item-detail__description">
                    <p>${restaurant.description}</p>
            <div>
            <h1 class="post-item__title">Kategori Menu</h1>
            <div class="post-item-detail-tag">${restaurant.categories.map((categorie) => `* Kategori ${categorie.name}  `).join('')}</div>
                <div class="post-item-detail-food">
                    <div class="post-item-detail-food-list">Menu Makanan
                    <ol>
                        ${restaurant.menus.foods.map((food) => `
                        <li>${food.name}</li>
                        `).join('')}
                    </ol>
                    </div>
                    <div class="post-item-detail-food-list">Menu Minuman
                    <ol>
                        ${restaurant.menus.drinks.map((drink) => `
                        <li>${drink.name}</li>
                        `).join('')}
                    </ol>
                    </div>
            </div>
            <h1 class="post-item__title">Penilaian Pelanggan</h1>
                <div class="post-item-detail-tag">Rating Restaurant ⭐️ ${restaurant.rating}</div>
                <div class="post-item-detail-food-list-grid-review">
                    ${restaurant.customerReviews.map((review) => `
                    <div class="post-item-detail-food-list-review">
                        <p style=""><b>${review.name}</b><br>
                        ${review.review}<br>
                        ${review.date}</p>
                    </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </div>
`;
const createTopMenusItemTemplate = (topmenus) => `
<div tabindex="0" class="headline_box">
    <img class="headline__images lazyload" data-src="${topmenus.pictureId}" alt="${topmenus.name}">
    <p class="headline__content_title">${topmenus.name}</p>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLoding = () => ` 
 <div>
    <img class="lazyload" data-src="/images/loading.gif"/>
 </div>
`;
const requestDataEror = () => '<div class="post-item__not__load">Data Gagal Dimuat!!</div>';

const requestDataEmpty = () => '<div class="post-item__not__found">Data Tidak Ada!!</div>';

export {
  // eslint-disable-next-line max-len
  createRestaurantItemTemplate, createDetailRestaurantTemplate, createTopMenusItemTemplate, createLikeButtonTemplate, createLikedButtonTemplate, createLoding, requestDataEror, requestDataEmpty,
};
