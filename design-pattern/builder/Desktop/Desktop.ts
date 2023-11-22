interface IDesktopBuilder {
  buildMotherBoard(): void;
  buildProcessor(): void;
  buildMemory(): void;
  buildStorage(): void;
  buildGraphicCards(): void;
  getDesktop(): Desktop;
}

class Desktop {
  public motherBoard = "";
  public processor = "";
  public memory = "";
  public storage = "";
  public graphicCards = "";

  display() {
    console.log(`Motherboard: ${this.motherBoard}`);
    console.log(`Processor: ${this.processor}`);
    console.log(`Memory: ${this.memory}`);
    console.log(`Storage: ${this.storage}`);
    console.log(`Graphic Cards: ${this.graphicCards}`);
  }
}

export class DellDesktopBuilder implements IDesktopBuilder {
  desktop: Desktop = new Desktop();

  buildMotherBoard(): void {
    this.desktop.motherBoard = "Dell Motherboard";
  }

  buildProcessor(): void {
    this.desktop.processor = "Dell Processor";
  }

  buildMemory(): void {
    this.desktop.memory = "Dell Memory";
  }

  buildStorage(): void {
    this.desktop.storage = "Dell Storage";
  }

  buildGraphicCards(): void {
    this.desktop.graphicCards = "Dell Graphic Cards";
  }

  getDesktop(): Desktop {
    return this.desktop;
  }
}

export class HpDesktopBuilder implements IDesktopBuilder {
  desktop: Desktop = new Desktop();

  buildMotherBoard(): void {
    this.desktop.motherBoard = "Hp Motherboard";
  }

  buildProcessor(): void {
    this.desktop.processor = "Hp Processor";
  }

  buildMemory(): void {
    this.desktop.memory = "Hp Memory";
  }

  buildStorage(): void {
    this.desktop.storage = "Hp Storage";
  }

  buildGraphicCards(): void {
    this.desktop.graphicCards = "Hp Graphic Cards";
  }

  getDesktop(): Desktop {
    return this.desktop;
  }
}

export class DesktopDirector {
  public build(builder: IDesktopBuilder) {
    builder.buildMotherBoard();
    builder.buildProcessor();
    builder.buildMemory();
    builder.buildStorage();
    builder.buildGraphicCards();

    return builder.getDesktop();
  }
}
