$(document).ready(function() {
	$(".stage").click(function() {
		console.log("stageClick called");
		console.log(this);
		console.log($(":visible"));
		var elem = $(":visible");

			
		console.log(elem.parent().children("#stage-2"));

		if(elem.hasClass("stage-1")) {
			elem.css("display", "none");
			// $(elem.parent().children("#stage-2")[0])
			elem.addClass("stage-2");
		} else if(elem.hasClass("stage-2")) {
			elem.removeClass("stage-2");
			elem.addClass("stage-3");
		} else {
			elem.removeClass("stage-3");
			elem.addClass("stage-1");
		}


	});
});

