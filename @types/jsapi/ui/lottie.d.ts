/// <reference no-default-lib="true"/> 
declare namespace my {
  interface ILottieContext {
    id?: string;
    page?: number;
    paused: boolean;
    isPlugin?: any;
    play: () => void;
    stop: () => void;
    pause: () => void;
    setSpeed: (value: number) => void;
    getDuration: () => void;
    goToAndPlay: (value: number) => void;
    goToAndStop: (value: number) => void;
    getLottieInfo: () => void;
    fillVariableValue: () => void;
    downgradeToPlaceholder: () => void;
    playFromMinToMaxFrame: (min: number, max: number) => void;
    playFromMinToMaxProgress: (min: number, max: number) => void;
  }

  /**
   * my.createLottieContext là API dùng để quản lý Lottie component.
   * https://developers.tiki.vn/docs/api/media/lottie/create-lottie-context
   */
  function createLottieContext(id: string): ILottieContext;
}
