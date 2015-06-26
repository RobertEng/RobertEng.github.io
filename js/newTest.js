$(document).ready(function() {
	$(".stage").click(function() {
		console.log("stageClick called");
		console.log(this);
		console.log($(this).children()[0]);
		var elem = $($(this).children()[0]);

		if(elem.hasClass("stage-1")) {
			elem.removeClass("stage-1");
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

