import { SwitchBotClient } from './client';
import { SetAll, SetChannel } from './types/remote';

export class RemoteClient extends SwitchBotClient {
  constructor(token: string) {
    super(token);
  }

  // 赤外線リモコンは共通でオンオフ可能
  public async setRemoteDevice(deviceId: string, power: 'on' | 'off' = 'on') {
    const command = power === 'on' ? 'turnOn' : 'turnOff';
    return this.setCommand(deviceId, {
      command: command,
      commandParam: 'default',
      commandType: 'command',
    });
  }

  // カスタマイズコマンド
  public async setCustomizeDevice(deviceId: string, command: string) {
    return this.setCommand(deviceId, {
      command: command,
      commandParam: 'default',
      commandType: 'customize',
    });
  }

  // エアコン
  public async setAirConditioner(deviceId: string, setting: SetAll) {
    return this.setCommand(deviceId, {
      command: 'setAll',
      commandParam: setting,
      commandType: 'command',
    });
  }

  // TV, IPTV/Streamer, Set Top Box
  public async setTVChannel(deviceId: string, command: SetChannel) {
    return this.setCommand(deviceId, {
      command: 'SetChannel',
      commandParam: command,
      commandType: 'command',
    });
  }

  // リモコンコマンド
  public setVolumeAdd(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'volumeAdd',
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public setVolumeSub(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'volumeSub',
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public setChannelAdd(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'channelAdd',
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public setChannelSub(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'channelSub',
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public setMute(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'setMute',
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public setFastForward(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'FastForward',
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public setRewind(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'Rewind',
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public setNext(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'Next',
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public setPrevious(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'Previous',
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public setPause(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'Pause',
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public setPlay(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'Play',
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public setStop(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'Stop',
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public setSwing(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'swing',
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public setTimer(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'timer',
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public setLowSpeed(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'lowSpeed',
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public middleLowSpeed(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'middleSpeed',
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public highLowSpeed(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'highSpeed',
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public highBrightnessUp(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'brightnessUp',
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public highBrightnessDown(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'brightnessDown',
      commandParam: 'default',
      commandType: 'command',
    });
  }
}
