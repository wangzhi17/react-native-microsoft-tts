import {TurboModule, TurboModuleRegistry} from "react-native";


interface TTSParams {
    voiceName: string,
    language: string,
    timbre: string,
    rate: string,
    allowBackgroundRecorder: string,
    allowBackgroundPlay: string
}

export interface Spec extends TurboModule {
    readonly getConstants: () => {};

    initMicroSynthesizer(speechSubscriptionKey: string, region: string): Promise<boolean>;

    setSynthesisVoiceParams(params: TTSParams): Promise<boolean>;

    startSynthesizerText(content: string, messageId: string, mp3Path: string): Promise<boolean>;

    stopSynthesizerText(messageId: string): Promise<string>;

    removeListener(): void;

    addListener(eventName: string): void;
}

export default TurboModuleRegistry.get<Spec>("RNMicrosoftTTS") as Spec | null;
