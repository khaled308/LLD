import { AppFactory, Goal, Plan } from "../interfaces";

class BuildMuscleGoal implements Goal {
  setGoal(): void {
    console.log("Build muscle");
  }
}

class BuildMusclePlan implements Plan {
  setPlan(): void {
    console.log("Build muscle plan");
  }
}

class BuildMuscle implements AppFactory {
  createGoal(): Goal {
    return new BuildMuscleGoal();
  }

  createPlan(): Plan {
    return new BuildMusclePlan();
  }
}

export default BuildMuscle;
