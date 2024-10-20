$(function () {
  // fixed menu js
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.sticky-top').addClass('shadow-lg').css('top', '0px');
    } else {
      $('.sticky-top').removeClass('shadow-lg').css('top', '-100px');
    }
  });

  // cart js
  $('.cart').on('click', function () {
    $('aside').addClass('show-aside')
  })
  $('.cart').on('click', function () {
    $('.aside-overlay').addClass('show-aside-overlay')
  })
  $('.close').on('click', function () {
    $('aside').removeClass('show-aside')
  })
  $('.close').on('click', function () {
    $('.aside-overlay').removeClass('show-aside-overlay')
  })
  $('.aside-overlay').on('click', function () {
    $('.aside-overlay').removeClass('show-aside-overlay')
  })
  $('.aside-overlay').on('click', function () {
    $('aside').removeClass('show-aside')
  })

  // back to top js
  let btn = $('#button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });

  // banner slider js
  $('.banner').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    prevArrow: '<i class="bi bi-chevron-left icon left"></i>',
    nextArrow: '<i class="bi bi-chevron-right icon right"></i>'
  });

  // magnific popup js
  $('.vidplay').magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>',
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        },
      },
      srcAction: 'iframe_src',
    }
  });

  // smooth scroll js
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 74
        }, 0);
        return false;
      }
    }
  });

  // testimonial slider js
  $('.testimonial-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    autoplay: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // aos animation js
  AOS.init();

  // partnership slider js
  $('.category-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: '<i class="bi bi-chevron-left icon left"></i>',
    nextArrow: '<i class="bi bi-chevron-right icon right"></i>',
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // partnership slider js
  $('.partner-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<i class="bi bi-chevron-left icon left"></i>',
    nextArrow: '<i class="bi bi-chevron-right icon right"></i>',
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  // promo code js
  $('.promo-input').hide();
  $('.promo-code p').on('click', function () {
    $('.promo-input').slideToggle();
  });

  // count js
  $(".cart-minus").on('click', function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
  });

  $(".cart-plus").on('click', function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  // chosen js
  $(".chosen").chosen()

  // checkout js
  $('.different-add-form').hide();
  $('.checkout-hide-show').on('click', function () {
    $('.different-add-form').slideToggle();
  });

  // tour banner slider
  $('.tour-banner').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  });

  // mobile menu js
  $('.mobile-topbar .icon i').click(function () {
    $('.mobile-menu-main').addClass('show-mobile-menu')
  })
  $('.close-m-menu').click(function () {
    $('.mobile-menu-main').removeClass('show-mobile-menu')
  })
  $('.mobile-topbar .icon i').click(function () {
    $('.mobile-menu-overlay').addClass('show-mobile-menu-overlay')
  })
  $('.mobile-topbar .icon i').click(function () {
    $('.mobile-menu-overlay').addClass('show-mobile-menu-overlay')
  })
  $('.close-m-menu').click(function () {
    $('.mobile-menu-overlay').removeClass('show-mobile-menu-overlay')
  })
  $('.mobile-menu-overlay').click(function () {
    $('.mobile-menu-overlay').removeClass('show-mobile-menu-overlay')
  })
  $('.mobile-menu-overlay').click(function () {
    $('.mobile-menu-main').removeClass('show-mobile-menu')
  })
  $('.sub-menu ul').hide();
  $(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });


})