/// <reference no-default-lib="true"/>

declare namespace my {
  interface ISetStorageOptions {
    key: string;
    data: string | Record<string, any>;
    success?(): void;
    fail?(): void;
    complete?(): void;
  }

  /**
   * API để lưu trữ dữ liệu theo key, dữ liệu mới sẽ override dữ liệu cũ nếu chung key
   * @description
   *  - Mỗi app chỉ được lưu trữ không quá 6MB.
   *  - Dữ liệu của mỗi app đã được tách biệt, ứng dụng này không thể đọc được thông tin của ứng dụng khác.
   *  - Dữ liệu chỉ bị mất khi ứng dụng bị xoá hoặc reset devices. Việc cài đè ứng dụng ko làm mất dữ liệu được lưu trữ.
   *  - Trên ios, storage có hỗ trợ Itunes backup.
   */
  function setStorage(options: ISetStorageOptions): void;

  interface ISetStorageSyncOptions {
    key: string;
    data: string | Record<string, any>;
  }

  interface IGetStorageSuccessResult {
    readonly data: string | Readonly<Record<string, any>>;
  }

  interface IGetStorageOptions {
    key: string;
    success?(res: IGetStorageSuccessResult): void;
    fail?(): void;
    complete?(): void;
  }

  /**
   * my.getStorageInfo là api để đọc ra thông tin storage của app như dung lượng sử dụng hiện tại, giới hạn, các keys đã được lưu
   */
  function getStorage(option: IGetStorageOptions): void;

  interface IGetStorageSyncOptions {
    key: string;
  }

  interface IRemoveStorageOptions {
    success?(): void;
    fail?(): void;
    complete?(): void;
  }

  /**
   * my.removeStorage là api để delete dữ liệu đã được lưu theo key
   *
   */
  function removeStorage(options: IRemoveStorageOptions): void;

  interface IRemoveStorageSyncOptions {
    key: string;
  }

  function removeStorageSync(options: IRemoveStorageSyncOptions): void;

  interface IClearStorageOptions {
    success?: () => void;
    fail?: () => void;
    complete?: () => void;
  }

  /**
   * my.clearStorage là api để xoá toàn bộ dữ liệu của app.
   */
  function clearStorage(options?: IClearStorageOptions): void;

  interface IStorageInfo {
    readonly keys: ReadonlyArray<string>;
    readonly currentSize: string;
    readonly limitSize: string;
  }

  interface IGetStorageInfoOptions {
    success?(res: IStorageInfo): void;
    fail?(): void;
    complete?(): void;
  }

  /**
   * my.getStorageInfo là api để đọc ra thông tin storage của app như dung lượng sử dụng hiện tại, giới hạn, các keys đã được lưu
   */
  function getStorageInfo(options: IGetStorageInfoOptions): void;
}
