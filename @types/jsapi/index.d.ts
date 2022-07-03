/// <reference no-default-lib="true"/>

/// <reference path="./device/index.d.ts" />
/// <reference path="./media/index.d.ts" />
/// <reference path="./open/index.d.ts" />
/// <reference path="./ui/index.d.ts" />

/// <reference path="./analytics.d.ts" />
/// <reference path="./auth.d.ts" />
/// <reference path="./cache.d.ts" />
/// <reference path="./file.d.ts" />
/// <reference path="./location.d.ts" />
/// <reference path="./network.d.ts" />
/// <reference path="./payment.d.ts" />

declare namespace my {
  interface IBoundingClientRect {
    width: number;
    height: number;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  }

  type ScrollOffset = Record<'scrollTop' | 'scrollLeft', number>;

  type SelectorResult = ReadonlyArray<
    null | Readonly<IBoundingClientRect> | Readonly<ScrollOffset>
  >;

  type ISelectorExecCallback = (ret: SelectorResult) => void;

  interface ISelectorQuery {
    select(selector: string): ISelectorQuery;
    selectAll(selector: string): ISelectorQuery;
    selectViewport(): ISelectorQuery;
    boundingClientRect(): ISelectorQuery;
    scrollOffset(): ISelectorQuery;
    exec(ret: ISelectorExecCallback): void;
  }

  /**
   * Để truy cập thông tin của một thành phần trên UI nhằm mục tính tính toán cho việc hiện thị,
   * bạn có thể sử dụng SelectorQuery để select và lấy thông tin.
   * Methods SelectorQuery sẽ bao gồm nhóm các phương thức selector và actions.
   * @param {Record<string, any>} [params]
   * @return {*}  {ISelectorQuery}
   * https://developers.tiki.vn/docs/api/ui/selector-query/selector-query#selector-query
   */
  function createSelectorQuery(params?: Record<string, any>): ISelectorQuery;

  /**
   * `my.canIUse` là API dùng để kiểm tra xem Runtime của Mini App hiện tại có hỗ trợ một API cụ thể hay không
   */
  function canIUse(query: string): boolean;
}
