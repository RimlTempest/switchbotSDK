# SwitchBotClient のドキュメント

SwitchBot の状態を管理するクライアントです。  
このクライアントでは以下のメソッドが利用可能です。

## 利用可能メソッド

### getDevices()

アプリ連携しているデバイスの情報を確認する

引数: なし

レスポンス

```ts
type response = {
    statusCode: number;
    body?:
        | {
              deviceList: DeviceList[];
              infraredRemoteList: infraredRemoteList[];
          }
        | undefined;
    message: string;
};
```

### getDevice(deviceId: string)

deviceId を元にデバイスの状態を確認する

引数: deviceId (string 型)

レスポンス

```ts
type response = {
    statusCode: number;
    body?: DeviceStatusType | undefined;
    message: string;
};
```

### getScenes()

シーンの情報を確認する

引数: なし

レスポンス

```ts
type response = {
    statusCode: number;
    body?: Scene[] | undefined;
    message: string;
};
```

### setSceneCommand(sceneId: string)

sceneId を元にシーンを実行する

引数: sceneId (string 型)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```
