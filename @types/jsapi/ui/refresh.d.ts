/// <reference no-default-lib="true"/> 
declare namespace my {
  interface IStartPullDownRefreshOptions {
    success?: () => void;
    fail?: () => void;
    complete?: () => void;
  }
  interface IStopPullDownRefreshOptions {
    success?: () => void;
    fail?: () => void;
    complete?: () => void;
  }
  /**
   * `my.stopPullDownRefresh` là api để stop loading khi đã gọi `my.startPullDownRefresh` hoặc manual pull down.
   *  Khi đã có được dữ liệu, phải gọi hàm này để tắt loading.
   *  https://developers.tiki.vn/docs/api/ui/pull-down/stop-pull-refresh
   */
  function stopPullDownRefresh(options?: IStartPullDownRefreshOptions): void;

  /**
   * `my.startPullDownRefresh` là api để active tính năng pull down to refresh,
   * khi được gọi sẽ có animation loading tương đương với việc manual pull down list.
   * Hàm `onPullDownRefresh` của page sẽ được trigger.
   * Sau khi đã lấy được dữ liệu, có thể gọi `my.stopPullDownRefresh` để stop loading.
   * https://developers.tiki.vn/docs/api/ui/pull-down/start-pull-refresh
   */
  function startPullDownRefresh(options?: IStopPullDownRefreshOptions): void;
}
