import * as Misskey from "misskey-js";
import dotenv from "dotenv";

dotenv.config();

const instanceUrl = process.env.MISSKEY_INSTANCE;
const accessToken = process.env.MISSKEY_TOKEN;

//.envにMISSKEY_INSTANCEとMISSKEY_TOKENが設定されているか確認
if (!instanceUrl || !accessToken) {
  throw new Error("MISSKEY_INSTANCEとMISSKEY_TOKENが.envに設定されていません");
}

// APIクライアントの初期化
const client = new Misskey.api.APIClient({
  origin: instanceUrl,
  credential: accessToken
});

client.request('notes/create', {
  text: 'Hello, Misskey!'
}).then(response => {
  console.log('Note created successfully:', response);
}).catch(error => {
  console.error('Error creating note:', error);
});