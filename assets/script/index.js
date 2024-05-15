$(function() {
	var marquee = $("#marquee"); 
	marquee.css({"overflow": "hidden", "width": "100%"});
	// оболочка для текста ввиде span (IE не любит дивы с inline-block)
	marquee.wrapInner("<span>");
	marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align":"center" }); 
	marquee.append(marquee.find("span").clone()); // тут у нас два span с текстом
	marquee.wrapInner("<div>");
	marquee.find("div").css("width", "200%");
	var reset = function() {
		$(this).css("margin-left", "0%");
		$(this).animate({ "margin-left": "-100%" }, 30000, 'linear', reset);
	};
	reset.call(marquee.find("div"));
});

$(function() {
    var marquee = $("#marquee1");
    var contentWidth = marquee.find("div").width();
    
    marquee.wrapInner("<div class='marquee-inner'>");
    marquee.find(".marquee-inner").css({
        "width": "200%", 
        "margin-left": "-100%" 
    });
    
    var reset = function() {
        $(this).css("margin-left", "-100%");
        $(this).animate({ "margin-left": "0%" }, 30000, 'linear', reset);
    };
    
    reset.call(marquee.find(".marquee-inner"));
});
