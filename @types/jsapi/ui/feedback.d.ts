/// <reference no-default-lib="true"/> 
/// <reference lib="es5"/>
declare namespace my {
  interface IShowToastOptions {
    content?: string;

    type?: "success" | "fail" | "exception" | "none";
    duration?: number;
    success?: () => void;
    fail?: () => void;
    complete?: () => void;
  }

  /**
   * `my.showToast` là api để hiển thị toast popup slide từ top và tự hide đi sau 1 khoảng thời gian được set hoặc dùng api my.hideToast
   */
  function showToast(options: IShowToastOptions): void;

  interface IHideToastOptions {
    success?: () => void;
    fail?: () => void;
    complete?: () => void;
  }

  /**
   *my.hideToast là api để hide toast thủ công.
   *
   */
  function hideToast(options?: IHideToastOptions): void;

  interface IAlertOptions {
    title?: string;
    content?: string;

    buttonText?: string;

    success?: () => void;

    fail?: () => void;

    complete?: () => void;
  }
  /**
   *my.alert là api để hiển thị Alert. Có thể set được title, content, buttonText...
   *
   */
  function alert(options: IAlertOptions): void;

  interface IConfirmSuccessResult {
    readonly confirm: boolean;
    readonly ok?: boolean;
  }

  interface IConfirmOptions {
    title?: string;
    content?: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    success?: (result: IConfirmSuccessResult) => void;
    fail?: (result: IConfirmSuccessResult) => void;
    complete?: (result: IConfirmSuccessResult) => void;
  }

  /**
   * my.confirm là api để hiển thị Confirm popup. Có thể set được title, content, text của button confirm và cancel
   * https://developers.tiki.vn/docs/api/ui/feedback/confirm
   */
  function confirm(options: IConfirmOptions): void;

  interface IPromptSuccessResult {
    readonly ok: boolean;
    readonly inputValue?: string;
  }

  interface IPromptOptions {
    title?: string;

    message: string;

    placeholder?: string;

    align?: "left" | "center" | "right";

    okButtonText?: string;

    cancelButtonText?: string;

    success?: (result: IPromptSuccessResult) => void;

    fail?: () => void;

    complete: () => void;
  }
  /**
   *my.prompt là api để hiển thị prompt popup, để user có thể nhập giá tri vào.
   * https://developers.tiki.vn/docs/api/ui/feedback/prompt
   */
  function prompt(options: IPromptOptions): void;

  interface IShowLoadingOptions {
    content?: string;
    delay?: number;
    success?(): void;
    fail?(): void;
    complete?(): void;
  }

  /**
   * `my.showLoading` là api để hiển thị Loading. Có thể manual tắt loading bằng cách dùng api `my.hideLoading`.
   */
  function showLoading(options?: string | IShowLoadingOptions): Promise<void>;

  interface IHideLoadingOptions {
    page?: TiniTypes.Page.Instance<TiniTypes.Page.AnyObject, TiniTypes.Page.AnyObject>;
  }

  /**
   * `my.hideLoading` là api để hide loading.
   */
  function hideLoading(options?: IHideLoadingOptions): Promise<void>;

  interface IShowActionSheetSuccessResult {
    readonly index: number;
  }

  interface IShowActionSheetOptions {
    title?: string;
    items: string[];
    cancelButtonText?: string;
    destructiveBtnIndex?: number;

    badges?: Array<{
      index: number;
      type: "none" | "point" | "num" | "text" | "more";
      text?: string;
    }>;

    success?(res: IShowActionSheetSuccessResult): void;
    fail?(): void;
    complete?(res?: IShowActionSheetSuccessResult): void;
  }

  /**
   * `my.showActionSheet` là api để hiển thị bottom popup để user có thể chọn option.
   * https://developers.tiki.vn/docs/api/ui/feedback/show-action-sheet
   */
  function showActionSheet(options: IShowActionSheetOptions): void;
}
