import Presentation from "./Presentation";
import Slide from "./Slide";
import { PdfBuilder, WordBuilder } from "./formats";

const pdfBuilder = new PdfBuilder();
const wordDocBuilder = new WordBuilder();

const presentation = new Presentation();

presentation.addSlide(new Slide("1"));
presentation.addSlide(new Slide("2"));

presentation.exportDoc(pdfBuilder);
presentation.exportDoc(wordDocBuilder);
