$(function(){

    // Wireless Internet PC GNB 2depth
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


    // 전체선택시 테두리 컬러 변경
    fn__chkallbordercolor();
    function fn__chkallbordercolor(){
        $("#checkuncheck_all").on("click", function(){
            // 클릭 되었을때
            if($("#checkuncheck_all").prop('checked')){
                $(".form-check.wrapchkedall").css("border-color","#E6007E")
            // 클릭 안 되었을때
            } else{
                $(".form-check.wrapchkedall").css("border-color","#E9EBF0")
            }
        });
    }

    // 햄버그 메뉴 체크 overlay
    fn__overlayChk()
    function fn__overlayChk() {
        const target = $(".navbar-light .navbar-toggler");
        const obj = $('.overlay');
        const obj2 = $('.overlaybox');
        target.on("click", function(){
            obj.toggle("active");
            obj2.toggle("active");
            $(".wireless-sections").toggleClass("active")
        })
    }

    // 햄버그 메뉴 overlay click시 사라짐
    fn__overlayremove()
    function fn__overlayremove() {
        const target = $(".overlay");
        const obj2 = $('.overlaybox');
        target.on("click", function(){
            $(this).css("display","none");
            obj2.css("display","none");
            $(".wireless-sections").removeClass("active")
        });
    }

    // map 선택시 active
    fn__mapactive();
    function fn__mapactive() {
        const target = $(".list_dot>li p");
        target.on("click", function(){
            target.removeClass("active");
            $(this).addClass("active");
        });
    }

    // select active
    fn__selectchk();
    function fn__selectchk(){
        const target = $(".selectstyle .optitem");
        target.on("click", function(){
            console.log("111")
            target.removeClass("active");
            $(this).addClass("active");
        });
    }
    
});
