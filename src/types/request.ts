import {
    AllStatus,
    DeviceType,
    DeviceCommandType,
    DeviceCommand,
    HumidifierMode,
    SetPositionMode,
} from './device';
import { RemoteCommand, RemoteCommandType, SetAll } from './remote';

// device Request
export type commandDeviceRequest = {
    device?: DeviceType;
    commandType: DeviceCommandType;
    command: DeviceCommand;
    parameter: string | number | SetPositionMode | HumidifierMode | AllStatus;
};

// remote Request
export type commandRemoteRequest = {
    commandType: RemoteCommandType;
    command: RemoteCommand;
    parameter: string | number | SetAll;
};

export type switchRequest = 'on' | 'off';
