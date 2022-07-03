/// <reference no-default-lib="true"/> 
declare namespace my {
  interface IChoosePhoneContactSuccessResult {
    readonly name: string;
    readonly mobile: string;
  }

  interface IChoosePhoneContactFailResult {
    readonly error: 10 | 11;
  }

  interface IChoosePhoneContactOptions {
    success?(result: IChoosePhoneContactSuccessResult): void;
    fail?(result: IChoosePhoneContactFailResult): void;
    complete?(
      result: IChoosePhoneContactSuccessResult | IChoosePhoneContactFailResult
    ): void;
  }

  /**
   * `my.choosePhoneContact` là API dùng để chọn một liên hệ từ Danh bạ trong điện thoại của người dùng
   * *Chỉ hỗ trợ từ version 1.77.14 trở lên*
   * https://developers.tiki.vn/docs/api/device/choose-phone-contact
   */
  function choosePhoneContact(options: IChoosePhoneContactOptions): void;
}
