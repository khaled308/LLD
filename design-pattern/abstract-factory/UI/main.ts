import GUI from "./UI";

const windowsFactory = GUI.createFactory("windows");
const macFactory = GUI.createFactory("mac");

windowsFactory?.createButton().press();
windowsFactory?.createTextBox().setText();

macFactory?.createButton().press();
macFactory?.createTextBox().setText();
