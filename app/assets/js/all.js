$(function() {

        // init Swiper:
    const swiper = new Swiper('.swiper', {
    // Optional parameters
    oop: true,
    rabCursor : true,
      
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true
    },
      
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-m-next',
    prevEl: '.swiper-button-m-prev',
    },
      
    });
    
    const elem = document.querySelector('input[name="date-picker"]');
    const datepicker = new Datepicker(elem, {
      language: "zh-TW",
  }); 
});



  