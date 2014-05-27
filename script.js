// JavaScript Document

function fizzBuzzInput() {
   var inputArea = document.getElementById("fizzBuzzInput");
   alert("working");
   
   for (var i = 1; i <= 100; i++) {
	if (i%3  === 0 ){ 
		if (i%15 === 0){
			$(".answerArea").append("<p>fizz buzz</p>");
			}
		else{
			$(".answerArea").append("<p>fizz</p>");
			}
	}
	else if (i%5 === 0){ 
		$(".answerArea").append("<p>buzz</p>");
		}
	else{
		$(".answerArea").append("<p>" + i + "</p>");
		}
}

};

