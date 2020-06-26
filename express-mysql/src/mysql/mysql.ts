import mysql from 'mysql';

export default class MySql {
  private static _instance: MySql;

  connection: mysql.Connection;
  connected = false;

  constructor() {
    console.log('Initialized MySql Class');

    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'node',
      password: process.env.PASSWORD_MYSQL,
      database: 'node',
    });

    this.connectDB();
  }

  public static get instance(): MySql {
    return this._instance || (this._instance = new this());
  }

  public static executeQuery(
    query: string,
    callback: (
      err: mysql.MysqlError | string | null,
      results?: Object[]
    ) => void
  ) {
    this.instance.connection.query(query, (err, results: Object[], fields) => {
      if (err) {
        console.log('Query Error');
        console.log(err);
        callback(err);
        return;
      }

      if (results.length === 0) {
        callback("The requested register don't exist");
      } else {
        callback(null, results);
      }
    });
  }

  private connectDB() {
    this.connection.connect((err: mysql.MysqlError) => {
      if (err) {
        console.log(err.message);
        return;
      }

      this.connected = true;

      console.log('Database Online!');
    });
  }
}
