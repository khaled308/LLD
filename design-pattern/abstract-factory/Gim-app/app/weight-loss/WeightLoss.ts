import { AppFactory, Goal, Plan } from "../interfaces";

class WeightLossGoal implements Goal {
  setGoal(): void {
    console.log("Weight loss");
  }
}

class WeightLossPlan implements Plan {
  setPlan(): void {
    console.log("Weight loss plan");
  }
}

class WeightLoss implements AppFactory {
  createGoal(): Goal {
    return new WeightLossGoal();
  }

  createPlan(): Plan {
    return new WeightLossPlan();
  }
}

export default WeightLoss;
