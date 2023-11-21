import BuildMuscle from "./build-muscle/BuildMuscle";
import WeightLoss from "./weight-loss/WeightLoss";

class App {
  getFeatures(type: string) {
    if (type === "WeightLoss") {
      return new WeightLoss();
    } else if (type === "BuildMuscle") {
      return new BuildMuscle();
    }
  }
}

export default App;
