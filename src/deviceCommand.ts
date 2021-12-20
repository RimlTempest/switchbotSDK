import { SwitchBotClient } from './client';
import { AllStatus, HumidifierMode, SetPositionMode } from './types/device';
import { switchRequest } from './types/request';
import { SDKResponse } from './types/response';

export class DeviceClient extends SwitchBotClient {
    constructor(token: string) {
        super(token);
    }

    // SwitchBot
    public async setSwitchBot(
        deviceId: string,
        power: switchRequest = 'on',
    ): Promise<SDKResponse> {
        return this.turn(deviceId, power);
    }

    public async pressSwitchBot(deviceId: string): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'press',
            commandParam: 'default',
            commandType: 'command',
        });
    }

    // スマートプラグ
    public async setPlug(
        deviceId: string,
        power: switchRequest = 'on',
    ): Promise<SDKResponse> {
        return this.turn(deviceId, power);
    }

    // カーテン
    public async setCurtainPosition(
        deviceId: string,
        position: SetPositionMode,
    ): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'setPosition',
            // index0,mode0,position0 e.g. 0,ff,80
            commandParam: position,
            commandType: 'command',
        });
    }

    public async setCurtain(
        deviceId: string,
        power: switchRequest = 'on',
    ): Promise<SDKResponse> {
        return this.turn(deviceId, power);
    }

    // 加湿器
    public async setHumidifierMode(
        deviceId: string,
        mode: HumidifierMode,
    ): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'setMode',
            commandParam: mode,
            commandType: 'command',
        });
    }

    public async setHumidifier(
        deviceId: string,
        power: switchRequest = 'on',
    ): Promise<SDKResponse> {
        return this.turn(deviceId, power);
    }

    // スマートファン
    public async setSmartFanAllStatus(
        deviceId: string,
        status: AllStatus,
    ): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'setAllStatus',
            commandParam: status,
            commandType: 'command',
        });
    }

    public async setSmartFan(
        deviceId: string,
        power: switchRequest = 'on',
    ): Promise<SDKResponse> {
        return this.turn(deviceId, power);
    }

    // カラー電球デバイス
    public async setColorBulb(
        deviceId: string,
        power: switchRequest = 'on',
    ): Promise<SDKResponse> {
        return this.turn(deviceId, power);
    }

    public async setColorBulbBrightness(
        deviceId: string,
        brightness: number,
    ): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'setBrightness',
            commandParam: brightness,
            commandType: 'command',
        });
    }

    public async setColorBulbColor(
        deviceId: string,
        r: number,
        g: number,
        b: number,
    ): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'setColor',
            commandParam: `${r}:${g}:${b}`,
            commandType: 'command',
        });
    }

    public async toggleColorBulb(deviceId: string): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'toggle',
            commandParam: 'default',
            commandType: 'command',
        });
    }

    public async setColorBulbColorTemperature(
        deviceId: string,
        temperature: number,
    ): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'setColorTemperature',
            // 2700~6500
            commandParam: temperature,
            commandType: 'command',
        });
    }
}
