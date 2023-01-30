import { images } from './data';

export default class Carousel{
    rootEl: HTMLDivElement;
    display: HTMLDivElement;
    goLeft: HTMLSpanElement;
    goRight: HTMLSpanElement;

    currImg: number;

    imagesData = images;
    imgDataLength = this.imagesData.length;
    count = 1;

    constructor (selector: string){
        this.rootEl = document.querySelector(selector)
        this.display = this.rootEl.querySelector('.js-display');
        this.goLeft = this.rootEl.querySelector('.js-left');
        this.goRight = this.rootEl.querySelector('.js-right');

        this.currImg = 1;

        this.loadDisplay();
        this.initEvents();
    }

    initEvents(){
        this.rootEl.addEventListener('click', (e) =>{
            this.imageCounter(e);
            this.counterReset()
            this.loadDisplay();
        });
    }

    loadDisplay(){
        this.display.innerHTML = 
            `
            <img src=${this.imagesData[this.currImg]}>
            `
    }

    imageCounter(e: Event){
        let currTargetParent = (<HTMLElement>e.target).parentElement;

        if(currTargetParent == this.goLeft){
            this.imageCounterGoBackward();
        }

        if(currTargetParent == this.goRight){
            this.imageCounterGoForward();
        }
    }

    imageCounterGoForward(){
        this.currImg+=this.count;
    }

    imageCounterGoBackward(){
        this.currImg-=this.count;
        
    }

    counterReset(){
        if(this.currImg == this.imgDataLength){
            this.currImg = 0;
        }

        if(this.currImg < 0){
            this.currImg = this.imgDataLength-1;
        }
    }


}


