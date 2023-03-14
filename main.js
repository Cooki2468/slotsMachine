let balance = 100;
let betValue = 0;
let spinValues = [];
let betSelected = false;
document.getElementById("balance").innerHTML = `${balance} $`;

document.getElementById("bet-1").onclick = function(){
    betSelected = true;
    betValue = document.getElementById("bet-1").innerText;
    document.getElementById("balance").innerHTML = `${balance} $ (-${betValue})`;
}

document.getElementById("bet-2").onclick = function(){
    betSelected = true;
    betValue = document.getElementById("bet-2").innerText;
    document.getElementById("balance").innerHTML = `${balance} $ (-${betValue})`;
}

document.getElementById("bet-3").onclick = function(){
    betSelected = true;
    betValue = document.getElementById("bet-3").innerText;
    document.getElementById("balance").innerHTML = `${balance} $ (-${betValue})`;
}

document.getElementById("spin").onclick = function(){
    if(betValue > balance){
        alert("You have insufficient funds for this bet!");
    }
    if(betSelected){
        balance -= betValue;
        betSelected = false;
        document.getElementById("balance").innerHTML = `${balance} $`;
        spinValues.length = 0;
        for(let i = 0; i < 3; i++){
            spinValues.push(Math.floor(Math.random() * 3));
            document.getElementById(`slot-${i+1}`).innerHTML = `${spinValues[i]}`;
        }
    }
    
}