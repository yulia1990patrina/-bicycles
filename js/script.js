let burger = document.querySelector('.burger-menu');
let nav = document.querySelector('.main-nav');
function burgerOpen() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
}
burger.addEventListener('click',burgerOpen);

$('.partner').slick({
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 300,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



    $('.equipment__all').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        prevArrow: '<button class="btn slider-btn slider-prev"><img src="img/header/equipment/left.png" alt=""></button>',
        nextArrow: '<button class="btn slider-btn slider-next"><img src="img/header/equipment/right.png" alt=""></button>',
      
        responsive: [
          {
            breakpoint: 660,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });

    $('.new__all').slick({
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
    
      prevArrow: '<button class="btn slider-btn slider-prev"><img src="img/header/equipment/left.png" alt=""></button>',
      nextArrow: '<button class="btn slider-btn slider-next"><img src="img/header/equipment/right.png" alt=""></button>',

      responsive: [
        {
          breakpoint: 660,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
