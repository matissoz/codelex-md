type item = {
    id: number;
    img: string;
}

let items: item[] =[
        {id: 1,img:"./assets/images/twitter.svg"},
        {id: 2,img:"./assets/images/mailchimp.svg"},
        {id: 3,img:"./assets/images/evernote.svg"},
        {id: 4,img:"./assets/images/github.svg"}];

let cardArray: item[];
let moveCount = 0;
let matchesCount = 0;
let selectedCard;
const cards = document.querySelectorAll('.card');
const front = document.querySelectorAll('.front');
const grid = document.querySelector('.card__grid');
const count = document.querySelectorAll('.count');
const winTitle = document.querySelector('.win__title');
let seconds = 0;
let minutes = 0;
let secondsTimer: string;
let minutesTimer: string;
let timerInterval: NodeJS.Timer;

const arrayOfClasses = ['glow', 'match_glow', 'mismatch_glow', 'flip', 'match'];
const arrayOfElements= [front, cards];

//Timer
const timerFunction = () => {
    seconds += 1;

    if(seconds >= 60){
        minutes +=1;
        seconds = 0;
    }

    secondsTimer = seconds > 9? `${seconds}` : `0${seconds}`;
    minutesTimer = minutes > 9? `${minutes}` : `0${minutes}`;

    count[2].innerHTML = `Time: ${minutesTimer}:${secondsTimer}`;
}

const stopTimer = () =>{
    clearInterval(timerInterval);
}

//shuffle cards
const shuffle = (array: item[]) => {
    let currentIndex = array.length;
    let randomIndex;
    
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    
    return array;
      
}

//reset the game
const reset = (n: number) => {
    stopTimer();
    
    winTitle.innerHTML= "";
    count[0].innerHTML = "Move count: 0";
    count[1].innerHTML = "Matches: 0/4";
    count[2].innerHTML = "Time: 00:00";
    moveCount = 0;
    matchesCount = 0;
    seconds = 0;
    minutes = 0;

    arrayOfClasses.forEach((classes) =>{
        arrayOfElements.forEach((el) =>{
            if(el[n].classList.contains(classes)){
                el[n].classList.remove(classes);
            };
        });
    });
};

const initializeGame = () => {
    // add Items to Card Array
    cardArray = [...items, ...items];
    //shuffle cardArray items;
    shuffle(cardArray);
    for(let i = 0; i < front.length; i++) {
        reset(i);
        front[i].innerHTML = `<img src='${cardArray[i].img}'>`;
        front[i].setAttribute('id', String(cardArray[i].id))
    }

    timerInterval = setInterval((timerFunction), 1000);
}



const handleCardClick = () =>{
    for(let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', ()=>{
            front[i].classList.add('flip');
            cards[i].classList.add('glow');

            const flippedCards = document.querySelectorAll<HTMLElement>('.flip');
            const flippedCardsDecoration = document.querySelectorAll<HTMLElement>('.glow');
            
            if(flippedCards.length == 2){
                grid.setAttribute('style', "pointer-events: none")
                checkMatch([...flippedCards, ...flippedCardsDecoration]);
            }
        })
    }
};

const checkMatch = (toCheck: HTMLElement[]) =>{

    if(toCheck[0].classList.contains('match') != true && toCheck[1].classList.contains('match') != true){

        count[0].innerHTML = `Move count: ${String(moveCount += 1)}`;
        
        if(toCheck[0].id == toCheck[1].id) {
            grid.removeAttribute('style')
            count[1].innerHTML = `Matches: ${String(matchesCount += 1)}/4`;
            toCheck.forEach((el)=>{
                if(el.classList.contains("flip")){
                    el.classList.remove('flip');
                    el.classList.add('match');
                }else{
                    el.classList.remove('glow');
                    el.classList.add('match_glow');
                }
            })
    
            if(matchesCount == 4){
                stopTimer();
                winTitle.innerHTML=`Congratulations! Your time is: ${minutesTimer}:${secondsTimer}.`
            }
    
        }else{
    
            toCheck.forEach((el)=>{
                if(el.classList.contains("glow")){
                    el.classList.remove('glow');
                    el.classList.add('mismatch_glow');
                }
            })
    
            setTimeout(() => {
                toCheck.forEach((el)=>{
                    if(el.classList.contains("flip")){
                        el.classList.remove('flip');
                    }else{
                        el.classList.remove('mismatch_glow');
                    }
                })
                grid.removeAttribute('style')
            }, 1000)
    
        }
    }else{

        toCheck.forEach((el)=>{
            if(el.classList.contains("flip")){
                el.classList.remove('flip');
            }else{
                el.classList.remove('glow');
            }
        })

        grid.removeAttribute('style');
    }
}



initializeGame()
handleCardClick()
document.querySelector('.start__btn').addEventListener('click', ()=>{
    initializeGame();
});



