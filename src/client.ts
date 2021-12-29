import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { BaseClient } from './baseClient';
import {
    deviceResponse,
    deviceStatusResponse,
    scenesResponse,
    SDKResponse,
} from './types/response';

export class SwitchBotClient extends BaseClient {
    constructor(token: string) {
        super(token);
    }
    // 全デバイスの取得
    public async getDevices(): Promise<AxiosResponse<deviceResponse>> {
        const options: AxiosRequestConfig = {
            url: `/devices`,
            method: 'GET',
        };
        const device: AxiosResponse<deviceResponse> = await this.http(options);
        return device;
    }

    // 各デバイスの取得
    public async getDevice(
        deviceId: string,
    ): Promise<AxiosResponse<deviceStatusResponse>> {
        const options: AxiosRequestConfig = {
            url: `/devices/${deviceId}/status`,
            method: 'GET',
        };
        const device: AxiosResponse<deviceStatusResponse> = await this.http(
            options,
        );
        return device;
    }

    // 全シーンを取得
    public async getScenes(): Promise<AxiosResponse<scenesResponse>> {
        const options: AxiosRequestConfig = {
            url: `/scenes`,
            method: 'GET',
        };
        const device: AxiosResponse<scenesResponse> = await this.http(options);
        return device;
    }

    // シーンコマンド
    public async setSceneCommand(sceneId: string): Promise<SDKResponse> {
        let resultMessage = '';
        if (!sceneId) {
            throw new Error('no sceneId');
        }
        const options: AxiosRequestConfig = {
            url: `/scenes/${sceneId}/execute`,
            method: 'POST',
        };
        const devices: AxiosResponse<scenesResponse> = await this.http(options);

        resultMessage = this.errorHandler(devices.status);

        return {
            command: 'scene',
            statusCode: devices.status,
            message: resultMessage ? resultMessage : devices.data.message,
        };
    }
}
