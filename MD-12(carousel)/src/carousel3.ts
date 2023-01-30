import Carousel2nd from "./carousel2";

export default class Carousel3rd extends Carousel2nd{
    picArray: NodeListOf<HTMLSpanElement>;
    activePic: HTMLSpanElement;

    constructor(selector: string){
        super(selector);
        this.picArray = this.rootEl.querySelectorAll('.pic');
        this.activePic =this.picArray[this.currImg];
        
        this.setActivePic()
        this.fillPicElements()
        this.initEvents3rd()
    }

    initEvents(){
        this.rootEl.addEventListener('click', (e) =>{
            this.imageCounter(e);
            this.counterReset();
            this.setActiveDot();
            this.setActivePic()
            this.loadDisplay();
        });
    }
    
    initEvents3rd(){
        this.picArray.forEach((pic, index)=>{
           pic.addEventListener('click', ()=>{
                this.currImg = index;
                this.setActivePic();
            })
        })
    }

    fillPicElements(){
        this.picArray.forEach((pic, index)=>{
            pic.innerHTML = 
                    `
                    <img src=${this.imagesData[index]}>
                    `
        })
    }

    setActivePic(){
        this.removeOldActivePic()
        this.findActivePic();
        this.activePic.classList.add('active__pic');
    }

    findActivePic(){
        this.activePic = this.picArray[this.currImg];
    }

    removeOldActivePic(){
        this.activePic.classList.remove('active__pic');
    }
}