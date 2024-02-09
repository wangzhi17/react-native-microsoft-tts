package cn.wangzhi.microsoft.tts;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableMap;

public class MicrosoftTTSModule extends NativeMicrosoftTTSSpec{
    public MicrosoftTTSModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public void initMicroSynthesizer(String speechSubscriptionKey, String region, Promise promise) {

    }

    @Override
    public void setSynthesisVoiceParams(ReadableMap params, Promise promise) {

    }

    @Override
    public void startSynthesizerText(String content, String messageId, String mp3Path, Promise promise) {

    }

    @Override
    public void stopSynthesizerText(String messageId, Promise promise) {

    }

    @Override
    public void removeListener() {

    }

    @Override
    public void addListener(String eventName) {

    }
}
