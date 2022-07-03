/// <reference no-default-lib="true"/>

/// <reference path="./audio.d.ts" />

declare namespace my {
  interface IChooseImageSuccessResult {
    readonly apFilePaths?: ReadonlyArray<string>;
  }

  interface IChooseImageOptions {
    count?: number;
    sizeType?: string[];
    sourceType?: string[];
    success?: (res?: IChooseImageSuccessResult) => void;
    fail?(error: any): void;
    complete?(res: any): void;
  }

  /**
   * `my.chooseImage` là API dùng để lấy hình từ camera hoặc từ album.
   * https://developers.tiki.vn/docs/api/media/image/choose-image
   */
  function chooseImage(options: IChooseImageOptions): void;

  interface IGetImageInfoSuccessResult {
    readonly width: number;
    readonly height: number;
    readonly path: string;
    readonly orientation:
      | 'up'
      | 'down'
      | 'left'
      | 'right'
      | 'up-mirrored'
      | 'down-mirrored'
      | 'left-mirrored'
      | 'right-mirrored';
    readonly type: string;
  }

  interface IGetImageInfoOptions {
    src: string;
    success?: (res?: IGetImageInfoSuccessResult) => void;
    fail?(): void;
    complete?(): void;
  }

  /**
   * my.getImageInfo là API dùng để lấy thông tin của 1 image. Image có thể là từ remote, từ đường dẫn local hoặc từ resource của app.
   * https://developers.tiki.vn/docs/api/media/image/get-image-info
   */
  function getImageInfo(options: IGetImageInfoOptions): void;

  interface ISaveImageOptions {
    url: string;
    success?(): void;
    fail?(error: any): void;
    complete?(): void;
  }

  /**
   * my.saveImage là API dùng để lưu 1 remote Image vào gallery của device
   * https://developers.tiki.vn/docs/api/media/image/save-image
   */
  function saveImage(options: ISaveImageOptions): void;

  interface ICompressImageSuccessResult {
    apFilePaths: string[];
  }
  interface ICompressImageOptions {
    apFilePaths: string[];
    compressLevel: 0 | 1 | 2 | 3 | 4;
    success?(res: ICompressImageSuccessResult): void;
    fail?(): void;
    complete?(): void;
  }

  /**
   * `my.compressImage` là API dùng để compress nhiều images 1 lúc để có dung lượng nhỏ hơn nhưng vẫn giữ nguyên kích thước gốc.
   * https://developers.tiki.vn/docs/api/media/image/compress-image
   */
  function compressImage(options: ICompressImageOptions): void;

  interface IVideoContext {
    play(): void;
    pause(): void;
    stop(): void;
    seek(position: number): void;
    requestFullScreen(direction: 0 | 90 | -90): void;
    exitFullScreen(): void;
    showStatusBar(): void;
    hideStatusBar(): void;
  }

  /**
   * my.createVideoContext là API dùng để quản lý [Video](https://developers.tiki.vn/docs/api/media/video/create-video-context) component.
   * https://developers.tiki.vn/docs/api/media/video/create-video-context
   */
  function createVideoContext(id: string): IVideoContext;
}
