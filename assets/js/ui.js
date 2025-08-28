$(function(){

    fn__topmenuover();
    function fn__topmenuover() {        
        let $target = $(".navbar-expand-lg .navbar-nav .nav-item");
        $target.each(function (idx) {
            $(this).on("mouseover", function() {
                $(".depth2area").addClass("active");
                $(this).addClass("active");
            });
            $(this).on("mouseleave", function() {
                $(".depth2area").removeClass("active");
                $(this).removeClass("active");
            });
        });
    }


});