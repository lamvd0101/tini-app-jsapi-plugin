/// <reference no-default-lib="true"/> 
/// <reference lib="es5"/>
declare namespace my {
  interface IGetCenterLocationResult {
    readonly longitude: number;
    readonly latitude: number;
    readonly scale: number;
  }

  interface IShowRouteOptions {
    searchType: "bus" | "walk" | "drive" | "ride";
    startLat?: number;
    startLng?: number;
    endLat?: number;
    endLng?: number;
    throughPoints: Array<{
      lat: number;
      lng: number;
    }>;
    routeColor?: string;
    iconPath?: string;
    iconWidth?: number;
    routeWidth?: number;
    zIndex?: number;
    mode?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    city?: string;
    destinationCity?: string;
  }

  interface IGestureEnableOptions {
    isGestureEnable: 0 | 1;
  }

  interface IShowsScaleOptions {
    isShowsScale: 0 | 1;
  }

  interface IShowsCompassOptions {
    isShowsCompass: 0 | 1;
  }

  interface IUpdateComponentsOptions {
    scale?: number;
    longitude?: number;
    latitude?: number;
    command?: {
      markerAnim?: Array<{
        type?: number;
        markerId?: string;
      }>;
    };
    setting?: {
      gestureEnable?: 0 | 1;
      showScale?: 0 | 1;
      showCompass?: 0 | 1;
      tiltGesturesEnabled?: 0 | 1;
      trafficEnabled?: 0 | 1;
      showMapText?: 0 | 1;
      logoPosition?: { centerX?: number; centerY?: number };
    };
    markers?: any[];
    polylines?: any[];
    "include-points"?: any[];
    "include-padding"?: {
      left?: 0;
      right?: 0;
      top?: 0;
      bottom?: 0;
    };
  }

  interface ITranslateMarkerOptions {
    markerId: string;
    destination: {
      longitude: number;
      latitude: number;
    };

    autoRotate?: boolean;
    rotate?: number;
    duration?: number;
    animationEnd?: () => void;
  }

  interface IMapContext {
    moveToLocation(): void;
    gestureEnable(options: IGestureEnableOptions): void;
    showsScale(options: IShowsScaleOptions): void;
    showsCompass(options: IShowsCompassOptions): void;
    showRoute(options: IShowRouteOptions): void;
    clearRoute(): void;
    getCenterLocation(callback: (res: IGetCenterLocationResult) => {}): void;
    updateComponents(options: IUpdateComponentsOptions): void;
    translateMarker(options: ITranslateMarkerOptions): void;
  }

  /**
   * sắp hỗ trợ
   */
  function createMapContext(mapId: string): IMapContext;
}
