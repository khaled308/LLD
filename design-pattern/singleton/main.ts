import DB from "./DB";

const db = DB.connect();
const db1 = DB.connect();

console.log(db === db1);
