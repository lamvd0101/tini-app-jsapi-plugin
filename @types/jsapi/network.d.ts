/// <reference no-default-lib="true"/>

declare namespace my {
  interface IHttpRequestSuccessResult {
    readonly data?: any;
    readonly status?: 1 | 2 | 11 | 12 | 13 | 14 | 15 | 19 | 20 | 23;
    readonly headers?: Readonly<Record<string, string>>;
  }

  interface IRequestTask extends Promise<IHttpRequestSuccessResult> {
    abort: () => void;
  }

  interface IHttpRequestOptions {
    /**
     * Đường dẫn muốn gọi tới.
     */
    url: string;

    /**
     * Cấu hình headers khi thực hiện gọi network.
     */
    headers?: Record<string, string>;

    /**
     * Phương thức gọi network. Mặc định sẽ là GET.
     */
    method?: 'GET' | 'POST';

    /**
     * Data kèm theo trong request.。
     */
    data?: Record<string, any>;

    /**
     * Request sẽ bị cancel sau khoảng thời gian timeout. Đơn vị là ms và mặc định là 30,000 (30s)
     */
    timeout?: number;

    /**
     * Quy định format trả về sau request. Mặc định là JSON. Bạn có thể truyền text nếu muốn nhận raw data.
     */
    dataType?: 'json' | 'text' | 'base64';

    /**
     * Callback function khi việc gọi network thành công.
     */
    success?(res: IHttpRequestSuccessResult): void;

    /**
     * Callback function khi việc gọi network thất bại.
     */
    fail?(res: any): void;

    /**
     * Callback function khi việc gọi network kết thúc cho dù thành công hay thất bại.
     */
    complete?(res: any): void;
  }

  /**
   * my.request là API dùng để thực hiện các network request.
   */
  function request(options: IHttpRequestOptions): IRequestTask;

  interface IUploadFileSuccessResult {
    readonly data: string;
    readonly statusCode: number;
    readonly header: Readonly<Record<string, string>>;
  }

  interface IUploadFileOptions {
    /**
     * Đường dẫn của server muốn upload
     */
    url: string;

    /**
     * Đường dẫn tạm thời của file
     */
    filePath: string;

    /**
     * Tên file của như sử dụng làm key trong form data, server sẽ lấy ra file từ field này
     */
    fileName: string;

    /**
     * Mime của file ví dụ image/png. Hiện chỉ support imag, videos, và audio (image / video / audio)
     */
    fileType?: 'image' | 'video' | 'audio';

    /**
     * HTTP 请求 Header , header 中不能设置 Referer
     */
    header?: Record<string, string>;

    /**
     * Cấu hình headers khi thực hiện gọi network.
     */
    formData?: Record<string, any>;

    /**
     * Callback function khi việc upload file thành công.
     */
    success?: (res?: IUploadFileSuccessResult) => void;

    // Callback function khi việc upload file thất bại.
    fail?(res: {error: 11 | 12 | 13}): void;

    // Callback function khi việc upload file kết thúc cho dù thành công hay thất bại.
    complete?(): void;
  }

  /**
   * my.uploadFile là API dùng để upload file từ máy lên server.
   * `Lưu ý:`
   * Chỉ thực hiện được việc upload các đường dẫn tạm thời của file ví dụ đường dẫn từ api chooseImage, downloadFile
   * https://developers.tiki.vn/docs/api/network/upload
   */
  function uploadFile(options: IUploadFileOptions): void;

  interface IDownloadFileSuccessResult {
    readonly apFilePath: string;
  }

  interface IDownloadFileFailResult {
    error: 12 | 13;
  }

  interface IDownloadFileOptions {
    url: string;
    header?: Record<string, string>;
    success?: (res?: IDownloadFileSuccessResult) => void;
    fail?(res: IDownloadFileFailResult): void;
    complete?(res: IDownloadFileFailResult | IDownloadFileSuccessResult): void;
  }

  /**
   * my.downloadFile là API dùng để dowload file về máy. File sẽ được lưu trữ tạm ở device.
   * `Lưu ý:`
   * Bạn vẫn có thể sử dụng my.request để download dữ liệu tuy nhiên api my.request chỉ trả về raw data của file.
   * Khác với my.request, api downloadFile sẽ thực hiện download về lưu file.
   * Sau đó trả về đường dẫn tạm thời có thể truy cập lại file bất cứ lúc nào.
   * https://developers.tiki.vn/docs/api/network/down-load
   */
  function downloadFile(options: IDownloadFileOptions): void;

  interface IConnectFailResult {
    readonly error: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  }

  interface IConnectSocketOptions {
    url: string;
    data?: string;
    header?: Record<string, string>;
    method?:
      | 'OPTIONS'
      | 'GET'
      | 'HEAD'
      | 'POST'
      | 'PUT'
      | 'DELETE'
      | 'TRACE'
      | 'CONNECT';
    success?(): void;
    fail?(res: IConnectFailResult): void;
    complete?(res?: IConnectFailResult): void;
  }

  /**
   * `my.connectSocket` được dùng để mở websocket connection tr trên ứng dụng.
   * Một ứng dụng chỉ có thể duy trì một WebSocket connection ở cùng một thời điểm.
   * Nếu api này được gọi khi có connection được mở trước đó, thì connection trước đó sẽ tự động bị đóng và mở connection mới.
   * https://developers.tiki.vn/docs/api/network/connect-socket
   */
  function connectSocket(options: IConnectSocketOptions): void;

  // my.onSocketOpen là API giúp lắng nghe sự kiện mở connection của WebSocket.
  // https://developers.tiki.vn/docs/api/network/on-socket-open
  function onSocketOpen(callback: (res?: any) => void): void;

  //
  function onSocketError(callback: (res?: any) => void): void;

  interface ISendSocketMessageOptions {
    data: string;
    isBuffer?: boolean;
    success?(): void;
    fail?(): void;
    complete?(): void;
  }

  function sendSocketMessage(options: ISendSocketMessageOptions): void;

  interface ISocketMessageResponse {
    readonly data: string;
    readonly isBuffer: boolean;
  }

  function onSocketMessage(
    callback: (res?: ISocketMessageResponse) => void,
  ): void;

  interface ICloseSocketOptions {
    success?(): void;
    fail?(): void;
    complete?(): void;
  }

  function closeSocket(options: ICloseSocketOptions): void;

  function onSocketClose(callback: (res?: any) => void): void;

  function offSocketClose(): void;
}
