// d4

var dice = {
    sides: 4,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
  }
  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };


//d6

  var dice1 = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  //Prints dice roll to the page
  
  function printNumber1(number) {
    var placeholder = document.getElementById('placeholder-1');
    placeholder.innerHTML = number;
  }
  
  var button = document.getElementById('button-1');
  
  button.onclick = function() {
    var result = dice1.roll();
    printNumber1(result);
  };


//d8
var dice2 = {
  sides: 8,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//Prints dice roll to the page

function printNumber2(number) {
  var placeholder = document.getElementById('placeholder-2');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button-2');

button.onclick = function() {
  var result = dice2.roll();
  printNumber2(result);
};

//d10
var dice3 = {
  sides: 10,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//Prints dice roll to the page

function printNumber3(number) {
  var placeholder = document.getElementById('placeholder-3');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button-3');

button.onclick = function() {
  var result = dice3.roll();
  printNumber3(result);
};

//d12
var dice4 = {
  sides: 12,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//Prints dice roll to the page

function printNumber4(number) {
  var placeholder = document.getElementById('placeholder-4');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button-4');

button.onclick = function() {
  var result = dice4.roll();
  printNumber4(result);
};

//d12
var dice5 = {
  sides: 100,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

//Prints dice roll to the page

function printNumber5(number) {
  var placeholder = document.getElementById('placeholder-5');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button-5');

button.onclick = function() {
  var result = dice5.roll();
  printNumber5(result);
};