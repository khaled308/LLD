interface IButton {
  press(): void;
}

interface ITextBox {
  setText(): void;
}

interface IFactory {
  createButton(): IButton;
  createTextBox(): ITextBox;
}

class WindowsButton implements IButton {
  press(): void {
    console.log("Windows Button clicked!");
  }
}

class WindowsTextBox implements ITextBox {
  setText(): void {
    console.log("Windows text created");
  }
}

class MacButton implements IButton {
  press(): void {
    console.log("Mac Button clicked!");
  }
}

class MacTextBox implements ITextBox {
  setText(): void {
    console.log("Mac text created");
  }
}

class WindowsFactory implements IFactory {
  createButton(): IButton {
    return new WindowsButton();
  }

  createTextBox(): ITextBox {
    return new WindowsTextBox();
  }
}

class MacFactory implements IFactory {
  createButton(): IButton {
    return new MacButton();
  }

  createTextBox(): ITextBox {
    return new MacTextBox();
  }
}

export default class GUI {
  public static createFactory(type: string) {
    if (type === "windows") return new WindowsFactory();
    else if (type === "mac") return new MacFactory();
  }
}
