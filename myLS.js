function findMax(myArray) {

    var maxNumber = myArray[0];
    
    for (var i = 1; i < myArray.length; i++) { 
      var currentNumber = myArray[i]; 
      if(currentNumber > maxNumber) { 
        maxNumber = currentNumber
      }
    }
    return maxNumber;
}

function luckySevens() {
    
    var rollCount =0;
    var money = 0;
    var badRoll =0;
    var startingMoney = Number(document.getElementById("startingMoney").value);
    var money = startingMoney;
    var cashArray = [startingMoney];
    var wins = 4;
    var loss = 1;
    
    var rolls = 0;
    if (startingMoney <= 0 || isNaN(startingMoney)) {
        alert("You must enter a positive dollar amount above 0.")
        document.getElementById("startingMoney").focus();
    } else {

    do {
        rollCount++;
        die1 = Math.ceil(Math.random() * 6);
        die2 = Math.ceil(Math.random() * 6);
        roll = die1 + die2;

        if (roll == 7) {
            money = Number(money + 4);
            var winnings = Number(cashArray[cashArray.length - 1]);
            var newestWin = winnings + wins ;
            cashArray.push(newestWin);
        } else {
            money = Number(money - 1);
            badRoll++;
            var losses = Number(cashArray[cashArray.length - 1]);
            var newestLoss = losses - loss;
            cashArray.push(newestLoss);
            rollCount = rollCount++;
        } 
    } while (money > 0) 

    var max = 0;
     
    if (rolls < 1) {
        rolls = 0;
    }
    max = findMax(cashArray);
    rolls = cashArray.indexOf(max);
        
        document.getElementById("play").innerText = "Play Again?"
        document.getElementById("TableR").style.display = "block";
        document.getElementById("startingBet").innerText = ('$' + startingMoney + '.00');
        document.getElementById("ranOut").innerText = rollCount;
        document.getElementById("maxCash").innerText = ('$' + max + '.00');
        document.getElementById("amountOfRolls").innerText = rolls;
}
}
