import {
    AllStatus,
    DeviceCommand,
    DeviceCommandType,
    DeviceType,
    HumidifierMode,
    SetPositionMode,
} from './device';
import { RemoteCommand, RemoteCommandType, SetAll, SetChannel } from './remote';

// device Request
export type commandDeviceRequest = {
    device?: DeviceType;
    commandType: DeviceCommandType;
    command: DeviceCommand;
    commandParam:
        | string
        | number
        | SetPositionMode
        | HumidifierMode
        | AllStatus;
};

// remote Request
export type commandRemoteRequest = {
    commandType: RemoteCommandType;
    command: RemoteCommand;
    commandParam: string | number | SetAll | SetChannel;
};

export type switchRequest = 'on' | 'off';
