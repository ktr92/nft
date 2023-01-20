/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
function initFE() {
    closeByClickOutside('[data-toggle="accountmenu"]', '[data-toggleclick="accountmenu"]')
    closeByClickOutside('[data-toggle="messageblock"]', '[data-toggleclick="messageblock"]')
    closeByClickOutside('.fdropdown__menu', '.fdropdown__button')
    closeByClickOutside('.headersearch', '[data-toggleclick="headersearch"]')
    closeByClickOutside('.suggestions', '.searchinput')
    repostSliderInit()
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


  function repostSliderInit() {
    $('[data-slider="repostslider"]').each(function() {
        $(this).slick({
            dots: true,
            arrows: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            swipe: true,
            nextArrow: $(this).closest('[data-sliderwrapper]').find('[data-slidernext]'),
            prevArrow: $(this).closest('[data-sliderwrapper]').find('[data-sliderprev]'),
        })
        $('[data-slider="repostslider"]').on('afterChange', function(e, s, currentSlideIndex) {
            let previousSlideIndex = currentSlideIndex + 1

            $('[data-click="copy-img"]').attr('data-clickindex', previousSlideIndex)
            $('[data-click="download-img"]').attr('data-downloadindex', previousSlideIndex)
          });
    })
  }


function resizeEvents() {
    $('.siteheader__left').css('min-width', $('.siteheader__right').width())
}

$( window ).resize(function() {
    resizeEvents()
})
$(document).ready(function() {
    resizeEvents(); 


    $('.modal').on('shown.bs.modal', function (e) {
        $(this).find('[data-slider]').slick('setPosition');
      })

    

    $('[data-click="download-img"]').on('click', function() {
        let index = $(this).attr('data-downloadindex')
        html2canvas(document.querySelector(`[data-download="download-img"][data-blockindex="${index}"]`)).then(function(canvas) {
            var link = document.createElement("a");
            document.body.appendChild(link);
            link.download = "repost.png";
            link.href = canvas.toDataURL("image/png");
            link.target = '_blank';
            link.click();
            canvas.remove();
            link.remove();
        });
    })
    $('[data-click="copy-img"]').on('click', function() {
        let index = $(this).attr('data-clickindex')
        console.log(index)
        html2canvas(document.querySelector(`[data-download="download-img"][data-blockindex="${index}"]`)).then(function(canvas) {
            canvas.toBlob(function(blob) {
                navigator.clipboard
                    .write([
                    new ClipboardItem(
                        Object.defineProperty({}, blob.type, {
                            value: blob,
                            enumerable: true
                        })
                    )
                ])
                    .then(function() {
                    console.log("Copied to clipboard");
                    /* domNode.classList.remove("on"); */
                });
            });
            canvas.remove();
        });
    })

        $(function() {
            $('[data-tabsheader="tabsheader"]').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('[data-tabswrapper="tabswrapper"]').find('[data-tabscontent]').removeClass('active').eq($(this).index()).addClass('active');
            });
        });



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
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map