$(function() {
    // Custom JS

    let options = {
        // offset: '.constructor',
        classes: {
            clone:   'banner--clone',
            stick:   'banner--stick',
            unstick: 'banner--unstick'
        }
    };

    // Initialise with options
    let banner = new Headhesive('.header', options);

    $(".slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $(".review-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
         ]
    });

    //section size -> tabs
    $(".tab").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $(".info").eq(index).addClass('active').siblings().removeClass('active');
        $(".size-flex").eq(index).addClass('active').siblings().removeClass('active');
    });

    //burger menu
    $(".header-burger").click(function () {
        $(this).toggleClass('active');
        $(this).closest(".header").find(".header-menu-nav").slideToggle(300);
    });
    if (window.matchMedia("(max-width: 1199px)").matches) {
        window.addEventListener('scroll', function() {
            $(".header-burger").removeClass('active');
            $(".header-menu-nav").slideUp(100);
        });
    }
    //popup
    $(".btn-callback").click(function (e) {
        e.preventDefault();
        $(".popup").addClass('active');
        $.scrollLock(true);
    });
    $(".close, .popup").click(function () {
        $(".popup").removeClass('active');
        $.scrollLock(false);
    });
    $(".form").click(function (e) {
        e.stopPropagation();
    });

    $(".header a, .slider a, .footer a").click(function (e) {
        e.preventDefault();
        $('html,body').animate({scrollTop:$($.attr(this, 'href') ).offset().top - 60 + "px"},{duration:1E3});
    });
    //fixed body
    $.scrollLock = ( function scrollLockClosure() {

        'use strict';

        var $html      = $( 'html' ),
            // State: unlocked by default
            locked     = false,
            // State: scroll to revert to
            prevScroll = {
                scrollLeft : $( window ).scrollLeft(),
                scrollTop  : $( window ).scrollTop()
            },
            // State: styles to revert to
            prevStyles = {},
            lockStyles = {
                'overflow-y' : 'scroll',
                'position'   : 'fixed',
                'width'      : '100%'
            };

        // Instantiate cache in case someone tries to unlock before locking
        saveStyles();

        // Save context's inline styles in cache
        function saveStyles() {
            var styleAttr = $html.attr( 'style' ),
                styleStrs = [],
                styleHash = {};

            if( !styleAttr ){
                return;
            }

            styleStrs = styleAttr.split( /;\s/ );

            $.each( styleStrs, function serializeStyleProp( styleString ){
                if( !styleString ) {
                    return;
                }

                var keyValue = styleString.split( /\s:\s/ );

                if( keyValue.length < 2 ) {
                    return;
                }

                styleHash[ keyValue[ 0 ] ] = keyValue[ 1 ];
            } );

            $.extend( prevStyles, styleHash );
        }

        function lock() {
            var appliedLock = {};

            // Duplicate execution will break DOM statefulness
            if( locked ) {
                return;
            }

            // Save scroll state...
            prevScroll = {
                scrollLeft : $( window ).scrollLeft(),
                scrollTop  : $( window ).scrollTop()
            };

            // ...and styles
            saveStyles();

            // Compose our applied CSS
            $.extend( appliedLock, lockStyles, {
                // And apply scroll state as styles
                'left' : - prevScroll.scrollLeft + 'px',
                'top'  : - prevScroll.scrollTop  + 'px'
            } );

            // Then lock styles...
            $html.css( appliedLock );

            // ...and scroll state
            $( window )
                .scrollLeft( 0 )
                .scrollTop( 0 );

            locked = true;
        }

        function unlock() {
            // Duplicate execution will break DOM statefulness
            if( !locked ) {
                return;
            }

            // Revert styles
            $html.attr( 'style', $( '<x>' ).css( prevStyles ).attr( 'style' ) || '' );

            // Revert scroll values
            $( window )
                .scrollLeft( prevScroll.scrollLeft )
                .scrollTop(  prevScroll.scrollTop );

            locked = false;
        }

        return function scrollLock( on ) {
            // If an argument is passed, lock or unlock depending on truthiness
            if( arguments.length ) {
                if( on ) {
                    lock();
                }
                else {
                    unlock();
                }
            }
            // Otherwise, toggle
            else {
                if( locked ){
                    unlock();
                }
                else {
                    lock();
                }
            }
        };
    }() );
});
