function initFE() {
    closeByClickOutside('[data-toggle="accountmenu"]', '[data-toggleclick="accountmenu"]')
    closeByClickOutside('[data-toggle="messageblock"]', '[data-toggleclick="messageblock"]')
    closeByClickOutside('.fdropdown__menu', '.fdropdown__button')
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

function closeByClickOutside(element, button) {
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
  }


$(document).ready(function() {
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
  
    })
    $('.jsbackdrop').on('click', function(e) {
        $(this).removeClass('active')
        $('[data-menu]').removeClass('active')
        $('[data-menutoggle]').removeClass('active')
  
    })
});

window.addEventListener('load', function () {
    initFE()
});