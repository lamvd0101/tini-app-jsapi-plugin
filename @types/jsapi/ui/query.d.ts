/// <reference no-default-lib="true"/> 
declare namespace my {
  interface ISelectorQuerySelectMethod {
    select(selector: string): ISelectorQueryMeasureMethod;
    selectAll(selector: string): ISelectorQueryMeasureMethod;
    selectViewport(): ISelectorQueryMeasureMethod;
  }

  type BoundingClientRectResult =
    | {
        width: number;
        height: number;
      }
    | {
        width: number;
        height: number;
        left: number;
        top: number;
        bottom: number;
        right: number;
      };

  interface IScrollOffsetResult {
    scrollTop: number;
    scrollLeft: number;
  }

  interface ISelectorQueryMeasureMethod {
    boundingClientRect(): ISelectorQuerySelectMethod & ISelectorQueryStopMethod;
    scrollOffset(): ISelectorQuerySelectMethod & ISelectorQueryStopMethod;
  }

  type SelectorQueryStopMethodExecResult = ReadonlyArray<
    Readonly<BoundingClientRectResult> | Readonly<IScrollOffsetResult> | null
  >;

  interface ISelectorQueryStopMethod {
    exec(callback: (result: SelectorQueryStopMethodExecResult) => {}): void;
  }

  interface ICreateSelectorQueryOptions {
    page: string;
  }
  /**
   * my.createSelectorQuery API dùng để tạo SelectorQuery object.
   * Với SelectorObject bạn có thể truy cập một số thông tin cơ bản của một node trên UI sử dụng css selector.
   * https://developers.tiki.vn/docs/api/ui/selector-query/selector-query
   */
  function createSelectorQuery(
    params?: ICreateSelectorQueryOptions
  ): ISelectorQuerySelectMethod;
}
