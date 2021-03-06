import { BaseClient } from './baseClient';
import { buttonCommand, SetAll } from './types/remote';
import { switchRequest } from './types/request';
import { SDKResponse } from './types/response';

export class RemoteClient extends BaseClient {
    constructor(token: string) {
        super(token);
    }

    // 赤外線リモコンは共通でオンオフ可能
    public async setRemoteDevice(
        deviceId: string,
        power: switchRequest = 'on',
    ): Promise<SDKResponse> {
        return this.turn(deviceId, power);
    }

    // カスタマイズコマンド
    public async setCustomizeDevice(
        deviceId: string,
        command: string,
    ): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: command,
            parameter: 'default',
            commandType: 'customize',
        });
    }

    // エアコン
    public async setAirConditioner(
        deviceId: string,
        setting: SetAll,
    ): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'setAll',
            parameter: setting,
            commandType: 'command',
        });
    }

    // TV, IPTV/Streamer, Set Top Box
    public async setTVChannel(
        deviceId: string,
        command: number,
    ): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'SetChannel',
            parameter: command,
            commandType: 'command',
        });
    }

    // リモコンコマンド
    public setVolume(
        deviceId: string,
        button: buttonCommand = 'up',
    ): Promise<SDKResponse> {
        const command = button === 'up' ? 'volumeAdd' : 'volumeSub';
        return this.setCommand(deviceId, {
            command: command,
            parameter: 'default',
            commandType: 'command',
        });
    }

    public setChannel(
        deviceId: string,
        button: buttonCommand = 'up',
    ): Promise<SDKResponse> {
        const command = button === 'up' ? 'channelAdd' : 'channelSub';
        return this.setCommand(deviceId, {
            command: command,
            parameter: 'default',
            commandType: 'command',
        });
    }

    public setMute(deviceId: string): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'setMute',
            parameter: 'default',
            commandType: 'command',
        });
    }

    public setFastForward(deviceId: string): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'FastForward',
            parameter: 'default',
            commandType: 'command',
        });
    }

    public setRewind(deviceId: string): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'Rewind',
            parameter: 'default',
            commandType: 'command',
        });
    }

    public setNext(deviceId: string): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'Next',
            parameter: 'default',
            commandType: 'command',
        });
    }

    public setPrevious(deviceId: string): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'Previous',
            parameter: 'default',
            commandType: 'command',
        });
    }

    public setPause(deviceId: string): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'Pause',
            parameter: 'default',
            commandType: 'command',
        });
    }

    public setPlay(deviceId: string): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'Play',
            parameter: 'default',
            commandType: 'command',
        });
    }

    public setStop(deviceId: string): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'Stop',
            parameter: 'default',
            commandType: 'command',
        });
    }

    public setSwing(deviceId: string): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'swing',
            parameter: 'default',
            commandType: 'command',
        });
    }

    public setTimer(deviceId: string): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'timer',
            parameter: 'default',
            commandType: 'command',
        });
    }

    public setLowSpeed(deviceId: string): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'lowSpeed',
            parameter: 'default',
            commandType: 'command',
        });
    }

    public middleLowSpeed(deviceId: string): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'middleSpeed',
            parameter: 'default',
            commandType: 'command',
        });
    }

    public highLowSpeed(deviceId: string): Promise<SDKResponse> {
        return this.setCommand(deviceId, {
            command: 'highSpeed',
            parameter: 'default',
            commandType: 'command',
        });
    }

    public setHighBrightness(
        deviceId: string,
        button: buttonCommand = 'up',
    ): Promise<SDKResponse> {
        const command = button === 'up' ? 'brightnessUp' : 'brightnessDown';
        return this.setCommand(deviceId, {
            command: command,
            parameter: 'default',
            commandType: 'command',
        });
    }
}
