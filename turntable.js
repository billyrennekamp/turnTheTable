
if (!($ = window.jQuery)) { 
	script = document.createElement( 'script' );
	script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
	script.onload=turnTheTable;
	document.body.appendChild(script);
}
else {
	turnTheTable();
}

function turnTheTable() {
	
	$("#turntable").children(":first-child").children(":nth-child(2)").children().each(function(i){
		switch(i){
			case 0:
				//background
				$(this).attr("src", "http://billyrennekamp.com/turntable/new/wallpaper.png");
			break;
			case 1:
				//floor
				$(this).attr("src", "http://billyrennekamp.com/turntable/new/floor.png");
			break;
			case 2:
				//table
				$(this).attr("src", "http://billyrennekamp.com/turntable/new/dj_table.png");
			break;
			case 3:
				//gauge
				$(this).attr("src", "http://billyrennekamp.com/turntable/new/gauge.png");
			break;
		}

	})

	//song board
	$("#songboard").css("font-family", "Arial Black").css("color", "black");
	$("#songboard_artist").css("text-shadow", "none").css("font-size", "30px");
	$("#songboard_title").css("text-shadow", "none");

	//buttons
	$(".mv_container").prev().prev().each(function(i){
		if(i == 0){
			$(this).css("background", "url('http://billyrennekamp.com/turntable/new/yes.png') 0 0 no-repeat");
		}
		else{
			$(this).css("background", "url('http://billyrennekamp.com/turntable/new/no.png') 0 0 no-repeat");
		}
	});

	//left speaker
	$("#left_speaker").css("background", "url('http://billyrennekamp.com/turntable/new/left_speaker.png') 0 0 no-repeat");

	//right speaker
	$("#right_speaker").css("background", "url('http://billyrennekamp.com/turntable/new/right_speaker.png') 0 0 no-repeat");

	//needle
	$("#meterNeedle").children(":first-child").children(":first-child").attr("src", "http://billyrennekamp.com/turntable/new/needle.png")

}
