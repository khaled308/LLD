import {
  DellDesktopBuilder,
  DesktopDirector,
  HpDesktopBuilder,
} from "./Desktop";

const desktopDirector = new DesktopDirector();
const dellBuilder = new DellDesktopBuilder();
const hpBuilder = new HpDesktopBuilder();

const dellDesktop = desktopDirector.build(dellBuilder);
const hpDesktop = desktopDirector.build(hpBuilder);

dellDesktop.display();
console.log("===============");
hpDesktop.display();
