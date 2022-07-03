/// <reference no-default-lib="true"/>

declare namespace my {
  interface IWebViewContext {
    postMessage(msg: Record<string, any>): void;
  }

  /**
   * `web-view` là một container componet dùng để hiển thị nội dung html trong một miniapp.
   * Vì miniapp không thể nhảy qua một trang web ngoài tiki, thế nên để hiện thị nội dung trang đó bạn có thể dùng web-view để hiển thị.
   * https://developers.tiki.vn/docs/component/basic/view-container/webview#sample-code
   */
  function createWebViewContext(webviewId: string): IWebViewContext;
}
