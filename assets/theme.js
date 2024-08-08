var UTI = typeof UTI === 'object' ? UTI : {};
UTI.isdesktop = true;

UTI.common = {
  init: function () {
    // accordions
    $('.ac-title:not(.active)').each(function () {
      $(this).next().css('display', 'none');
    });

    //scrollto

    $('body').on('click', '[scroll-to-id]', function (e) {
      e.preventDefault();
      var id = $(this).find('a').attr('href');
      $('html, body').animate({ scrollTop: $(id).offset().top }, 1000);
    });
    document.documentElement.className += 'ontouchstart' in document.documentElement ? ' touch' : ' no-touch';

    UTI.effect.init();

    if ($('.template-index').length && $(window).width() > 1024) {
      UTI.common.loadscrolldesk();
    }
    //for quntity box

    $('body').on('click', '.plus-minus .minus', function (e) {
      e.preventDefault();
      var box = $(this).parent().find('input');
      if (parseInt(box.val()) >= 1) box.val(parseInt(box.val()) - 1);
      box.trigger('change');
    });
    $('body').on('click', '.plus-minus .plus', function (e) {
      e.preventDefault();
      var box = $(this).parent().find('input');
      box.val(parseInt(box.val()) + 1);
      box.trigger('change');
    });

    $('body').on('click', '.ac-title', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if ($(this).hasClass('active')) {
        $(this).next().removeClass('active');
        $(this).next().slideUp();
      } else {
        $(this).next().addClass('active');
        $(this).next().slideDown();
      }
      $(this).toggleClass('active');
    });

    //section custom
    $('[data-custom-class]').each(function () {
      $(this).parent().addClass($(this).attr('data-custom-class'));
    });

    //window scrolls
    //scroll throtle
    var scrollpos = 0;
    var scrollTimeout;
    var throttle = 200;

    $(window).on('scroll', function () {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(function () {
          var goindown = window.pageYOffset > scrollpos ? true : false;
          scrollpos = window.pageYOffset;
          $(window).trigger('utiscroll', [window.pageYOffset, goindown]);
          scrollTimeout = null;
        }, throttle);
      }
      //var goindown = window.pageYOffset>scrollpos?true:false;
      //scrollpos = window.pageYOffset;
      //$(window).trigger('utiscroll', [window.pageYOffset, goindown]);
    });

    //video change

    $(window).resize(function () {
      if (jQuery(window).width() > 749 && !UTI.isdesktop) {
        UTI.isdesktop = true;
        $(window).trigger('uti-device-changed');
      } else if (jQuery(window).width() < 750 && UTI.isdesktop) {
        UTI.isdesktop = false;
        $(window).trigger('uti-device-changed');
      }
    });

    $(window).on('uti-device-changed', function () {
      UTI.common.loadmpfors();
    });

    UTI.common.loadmpfors();
  },
  loadmpfors: function () {
    var newmp4 = $('.hero-sou').attr('data-m');
    if (UTI.isdesktop) {
      newmp4 = $('.hero-sou').attr('data-d');
    }
    var videocontainer = $('.hero-vid');
    var videosource = $('.hero-sou');

    if (videocontainer.length) {
      videocontainer.get(0).pause();
      videosource.get(0).setAttribute('src', newmp4);
      videocontainer.get(0).load();
      //videocontainer.setAttribute('poster', newposter); //Changes video poster image
      videocontainer.get(0).play();
    }
  },
  loadscrolldesk: function () {
    if (UTI.isdesktop && !$('body').hasClass('scrolleffect')) {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      $('body').addClass('scrolleffect');
      let smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrappers',
        content: '#smooth-contents',
        smooth: 2,
        effects: true,
      });
    }
  },
};

$(function () {
  if (jQuery(window).width() > 749 && !UTI.isdesktop) {
    UTI.isdesktop = true;
    $(window).trigger('uti-device-changed');
  } else if (jQuery(window).width() < 750 && UTI.isdesktop) {
    UTI.isdesktop = false;
    $(window).trigger('uti-device-changed');
  }
  UTI.common.init();
});

