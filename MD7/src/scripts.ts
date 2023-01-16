//Vajadzēja izmantot const box = document.querySelectorAll('.box');

const button1 = document.querySelector('.btn1');
const box1 = document.querySelector('.box1');

const box2 = document.querySelector('.box2');

const button3 = document.querySelector('.btn3');
const box3 = document.querySelector('.box3');

const button4 = document.querySelector('.btn4');
const box4 = document.querySelector('.box4');

const button5 = document.querySelector('.btn5');
const box5 = document.querySelector('.box5');

const button6 = document.querySelector('.btn6');
const box6 = document.querySelector('.box6');

const button7 = document.querySelector('.btn7');

const main__grid = document.querySelector('.main__grid');
const box = document.querySelectorAll('.box');

//uzd1
button1.addEventListener('click',()=>{
    if(box[0].classList.contains("yellow")){
        box[0].classList.remove("yellow");
    }else{
        box[0].classList.add("yellow");
    }
});

//uzd2
document.querySelector('.btn2').addEventListener('click',()=>{
    const title = document.querySelector('.title')

    if(title.innerHTML == "SUCCESS"){
        title.innerHTML = "FAIL";
    }else{
        title.innerHTML = "SUCCESS";
    }
});

//uzd3
button3.addEventListener('click',()=>{
    box3.setAttribute("style", "visibility: hidden")
});

//uzd4
button4.addEventListener('click',()=>{

    if(box4.hasAttribute("style")){
        box4.removeAttribute("style")
    }else{
        box4.setAttribute("style", "visibility: hidden")
    }
});

//uzd5
button5.addEventListener('click',()=>{

    let colors=["#1FC2AE", "blue", "green", "yellow", "red"]

    if(box5.hasAttribute("style")){
        box5.removeAttribute("style")
    };
    
    let randColor = Math.floor(Math.random() * colors.length)

    box5.setAttribute("style", `background-color: ${colors[randColor]}`)
});

//uzd6
let count = 0;
let intervalId: NodeJS.Timer;

button6.addEventListener('click',()=>{
        intervalId = setInterval(timeIT, 3000);
});

const timeIT = (() =>{
    const counter = document.querySelector('.counter');
    count++;
    counter.innerHTML = String(count);
    console.log(count)
    
    if(count >= 10){
        clearInterval(intervalId)
    }
});

//uzd 7
button7.addEventListener('click',()=>{
    
    for(var i = 0; i < main__grid.children.length; i++){
        if(main__grid.children[i].hasAttribute("style")){
            main__grid.children[i].removeAttribute("style")
            document.querySelector("body").removeAttribute("style")
        }else{
            main__grid.children[i].setAttribute("style", `background-color: #18D5E1`);
            document.querySelector("body").setAttribute("style", "background-color: #000000");
        }
    }
});

//uzd8
box1.addEventListener('mouseover',()=>{
    box1.setAttribute("style", "background-color: red");
})

box1.addEventListener('mouseout',()=>{
    box1.removeAttribute("style");
})
 
//extra 1
const counterex = document.querySelector(".counterex");
let countExtra = 0;
let intervalIdExtra: NodeJS.Timer;

box5.addEventListener('mouseover',()=>{
    intervalIdExtra = setInterval(timeITExtra, 500);
})


const timeITExtra = (() =>{
    countExtra++;
    counterex.innerHTML = String(countExtra);
    console.log(countExtra)
    
    if(countExtra == 10){
        clearInterval(intervalIdExtra)
    }
});



box5.addEventListener('mouseout',()=>{
    clearInterval(intervalIdExtra)
    countExtra = 0;
    counterex.innerHTML = String(countExtra);

})


//extra2

const input = document.querySelector(".input");
const output = document.querySelector(".output");

//1. e: any - pirmais ko varēju izdomāt, bet sapratu, ka negribu, lai mani terorizē par any izmantošanu
//      pie tam man vēl 5dien tieši bija jāskaidro kāpēc izmantot any ir slikti

//2. e: React.ChangeEvent<HTMLInputElement> - pirmais un populārākais ko atradu, bet kkas nav

//3. atradu jau alternatīvu https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_oninput

//4. https://stackoverflow.com/questions/40676343/typescript-input-onchange-event-target-value/72008067#72008067 - final

 const inputChange = ((e: Event)=>{
     output.textContent = ((e.target as HTMLInputElement).value);
 })

 input.addEventListener('input', inputChange);

// input.addEventListener('input',(e: Event)=>{
//     output.textContent = ((e.target as HTMLInputElement).value);
// })

//  input.addEventListener('input',()=>{
//      output.textContent = (input as HTMLInputElement).value;
//  })