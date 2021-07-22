/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#restaurants');
  I.see('Data Tidak Ada!!', '.post-item__not__found');
});

Scenario('Like a Restaurant', ({ I }) => {
  I.amOnPage('#/detail-restaurant/rqdv5juczeskfw1e867');
  I.seeElement('#likeButtonContainer');
  I.click(locate('#likeButton').first());
  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
});

Scenario('Unlike a Restaurant', ({ I }) => {
  I.amOnPage('#/detail-restaurant/rqdv5juczeskfw1e867');
  I.seeElement('#likeButtonContainer');
  I.click(locate('#likeButton').first());
  I.click(locate('#likeButton').first());
  I.amOnPage('/#/favorite');
  I.seeElement('#restaurants');
  I.see('Data Tidak Ada!!', '.post-item__not__found');
});
