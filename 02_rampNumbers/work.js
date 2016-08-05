var input = prompt("Input #")

digits = input.length

var   counter = 0
var   a = input(counter);
var   b = input(counter++);

while (b<=digits) {
  if ((a + 1 === b)||(b + 1 === a)) {
      counter++;
        if (b===digits) {
          console.log(true);
          break;
        } else {
          continue;
        }
  } else {
    console.log(false);
    break;
  }
}
