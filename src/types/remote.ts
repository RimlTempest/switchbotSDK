export type RemoteCommandType = 'command' | 'customize';

export type RemoteCommand =
    | 'turnOn'
    | 'turnOff'
    | 'setAll'
    | 'SetChannel'
    | 'volumeAdd'
    | 'volumeSub'
    | 'channelAdd'
    | 'channelSub'
    | 'setMute'
    | 'FastForward'
    | 'Rewind'
    | 'Next'
    | 'Previous'
    | 'Pause'
    | 'Play'
    | 'Stop'
    | 'swing'
    | 'timer'
    | 'lowSpeed'
    | 'middleSpeed'
    | 'highSpeed'
    | 'brightnessUp'
    | 'brightnessDown'
    | string;

export type SetAll = {
    powerState: 'on' | 'off';
    temperature: number;
    // 1 (auto), 2 (cool), 3 (dry), 4 (fan), 5 (heat);
    mode: 1 | 2 | 3 | 4 | 5;
    // 1 (auto), 2 (low), 3 (medium), 4 (high);
    fanSpeed: 1 | 2 | 3 | 4;
};

export type buttonCommand = 'up' | 'down';
