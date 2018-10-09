const prompt = require('prompt-sync')();
const fs = require('fs');
var data = Buffer.from('Document Result');
var file = 'docResult.txt';
let sum = 0;




var test = prompt('How many more times? ');
var points = [];
var questions = [
    '2х + 3 = 7х + 5 - 3х - 12: x-? ',
    '3,2x - 1,5 = 1,7x: x-? ',
    '3.1 - (0,9x - 1,3) = 1,3x: x-? ',
    'x + y = 5 , y - x = 3: x-? ',
    'x * y = 125 , y - x = -20: x-? ',
    'x / y = 25 , y + x = 104: x-? ',
    '|x| * y = 25 , y = x : x-? ',
    '|x| * y = 25 , y + x = 0 : x-? ',
    'sin(x) = 1 : x-? ',
    'cos(x) = 1/2 : x-? ',
    'tg(x) = -1 : x-? ',
];
var answers = [
    ['A: 4 ','B: 5 ','C: 1 ','D: 7 ',1],
    ['A: 1 ','B: 2 ','C: 3 ','D: 4 ',0],
    ['A: 4 ','B: 0 ','C: 1 ','D: 2 ',3],
    ['A: 1 ','B: 3 ','C: 4 ','D: 2 ',0],
    ['A: 5 ','B: -25 ','C: 25 ','D: -5 ',2],
    ['A: 30 ','B: 4 ','C: 100 ','D: 25 ',2],
    ['A: -1 ','B: 1 ','C: -5 ','D: 5 ',3],
    ['A: -1 ','B: -5 ','C: 1 ','D: 5 ',1],
    ['A: 0drg ','B: 90drg ','C: 45drg ','D: 180drg ',1],
    ['A: 60drg ','B: 0drg ','C: 90drg ','D: 45drg ',0],
    ['A: 180drg ','B: 0drg','C: 135drg ','D: 90drg ',2]
];

if(test < 18){
    console.log(777);
}else {
    for (let i = 0; i < questions.length; i++) {
        var str = questions[i] + answers[i][0] + answers[i][1] + answers[i][2] + answers[i][3];
        var correctAnswerIndex = answers[i][4];
        test = prompt(str);

        if (test.toUpperCase() === answers[i][correctAnswerIndex].substr(0,1)) {
            points.push(true);
        }else {
            points.push(false);
        }

        data += "\n" + Buffer.from(questions[i] + " - " + test.toUpperCase() + ": " + points[points.length - 1]);
    }

    console.log(points);
}

for (let i = 0; i < points.length; i++) {
     if (points[i]){
         sum++;
     }
}

data += "\n " + Buffer.from("your point = "  + sum);

fs.writeFile(file, data, (err) => {
    if (err) throw err;

    console.log(data.toString());
});