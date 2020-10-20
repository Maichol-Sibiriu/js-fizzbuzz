// stampa numeri da 1 a 100
var list = [];

for (var i = 0; i < 100; i++) {
   var number = (i + 1);
   list.push(number);

  if ((number % 3 == 0) || (number % 5 == 0)) {
     if ((number % 3 == 0) && (number % 5 !== 0)) {
         list.push(number);
         console.log("fizz");
     }
     else if ((number % 3 !== 0) && (number % 5 == 0)) {
         list.push(number);
         console.log("bazz");
     }
     else {
       list.push(number);
       console.log("fizzbazz");
     }
  }
  else {
    console.log(number);
  }

}
