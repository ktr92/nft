function initFE() {
   
}

function resizepage() {
    console.log(1)
    var $el = $(".container");
    var elHeight = $el.outerHeight();
    var elWidth = $el.outerWidth();

    var $wrapper = $(".resizable");

    $wrapper.resizable({
        resize: doResize
    });

    function doResize(event, ui) {
    
    var scale, origin;
        
    scale = Math.min(
        ui.size.width / elWidth,    
        ui.size.height / elHeight
    );

    console.log(scale)
    
    $el.css({
        transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
    });
    
    }

    var starterData = { 
    size: {
        width: $wrapper.width(),
        height: $wrapper.height()
    }
    }
    doResize(null, starterData);
   
}


$(document).ready(function() {
});

window.addEventListener('load', function () {
    initFE()
});