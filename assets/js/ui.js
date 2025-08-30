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


    // 전체선택시 테두리 컬러 변경
    $("#checkuncheck_all").on("click", function(){
        // 클릭 되었을때
        if($("#checkuncheck_all").prop('checked')){
            $(".form-check.wrapchkedall").css("border-color","#E6007E")
        // 클릭 안 되었을때
        } else{
            $(".form-check.wrapchkedall").css("border-color","#E9EBF0")
        }
    });

    // 햄버그 메뉴 체크 overlay
    fn__overlayChk()
    function fn__overlayChk() {
        const target = $(".navbar-light .navbar-toggler");
        const obj = $('.overlay');
        target.on("click", function(){
            obj.toggle("active")
            const isExpanded = target.attr('aria-expanded') === 'true';
            target.attr('aria-expanded', !isExpanded);
            console.log("2222222222")
        })
    }
    

    // const button = document.querySelector('.navbar-light .navbar-toggler');
    // const content = document.getElementById('content-id');
    // const overlay = document.querySelector('.overlay');

    // button.addEventListener('click', () => {
    //   const isExpanded = button.getAttribute('aria-expanded') === 'true';
    //   button.setAttribute('aria-expanded', !isExpanded);
    //   console.log("11111111")
    //   overlay.classList.add(' active');
    //   // 필요한 경우 content 요소의 표시/숨김도 변경
    // });
});
