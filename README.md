[![CI](https://github.com/RimlTempest/switchbotSDK/actions/workflows/test.yaml/badge.svg)](https://github.com/RimlTempest/switchbotSDK/actions/workflows/test.yaml)
[![CI](https://github.com/RimlTempest/switchbotSDK/actions/workflows/reviewdog.yaml/badge.svg)](https://github.com/RimlTempest/switchbotSDK/actions/workflows/reviewdog.yaml)
# switchbotSDK

switchbotSDK とは switchbot から提供されている RestAPI を簡易的に使用ができる SDK となります。  
現在は`SwitchBotClient`、`DeviceClient`、`RemoteClient`がご利用できます。

## 使用方法

用途によって３種の関数を呼び出します。

### SwtichBotClient

こちらはデバイスの状態を管理するクライアントとなります。

```ts
import { SwitchBotClient } from 'switchbotsdk';

const client = new SwitchBotClient(`SwitchBotのトークン`);

// サンプル(全デバイス取得)
console.log(client.getDevices());
```

こうすることで呼び出すことができます。

### DeviceClient

こちらは`SwitchBotの関連デバイス(SwitchBot、スマートプラグ、加湿器など)`を利用する場合のクライアントになります。

```ts
import { DeviceClient } from 'switchbotsdk';

const client = new DeviceClient(`SwitchBotのトークン`);
const deviceId = 'SwitchBotの端末ID';

// サンプル(SwitchBotのBotオン/オフ)
await client.setSwitchBot(deviceId, 'on');
await client.setSwitchBot(deviceId, 'off');
```

こうすることで呼び出すことができます。

### RemoteClient

こちらは`SwitchBotHub`を利用した`赤外線デバイス`を利用する場合のクライアントになります。

```ts
import { RemoteClient } from 'switchbotsdk';

const client = new RemoteClient(`SwitchBotのトークン`);
// 赤外線デバイスは
const deviceId = 'ディスプレイの端末ID';

// サンプル(赤外線デバイスのBotオン/オフ)
// 赤外線デバイスはすべてのオンオフはこの関数で行えます。
await client.setRemoteDevice(deviceId, 'on');
await client.setRemoteDevice(deviceId, 'off');
```

こうすることで呼び出すことができます。

---

フロントエンドフレームワークやバックエンドフレームワークでも使用可能です。

### NestJS

```ts
// switch-bot.service.ts
import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import { SwitchBotClient, DeviceClient, RemoteClient } from 'switchbotsdk';
config();

type PowerType = 'on' | 'off';

@Injectable()
export class SwitchBotService {
    #client = new SwitchBotClient(`${process.env.SWITCHBOT_ACCESS_TOKEN}`);
    #deviceCommand = new DeviceClient(`${process.env.SWITCHBOT_ACCESS_TOKEN}`);
    #remoteCommand = new RemoteClient(`${process.env.SWITCHBOT_ACCESS_TOKEN}`);

    async RoomLight(deviceId: string, power: PowerType) {
        return await this.#deviceCommand.setSwitchBot(deviceId, power);
    }

    async TVLight(deviceId: string, power: PowerType) {
        return await this.#remoteCommand.setRemoteDevice(deviceId, power);
    }

    async getDevices() {
        const device = await this.#client.getDevices();
        return device.data.body;
    }
}

// app.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { SwitchBotService } from 'src/switch-bot/switch-bot.service';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly _switchBot: SwitchBotService,
    ) {}

    @Get()
    getHello(@Param('deviceId') deviceId: string) {
        const res = await this._switchBot.RoomLight(deviceId, 'on');
        return res.message;
    }
}
```

## 参考

[公式 SwitchBotAPI のドキュメント](https://github.com/OpenWonderLabs/SwitchBotAPI)
