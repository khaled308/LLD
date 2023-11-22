import Slide from "./Slide";
import { IPresentationBuilder } from "./formats";

export default class Presentation {
  private slides: Slide[];

  constructor() {
    this.slides = [];
  }

  public addSlide(slide: Slide) {
    this.slides.push(slide);
  }

  public exportDoc(builder: IPresentationBuilder) {
    this.slides.forEach((slide) => {
      builder.addSlide();
    });
  }
}
