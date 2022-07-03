/// <reference no-default-lib="true"/>

declare namespace my {
  interface IMakePaymentParams {
    // Order Id để thực hiện payment
    orderId: string;

    /**
     * Callback function khi payment được thực hiện thành công, argument luôn là success
     */
    success: () => void;

    /**
     * Callback function khi việc gọi payment thất bại.
     */
    fail: () => void;

    /**
     * Callback function khi việc gọi payment kết thúc cho dù thành công hay thất bại.
     *
     */
    complete: () => void;
  }

  /**
   * `my.makePayment` là API dùng để tạo payment. Luồng payment như sau:
   * ## Lưu ý:
   * Việc `makePayment` cần user phải được login từ trước. Sử dụng jsapi my.getAuthCode để lấy accessToken và sau đó tạo order.
   * *Sample*:
   * ```js
   * const app = getApp();
   *	Page({
   *		data: {
   *		cart: app.cart
   *		},
   *		onShow() {
   *		this.setData({ cart: app.cart });
   *		},
   *		doPayment() {
   *		my.getAuthCode({
   *		scope: [],
   *		success: (res) => {
   *			my.makePayment({
   *			orderId: '67328847745515542',
   *			success: (res) => {
   *			my.alert({ title: 'payment', content: res });
   *			}
   *			});
   *		}
   *		});
   *		}
   *	});
   * ```
   * https://developers.tiki.vn/docs/api/open/make-payment
   */
  function makePayment(params: IMakePaymentParams): void;
}
