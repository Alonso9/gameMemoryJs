let user = prompt("Type ypur name: ");
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let uncoveredCards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let moves = 0;
let hits= 0;
let timer = false;
let time = 30;
let timeDown = null;
// Use html element
let showMoves = document.getElementById('moves');
let showHits = document.getElementById('hits');
let showTime = document.getElementById('t-time');

numbers = numbers.sort(()=>{return Math.random()-0.5});

console.log(numbers);

function disabledCard(){
    for (let index = 0; index <=15; index++) {
        let blockCard = document.getElementById(index);
        blockCard.innerHTML = numbers[index];
        blockCard.disabled = true;
    }
}

function timeUp(){
    timeDown = setInterval(()=>{
        time--;
        showTime.innerHTML = `Time: ${time} seconds`;
        if(time == 0 ){
            clearInterval(timeDown);
            disabledCard();
            setTimeout(()=>{
                alert('Luck for the next time ' + user + ', do not give up try again!!')
            },000)
        }
    },1000)
}

// Main fuction
function show(id){
    if(timer == false){
        timeUp();
        timer = true;
    }
    uncoveredCards++;
    console.log(uncoveredCards + " - " + id);

    if(uncoveredCards == 1){
        // Show firts number
        card1 = document.getElementById(id);
        firstResult = numbers[id];
        card1.innerHTML = firstResult;

        // Disable the firts button
        card1.disabled = true;
    }else if(uncoveredCards == 2){
        // Show second card
        card2 = document.getElementById(id); 
        secondResult = numbers[id];
        card2.innerHTML = secondResult;

        //Disable the second button
        card2.disabled = true;

        // Increase moves
        moves++;
        showMoves.innerHTML = `Moves: ${moves}`;

        if(firstResult == secondResult){
            uncoveredCards = 0;
            
            hits++;
            showHits.innerHTML = `Hits: ${hits}`;

            if(hits == 8){
                showHits.innerHTML = `Hits: ${hits} 🥳🥳`;
                showMoves.innerHTML = `Moves: ${moves} 😎😎`;
                setTimeout(()=>{
                    alert('Congrulations ' + user + ', you completed the game')
                },1000)
                
            }
        }else{
            //show results and hide them
            setTimeout(()=>{
                card1.innerHTML = ` `;
                card2.innerHTML = ` `;
                card1.disabled = false;
                card2.disabled = false;
                uncoveredCards = 0;
            },1400)
        }
    }
}











