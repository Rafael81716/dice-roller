// d4
  function printNumber(number) {
    var placeholder = document.getElementsByClassName('placeholder')[0];
    placeholder.innerHTML = number;
  }
  
  var button = document.getElementsByClassName('button')[0];
  button.onclick = function() {
    var result = dices.d4.roll();
    printNumber(result);
  };


//d6
  function printNumber1(number) {
    var placeholder = document.getElementsByClassName('placeholder')[1];
    placeholder.innerHTML = number;
  }
  
  var button = document.getElementsByClassName('button')[1];
  button.onclick = function() {
    var result = dices.d6.roll();
    printNumber1(result);
  };


//d8
function printNumber2(number) {
  var placeholder = document.getElementsByClassName('placeholder')[2];
  placeholder.innerHTML = number;
}

var button = document.getElementsByClassName('button')[2];
button.onclick = function() {
  var result = dices.d8.roll();
  printNumber2(result);
};

//d10

function printNumber3(number) {
  var placeholder = document.getElementsByClassName('placeholder')[3];
  placeholder.innerHTML = number;
}

var button = document.getElementsByClassName('button')[3];
button.onclick = function() {
  var result = dices.d10.roll();
  printNumber3(result);
};

//d12

function printNumber4(number) {
  var placeholder = document.getElementsByClassName('placeholder')[4];
  placeholder.innerHTML = number;
}

var button = document.getElementsByClassName('button')[4];
button.onclick = function() {
  var result = dices.d12.roll();
  printNumber4(result);
};

//d12
function printNumber5(number) {
  var placeholder = document.getElementsByClassName('placeholder')[5];
  placeholder.innerHTML = number;
}

var button = document.getElementsByClassName('button')[5];
button.onclick = function() {
  var result = dices.d100.roll();
  printNumber5(result);
};

const dices = {
  d4: {
    sides: 4,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  },
  d6: {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  },
  d8: {
    sides: 8,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  },
  d10: {
    sides: 10,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  },
  d12: {
    sides: 12,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  },
  d100: {
    sides: 100,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  },
}