// TABS
$(".bottom-line").css({
    width : $(".tab nav a").first().width() + 20 + "px" // 20 = element's padding * 2
});
var _current_index = 0;
$(".tab nav a").click(function(e){
    e.preventDefault();
    // tab navigation styles
    var _this = $(this);
    var _index = _this.index();
    if(_current_index !== _index){
        $(".tab nav a").each(function(){
            if($(this).hasClass("current")) $(this).removeClass("current");
        });
        _this.addClass("current");
        $(".bottom-line").css({
            left : _this.offset().left - _this.parent().offset().left + "px",
            width : _this.width() + 20 + "px" // 20 = element's padding * 2
        });

        // show tab content
        $(".tab_single.shown").fadeOut(200);
        setTimeout(function(){
            $(".tab_single").eq(_index).fadeIn(200);
            $(".tab_single").eq(_index).addClass("shown");
        },200);

        _current_index = _index;
    }
});