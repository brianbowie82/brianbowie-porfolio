// exercise 1
var n = 1;
var outputTarget = document.querySelector("#loop-exercise1");
var outputHtml = "<p>Exercise 1:</p><ul>"

while (n <= 10){
    console.log(n);
    outputHtml += "<li>" + n + "</li>";
    n++
}

outputHtml += "</ul>";

outputTarget.innerHTML = outputHtml;



// exercise 2

var p = 2
outputTarget = document.querySelector('#loop-exercise2')
outputHtml = "<p>Exercise 2:</p><ul>"

while (p <= 20) {
    console.log(p)
outputHtml += "<li>" + p + "</li>"
    p += 2;
}
outputHtml += "</ul>";

outputTarget.innerHTML = outputHtml;




// exercise 3
var q = 100;
var i = 1;
var sum = 0;

var outputTarget = document.querySelector("#loop-exercise3");
var outputHtml = "<p>Exercise 3:</p><ul>"

while (i < q) {
  sum +=i;
   console.log(sum);
   outputHtml += "<li>" + sum + "</li>"
   i++; }


outputHtml += "</ul>";

outputTarget.innerHTML = outputHtml;

// exercise-5
var m = 15;
var outputTarget = document.querySelector("#loop-exercise5");
var outputHtml = "<p>Exercise 5:</p><ul>"

while (m > 0)
{ console.log(m);
  if (m % 2 === 0)
  { outputHtml +=  "<li>" + m + "even</li>";
} else {
  outputHtml += "<li>" + m + "odd</li>";

}
m--;

  }

outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml


var n = 1;
var outputTarget = document.querySelector("#loop-exercise6");
var outputHtml = "<p>Exercise 6:</p><ul>"

while (n <= 100) {
    if(n % 3 === 0 && n % 5 == 0){
        console.log("FizzBuzz");
        outputHtml += "<li>FizzBuzz</li>";
    } else if (n % 3 === 0) {
        console.log("Fizz");
        outputHtml += "<li>Fizz</li>";
    } else if (n % 5 === 0) {
        console.log("Buzz");
        outputHtml += "<li>Buzz</li>";
    } else {
        console.log(n);
        outputHtml += "<li>" + n + "</li>";
    }

    n++;
}

outputHtml += "</ul>";

outputTarget.innerHTML = outputHtml;
