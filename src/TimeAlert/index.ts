import cron from 'node-cron';
import dayjs from 'dayjs';
import { MisskeyClient } from '../Misskey/Client/index.js';

export class TimeAlert {
  private misskey: MisskeyClient;

  constructor(misskey: MisskeyClient) {
    this.misskey = misskey;
  }

  start() {
    cron.schedule('0 * * * *', async () => {
      const now = dayjs();
      const hour = now.format('HH');
      const message = `【時報】 ${hour}時になりました！`;

      try {
        await this.misskey.postNote(message);
        console.log(`[${now.format()}] 投稿完了: ${message}`);
      } catch (err) {
        console.error('投稿失敗:', err);
      }
    });

    console.log('時報Botを起動しました');
  }
}
