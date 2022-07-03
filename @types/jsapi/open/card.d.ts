/// <reference no-default-lib="true"/>

declare namespace my {
  function openCardList(): void;

  interface IOpenMerchantCardListOptions {
    partnerId: string;
  }

  function openMerchantCardList(params: IOpenMerchantCardListOptions): void;

  interface IOpenCardDetailOptions {
    passId: string;
  }

  function openCardDetail(params: IOpenCardDetailOptions): void;

  function openVoucherList(): void;

  interface IOpenMerchantVoucherListOptions {
    partnerId: string;
  }

  function openMerchantVoucherList(
    params: IOpenMerchantVoucherListOptions,
  ): void;

  type OpenDetailOptions =
    | {
        passId: string;
      }
    | {
        partnerId: string;
        serialNumber: string;
      };
  function openVoucherDetail(params: OpenDetailOptions): void;

  function openKBVoucherDetail(params: OpenDetailOptions): void;

  function openTicketList(): void;

  function openMerchantTicketList(params: {partnerId: string}): void;

  function openTicketDetail(params: OpenDetailOptions): void;

  type AddCardAuthSuccessResult =
    | {
        readonly success: true;
        readonly resultStatus: string;
        readonly result: {
          readonly app_id: string;
          readonly auth_code: string;
          readonly state: string;
          readonly scope: string;
          readonly template_id: string;
          readonly request_id: string;
          readonly out_string: string;
        };
      }
    | {
        readonly success: false;
        readonly code:
          | 'JSAPI_SERVICE_TERMINATED'
          | 'JSAPI_PARAM_INVALID'
          | 'JSAPI_SYSTEM_ERROR';
      };

  interface IAddCardAuthOptions {
    url: string;
    success?(res: AddCardAuthSuccessResult): void;
    fail?(): void;
    complete?(res?: AddCardAuthSuccessResult): void;
  }

  /**
   * Chưa hỗ trợ
   */
  function addCardAuth(options: IAddCardAuthOptions): void;
}
