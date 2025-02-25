(function ($) {
    'use strict';

    var imJs = {
        m: function (e) {
            imJs.d();
            imJs.methods();
        },
        d: function (e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')
        },

        methods: function (e) {
            imJs.featherAtcivation();
            imJs.backToTopInit();
            imJs.mobileMenuActive();
            imJs.vedioActivation();
            imJs.stickyHeader();
            imJs.smothScroll();
            imJs.smothScroll_Two();
            imJs.stickyAdjust();
            imJs.testimonialActivation();
            imJs.contactForm();
            imJs.wowActive();
            imJs.awsActivation();
            imJs.demoActive();
            imJs.activePopupDemo();
        },

        contactForm: function () {
            $('.rwt-dynamic-form').on('submit', function (e) {
                e.preventDefault();
                var _self = $(this);
                var __selector = _self.closest('input,textarea');
                _self.closest('div').find('input,textarea').removeAttr('style');
                _self.find('.error-msg, .success-msg').remove();
                _self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');

                var formData = new FormData(this);

                $.ajax({
                    url: 'https://api.web3forms.com/submit',
                    type: "post",
                    dataType: 'json',
                    processData: false,
                    contentType: false,
                    data: formData,
                    success: function (data) {
                        _self.closest('div').find('button[type="submit"]').removeAttr('disabled');

                        if (data.success) {
                            $('.error-msg').hide();
                            $('.form-group').removeClass('focused');
                            _self.find('.rn-btn').after('<div class="success-msg"><p>Message sent successfully!</p></div>');
                            _self.closest('div').find('input,textarea').val('');

                            setTimeout(function () {
                                $('.success-msg').fadeOut('slow');
                            }, 5000);
                        } else {
                            _self.find('.rn-btn').after('<div class="error-msg"><p>*' + data.message + '</p></div>');
                        }
                    },
                    error: function () {
                        _self.closest('div').find('button[type="submit"]').removeAttr('disabled');
                        _self.find('.rn-btn').after('<div class="error-msg"><p>*Something went wrong. Please try again.</p></div>');
                    }
                });
            });
        },

        activePopupDemo: function (e) {
            $('.popuptab-area li a.demo-dark').on('click', function (e) {
                $('.demo-modal-area').addClass('dark-version');
                $('.demo-modal-area').removeClass('white-version');
            });

            $('.popuptab-area li a.demo-light').on('click', function (e) {
                $('.demo-modal-area').removeClass('dark-version');
                $('.demo-modal-area').addClass('white-version');
            })
        },

        demoActive: function (e) {
            $('.rn-right-demo').on('click', function (e) {
                $('.demo-modal-area').addClass('open');
            })
            $('.demo-close-btn').on('click', function (e) {
                $('.demo-modal-area').removeClass('open');
            })
        },

        wowActive: function () {
            new WOW().init();
        },

        smothScroll: function () {
            $(document).on('click', '.smoth-animation', function (event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 50
                }, 300);
            });
        },

        smothScroll_Two: function () {
            $(document).on('click', '.smoth-animation-two', function (event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 0
                }, 300);
            });
        },

        stickyAdjust: function (e) {
            $('.rbt-sticky-top-adjust').css({ top: 120 });
            $('.rbt-sticky-top-adjust-two').css({ top: 200 });
            $('.rbt-sticky-top-adjust-three').css({ top: 25 });
        },

        testimonialActivation: function () {
            $('.testimonial-activation').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>'
            });
        },

        featherAtcivation: function () {
            feather.replace();
        },

        backToTopInit: function () {
            var scrollTop = $('.backto-top');
            $(window).scroll(function () {
                var topPos = $(this).scrollTop();
                if (topPos > 100) {
                    $(scrollTop).css('opacity', '1');
                } else {
                    $(scrollTop).css('opacity', '0');
                }
            });

            $(scrollTop).on('click', function () {
                $('html, body').animate({
                    scrollTop: 0,
                    easingType: 'linear',
                }, 500);
                return false;
            });
        },

        stickyHeader: function (e) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 250) {
                    $('.header--sticky').addClass('sticky');
                } else {
                    $('.header--sticky').removeClass('sticky');
                }
            });
        },

        vedioActivation: function (e) {
            $('#play-video').on('click', function (e) {
                e.preventDefault();
                $('#video-overlay').addClass('open');
                $("#video-overlay").append('<iframe width="80%" height="80%" src="https://www.youtube.com/embed/7e90gBu4pas" frameborder="0" allowfullscreen></iframe>');
            });

            $('.video-overlay, .video-overlay-close').on('click', function (e) {
                e.preventDefault();
                close_video();
            });

            $(document).keyup(function (e) {
                if (e.keyCode === 27) {
                    close_video();
                }
            });

            function close_video() {
                $('.video-overlay.open').removeClass('open').find('iframe').remove();
            };
        },

        mobileMenuActive: function (e) {
            $('.humberger-menu').on('click', function (e) {
                e.preventDefault();
                $('.popup-mobile-menu').addClass('menu-open');
                imJs._html.css({ overflow: 'hidden' });
            });

            $('.close-menu-activation, .popup-mobile-menu .primary-menu .nav-item a').on('click', function (e) {
                e.preventDefault();
                $('.popup-mobile-menu').removeClass('menu-open');
                $('.has-droupdown > a').removeClass('open').siblings('.submenu').removeClass('active').slideUp('400');
                imJs._html.css({ overflow: '' });
            });

            $('.popup-mobile-menu').on('click', function (e) {
                e.target === this && $('.popup-mobile-menu').removeClass('menu-open');
                imJs._html.css({ overflow: '' });
            });

            $('.has-droupdown > a').on('click', function (e) {
                e.preventDefault();
                $(this).siblings('.submenu').toggleClass('active').slideToggle('400');
                $(this).toggleClass('open');
                imJs._html.css({ overflow: '' });
            });
        },

        awsActivation: function (e) {
            AOS.init();
        },

    }
    imJs.m();

})(jQuery, window);
