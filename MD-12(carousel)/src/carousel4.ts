import Carousel3rd from "./carousel3";

export default class Carousel4th extends Carousel3rd{
    goFullscreen: HTMLElement;
    goTimer: HTMLElement;
    fullscreenDisplay:HTMLElement
    intervalId: NodeJS.Timer;
    intervalTime: number;
    timer: boolean;

    constructor(selector: string) {
        super(selector);
        this.goFullscreen = this.rootEl.querySelector('.js-fullscreen');
        this.goTimer = this.rootEl.querySelector('.js-timer');
        this.fullscreenDisplay = document.querySelector(".fullscreen__img")
        this.intervalTime = 1000;//ms
        this.timer = false;

        this.initEvents4th();
    }

    initEvents4th(){
        this.goTimer.addEventListener('click', () =>{
            this.stopStartTimer()
        })

        this.goFullscreen.addEventListener('click', () =>{
            this.loadFullPicture();
        })
    }

    setTimer(){
        this.intervalId = setInterval(this.timerFunc.bind(this), this.intervalTime);
        this.timer = true;
    }

    clearTimer(){
        clearInterval(this.intervalId);
        this.timer = false;
    }

    timerFunc(){
        this.currImg+=this.count; 
        //this.imageCounterGoForward()
        this.counterReset();
        this.setActiveDot();
        this.setActivePic();
        this.loadDisplay();
        this.loadFullPicture()
    }

    stopStartTimer(){
        if(this.timer == false){
            this.setTimer();
        }else{
            this.clearTimer();
        }
    }


    loadFullPicture(){
        this.fullscreenDisplay.innerHTML = 
                `
                <img src=${this.imagesData[this.currImg]}>
                `
    }
}