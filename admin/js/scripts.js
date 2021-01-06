tinymce.init({selector:'textarea'});

$(document).ready(function() {

$('#selectAllBoxes').click(function(event){

	if(this.checked){
		$('.checkBoxes').each(function(){
			this.checked = true;
		});

	}else{
		$('.checkBoxes').each(function(){
			this.checked = false;
		});

	}
});

// $("body").prepend('Hello');
var div_box = "<div id='load-screen'><div id='loading'></div></div>";
$("body").prepend(div_box);
$('#load-screen').delay(700).fadeOut(600, function(){
	$(this).remove();
});
	
});


function loadUsersOline(){
	$.get("function.php?onlineusers=result", function(data){

		$(".usersonline").text(data);
	});
}

setInterval(function(){

	loadUsersOline();
},500);









