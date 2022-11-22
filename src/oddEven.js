function generateNumber() {
  // generate a random integer(hint : Math.random)
  let max = 9,min =1;
  let number = Math.random()*(max-min) +max;
  document.getElementById('number').innerHTML = number
  checkOddEven(number);
}

function checkOddEven(num) {
  // logic for even / odd
  let Numb = Number(num);
  if(Numb %2 == 0){
    return document.querySelector("#odd-even").textContent = "The number is even";

  }
  else{
    return document.querySelector("#odd-even").textContent = "The number is odd"
  }
}

window.onload = function () {
  // add event listeners to the button here
  document.getElementById("generate-number").addEventListener("click", generateNumber);
  generateNumber();
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
