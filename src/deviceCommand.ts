import { SwitchBotClient } from './client';
import { AllStatus, HumidifierMode, SetPositionMode } from './types/device';

export class DeviceCommand extends SwitchBotClient {
  constructor(token: string) {
    super(token);
  }

  // SwitchBot
  public async setSwitchBot(deviceId: string, power: 'on' | 'off' = 'on') {
    const command = power === 'on' ? 'turnOn' : 'turnOff';
    return this.setCommand(deviceId, {
      command: command,
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public async pressSwitchBot(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'press',
      commandParam: 'default',
      commandType: 'command',
    });
  }

  // スマートプラグ
  public async setPlug(deviceId: string, power: 'on' | 'off' = 'on') {
    const command = power === 'on' ? 'turnOn' : 'turnOff';
    return this.setCommand(deviceId, {
      command: command,
      commandParam: 'default',
      commandType: 'command',
    });
  }

  // カーテン
  public async setCurtainPosition(deviceId: string, position: SetPositionMode) {
    return this.setCommand(deviceId, {
      command: 'setPosition',
      // index0,mode0,position0 e.g. 0,ff,80
      commandParam: position,
      commandType: 'command',
    });
  }

  public async setCurtain(deviceId: string, power: 'on' | 'off' = 'on') {
    const command = power === 'on' ? 'turnOn' : 'turnOff';
    return this.setCommand(deviceId, {
      command: command,
      commandParam: 'default',
      commandType: 'command',
    });
  }

  // 加湿器
  public async setHumidifierMode(deviceId: string, mode: HumidifierMode) {
    return this.setCommand(deviceId, {
      command: 'setMode',
      commandParam: mode,
      commandType: 'command',
    });
  }

  public async setHumidifier(deviceId: string, power: 'on' | 'off' = 'on') {
    const command = power === 'on' ? 'turnOn' : 'turnOff';
    return this.setCommand(deviceId, {
      command: command,
      commandParam: 'default',
      commandType: 'command',
    });
  }

  // スマートファン
  public async setSmartFanAllStatus(deviceId: string, status: AllStatus) {
    return this.setCommand(deviceId, {
      command: 'setAllStatus',
      commandParam: status,
      commandType: 'command',
    });
  }

  public async setSmartFan(deviceId: string, power: 'on' | 'off' = 'on') {
    const command = power === 'on' ? 'turnOn' : 'turnOff';
    return this.setCommand(deviceId, {
      command: command,
      commandParam: 'default',
      commandType: 'command',
    });
  }

  // カラー電球デバイス
  public async setColorBulb(deviceId: string, power: 'on' | 'off' = 'on') {
    const command = power === 'on' ? 'turnOn' : 'turnOff';
    return this.setCommand(deviceId, {
      command: command,
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public async setColorBulbBrightness(deviceId: string, brightness: number) {
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
  ) {
    return this.setCommand(deviceId, {
      command: 'setColor',
      commandParam: `${r}:${g}:${b}`,
      commandType: 'command',
    });
  }

  public async toggleColorBulb(deviceId: string) {
    return this.setCommand(deviceId, {
      command: 'toggle',
      commandParam: 'default',
      commandType: 'command',
    });
  }

  public async setColorBulbColorTemperature(
    deviceId: string,
    temperature: number,
  ) {
    return this.setCommand(deviceId, {
      command: 'setColorTemperature',
      // 2700~6500
      commandParam: temperature,
      commandType: 'command',
    });
  }
}
