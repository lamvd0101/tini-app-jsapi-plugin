/// <reference no-default-lib="true"/>

declare namespace my {
  /**
   * my.reportAnalytics là API dùng để ghi nhận dữ liệu của một số sự kiện tuỳ chỉnh.
   *
   * @param eventName string
   * @param data object
   */
  function reportAnalytics(eventName: string, data: Record<string, any>): void;
}
