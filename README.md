# switchbotSDK

switchbotSDKとはswitchbotから提供されているRestAPIを簡易的に使用ができるSDKとなります。  
現在は`SwitchBotClient`、`DeviceClient`、`RemoteClient`がご利用できます。  

## 使用方法

用途によって３種の関数を呼び出します。

### SwtichBotClient

こちらはデバイスの状態を管理するクライアントとなります。

```ts
import { SwitchBotClient } from '@switchbotSDK';

const client = new SwitchBotClient(`SwitchBotのトークン`);
```

こうすることで呼び出すことができます。

### DeviceClient

こちらは`SwitchBotの関連デバイス(SwitchBot、スマートプラグ、加湿器など)`を利用する場合のクライアントになります。  

```ts
import { DeviceClient } from '@switchbotSDK';

const client = new DeviceClient(`SwitchBotのトークン`);
```

こうすることで呼び出すことができます。

### RemoteClient

こちらは`SwitchBotHub`を利用した`赤外線デバイス`を利用する場合のクライアントになります。  

```ts
import { RemoteClient } from '@switchbotSDK';

const client = new RemoteClient(`SwitchBotのトークン`);
```

こうすることで呼び出すことができます。