/// <reference no-default-lib="true"/> 
declare namespace my {
  interface IPageScrollToOptions {
    scrollTop?: number;
    duration?: number;
    selector?: string;
    success?: () => void;
    fail?: () => void;
    complete?: () => void;
  }

  /**
   * chưa hỗ trợ
   */
  function pageScrollTo(options: IPageScrollToOptions): void;
}
