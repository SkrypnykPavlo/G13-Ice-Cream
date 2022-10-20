const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 40,
  uniqueNavElements: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clicable: true,
  },
});
