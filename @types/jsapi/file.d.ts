/// <reference no-default-lib="true"/>

declare namespace my {
  interface ISaveFileSuccessResult {
    readonly savedFilePath: string;
  }

  interface ISaveFileOptions {
    tempFilePath: string;
    success?: (res?: ISaveFileSuccessResult) => void;
    fail?(): void;
    complete?(): void;
  }

  /**
   * `my.saveFile` là API dùng lưu lại file về device từ 1 đường dẫn tạm thời (local temporary file)
   *  https://developers.tiki.vn/docs/api/file/save-file
   */
  function saveFile(options: ISaveFileOptions): void;

  interface IFileListItem {
    filePath: string;
    createTime: number;
    size: number;
  }

  interface IGetSavedFileListSuccessResult {
    readonly errMsg: string;
    fileList: ReadonlyArray<Readonly<IFileListItem>>;
  }

  interface IGetSavedFileListOptions {
    success?: (res?: IGetSavedFileListSuccessResult) => void;
    fail?(): void;
    complete?(): void;
  }

  /**
   * my.getSavedFileList là API dùng để lấy thông tin tất cả các file đã đươc cache (local cache file)
   * https://developers.tiki.vn/docs/api/file/get-saved-file-list
   */
  function getSavedFileList(options: IGetSavedFileListOptions): void;

  interface IGetSavedFileInfoSuccessResult {
    readonly errMsg: string;
    readonly createTime: number;
    readonly size: number;
  }

  interface IGetSavedFileInfoOptions {
    filePath: string;
    success?: (res?: IGetSavedFileInfoSuccessResult) => void;
    fail?(): void;
    complete?(): void;
  }

  /**
   * `my.getSavedFileInfo` là API dùng để lấy thông tin file đã đươc cache (local cache file)
   * https://developers.tiki.vn/docs/api/file/get-saved-file-info
   */
  function getSavedFileInfo(options: IGetSavedFileInfoOptions): void;

  interface IRemoveSavedFileOptions {
    filePath: string;
    success?(): void;
    fail?(): void;
    complete?(): void;
  }

  /**
   * my.removeSavedFile là API dùng để xoá 1 local cache file
   * https://developers.tiki.vn/docs/api/file/remove-saved-file
   */
  function removeSavedFile(options: IRemoveSavedFileOptions): void;

  interface IGetFileInfoSuccessResult {
    readonly size: number;
    readonly digest: string;
  }

  interface IGetFileInfoOptions {
    apFilePath: string;
    digestAlgorithm?: 'md5' | 'sha1';
    success?(res: IGetFileInfoSuccessResult): void;
    fail?(): void;
    complete?(): void;
  }

  /**
   * `my.getFileInfo` là API dùng để lấy thông tin file (có thể là local temporary file hoặc local cache file)
   * https://developers.tiki.vn/docs/api/file/get-file-info
   * @param {IGetFileInfoOptions} options
   */
  function getFileInfo(options: IGetFileInfoOptions): void;
}
