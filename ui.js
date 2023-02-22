var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  
  
  //Prints dice roll to the page
  

  function printNumber(number) {
    var placeholder = document.querySelectorAll('.placeholder');
    placeholder.innerHTML = number;
  }
  
  var button = document.querySelectorAll('button');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };
  
  