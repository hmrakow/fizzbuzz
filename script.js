// JavaScript Document

prompt("Enter in a value from 1 to 100");

for (var i = 1; i < 101; i++) {
	if (i%3  === 0 ){ 
		if (i%15 === 0){
		console.log('fizzbuzz');
		}
		else{
			console.log('fizz');
			}
	}
	else if (i%5 === 0){ 
	console.log('buzz');
	}
	else{
		console.log(i);
		}
}
