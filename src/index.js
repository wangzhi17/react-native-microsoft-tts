import {NativeModules} from "react-native";
import NativeMicrosoftTTS from './NativeMicrosoftTTS'

const isTurboModuleEnabled = global.__turboModuleProxy != null;
const MicrosoftTTS = isTurboModuleEnabled ? NativeMicrosoftTTS : NativeModules.MicrosoftTTS
export default MicrosoftTTS
