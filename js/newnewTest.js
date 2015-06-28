$(document).ready(function() {
	$(".stage").click(function() {
		console.log("stageClick called");
		// console.log(this);
		// console.log($(this).children());
		// console.log($($(this).children().find(":visible")[0]));
		// console.log($($(this).children().find(":visible")[0]).parent($(".stage")));
		// console.log($($(this).children().find(":visible")[0]).parent($(".stage")).siblings());
		/* Get the visible stage we just clicked. */

		/* If user is selecting text, I don't want to jump to the next stage. */
		if (!getSelection().toString()) {
			var elem = $($($(this).children(":visible")[0]));
			// console.log(elem);

			/* If there's other stuff to even show, hide the current visible one */
			if(elem.siblings().length != 0) {
				elem.hide();
			}

			if(elem.next().length == 0) { /* At the last stage-n. Loop back to front */
				$(elem.siblings()[0]).show();
			} else {
				$(elem.next()).show();
			}
		}


	});
});

