import nock from 'nock';
import { DeviceClient } from '../deviceCommand';
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

describe('SwithBotのBotの電源', () => {
    const client: DeviceClient = new DeviceClient(ACCESS_TOKEN);
    test('オンにできたか？', async () => {
        const response: SDKResponse = await client.setSwitchBot(
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
        const response: SDKResponse = await client.setSwitchBot(
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

describe('SwithBotのBotの電源（押すモード）', () => {
    const client: DeviceClient = new DeviceClient(ACCESS_TOKEN);
    it('押すモードテスト', async () => {
        const response: SDKResponse = await client.pressSwitchBot(
            SWITCHBOT_MOCKID,
        );

        expect(response).toEqual({
            command: 'press',
            statusCode: 200,
            message: '',
        });
    });
});
