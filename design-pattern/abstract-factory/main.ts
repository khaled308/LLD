import App from "./app/App";

const app = new App();

const weightLoss = app.getFeatures("WeightLoss");

weightLoss?.createGoal().setGoal();
weightLoss?.createPlan().setPlan();

const buildMuscle = app.getFeatures("BuildMuscle");

buildMuscle?.createGoal().setGoal();
buildMuscle?.createPlan().setPlan();
