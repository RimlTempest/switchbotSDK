import nock from 'nock';
import { RemoteClient } from '../remoteCommand';
import { SDKResponse } from '../types/response';

const ACCESS_TOKEN = 'mockToken';
const SWITCHBOT_MOCKID = 'SwitchBotId';
const ENDPOINT = 'https://api.switch-bot.com';
const CLIENT_PATH = '/v1.0/devices';
const COMMANDS_PATH = `${CLIENT_PATH}/${SWITCHBOT_MOCKID}/commands`;

beforeEach(() => {
    nock(ENDPOINT)
        .post(COMMANDS_PATH)
        .reply(200, {
            command: 'turnOn',
            statusCode: 100,
            message: '',
        })
        .post(COMMANDS_PATH)
        .reply(200, {
            command: 'turnOff',
            statusCode: 100,
            message: '',
        })
        .post(COMMANDS_PATH)
        .reply(200, {
            command: 'press',
            statusCode: 100,
            message: '',
        });
    // TODO: 異常系追加
});

// 電源オンオフ共通のテスト

describe('赤外線デバイスの電源', () => {
    const client: RemoteClient = new RemoteClient(ACCESS_TOKEN);
    test('オンにできたか？', async () => {
        const response: SDKResponse = await client.setRemoteDevice(
            SWITCHBOT_MOCKID,
            'on',
        );

        expect(response).toEqual({
            command: 'turnOn',
            statusCode: 200,
            message: '',
        });
    });
    test('オフにできたか？', async () => {
        const response: SDKResponse = await client.setRemoteDevice(
            SWITCHBOT_MOCKID,
            'off',
        );

        expect(response).toEqual({
            command: 'turnOff',
            statusCode: 200,
            message: '',
        });
    });
});
