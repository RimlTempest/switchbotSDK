import { DeviceList, DeviceStatusType, infraredRemoteList } from './device';
import { Scene } from './scene';

export type SDKResponse = {
    command: string;
    statusCode: number;
    message: string;
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

// 各デバイスのステータス取得のレスポンス
export type deviceStatusResponse = {
    statusCode: number;
    body?: DeviceStatusType;
    message: string;
};

// 全シーン取得のレスポンス
export type scenesResponse = {
    statusCode: number;
    body?: Scene[];
    message: string;
};