jQuery(document).ready(function () {
  //mobile nav open
  $('body').on('click', '.burger', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('html, body').toggleClass('boxed mobnav');
  });

  $('body').on('click', '.nav-mob-wrapper .close-tab', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('html').removeClass('boxed').removeClass('mobnav');
    $('body').removeClass('boxed').removeClass('mobnav');
  });

  $('body').on('click', '.desk-search.set', function (e) {
    e.preventDefault();
    $('.desk-search-wrap').slideToggle();
  });

  $('body').on('click', '.mobile-nav .roll-nav .first-link', function (e) {
    e.preventDefault();
    $(this).next().slideToggle();
    $(this).toggleClass('active-plus');
  });

  ///////////////////

  $('.mainnavi-mob .first-ul .level1 > a').click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).parent().toggleClass('closed');
  });

  $(window).on('utiscroll', function (a, b, c) {
    // if(c && b >= 200)
    if (b >= 1) {
      $('body').addClass('scroll-down');
    } else {
      $('body').removeClass('scroll-down');
    }
  });
});

('use strict');

var UTI = typeof UTI === 'object' ? UTI : {};

UTI.pdp = {
  init: function () {
    var _this = this;
    $('#product-display').addClass('hidesall-0');
    $('.next-bodisplay a').attr('href', $('.product-footer .nextproduct').attr('href'));

    $('body').on('click', '.nodisplay-quiz', function (e) {
      e.preventDefault();
      $('.warning-box.nodis').slideUp();
      $('.nodisplay-quiz').toggleClass('active');
      if ($('.nodisplay-quiz').hasClass('active')) {
        var par = $('.main-items-wrap');
        if (!par.length) par = $('#product-display');
        par.find('.box').removeClass('active');
        loaddisplay(0);
        add_from_set(par);
      }
      check_sub_page(false);
    });
    check_sub_page(false);
    function check_sub_page(clicked) {
      var oktogo = false;
      if ($('.nodisplay-quiz').hasClass('active')) {
        oktogo = true;
      } else {
        if ($('.main-items-wrap').length) {
          if ($('.main-items-wrap .box.active').length) {
            oktogo = true;
          }
        } else {
          if ($('#product-display .box.active').length) {
            oktogo = true;
          }
        }
      }
      if (clicked) oktogo = true;
      if (oktogo) {
        activatnext();
        $('.nextproduct').removeClass('deactive').text('Next');
        if ($('.nextproduct').hasClass('checkout')) $('.nextproduct').text('Review Cart');
      } else {
        $('.nextproduct').addClass('deactive').text('Make a selection');
        $('.next-note').text($('.next-note').attr('data-deactive'));
        $('.next-bodisplay').slideUp();
      }
      $('.nodisplay-quiz').hasClass('active') ? $('.next-bodisplay').slideDown() : $('.next-bodisplay').slideUp();
    }

    $('body').on('click', '.nextproduct.deactive', function (e) {
      e.preventDefault();
      $('.warning-box.nodis').slideDown();
      // $('.next-note').text($('.next-note').attr('data-deactive'));
    });

    $('body').on('change', '.add-cart-wrap .plus-minus input', function (e) {
      e.preventDefault();
      add_from_set($(this).parents('.add-cart-wrap'));
    });

    function add_from_set(set) {
      var selectfrom = set;
      var paritems = selectfrom.find('.box');
      var itemdata = '';
      var changedItems = [];
      var addedProductId;
      var removedProductId;
      for (var i = 0; i < paritems.length; i++) {
        var thispr = paritems.eq(i);
        if (thispr.hasClass('active')) {
          itemdata += 'updates[' + thispr.attr('data-pid') + ']=' + selectfrom.find('.plus-minus input').val() + '&';
          addedProductId = thispr.attr('data-pid');
          setTimeout(() => {
            fetch('/cart.js')
              .then((response) => response.json())
              .then((cart) => {
                for (var i = 0; i < cart.items.length; i++) {
                  if (cart.items[i].id == addedProductId) {
                    console.log('product added' + addedProductId);

                    window.dataLayer.push({
                      event: 'ee_addToCart',
                      name: cart.items[i].title,
                      id: cart.items[i].id.toString(),
                      price: (cart.items[i].price / 100).toFixed(2).toString(),
                      brand: cart.items[i].vendor,
                      sku: cart.items[i].sku,
                    });
                  }
                }
              });
          }, 1000);
        } else {
          itemdata += 'updates[' + thispr.attr('data-pid') + ']=' + 0 + '&';
          removedProductId = thispr.attr('data-pid');
          fetch('/cart.js')
            .then((response) => response.json())
            .then((cart) => {
              for (var i = 0; i < cart.items.length; i++) {
                if (cart.items[i].id == removedProductId) {
                  console.log('product removed' + removedProductId);

                  window.dataLayer.push({
                    event: 'ee_removeFromCart',
                    name: cart.items[i].title,
                    id: cart.items[i].id.toString(),
                    price: (cart.items[i].price / 100).toFixed(2).toString(),
                    brand: cart.items[i].vendor,
                    sku: cart.items[i].sku,
                  });
                }
              }
            });
        }
      }
      _this.updateMutipleItems(itemdata);
      // _this.removeAndAdd(changedItems);
    }

    $('body').on('click', '.main-pro .box', function (e) {
      e.preventDefault();
      var par = $(this).parents('.add-cart-wrap');
      $('.warning-box.nodis').slideUp();

      if ($(this).hasClass('active')) {
        par.find('.box').removeClass('active');
        loaddisplay(0);
      } else {
        par.find('.box').removeClass('active');
        $(this).addClass('active');
        loaddisplay($(this).attr('data-index'));
      }
      add_from_set(par);
      check_sub_page();
    });

    $('body').on('click', '.sub-pro .box', function (e) {
      e.preventDefault();
      var par = $(this).parents('.add-cart-wrap');

      if ($(this).hasClass('active')) {
        par.find('.box').removeClass('active');
        par.find('.show-hide-qty').slideUp();
      } else {
        par.find('.box').removeClass('active');
        $(this).addClass('active');
        par.find('.show-hide-qty').slideDown();
      }
      check_sub_page(true);
      add_from_set(par);
      if ($(this).parents('[data-show-gal]').length) {
        _this.loadnewgal($(this).parents('[data-show-gal]').attr('data-show-gal'));
      }
    });

    var galenum = 1;

    $('.product-set-' + 1)
      .find('.gallery-inside')
      .flickity({
        pageDots: true,
        contain: true,
        arrows: false,
      });

    var doit;
    var wid = $(window).width();
    $(window).resize(function () {
      clearTimeout(doit);
      doit = setTimeout(resizedw, 100);
    });

    function resizedw() {
      if (wid != $(window).width()) {
        $('.product-set-' + galenum)
          .find('.gallery-inside.flickity-enabled')
          .flickity('destroy');
        $('.product-set-' + galenum)
          .find('.gallery-inside')
          .flickity({
            pageDots: true,
            contain: true,
          });
        checkscale();
        wid = $(window).width();
      }
    }
    checkscale();
    function checkscale() {
      $(window).width() / $(window).height() < 1.2 ? $('body').addClass('no-split') : $('body').removeClass('no-split');
    }

    function loaddisplay(display) {
      _this.loadnewgal(display);

      // $('.product-set-'+galenum).find('.gallery-inside').resize();
      $('#product-display').attr('class', '');
      $('#product-display').addClass('hidesall-' + display);

      if (display == 0) {
        $('.main-items-wrap .show-hide-qty').slideUp();
        if (!$('.nodisplay-quiz').hasClass('active')) {
          $('.nextproduct').addClass('deactive').text('Make a selection');
          // $('.next-note').text($('.next-note').attr('data-deactive'));
        }
      } else {
        $('.main-items-wrap .show-hide-qty').slideDown();
        $('.nodisplay-quiz').removeClass('active');
        $('.nextproduct').addClass('deactive').text('Next');
        if ($('.nextproduct').hasClass('checkout')) $('.nextproduct').text('Review Cart');
        activatnext();
      }
    }

    function activatnext() {
      $('.nextproduct').addClass('clickme');
      setTimeout(function () {
        $('.nextproduct').removeClass('clickme');
      }, 1500);
    }

    $('.stand-details-calc').each(function () {
      $(this).next().attr('data-tops', $(this).offset().top);
      $(this).hide();
    });

    // stand
    var currentscroll = 0;
    $('body').on('click', '.more-details-btn', function (e) {
      e.preventDefault();
      var thisbtn = $(this);
      // var thisbtn = $(this).parents('.pro-stands').find('.stand-prod .inside-btn');
      thisbtn.toggleClass('active');

      var scrollproduct = $('#MainContent').css('display') == 'flex' ? $('#product-display') : $('html,body');

      if (thisbtn.hasClass('active')) {
        currentscroll = scrollproduct.scrollTop();
        $('.stand-details').slideUp(1000);
        $('.more-details-btn').removeClass('active');
        var slideitem = $('[data-blockid=' + thisbtn.attr('data-btnid') + ']');
        if (!slideitem.length) {
          slideitem = thisbtn.parents('.pro-stands').find('.stand-details');
        }
        thisbtn.addClass('active');
        slideitem.stop().slideDown(1000);
        scrollproduct.animate(
          {
            scrollTop: parseInt(slideitem.attr('data-tops')) - 50,
          },
          1000
        );
      } else {
        $('.more-details-btn').removeClass('active');
        $('.stand-details').slideUp(1000);
        scrollproduct.animate(
          {
            scrollTop: currentscroll,
          },
          1200
        );
      }

      if ($(this).parents('[data-show-gal]').length) {
        _this.loadnewgal($(this).parents('[data-show-gal]').attr('data-show-gal'));
      }
    });

    $('body').on('click', '.close-more-details', function (e) {
      e.preventDefault();
      $('.more-details-btn').removeClass('active');
      $('.stand-details').slideUp(1000);
      $('#product-display').animate(
        {
          scrollTop: currentscroll,
        },
        1200
      );
    });

    $('.pro-stands').each(function (a, i) {
      $(this).attr('data-show-gal', a + 1);
    });
  },
  addproduct: function (ajpath) {},
  loadnewgal: function (galenum) {
    $('.pdp-main-gallery').hide();
    if (galenum == 0) galenum = 1;
    $('.product-set-' + galenum).show();

    $('.product-set-' + galenum)
      .find('.gallery-inside.flickity-enabled')
      .flickity('destroy');
    $('.product-set-' + galenum)
      .find('.gallery-inside')
      .flickity({
        pageDots: true,
        contain: true,
      });
  },
  updateMutipleItems: function (itemspath) {
    var _this = this;
    console.log(itemspath);

    $.ajax({
      type: 'POST',
      url: '/cart/update.js',
      data: itemspath,
      dataType: 'json',
      success: function (t) {
        // var total = Math.round(t.items_subtotal_price / 100);
        // $('.totalcart').text('$'+total);
        // $('.totalcart').removeClass('hides');
        PROJ.ajaxcart.updateCart();
      },
      error: function (t, r) {
        console.log(t);
        console.log(r);
      },
    });
  },
};

