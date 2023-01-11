function initFE() {
    closeByClickOutside('[data-toggle="accountmenu"]', '[data-toggleclick="accountmenu"]')
    closeByClickOutside('[data-toggle="messageblock"]', '[data-toggleclick="messageblock"]')
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
        e.preventDefault()
        let dropdown = $(this).data('toggleclick')
        $(`[data-toggle=${dropdown}]`).toggleClass('active')
    })
});

window.addEventListener('load', function () {
    initFE()
});