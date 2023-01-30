import Figure from './circle';

export default class Square extends Figure {
  zoomButton: HTMLButtonElement;
  zoomLevel: number;

  zoomScaleTop = 1.2;
  zoomScaleBottom = 1;

  constructor(selector: string) {
    super(selector);

    this.zoomButton = this.rootElement.querySelector('.js-zoom-in');
    this.zoomLevel = this.zoomScaleBottom;

    this.initSquareEvent();
  }

  initSquareEvent() {
    this.zoomButton.addEventListener('click', () => {
      this.figureElement.style.transform = `scale(${this.getZoomLevel()})`;
    });
  }

  getZoomLevel() {
    this.setZoomLevel();

    return this.zoomLevel;
  }

  setZoomLevel() {
    if (this.zoomLevel === this.zoomScaleBottom) {
      this.zoomLevel = this.zoomScaleTop;
    } else {
      this.zoomLevel = this.zoomScaleBottom;
    }
  }

  changeFigureBg() {
    super.changeFigureBg();

    this.figureElement.style.borderColor = this.getRandomColor();
  }
}
