/// <reference no-default-lib="true"/>

declare namespace my {
  /**
   * `my.canIUse` là API dùng để kiểm tra xem Runtime của Mini App hiện tại có hỗ trợ một API cụ thể hay không
   * https://developers.tiki.vn/docs/api/basic/can-i-use
   */
  function canIUse(api: string): boolean;
}
