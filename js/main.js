$(document).ready(function () {
    // CAROUSEL PAGINATION
    var $advertCarouselPagination = $(".rep-work-pagination");
    // END CAROUSEL PAGINATION

    //JCAROUSEL

    $('.jcarousel').jcarousel({
        wrap: 'circular'
    });

    $('.jcarousel-control-prev')
        .on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {

            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function (e) {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function () {

            $(this).removeClass('active');
        })
        .jcarouselPagination();

    var $carouselPaginationLink = $advertCarouselPagination.children("a");

    $carouselPaginationLink.on('click', function(e){
        e.preventDefault();
    });

    $("a.scrollto").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
        $(this).blur();
        return false;
    });

    // END JCAROUSEL

    var $modalLink = $(".modal-link");

    function modalWindow(button){

        this.button = button;
        var $dataAttr = this.button.attr("data-modal");
        var $modalWindow = $("#" + $dataAttr);
        var $modalWindowHeight = $modalWindow.height();
        var $modalMarginTop = $modalWindowHeight / 2;
        var $blackBg = $(".black-bg");

        this.button.on("click", function(e){
            e.preventDefault();
            $blackBg.addClass("visibility");
            $modalWindow.addClass("active");
            setTimeout(function(){
                $modalWindow.animate({'opacity': 1, 'top': 50 + "%", 'margin-top': -$modalMarginTop + "px"}, 200);
            }, 200);
        });
        $(".black-bg, .close-reveal-modal").on("click", function(e){
            e.preventDefault();
            $modalWindow.animate({'top': -$modalWindowHeight + "px", 'opacity': 0}, 400);
            setTimeout(function(){
                $modalWindow.removeClass("active");
            }, 500);
            setTimeout(function(){
                $blackBg.removeClass("visibility");
            }, 500);
        });
    }
    $modalLink.each(function(){
        new modalWindow($(this));
    });

    // END MODAL WINDOW

    //Lightbox
    var $NavLinks = $(".lb-nav a, .rep-clickable-link");
    $NavLinks.on("click", function(){
        var $lightBox = $("#lightbox"),
            $lbImage = $lightBox.find("img");
            $lbImage.load(function(){
                $lightBox.css({'margin-top': -($(this).height() / 2) + "px"});
            });
    });

});

