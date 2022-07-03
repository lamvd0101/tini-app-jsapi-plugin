/// <reference no-default-lib="true"/>

declare namespace my {
  interface INavigateToMiniProgram {
    appId: string;
    path?: string;
    extraData?: Record<string, any>;
    envVersion?: 'develop' | 'trial' | 'release';
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }

  /**
   * my.navigateToMiniApp là API dùng để di chuyển giữa các app.
   */
  function navigateToMiniProgram(options: INavigateToMiniProgram): void;

  interface INavigateBackMiniProgram {
    extraData?: Record<string, any>;
    success?(res: any): void;
    fail?(res: any): void;
    complete?(res: any): void;
  }

  /**
   * my.navigateBackMiniApp là API dùng để quay lại app trước đó. API chỉ gọi thành công khi app hiện tại được mở từ một app khác trước đó.
   * https://developers.tiki.vn/docs/api/ui/route/navigate-back-miniapp#gi%E1%BB%9Bi-thi%E1%BB%87u
   */
  function navigateBackMiniProgram(options: INavigateBackMiniProgram): void;
}
