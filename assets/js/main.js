$(document).ready(function () {
    $('.slider1').lightSlider({
        adaptiveHeight: false,
        item: 1,
        pager: true,
        slideMargin: 0,
        loop: true,
        controls: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 1,
                    slideMove: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });

    $('.header_nav .subnav').slideUp();
    $(".header_nav-item i").click(function () {
        $(this).toggleClass("active")
        $(this).next('.subnav').slideToggle();
    })
    $('.header_wrap-search').click(function () {
        $('.search').toggleClass("active")
    })
    $('.header_wrap-menu').click(function () {
        $('.bkg_menu').toggleClass("active")
        $('.header_nav').toggleClass("active")
    })
    $('.bkg_menu').click(function () {
        $('.bkg_menu').toggleClass("active")
        $('.header_nav').toggleClass("active")
    })
    // show nav_top
    $(window).scroll(function (event) {
        var pos_body = $('html,body').scrollTop();
        if (pos_body > 90) {
            $('.nav_top').addClass('active');
        }
        else {
            $('.nav_top').removeClass('active');

        }
    });
    $(".nav_top").click(function () {
        //1 second of animation time
        //html works for FFX but not Chrome
        //body works for Chrome but not FFX
        //This strange selector seems to work universally
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });
    // // cuộn màn hình
    // $(window).scroll(function (event) {
    //     var pos_body = $('html,body').scrollTop();
    //     if (pos_body > 90) {
    //         $('header').addClass('active');
    //     }
    //     else {
    //         $('header').removeClass('active');
    //     }
    // });




    const resizeImage = (div, ratio) => {
        let widthif = parseInt($(div).width())
        let heightif = (widthif) * ratio
        $(div).css({
            "height": heightif + "px"
        })
    }
    // resizeImage('.s3_item .s3_item-l-img', 258 / 584)
});


const tabs = document.querySelectorAll('.s3_tab-item')
const tab_items = document.querySelectorAll('.s3_info-item')
tabs.forEach((tab, index) => {
    tab.onclick = function () {
        const tab_item = tab_items[index];
        document.querySelector('.s3_tab-item.active').classList.remove('active')
        document.querySelector('.s3_info-item.active').classList.remove('active')
        this.classList.add('active');
        tab_item.classList.add('active')
    }
})

