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
    
    function setDatepicker(obj){
        $.datepicker.setDefaults({
            dateFormat: "mm-dd-yy", // 날짜표기 형식 : yy년mm월dd일
            // yearSuffix: "년",
            changeYear: true, // 콤보박스에서 년 선택 가능
            changeMonth: true, // 콤보박스에서 월 선택 가능 
            nextText: 'Next Month',
            prevText: 'Prev Month',
            // dayNames: ['Monday', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
            dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            // monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            // monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            showMonthAfterYear: true,// 상단 년, 월 설정
            // minDate: '-0d',// 이전 날짜들은 선택막기 
            altField: "#" + obj + "",
            duration: "fast", // 달력 나타나는 속도, "slow", "normal", "fast"
            // 하단 설정
            showButtonPanel: true, // 비활성화
            currentText: 'Today',
            closeText: 'Cancel',
            // 버튼 설정
            showOn: "button",	// both, button, textField
            buttonImage: "../assets/img/icon_calendar.svg",
            buttonImageOnly: false,
            buttonText: 'date select',
            onClose: function (selectedDate) {
                $("#" + obj + "").attr('value', selectedDate);
                $('.ui-datepicker-trigger').focus();
            }
        });
        $("#" + obj + "").datepicker().on('focus', function() {
            $('.ui-datepicker-year').attr('title', '년도 선택');
            $('.ui-datepicker-month').attr('title', '월 선택');
            $('.ui-datepicker').attr('tabindex', '0');
            $('.ui-datepicker').focus();
        });
    }
    setDatepicker('dp00');
    setDatepicker('dp01');
});
