var prompt = require('prompt-sync').prompt;

console.log("Would you like to play a game? Y or N");
var playAGame = prompt().toUpperCase();
if (playAGame === 'N'){
	console.log("too bad, you're playing");
}
console.log('what is your name Player 1?');
var player1 = prompt();
var plays = 0;
console.log('what is your name Player 2?');
var player2 = prompt();
console.log();
console.log(player1+' vs '+player2);
console.log();
var board=[
	[' ', ' ', ' '],
	[' ', ' ', ' '], 
	[' ', ' ', ' ']

];

var finished = 
(board[0][0]==='x' && board[0][1]==='x' && board[0][2]==='x')||(board[0][0]==='o' && board[0][1]==='o' && board[0][2]==='o')
 || (board[1][0]==='x' && board[1][1]==='x' && board[1][2]==='x')||(board[1][0]==='o' && board[1][1]==='o' && board[1][2]==='o')
 || (board[2][0]==='x' && board[2][1]==='x' && board[2][2]==='x')||(board[2][0]==='o' && board[2][1]==='o' && board[2][2]==='o')
 || (board[0][0]==='x' && board[1][0]==='x' && board[2][0]==='x')||(board[0][0]==='o' && board[1][0]==='o' && board[2][0]==='o')
 || (board[0][1]==='x' && board[1][1]==='x' && board[2][1]==='x')||(board[0][1]==='o' && board[1][1]==='o' && board[2][1]==='o')
 || (board[0][2]==='x' && board[1][2]==='x' && board[2][2]==='x')||(board[0][2]==='o' && board[1][2]==='o' && board[2][2]==='o')
 || (board[0][0]==='x' && board[1][1]==='x' && board[2][2]==='x')||(board[0][0]==='o' && board[1][1]==='o' && board[2][2]==='o')
 || (board[0][2]==='x' && board[1][1]==='x' && board[2][0]==='x')||(board[0][2]==='o' && board[1][1]==='o' && board[2][0]==='o');



		console.log('      1       2       3      ');
		console.log(' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
		console.log('1|     '   	+board[0][0]+   '  |   '  	 +board[0][1]+ 	'   | '  	+board[0][2]);
		console.log('    -----------------------');
		console.log('2|     '   	+board[1][0]+   '  |   '  	 +board[1][1]+ 	'   | '  	+board[1][2]);
		console.log('    -----------------------');
		console.log('3|     '   	+board[2][0]+   '  |   '  	 +board[2][1]+ 	'   | '  	+board[2][2]);
		

console.log();

do {
do {

		do{
		console.log(player1+ ' what are your coordinates?');
		p1 = prompt();
		if (p1 === 'forfiet'){
			console.log(player2+ ' wins!');
			return;

		} 
		
		var cords = p1.length;
		var isCorrectLength = (cords === 3);
		var p1Answer = p1.split(' ');
		var x =parseInt(p1Answer[0])-1;
		var y =parseInt(p1Answer[1])-1;
		var incorrectEntry = (p1Answer[0] <1 || p1Answer[0]>3 || p1Answer[1] <1 || p1Answer[1]>3);
		var isNotNumber = (isNaN(x) || isNaN(y));
		if (!isNotNumber && !incorrectEntry){
		var spotTaken= (board[y][x] ==='x' || board[y][x] ==='o');
		
		}

	}while(!isCorrectLength || spotTaken || incorrectEntry || isNotNumber);
		
	
	plays = plays+1;

	board[y][x]='x';
		finished = 
	(board[0][0]==='x' && board[0][1]==='x' && board[0][2]==='x')||(board[0][0]==='o' && board[0][1]==='o' && board[0][2]==='o')
 || (board[1][0]==='x' && board[1][1]==='x' && board[1][2]==='x')||(board[1][0]==='o' && board[1][1]==='o' && board[1][2]==='o')
 || (board[2][0]==='x' && board[2][1]==='x' && board[2][2]==='x')||(board[2][0]==='o' && board[2][1]==='o' && board[2][2]==='o')
 || (board[0][0]==='x' && board[1][0]==='x' && board[2][0]==='x')||(board[0][0]==='o' && board[1][0]==='o' && board[2][0]==='o')
 || (board[0][1]==='x' && board[1][1]==='x' && board[2][1]==='x')||(board[0][1]==='o' && board[1][1]==='o' && board[2][1]==='o')
 || (board[0][2]==='x' && board[1][2]==='x' && board[2][2]==='x')||(board[0][2]==='o' && board[1][2]==='o' && board[2][2]==='o')
 || (board[0][0]==='x' && board[1][1]==='x' && board[2][2]==='x')||(board[0][0]==='o' && board[1][1]==='o' && board[2][2]==='o')
 || (board[0][2]==='x' && board[1][1]==='x' && board[2][0]==='x')||(board[0][2]==='o' && board[1][1]==='o' && board[2][0]==='o');


		console.log('      1       2       3      ');
		console.log(' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
		console.log('1|     '   	+board[0][0]+   '  |   '  	 +board[0][1]+ 	'   | '  	+board[0][2]);
		console.log('    -----------------------');
		console.log('2|     '   	+board[1][0]+   '  |   '  	 +board[1][1]+ 	'   | '  	+board[1][2]);
		console.log('    -----------------------');
		console.log('3|     '   	+board[2][0]+   '  |   '  	 +board[2][1]+ 	'   | '  	+board[2][2]);
		


		if (finished === false && plays < 9){
			do{
		console.log(player2+ ' what are your coordinates?');
				p2 = prompt();
				if (p1 === 'forfiet'){
					console.log(player2+ ' wins!');
					return;

				} 

				var cords = p2.length;
				var isCorrectLength = (cords === 3);
				var p2Answer = p2.split(' ');
				var x =parseInt(p2Answer[0])-1;
				var y =parseInt(p2Answer[1])-1;
				var incorrectEntry = (p2Answer[0] <1 || p2Answer[0]>3 || p2Answer[1] <1 || p2Answer[1]>3);
				var isNotNumber = (isNaN(x) || isNaN(y));
				if (!isNotNumber){
				var spotTaken= (board[y][x] ==='x' || board[y][x] ==='o');
				
				}
	
	}while(!isCorrectLength || spotTaken || incorrectEntry || isNotNumber);
		plays = plays+1;
		board[y][x]='o';

		console.log('      1       2       3      ');
		console.log(' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
		console.log('1|     '   	+board[0][0]+   '  |   '  	 +board[0][1]+ 	'   | '  	+board[0][2]);
		console.log('    -----------------------');
		console.log('2|     '   	+board[1][0]+   '  |   '  	 +board[1][1]+ 	'   | '  	+board[1][2]);
		console.log('    -----------------------');
		console.log('3|     '   	+board[2][0]+   '  |   '  	 +board[2][1]+ 	'   | '  	+board[2][2]);
		

	}

	finished = 
	(board[0][0]==='x' && board[0][1]==='x' && board[0][2]==='x')||(board[0][0]==='o' && board[0][1]==='o' && board[0][2]==='o')
 || (board[1][0]==='x' && board[1][1]==='x' && board[1][2]==='x')||(board[1][0]==='o' && board[1][1]==='o' && board[1][2]==='o')
 || (board[2][0]==='x' && board[2][1]==='x' && board[2][2]==='x')||(board[2][0]==='o' && board[2][1]==='o' && board[2][2]==='o')
 || (board[0][0]==='x' && board[1][0]==='x' && board[2][0]==='x')||(board[0][0]==='o' && board[1][0]==='o' && board[2][0]==='o')
 || (board[0][1]==='x' && board[1][1]==='x' && board[2][1]==='x')||(board[0][1]==='o' && board[1][1]==='o' && board[2][1]==='o')
 || (board[0][2]==='x' && board[1][2]==='x' && board[2][2]==='x')||(board[0][2]==='o' && board[1][2]==='o' && board[2][2]==='o')
 || (board[0][0]==='x' && board[1][1]==='x' && board[2][2]==='x')||(board[0][0]==='o' && board[1][1]==='o' && board[2][2]==='o')
 || (board[0][2]==='x' && board[1][1]==='x' && board[2][0]==='x')||(board[0][2]==='o' && board[1][1]==='o' && board[2][0]==='o');

} while (finished === false && plays < 9);

if (plays === 9){
	console.log('cats game!');
} else if((board[0][0]==='x' && board[0][1]==='x' && board[0][2]==='x')|| (board[1][0]==='x' && board[1][1]==='x' && board[1][2]==='x') || (board[2][0]==='x' && board[2][1]==='x' && board[2][2]==='x') || (board[0][0]==='x' && board[1][0]==='x' && board[2][0]==='x') || (board[0][1]==='x' && board[1][1]==='x' && board[2][1]==='x') || (board[0][2]==='x' && board[1][2]==='x' && board[2][2]==='x') || (board[0][0]==='x' && board[1][1]==='x' && board[2][2]==='x') || (board[0][2]==='x' && board[1][1]==='x' && board[2][0]==='x')) {
	console.log(player1+ ' wins!');
} else{
	console.log(player2+ ' wins!');
}
console.log('do you want to play again? (y/n)');
var ready=prompt();

var board=[
	[' ', ' ', ' '],
	[' ', ' ', ' '], 
	[' ', ' ', ' ']

];
plays = 0;



}while(ready !== 'n');


console.log('thanks for playing!');
console.log('bye felicia!')

