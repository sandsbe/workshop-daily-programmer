var countNumbers = prompt ("How many numbers do you want to check?")
var listNumbers = [];
var i = 0;
var evalNumbers = [];

while(i<countNumbers) {
  listNumbers[i] = prompt("Pick a number");
  i++;
}

function evalArray () {
  for (var x=0; x<(listNumbers.length-1); x++) {
    if (listNumbers[x]<listNumbers[x+1]) {
    evalNumbers[x]="up";
    } else if (listNumbers[x]>listNumbers[x+1]) {
    evalNumbers[x]="down";
    } else {
    evalNumbers[x]="even";
    };
  };
}

evalArray(listNumbers);

console.log(evalNumbers)
