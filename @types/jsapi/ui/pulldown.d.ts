/// <reference no-default-lib="true"/> 
declare namespace my {
  interface ICanPullDownOptions {
    canPullDown: boolean;
  }

  /**
   * chưa hỗ trợ
   */
  function setCanPullDown(options: ICanPullDownOptions): void;
}
