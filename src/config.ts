import dotenv from "dotenv";
import { hostname } from "os";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
if (process.env.NODE_ENV === "development") {
  dotenv.config();
}
const api = {
  prefix: "/api",
  port: process.env.PORT || 9000,
};

export default {
  api,
  nodeEnv: process.env.NODE_ENV,
  instanceInfo: {
    version: process.env.COMMIT_SHA || "0.0.1",
    hostname: hostname(),
  },
};
