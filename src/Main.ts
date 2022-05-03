import api from "./api/api";

class Main {
  static async start(): Promise<void> {
    api();
  }
}

Main.start();

export default Main;
