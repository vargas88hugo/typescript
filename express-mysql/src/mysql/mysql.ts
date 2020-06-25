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
