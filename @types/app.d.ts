/// <reference no-default-lib="true"/>

declare namespace TiniTypes.App {
  interface ReferrerInfo {
    appId: string;
    sourceServiceId: string;
    extraData: Record<string, any>;
  }

  interface LaunchShowOption {
    path: string;
    /**
     * Khi sử dụng my.navigateTo, my.redirectTo, params sẽ truyền vào trong query.
     * query là object parse từ URLSearchParams, xem thêm tại https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
     */
    query: Record<string, string>;
    referrerInfo?: ReferrerInfo;
  }

  /**
   * see more at https://developer.mozilla.org/en-US/docs/Web/API/Window/unhandledrejection_event
   */
  interface OnUnhandledRejectionEvent {
    promise: Promise<any>;
    reason: string;
  }
  interface OnUnhandledRejectionCallback<R> {
    (this: R, event: OnUnhandledRejectionEvent): void;
  }

  type AnyObject = Record<string, any>;
  type Instance<T> = Omit<T, BANNED_KEYS>;

  type BANNED_KEYS =
    | 'onLaunch'
    | 'onShow'
    | 'onHide'
    | 'onError'
    | 'onUnhandledRejection';
  type TCustom<T> = Omit<T, BANNED_KEYS>;
  type Options<T> = (Partial<T & ThisType<Instance<T>>> &
    Partial<AppEventHandlers<Instance<T>>>) &
    ThisType<Instance<T>>;
  interface Constructor {
    <T = AnyObject>(options: Options<T>): void;
  }

  interface AppEventHandlers<R = {}> {
    /**
     * *App lifecycle*。
     *
     * `onLaunch` sẽ được trigger khi lần đầu init app.
     *
     * AppCreate(`onLanch` => `onShow`) => PageCreate(`onLoad` => `onShow` => `onReady`)
     * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
     */
    onLaunch(this: R, options: LaunchShowOption): void | Promise<void>;

    /**
     * *App lifecycle*。
     *
     * `onShow` sẽ được trigger sau khi hàm `onLaunch`
     *  và trước khi khởi tạo Page.
     *
     * AppCreate(`onLanch` => `onShow`) => PageCreate(`onLoad` => `onShow` => `onReady`)
     * https://developers.tiki.vn/docs/framework/miniapp-page/life-cycle
     */
    onShow(this: R, options: LaunchShowOption): void | Promise<void>;
    /**
     * *App lifecycle*。
     *
     * `onShow` sẽ được trigger khi app bị ẩn.
     *
     */
    onHide(this: R): void | Promise<void>;
    /**
     *
     * @param error error detail/ error name
     */
    onError(this: R, error: string): void;
    onUnhandledRejection: OnUnhandledRejectionCallback<R>;
  }

  interface GetApp {
    <T = AnyObject>(): Omit<Instance<T>, keyof AppEventHandlers>;
  }
}
