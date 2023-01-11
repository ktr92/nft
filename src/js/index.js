function initFE() {
    closeByClickOutside('.dropdownblock', '.accountmenu')
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
    $('.accountmenu').on('click', function(e) {
        e.preventDefault()
        $(this).find('.dropdownblock').toggleClass('active')
    })
});

window.addEventListener('load', function () {
    initFE()
});