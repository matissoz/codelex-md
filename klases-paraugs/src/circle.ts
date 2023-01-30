export default class Figure {
  rootElement: HTMLDivElement;
  figureElement: HTMLDivElement;
  spinButton: HTMLButtonElement;
  colorChangeButton: HTMLButtonElement;
  nextSpinDeg: number;

  #circleInnerDegrees = 360;

  constructor(selector: string) {
    this.rootElement = document.querySelector(selector);
    this.figureElement = this.rootElement.querySelector('.js-figure');
    this.spinButton = this.rootElement.querySelector('.js-spin');
    this.colorChangeButton = this.rootElement.querySelector('.js-color-change');
    this.nextSpinDeg = this.#circleInnerDegrees;

    this.initEvents();
  }

  initEvents() {
    this.spinButton.addEventListener('click', () => this.spinFigure());

    this.colorChangeButton.addEventListener('click', () => this.changeFigureBg());
  }

  getRandomColor() {
    let color = '';
    for (let i = 0; i < 3; i += 1) {
      const sub = Math.floor(Math.random() * 256).toString(16);
      color += (sub.length === 1 ? `0${sub}` : sub);
    }

    return `#${color}`;
  }

  spinFigure() {
    this.figureElement.style.transform = `rotate(${this.nextSpinDeg}deg)`;

    this.nextSpinDeg += this.#circleInnerDegrees;
  }

  changeFigureBg() {
    this.figureElement.style.backgroundColor = this.getRandomColor();
  }
}
