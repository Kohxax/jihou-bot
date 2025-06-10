import dotenv from "dotenv";
import { MisskeyClient } from "./Misskey/index.js";
import { TimeAlert } from "./TimeAlert/index.js";

dotenv.config();

const origin = process.env.MISSKEY_INSTANCE;
const token = process.env.MISSKEY_TOKEN;

//.envにMISSKEY_INSTANCEとMISSKEY_TOKENが設定されているか確認
if (!origin || !token) {
  throw new Error("MISSKEY_INSTANCEとMISSKEY_TOKENが.envに設定されていません");
}

const misskeyClient = new MisskeyClient(origin, token);
const timeAlert = new TimeAlert(misskeyClient);

timeAlert.start();