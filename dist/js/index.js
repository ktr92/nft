function initFE(){closeByClickOutside('[data-toggle="accountmenu"]','[data-toggleclick="accountmenu"]'),closeByClickOutside('[data-toggle="messageblock"]','[data-toggleclick="messageblock"]')}function closeByClickOutside(t,e){$(document).click((function(c){$(c.target).closest(`${t},${e}`).length||($(e).removeClass("active"),$(t).removeClass("active"))})),$(document).keyup((function(c){"Escape"===c.key&&($(e).removeClass("active"),$(t).removeClass("active"))}))}$(document).ready((function(){$("[data-toggleclick]").on("click",(function(t){t.preventDefault();let e=$(this).data("toggleclick");$(`[data-toggle=${e}]`).toggleClass("active")})),$("[data-scroll]").click((function(t){t.preventDefault();let e=$(this).data("scroll");$(this).siblings(`[data-scrollblock=${e}]`).animate({scrollLeft:"+=126px"})}))})),window.addEventListener("load",(function(){initFE()}));