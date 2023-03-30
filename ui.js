function girarDado(posicao, numero){
  const dice = {
      sides: numero,
      roll: function(){
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber
      }
  }

  function printDice(dice) {
    var placeholder = document.getElementsByClassName('placeholder')[posicao]
    placeholder.innerHTML = dice
  }

  var button = document.getElementsByClassName('button')[posicao]
  button.onclick = function(){
    var result = dice.roll()
    printDice(result)
  }
}