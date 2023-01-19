function initFE() {
    closeByClickOutside('[data-toggle="accountmenu"]', '[data-toggleclick="accountmenu"]')
    closeByClickOutside('[data-toggle="messageblock"]', '[data-toggleclick="messageblock"]')
    closeByClickOutside('.fdropdown__menu', '.fdropdown__button')
    closeByClickOutside('.headersearch', '[data-toggleclick="headersearch"]')
    closeByClickOutside('.suggestions', '.searchinput')
}

function showSuggestions(e) {
    if (e.value.length > 0) {
        $(e).closest('[data-togglewrapper]').find('[data-toggle="suggestions"]').addClass('active')
        $(e).closest('[data-togglewrapper]').addClass('sugg')
    }
    else {
       
        $(e).closest('[data-togglewrapper]').find('[data-toggle="suggestions"]').removeClass('active')
        $(e).closest('[data-togglewrapper]').removeClass('sugg')
    }
}

function closeByClickOutside(element, button, callback) {
    $(document).click(function(event) {
        if (!$(event.target).closest(`${element},${button}`).length) {
            $(button).removeClass('active')
            $(element).removeClass('active')
        }
    });
    
    $(document).keyup(function(e) {
        if (e.key === "Escape") { // escape key maps to keycode `27`
            $(button).removeClass('active')
            $(element).removeClass('active')
        }
    });

    if (callback instanceof Function) { callback(); }
  }


function resizeEvents() {
    $('.siteheader__left').css('min-width', $('.siteheader__right').width())
}

$( window ).resize(function() {
    resizeEvents()
})
$(document).ready(function() {
    resizeEvents();

    (function($) {
        $(function() {
      
            $('[data-tabsheader="tabsheader"]').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('[data-tabswrapper="tabswrapper"]').find('[data-tabscontent]').removeClass('active').eq($(this).index()).addClass('active');
            });
      
        });
      })(jQuery);


      document.querySelectorAll('[data-toggle="password"]').forEach(item => {
        item.addEventListener('click', event => {
            let inp = item.closest(".inputpassword").querySelector('input')
            if (inp.type === "password") {
                inp.type = "text";
                item.closest(".inputpassword").classList.add("active")
            } else {
                inp.type = "password";
                item.closest(".inputpassword").classList.remove("active")
            }
        })
      }) 


    $('[data-toggleclick]').on('click', function(e) {
        $(this).toggleClass('active')
        e.preventDefault()
        let dropdown = $(this).data('toggleclick')
        $('[data-toggle].active').not($(`[data-toggle=${dropdown}]`)).removeClass('active')
        $('[data-toggleclick].active').not($(`[data-toggleclick=${dropdown}]`)).removeClass('active')
        $(`[data-toggle=${dropdown}]`).toggleClass('active')
        $(`[data-toggleactive=${dropdown}]`).toggleClass('active')
    })

    $('[data-scroll]').click(function(e) {
        e.preventDefault()
        let scroll = $(this).data('scroll')
        $(this).siblings(`[data-scrollblock=${scroll}]`).animate({
            scrollLeft: '+=126px'
        });
    });

    $('[data-menutoggle]').on('click', function(e) {
        e.preventDefault()
        let menu = $(this).data('menutoggle')
        $(`[data-menu=${menu}]`).toggleClass('active')
        $(this).toggleClass('active')
        $('.jsbackdrop').toggleClass('active')
        $('body').toggleClass('block')
  
    })
    $('.jsbackdrop').on('click', function(e) {
        $(this).removeClass('active')
        $('[data-menu]').removeClass('active')
        $('[data-menutoggle]').removeClass('active')
        $('body').removeClass('block')
  
    })
});

window.addEventListener('load', function () {
    initFE()
});