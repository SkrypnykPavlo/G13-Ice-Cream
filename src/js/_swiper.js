const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clicable: true,
  },
});
