// デバイスの基本情報
type DeviceBase = {
    deviceId: string;
    deviceName: string;
    hubDeviceId: string;
};

// SwitchBotのデバイス情報
export type DeviceType =
    | 'Bot'
    | 'Plug'
    | 'Curtain'
    | 'Meter'
    | 'Motion Sensor'
    | 'Contact Sensor'
    | 'Color Bulb'
    | 'Humidifier'
    | 'Smart Fan';

export type Command =
    | 'turnOn'
    | 'turnOff'
    | 'press'
    | 'setPosition'
    | 'setMode'
    | 'setAllStatus'
    | 'toggle'
    | 'setBrightness'
    | 'setColor'
    | 'setColorTemperature';

export type CommandType = 'command';

export type commandDeviceRequest = {
    device?: DeviceType;
    commandType: CommandType;
    command: Command;
    commandParam:
        | string
        | number
        | SetPositionMode
        | HumidifierMode
        | AllStatus;
};

// auto or 101 or 102 or 103 or {0~100}
export type HumidifierMode = 'auto' | 101 | 102 | 103 | number;

// 0 (Performance Mode), 1 (Silent Mode), ff (default mode)
type positionMode = 0 | 1 | 'ff';

export type SetPositionMode = {
    index: number;
    mode: positionMode;
    position: number;
};

export type AllStatus = {
    power: 'on' | 'off';
    // 1 (Standard), 2 (Natural)
    fanMode: 1 | 2;
    fanSpeed: 1 | 2 | 3 | 4;
    // 0~120
    shakeRange: number;
};

// カーテンデバイス用
type CurtainDevice = {
    curtainDevicesIds?: any;
    calibrate?: boolean;
    group?: boolean;
    master?: boolean;
    openDirection?: string;
};

// SwitchBotのデバイス
type DeviceList = DeviceBase &
    CurtainDevice & {
        deviceType: DeviceType;
        enableCloudService?: boolean;
    };

// 赤外線リモコン
type infraredRemoteList = DeviceBase & {
    remoteType: string;
};

// 全デバイス取得のレスポンス
export type deviceResponse = {
    statusCode: number;
    body?: {
        deviceList: DeviceList[];
        infraredRemoteList: infraredRemoteList[];
    };
    message: string;
};

type DeviceStatusBase = Omit<DeviceBase, 'deviceName'>;

// ボット/プラグ/加湿器/カラー電球デバイス
type BotStatus = {
    power?: string;
};

// メーター/加湿器
type MeterOrHumidifierStatus = {
    humidity?: number;
    temperature?: number;
};

// 加湿器
type HumidifierStatus = {
    nebulizationEfficiency?: number;
    auto?: boolean;
    childLock?: boolean;
    sound?: boolean;
    lackWater?: boolean;
};

// カーテン
type CurtainStatus = {
    calibrate?: boolean;
    group?: boolean;
    moving?: boolean;
    slidePosition?: number;
};

// スマートファン
type SmartFanStatus = {
    mode?: number;
    speed?: number;
    shaking?: boolean;
    shakeCenter?: number;
    shakeRange?: number;
};

// モーションセンサー、接触センサー
type MotionSensorOrContactSensorStatus = {
    moveDetected?: boolean;
    brightness?: string;
};

// 接触センサーデバイス
type ContactSensorStatus = {
    openState?: string;
};

// カラー電球デバイス
type ColorBulbStatus = {
    color?: string;
    colorTemperature?: number;
};

type DeviceStatusType = DeviceStatusBase &
    BotStatus &
    MeterOrHumidifierStatus &
    HumidifierStatus &
    CurtainStatus &
    SmartFanStatus &
    MotionSensorOrContactSensorStatus &
    ContactSensorStatus &
    ColorBulbStatus & {
        deviceType: DeviceType;
    };

// 各デバイスのステータス取得のレスポンス
export type deviceStatusResponse = {
    statusCode: number;
    body?: DeviceStatusType;
    message: string;
};
