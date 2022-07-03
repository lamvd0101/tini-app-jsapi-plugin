/// <reference no-default-lib="true"/>

declare namespace my {
  interface IIsLoggedIn {
    // Callback function khi thành công.
    success?: (res: boolean) => void;

    // Callback function khi thất bại.
    fail?: () => void;

    // Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.
    complete?: () => void;
  }

  /**
   * `my.isLoggedIn` là API để kiểm tra user đã logged in hay chưa.
   * https://developers.tiki.vn/docs/api/open/is-logged-in
   */
  function isLoggedIn(params: IIsLoggedIn): void;
}
