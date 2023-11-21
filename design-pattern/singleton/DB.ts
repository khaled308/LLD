class DB {
  private static db: DB;

  private constructor() {}

  public static connect() {
    if (!DB.db) {
      DB.db = new DB();
    }
    return DB.db;
  }
}

export default DB;
