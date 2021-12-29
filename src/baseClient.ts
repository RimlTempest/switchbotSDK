import axios, { AxiosResponse, AxiosInstance } from 'axios';
import { commandDeviceRequest, commandRemoteRequest } from './types/request';
import { deviceResponse, SDKResponse } from './types/response';

export class BaseClient {
    #token: string;
    #baseURL = 'https://api.switch-bot.com/v1.0';
    protected http: AxiosInstance;
    constructor(token: string) {
        if (!token) {
            throw new Error('no token');
        }
        this.#token = token;
        this.http = axios.create({
            baseURL: this.#baseURL,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${this.#token}`,
            },
        });
    }

    // コマンド
    protected async setCommand(
        deviceId: string,
        command: commandDeviceRequest | commandRemoteRequest,
    ): Promise<SDKResponse> {
        let resultMessage = '';
        if (!deviceId) {
            throw new Error('no deviceId');
        }
        const devices: AxiosResponse<deviceResponse> = await this.http.post(
            `/devices/${deviceId}/commands`,
            {
                command: command.command,
                parameter: command.parameter,
                commandType: 'command',
            },
        );

        resultMessage = this.errorHandler(devices.status);

        return {
            command: command.command,
            statusCode: devices.status,
            message: resultMessage ? resultMessage : devices.data.message,
        };
    }

    protected turn(
        deviceId: string,
        power: 'on' | 'off' = 'on',
    ): Promise<SDKResponse> {
        const command = power === 'on' ? 'turnOn' : 'turnOff';
        return this.setCommand(deviceId, {
            command: command,
            parameter: 'default',
            commandType: 'command',
        });
    }

    // エラーハンドリング
    protected errorHandler(statusCode: number): string {
        let resultMessage = '';
        switch (statusCode) {
            case 151:
                resultMessage = 'device type error';
                break;

            case 152:
                resultMessage = 'device not found';
                break;

            case 160:
                resultMessage = 'command is not supported';
                break;

            case 161:
                resultMessage = 'device offline';
                break;

            case 171:
                resultMessage = 'hub device is offline';
                break;

            case 190:
                resultMessage = 'System error';
                break;

            case 400:
                resultMessage = 'bad request';
                break;

            case 401:
                resultMessage = 'unauthorized';
                break;

            case 403:
                resultMessage = 'forbidden';
                break;

            case 404:
                resultMessage = 'not found';
                break;

            case 406:
                resultMessage = 'Not Acceptable';
                break;

            case 415:
                resultMessage = 'Unsupported Media Type';
                break;

            case 422:
                resultMessage = 'Unprocessable Entity';
                break;

            case 429:
                resultMessage = 'Too Many Requests';
                break;

            case 500:
                resultMessage = 'internal server error';
                break;
        }
        return resultMessage;
    }
}
