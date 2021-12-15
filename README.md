# Overview
Google Meet上で会議をしていて話が脱線したなと思ったときに、匿名でツッコミを入れることができるGoogle Chrome拡張機能です。

# 使い方
1. ソースコードをクローンまたはダウンロードする
2. ```/js/background.js```に[Pusher](https://pusher.com/)のAPI情報を追記する（※Pusherのアカウントがなければ、登録してください）

```
const pusherAppKey = "";
const pusherAppCluster = "";
const pusherEventName = "";
```

3. ```/js/popup.js```に[shout-to-google-meet-sample-backend](https://github.com/clipnote/shout-to-google-meet-sample-backend)をデプロイしたアプリケーションにアクセスできるURLを設定する

```
const apiUrl = "";
```

4. [Google拡張機能設定](chrome://extensions/)を開き、「パッケージ化されていない拡張機能を読み込む」で本ソースコードをアップロードする
