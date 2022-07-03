/// <reference no-default-lib="true"/>

declare namespace my {
  interface ILocation {
    latitude: number;
    longitude: number;
  }

  interface IGetLocationSuccessResult {
    readonly cityAdcode?: string;
    readonly countryCode?: string;
    readonly province?: string;
    readonly districtAdcode?: string;
    readonly pois?: ReadonlyArray<{
      readonly name: string;
      readonly address: string;
    }>;
    readonly city?: string;
    readonly district?: string;
    readonly streetNumber?: {
      readonly street: string;
      readonly number: string;
    };
    readonly country?: string;
    readonly latitude: string;
    readonly accuracy: string;
    readonly longitude: string;
    readonly horizontalAccuracy: string;
  }

  interface IGetLocationFailResult {
    readonly error: 11 | 12 | 13 | 14;
  }

  interface IGetLocationOptions {
    cacheTimeout?: number;
    type?: 0 | 1 | 2 | 3;
    success?: (res: IGetLocationSuccessResult) => void;
    fail?(res: IGetLocationFailResult): void;
    complete?(res: IGetLocationFailResult | IGetLocationSuccessResult): void;
  }

  /**
   * my.getLocation là API dùng để lấy thông tin vị trí địa lí hiện tại của device
   */
  function getLocation(options: IGetLocationOptions): void;

  interface IChooseLocationResult extends Readonly<ILocation> {
    readonly name: string;
    readonly address: string;
  }

  interface IChooseLocationOptions {
    success?: (res: IChooseLocationResult) => void;
    fail?(): void;
    complete?(res?: IChooseLocationResult): void;
  }
}
