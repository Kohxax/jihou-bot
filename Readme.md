## 時報bot

時報botです。一時間に一回、misskeyで投稿します。フォロバ機能等は作成中です。


## 使い方(Docker使用)

①misskeyで設定からAPIのアクセストークン（ノートの作成、フォローする権限つき）を作る

 ② `.env_example`をコピーし、`.env`にファイル名を変更する

 ③以下のように入力
 ```
MISSKEY_INSTANCE=ここにmisskeyインスタンスのURL
MISSKEY_TOKEN=作成したアクセストークン
 ```

④必要に応じて`Dockerfile`の
```
ENV TZ=Asia/Tokyo
```
を変更する


 ⑤下記コマンドをプロジェクトフォルダ内で実行
 ```
 docker build -t jihou-bot .
 ```

 ⑥下記コマンドを実行し、コンテナを起動
```
docker run --env-file .env -d --name jihou-bot jihou-bot
```