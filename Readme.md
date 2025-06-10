## 時報bot

時報botです。一時間に一回、misskeyで投稿します。フォロバ機能等は作成中です。


## 使い方(Docker使用)

①misskeyで設定からAPIのアクセストークンを作る

 ② `.env_example`をコピーし、`.env`にファイル名を変更する

 ③以下のように入力
 ```
MISSKEY_INSTANCE=ここにmisskeyインスタンスのURL
MISSKEY_TOKEN=作成したアクセストークン
 ```

 ④下記コマンドをプロジェクトフォルダ内で実行
 ```
 docker build -t jihou-bot .
 ```

 ⑤下記コマンドを実行し、コンテナを起動
```
docker run --env-file .env -d --name jihou-bot jihou-bot
```