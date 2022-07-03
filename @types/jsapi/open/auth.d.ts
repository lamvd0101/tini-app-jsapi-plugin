/// <reference no-default-lib="true"/>

declare namespace my {
  type GetAuthCodeOptionsScope = 'auth_base' | 'auth_user' | 'auth_zhima';

  interface IGetAuthCodeSuccessResult {
    /**
     * token code
     *
     */
    readonly authCode: string;

    /**
     * Key là tên scope, value là error code
     */
    readonly authErrorScope: Readonly<Record<GetAuthCodeOptionsScope, any>>;

    /**
     * Danh sách các scopes được users cho phép
     */
    readonly authSuccessScope: Readonly<Record<GetAuthCodeOptionsScope, any>>;
  }

  interface IGetAuthCodeOptions {
    /**
     * Danh sách các scopes, mặc định là []
     */
    scopes?: GetAuthCodeOptionsScope | GetAuthCodeOptionsScope[];

    /**
     * Callback function khi thành công.
     */
    success?(result: IGetAuthCodeSuccessResult): void;

    /**
     * Callback function khi thất bại.
     */
    fail?(): void;

    /**
     * Callback function khi hoàn tất tác vụ cho dù thành công hay thất bại.
     */
    complete?(): void;
  }

  /**
   * my.getAuthCode là API để lấy ra auth code của một user.
   * Thông qua việc sử dụng auth code, lập trình viên của Mini App
   * có thể gọi tới các Open API của Tiki để sử dụng các tính năng phức tạp hơn.
   */
  function getAuthCode(options: IGetAuthCodeOptions): void;
}
