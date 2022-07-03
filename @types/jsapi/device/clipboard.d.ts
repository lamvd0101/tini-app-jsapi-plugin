/// <reference no-default-lib="true"/>

declare namespace my {
  interface IClipboardOptions {
    success?(res: {text: string}): void;
    fail?(): void;
    complete?(res: {text: string}): void;
  }

  interface ISetClipboardOptions {
    text: string;
    fail?(): void;
    complete?(res: {success: boolean}): void;
    success?: (res: {success: boolean}) => void;
  }

  /**
   * chưa hỗ trợ
   */
  function getClipboard(options: IClipboardOptions): void;

  /**
   * chưa hỗ trợ
   */
  function setClipboard(options: ISetClipboardOptions): void;
}
