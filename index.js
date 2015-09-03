var prompt = require('prompt-sync').prompt;


// console.log('what is your name Player 1?');
// var player1 = prompt();


// console.log('what is your name Player 2?');
// var player2 = prompt();

// console.log(player1+' vs '+player2);

var board=[
	[' ', ' ', ' '],
	[' ', ' ', ' '], 
	[' ', ' ', ' ']

];
// var finished = 
// // (board[0].join('')=== 'xxx') || (board[0].join('')=== 'ooo');
// // (board[1].join('')=== 'xxx') || (board[1].join('')=== 'ooo');
// // (board[2].join('')=== 'xxx') || (board[2].join('')=== 'ooo');
// (board[0][0]==='x' && board[1][1]==='x' && board[2][2]==='x') || (board[0][0]==='o' && board[1][1]==='o' && board[2][2]==='o');
// (board[0][2]==='x' && board[1][1]==='x' && board[2][0]==='x') || (board[0][2]==='o' && board[1][1]==='o' && board[2][0]==='o');




console.log('     1        2        3      ');
console.log(' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('1|'   	+board[0][0]+   ' 	| 	'  	 +board[0][1]+ 	' 	| 	'  	+board[0][2]+ 	' 	|');
console.log(' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('2|'    +board[1][0]+    ' 	| 	'    +board[1][1]+   ' 	| 	'   +board[1][2]+   ' 	|');
console.log(' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('3|'    +board[2][0]+    ' 	| 	'    +board[2][1]+   ' 	| 	'  +board[2][2]+   ' 	|');
console.log(' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// console.log();

do {
do {
	console.log('what are your coordinates?');
	p1 = prompt();
	var p1Answer = p1.split(' ');
	var x =parseInt(p1Answer[0])-1;
	var y =parseInt(p1Answer[1])-1;
} while (board[y][x] ==='x' || board[y][x] ==='o');

board[y][x]='x';

console.log('     1        2        3      ');
console.log(' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('1|'   	+board[0][0]+   ' 	| 	'  	 +board[0][1]+ 	' 	| 	'  	+board[0][2]+ 	' 	|');
console.log(' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('2|'    +board[1][0]+    ' 	| 	'    +board[1][1]+   ' 	| 	'   +board[1][2]+   ' 	|');
console.log(' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('3|'    +board[2][0]+    ' 	| 	'    +board[2][1]+   ' 	| 	'  +board[2][2]+   ' 	|');
console.log(' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');


do {
	console.log('what are your coordinates?');
	p2 = prompt();
	var p2Answer = p2.split(' ');
	var x =parseInt(p2Answer[0])-1;
	var y =parseInt(p2Answer[1])-1;
} while (board[y][x] ==='x' || board[y][x] ==='o');

board[y][x]='o';

console.log('     1        2        3      ');
console.log(' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('1|'   	+board[0][0]+   ' 	| 	'  	 +board[0][1]+ 	' 	| 	'  	+board[0][2]+ 	' 	|');
console.log(' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('2|'    +board[1][0]+    ' 	| 	'    +board[1][1]+   ' 	| 	'   +board[1][2]+   ' 	|');
console.log(' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('3|'    +board[2][0]+    ' 	| 	'    +board[2][1]+   ' 	| 	'  +board[2][2]+   ' 	|');
console.log(' ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

var finished= 
(board[0].join('')=== 'xxx') || (board[0].join('')=== 'ooo');
(board[1].join('')=== 'xxx') || (board[1].join('')=== 'ooo');
(board[2].join('')=== 'xxx') || (board[2].join('')=== 'ooo');
(board[0][0]==='x' && board[1][1]==='x' && board[2][2]==='x') || (board[0][0]==='o' && board[1][1]==='o' && board[2][2]==='o');
(board[0][2]==='x' && board[1][1]==='x' && board[2][0]==='x') || (board[0][2]==='o' && board[1][1]==='o' && board[2][0]==='o');
} while (finished === false);

if(finished === true){
	console.log('congratulations! you won!');
}else{
	console.log('cats game!');
}
