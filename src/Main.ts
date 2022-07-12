import { Platform, setProjectName } from "@guildxyz/sdk";
import api from "./api/api";

class Main {
  public static platform: Platform;

  static async start(): Promise<void> {
    api();

    setProjectName("PLATFORM_NAME connector");
    this.platform = new Platform("PLATFORM_NAME");
  }
}

Main.start();

export default Main;
