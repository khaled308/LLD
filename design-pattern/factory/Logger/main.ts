import { InfoLoggerFactory } from "./Logger";

const infoLogger = new InfoLoggerFactory().create();

infoLogger.log("Info Log");
