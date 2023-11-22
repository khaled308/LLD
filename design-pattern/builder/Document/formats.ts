export interface IPresentationBuilder {
  addSlide(): void;
}

export class PdfBuilder implements IPresentationBuilder {
  private pdf: Pdf;

  constructor() {
    this.pdf = new Pdf();
  }
  addSlide(): void {
    this.pdf.addPage();
    this.pdf.styleText();
  }
}

export class WordBuilder implements IPresentationBuilder {
  private word_doc: WordDocument;

  constructor() {
    this.word_doc = new WordDocument();
  }
  addSlide(): void {
    this.word_doc.addPage();
  }
}

class Pdf {
  addPage() {
    console.log("pdf page added");
  }

  styleText() {
    console.log("text styled");
  }
}

class WordDocument {
  addPage() {
    console.log("word document page added");
  }
}
