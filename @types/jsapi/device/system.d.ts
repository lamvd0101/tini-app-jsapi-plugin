/// <reference no-default-lib="true"/>

declare namespace my {
  interface IGetSystemInfoSuccessResult {
    readonly fontSizeSetting: number;
    readonly system: string;
    readonly version: string;
    readonly brand: string;
    readonly currentBattery: string;
    readonly windowHeight: number;
    readonly pixelRatio: number;
    readonly platform: 'Android' | 'iOS' | 'iPhone OS';
    readonly screenHeight: number;
    readonly statusBarHeight: number;
    readonly language: string;
    readonly storage: string;
    readonly app: 'alipay' | 'UC' | 'QUARK' | 'AK' | 'amap' | 'YK';
    readonly titleBarHeight: number;
    readonly model: string;
    readonly screenWidth: number;
    readonly windowWidth: number;
  }

  interface IGetSystemInfoOptions {
    success?(res?: IGetSystemInfoSuccessResult): void;
    fail?(): void;
    complete?(): void;
  }

  /**
   * `my.getSystemInfo` là API dùng để lấy thông tin của hệ thống.
   * https://developers.tiki.vn/docs/api/device/get-system-info
   */
  function getSystemInfo(options: IGetSystemInfoOptions): void;

  /**
   * chưa hỗ trợ
   */
  function getSystemInfoSync(): IGetSystemInfoSuccessResult;
}
