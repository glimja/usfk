$(function(){

    // wireless PC GNB 2depth
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



    $("#checkuncheck_all").on('click', function(){
        // 클릭 되었을때
        if($("#checkuncheck_all").prop('checked')){
            $(".form-check.wrapchkedall").css("border-color","#E6007E")
        // 클릭 안 되었을때
        } else{
            $(".form-check.wrapchkedall").css("border-color","#E9EBF0")
        }
    });
});