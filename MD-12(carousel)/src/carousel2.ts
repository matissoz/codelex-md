import Carousel from "./carousel1";

export default class Carousel2nd extends Carousel{
    dotArray: NodeListOf<HTMLSpanElement>;
    activeDot: HTMLSpanElement;
    nextActiveDot: HTMLSpanElement;

    constructor(selector: string) {
        super(selector);

        this.dotArray = this.rootEl.querySelectorAll('.dot');
        this.activeDot =this.dotArray[this.currImg];

        this.setActiveDot();
        this.initEvents2nd();
    }

    initEvents(){
        this.rootEl.addEventListener('click', (e) =>{
            this.imageCounter(e);
            this.counterReset();
            this.setActiveDot();
            this.loadDisplay();
        });
    }

    initEvents2nd(){
        this.dotArray.forEach((dot, index)=>{
            dot.addEventListener('click', ()=>{
                this.currImg = index;
                this.setActiveDot();
            })
        })
    }

    setActiveDot(){
        this.removeOldActiveDot()
        this.findActiveDot();
        this.activeDot.classList.add('active__dot');
    }

    findActiveDot(){
        this.activeDot = this.dotArray[this.currImg];
    }

    removeOldActiveDot(){
        this.activeDot.classList.remove('active__dot');
    }
}