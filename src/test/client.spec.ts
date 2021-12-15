import { AxiosResponse } from 'axios';
import nock from 'nock';
import { SwitchBotClient } from '../client';
import { deviceResponse, deviceStatusResponse } from '../types/device';

const ACCESS_TOKEN = 'mockToken';
const SWITCHBOT_MOCKID = 'SwitchBotId';
const REMOTE_MOCKID = 'RemoteId';
const ENDPOINT = 'https://api.switch-bot.com';
const CLIENT_PATH = '/v1.0/devices';
const STATUS_PATH = `${CLIENT_PATH}/SwitchBotId/status`;

beforeEach(() => {
    nock(ENDPOINT)
        .get(CLIENT_PATH)
        .reply(200, {
            statusCode: 100,
            body: {
                deviceList: [
                    {
                        deviceId: SWITCHBOT_MOCKID,
                        deviceName: 'BOT',
                        deviceType: 'Bot',
                        enableCloudService: true,
                        hubDeviceId: '000000000000',
                    },
                ],
                infraredRemoteList: [
                    {
                        deviceId: REMOTE_MOCKID,
                        deviceName: 'TVRight',
                        remoteType: 'TV',
                        hubDeviceId: '000000000000',
                    },
                ],
            },
            message: '',
        })
        // TODO: 異常系追加
        .get(STATUS_PATH)
        .reply(200, {
            statusCode: 100,
            body: {
                deviceId: SWITCHBOT_MOCKID,
                deviceType: 'Bot',
                hubDeviceId: '000000000000',
                power: 'turnOn',
            },
            message: '',
        });
    // TODO: 異常系追加
});

describe('全デバイスの取得', () => {
    const client: SwitchBotClient = new SwitchBotClient(ACCESS_TOKEN);
    test('全デバイス取得できたか？', async () => {
        const response: AxiosResponse<deviceResponse> =
            await client.getDevices();

        expect(response.data).toEqual({
            statusCode: 100,
            body: {
                deviceList: [
                    {
                        deviceId: SWITCHBOT_MOCKID,
                        deviceName: 'BOT',
                        deviceType: 'Bot',
                        enableCloudService: true,
                        hubDeviceId: '000000000000',
                    },
                ],
                infraredRemoteList: [
                    {
                        deviceId: REMOTE_MOCKID,
                        deviceName: 'TVRight',
                        remoteType: 'TV',
                        hubDeviceId: '000000000000',
                    },
                ],
            },
            message: '',
        });
    });
});

describe('デバイスのステータス取得', () => {
    const client: SwitchBotClient = new SwitchBotClient(ACCESS_TOKEN);
    it('ステータスが取得できたか？', async () => {
        const response: AxiosResponse<deviceStatusResponse> =
            await client.getDevice(SWITCHBOT_MOCKID);

        expect(response.data).toEqual({
            statusCode: 100,
            body: {
                deviceId: SWITCHBOT_MOCKID,
                deviceType: 'Bot',
                hubDeviceId: '000000000000',
                power: 'turnOn',
            },
            message: '',
        });
    });
});
