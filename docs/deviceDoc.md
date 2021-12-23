# DeviceClient のドキュメント

SwitchBot のデバイス の操作を管理するクライアントです。  
このクライアントでは以下のメソッドが利用可能です。

オンオフの引数型情報は基本的に

```ts
// 文字列型のonまたはoffが入る
type switchRequest = 'on' | 'off';
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

## Bot

### setSwitchBot(deviceId: string, power: switchRequest = 'on')

スイッチモードの Bot の ON/OFF を実行する

引数: deviceId (string 型), power (switchRequest 型、デフォルト値='on')

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

### pressSwitchBot(deviceId: string)

押すモードで押すを実行する

引数: deviceId (string 型)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

## スマートプラグ

### setPlug(deviceId: string, power: switchRequest = 'on',)

スマートプラグの ON/OFF を実行する

引数: deviceId (string 型), power (switchRequest 型、デフォルト値='on')

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

## スマートカーテン

### setCurtain(deviceId: string, power: switchRequest = 'on')

スマートカーテンの ON/OFF を実行する

引数: deviceId (string 型), power (switchRequest 型、デフォルト値='on')

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

### setCurtainPosition(deviceId: string, position: SetPositionMode)

スマートカーテンの位置を設定する

引数: deviceId (string 型)

position (SetPositionMode 型)

```ts
type SetPositionMode = {
    index: number;
    mode: positionMode;
    position: number;
};
```

positionMode

```ts
// 0 (パフォーマンスモード), 1 (静音モード), ff (デフォルト)
type positionMode = 0 | 1 | 'ff';
```

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

## 加湿器

### setHumidifier(deviceId: string, power: switchRequest = 'on',)

加湿器の ON/OFF を実行する

引数: deviceId (string 型), power (switchRequest 型、デフォルト値='on')

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

### setHumidifierMode(deviceId: string, mode: HumidifierMode)

加湿器のモードを変更する

引数: deviceId (string 型)

mode (HumidifierMode 型)

```ts
// auto: 自動、自動モードに設定
// 101: 噴霧効率を34％に設定
// 102: 噴霧効率を67％に設定
// 103: 噴霧効率を100％に設定
// number: 0~100の間で設定
export type HumidifierMode = 'auto' | 101 | 102 | 103 | number;
```

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

## スマートファン

### setSmartFan(deviceId: string, power: switchRequest = 'on')

スマートファンの ON/OFF を実行する

引数: deviceId (string 型), power (switchRequest 型、デフォルト値='on')

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

### setSmartFanAllStatus(deviceId: string, status: AllStatus)

スマートファンのすべてのステータスを設定

引数: deviceId (string 型)

status (AllStatus 型)

```ts
type AllStatus = {
    power: 'on' | 'off';
    // 1 (スタンダート), 2 (ナチュラルモード)
    fanMode: 1 | 2;
    fanSpeed: 1 | 2 | 3 | 4;
    // 0~120
    shakeRange: number;
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

## スマートカラー電球

### setColorBulb(deviceId: string, power: switchRequest = 'on')

スマートカラー電球の ON/OFF を実行する

引数: deviceId (string 型), power (switchRequest 型、デフォルト値='on')

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

### setColorBulbBrightness(deviceId: string, brightness: number)

スマートカラー電球の明るさを設定

引数: deviceId (string 型) brightness (number 型 1~100)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

### setColorBulbColor(deviceId: string, r: number, g: number, b: number)

スマートカラー電球の色を設定する

引数: deviceId (string 型)

RGB なので以下引数は `0 ~ 255` で設定します  
r (number 型)  
g (number 型)  
b (number 型)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

### toggleColorBulb(deviceId: string)

トグルモードで押すを実行する

引数: deviceId (string 型)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```

### setColorBulbColorTemperature(deviceId: string, temperature: number)

スマートカラー電球の色の暖かみを設定する(暖色/寒色)

引数: deviceId (string 型) temperature (number 型 2700-6500)

レスポンス

```ts
type response = {
    command: string;
    statusCode: number;
    message: string;
};
```