var tests;

// mini cart

$(document).ready(function () {
  PROJ.ajaxcart.init();
});

('use strict');

var PROJ = typeof PROJ === 'object' ? PROJ : {};

PROJ.ajaxcart = {
  VAR: {},

  init: function () {
    var _this = this;
    // _this.opencart();

    $('body').on('click', '#mini-cart .close-more-details', function (e) {
      e.preventDefault();
      _this.closecart();
    });

    $('body').on('click tap', 'a[href="/cart"], .desk-cart > a', function (e) {
      e.preventDefault();
      _this.opencart();
    });

    $('body').on('click', '.nextproduct.checkout:not(.deactive)', function (e) {
      e.preventDefault();
      _this.opencart();
      $('#mini-cart').addClass('co-active');
    });

    $('body').on('click', '[data-varid]', function (e) {
      e.preventDefault();
      var varid = $(this).attr('data-varid');
      $(this).parents('.cross-slide').find('.quick-buy a').attr('data-directadd', varid);
      $(this).parents('.cross-slide').find('[data-varid]').removeClass('active');
      $(this).addClass('active');
    });

    $('body').on('click', '[data-directadd]', function (e) {
      e.preventDefault();
      _this.addItem($(this).attr('data-directadd'));
    });

    $('body').on('change', '#mini-cart .show-hide-qty input', function (e) {
      e.preventDefault();
      _this.updateItem($(this).parents('.line-item').attr('data-proid'), $(this).val());
    });

    $('body').on('click', '.line-item .remove', function (e) {
      e.preventDefault();
      var par = $(this).parents('.line-item');
      var qty = 0;
      _this.updateItem(par.attr('data-proid'), qty);
    });

    $('body').on('click', '[data-directadd]', function (e) {
      e.preventDefault();
      _this.addItem($(this).attr('data-directadd'));
    });

    $('body').on('click', '[data-vardirectadd]', function (e) {
      e.preventDefault();
      $(this)
        .parents('.checkadd')
        .find('[data-directadd]')
        .attr('data-directadd', $(this).attr('data-vardirectadd'))
        .show();
      $(this).parents('.checkadd').find('[data-vardirectadd]').removeClass('active');
      $(this).addClass('active');
    });
  },

  updateCart: function () {
    var _this = this;
    $('.totalcart').addClass('hides');
    $.get('/cart?view=mini', function (data) {
      $('#mini-cart').html($(data));
    }).done(function (cart) {
      $('#mini-cart').removeClass('loading');
      $('#mini-cart .related').flickity({
        pageDots: false,
        freeScroll: false,
        wrapAround: false,
      });
      if ($('[data-total-price]').attr('data-total-price')) {
        var itsmc = parseInt($('[data-total-price]').attr('data-total-item')) > 1 ? ' items ' : ' item ';
        $('.txt.totalcart').html(
          '<b>' +
            $('[data-total-price]').attr('data-total-item') +
            itsmc +
            '</b>' +
            $('[data-total-price]').attr('data-total-price')
        );
      } else {
        $('.txt.totalcart').text('');
      }
      $('.totalcart').removeClass('hides');
    });
  },

  addItem: function (id) {
    var _this = this;

    if (!$('body').hasClass('upsell-cart')) {
      $('#mini-cart').addClass('loading');
      $('body,html').addClass('mini-cart');
    }

    $.ajax({
      type: 'POST',
      url: '/cart/add.js',
      data: 'quantity=' + 1 + '&id=' + id,
      dataType: 'json',
      success: function (t) {
        _this.updateCart();
        _this.opencart();
      },
      error: function (t, r) {
        _this.updateCart();
        _this.opencart();
      },
    });
  },

  updateItem: function (id, le) {
    var _this = this;
    $('#mini-cart').addClass('loading');

    $.ajax({
      type: 'POST',
      url: '/cart/change.js',
      data: 'quantity=' + le + '&id=' + id,
      dataType: 'json',
      success: function (t) {
        _this.updateCart();
        if ($('body').hasClass('upsell-cart')) {
          PROJ.upsells.opencart();
        }
      },
      error: function (t, r) {
        _this.updateCart();
      },
    });
  },

  opencart: function () {
    $('body,html').addClass('mini-cart-ani');
    $('.related').flickity('resize');
    setTimeout(function () {
      $('body,html').addClass('mini-cart');
    }, 10);
  },
  closecart: function () {
    $('body,html').removeClass('mini-cart');
    setTimeout(function () {
      $('body,html').removeClass('mini-cart-ani');
    }, 500);
  },
};

('use strict');

var UTI = typeof UTI === 'object' ? UTI : {};

UTI.effect = {
  VAR: {
    logoani: false,
  },
  init: function () {
    var _this = this;

    setTimeout(function () {
      UTI.effect.playlogo();
    }, 500);
  },
  playlogo: function () {
    if (UTI.effect.VAR.logoani) {
      return;
    } else {
      UTI.effect.VAR.logoani = true;
      setTimeout(function () {
        UTI.effect.VAR.logoani = false;
      }, 2000);
    }

    var _this = this;
    var logo = $('.desk-logo svg');
    var logog = $('.desk-logo svg g');

    var logostart = gsap.timeline({
      paused: true,
      defaults: { duration: 2 },
    });

    TweenMax.to(logog.eq(8), 1, { opacity: 1 });
    for (var k = 0; k < 8; k++) {
      TweenMax.fromTo(logog.eq(k), 0.5, { y: -22, delay: k / 10 }, { y: 0, opacity: 1, delay: k / 10 });
    }
    TweenMax.fromTo('.mob-logo svg g', 1, { y: 55 }, { y: 0, opacity: 1 });
  },
};

/*=== not include
 @prepros-prepend ./vendor/live.js


 ===*/
