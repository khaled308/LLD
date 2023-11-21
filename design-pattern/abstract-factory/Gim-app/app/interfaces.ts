export interface Goal {
  setGoal(): void;
}

export interface Plan {
  setPlan(): void;
}

export interface AppFactory {
  createGoal(): Goal;
  createPlan(): Plan;
}
