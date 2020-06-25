import express from 'express';
import path from 'path';

export default class Server {
  public app: express.Application;
  public port: number;

  constructor(port: number) {
    this.port = port;
    this.app = express();
  }

  static init(port: number) {
    return new Server(port);
  }

  start(callback: () => void) {
    this.app.listen(this.port, callback);
  }
}
