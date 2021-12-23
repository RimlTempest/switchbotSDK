# RemoteClient のドキュメント

SwitchBot の赤外線デバイス の操作を管理するクライアントです。  
このクライアントでは以下のメソッドが利用可能です。

オンオフの引数型情報は

```ts
// 文字列型のonまたはoffが入る
type switchRequest = 'on' | 'off';
```

上げる下げるの引数情報は

```ts
type buttonCommand = 'up' | 'down';
```

が元になっています。

飛ばし見ができるよう各メソッド紹介欄にレスポンス情報が記載されています。  
ですがレスポンスデータも基本的に共通になっています。

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

## 赤外線デバイス共通

### setRemoteDevice(deviceId: string, power: switchRequest = 'on')

赤外線デバイスの Bot の ON/OFF を実行する

引数: deviceId (string 型), power (switchRequest 型、デフォルト値='on')

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

### setCustomizeDevice(deviceId: string, command: string)

自分で設定したコマンドを実行する

引数: deviceId (string 型) command (string 型 自分で設定したコマンド名)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

## エアコン

### setAirConditioner(deviceId: string, setting: SetAll)

エアコンの設定

引数: deviceId (string 型)

setting (SetAll 型)

```ts
type SetAll = {
    powerState: 'on' | 'off';
    temperature: number;
    // 1 (自動), 2 (冷房), 3 (除湿), 4 (送風), 5 (暖房);
    mode: 1 | 2 | 3 | 4 | 5;
    // 1 (自動), 2 (低), 3 (中), 4 (高);
    fanSpeed: 1 | 2 | 3 | 4;
};
```

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

## リモコン系統

### setTVChannel(deviceId: string, command: number)

テレビのチャンネルを設定する

引数: deviceId (string 型) command (number 型 チャンネル番号)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

## ボリューム

### setVolume(deviceId: string, button: buttonCommand = 'up')

音量を 上げる/下げる を実行する

引数: deviceId (string 型) button (buttonCommand 型、デフォルト値='up')

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

## チャンネル

### setChannel(deviceId: string, button: buttonCommand = 'up')

チャンネルを 進める/戻る を実行する

引数: deviceId (string 型) button (buttonCommand 型、デフォルト値='up')

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

## DVD、スピーカー系統

### setMute(deviceId: string)

ミュート/ミュート解除を行う

引数: deviceId (string 型)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

### setFastForward(deviceId: string)

早送り を行う

引数: deviceId (string 型)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

### setRewind(deviceId: string)

巻き戻し を行う

引数: deviceId (string 型)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

### setNext(deviceId: string)

次に進める を行う

引数: deviceId (string 型)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

### setPrevious(deviceId: string)

前へ戻る を行う

引数: deviceId (string 型)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

### setPause(deviceId: string)

一時停止 を行う

引数: deviceId (string 型)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

### setPlay(deviceId: string)

再生 を行う

引数: deviceId (string 型)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

### setStop(deviceId: string)

停止 を行う

引数: deviceId (string 型)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

## ファン

### setSwing(deviceId: string)

首振り を行う

引数: deviceId (string 型)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

### setTimer(deviceId: string)

タイマーをセットする

引数: deviceId (string 型)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

### setLowSpeed(deviceId: string)

低速に設定 を行う

引数: deviceId (string 型)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

### middleLowSpeed(deviceId: string)

中速に設定 を行う

引数: deviceId (string 型)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

### highLowSpeed(deviceId: string)

高速に設定 を行う

引数: deviceId (string 型)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

## 電気系統

### setHighBrightness(deviceId: string, button: buttonCommand = 'up')

明るさを 明るく/暗く するを実行する

引数: deviceId (string 型) button (buttonCommand 型、デフォルト値='up')

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```
