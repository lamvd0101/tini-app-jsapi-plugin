/// <reference no-default-lib="true"/>

declare namespace my {
  interface IInnerAudioContext {
    src: string;
    loop: boolean;
    paused: boolean;
    volume: number;
    buffered: number;
    duration: number;
    autoplay: boolean;
    startTime: number;
    currentTime: number;
    obeyMuteSwitch?: boolean;
    isRecordAudioPlayState?: boolean;
    play: () => void;
    stop: () => void;
    pause: () => void;
    seek: (position: number) => void;
    destroy: () => void;
    onCanplay: (callback: () => void) => void;
    onPlay: (callback: () => void) => void;
    onPause: (callback: () => void) => void;
    onStop: (callback: () => void) => void;
    onEnded: (callback: () => void) => void;
    onTimeUpdate: (callback: () => void) => void;
    onError: (callback: () => void) => void;
    onWaiting: (callback: () => void) => void;
    onSeeking: (callback: () => void) => void;
    onSeeked: (callback: () => void) => void;
    offCanplay: (callback: () => void) => void;
    offPlay: (callback: () => void) => void;
    offPause: (callback: () => void) => void;
    offStop: (callback: () => void) => void;
    offEnded: (callback: () => void) => void;
    offTimeUpdate: (callback: () => void) => void;
    offError: (callback: () => void) => void;
    offWaiting: (callback: () => void) => void;
    offSeeking: (callback: () => void) => void;
    offSeeked: (callback: () => void) => void;
  }

  /**
   * my.createAudioContext là API dùng để quản lý [Audio](https://developers.tiki.vn/docs/component/media/audio) component.
   * https://developers.tiki.vn/docs/api/media/audio/create-audio-context
   */
  function createAudioContext(): IInnerAudioContext;
}
