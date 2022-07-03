/// <reference no-default-lib="true"/> 
declare namespace my {
  interface ISwitchTabOptions extends INavigateBaseCallbackOptions {
    url: string;
  }
  /**
   * `my.navigateTo` không dùng để chuyển đổi trang giữa các tab trong TabBar. Để thực hiện tác vụ đó bạn cần dùng `my.switchTab`
   */
  function switchTab(options: ISwitchTabOptions): void;

  interface IHideTabBarOptions {
    animation?: boolean;

    success?: () => void;

    fail?: () => void;

    complete?: () => void;
  }

  /**
   * `my.hideToast` là api để hide toast thủ công.
   * https://developers.tiki.vn/docs/api/ui/feedback/hide-toast
   */
  function hideTabBar(options: IHideTabBarOptions): void;

  interface IRemoveTabBarBadgeOptions {
    /**
     * 标签页的项数序号，从左边开始计数。
     */
    index: number;

    success?: () => void;

    fail?: () => void;

    complete?: () => void;
  }

  /**
   * `my.removeTabBarBadge` là API để bỏ đi badge text cho một Tab Bar Item
   * https://developers.tiki.vn/docs/api/ui/tab-bar/remove-tab-bar-badge
   */
  function removeTabBarBadge(options: IRemoveTabBarBadgeOptions): void;

  interface ISetTabBarBadgeOptions {
    index: number;
    text: string;

    success?: () => void;

    fail?: () => void;

    complete?: () => void;
  }

  /**
   * `my.setTabBarBadge` là API để bỏ đi badge text cho một Tab Bar Item
   *  https://developers.tiki.vn/docs/api/ui/tab-bar/set-tab-bar-badge
   *
   */
  function setTabBarBadge(options: ISetTabBarBadgeOptions): void;

  interface ISetTabBarItemOptions {
    index: number;
    text: string;
    iconPath: string;
    selectedIconPath: string;

    success?: () => void;

    fail?: () => void;

    complete?: () => void;
  }

  /**
   * my.setTabBarBadge (chưa ready) là API để bỏ đi badge text cho một Tab Bar Item
   * https://developers.tiki.vn/docs/api/ui/tab-bar/set-tab-bar-item
   */
  function setTabBarItem(options: ISetTabBarItemOptions): void;

  interface ISetTabBarStyleOptions {
    color: string;

    selectedColor: string;

    backgroundColor: string;

    borderStyle: string;

    success?: () => void;

    fail?: () => void;

    complete?: () => void;
  }

  /**
   * my.setTabBarStyle là API để set style cho Tab Bar
   * https://developers.tiki.vn/docs/api/ui/tab-bar/set-tab-bar-style
   */
  function setTabBarStyle(options: ISetTabBarStyleOptions): void;

  interface IShowTabBarOptions {
    animation?: boolean;

    success?: () => void;

    fail?: () => void;

    complete?: () => void;
  }

  /**
   * `my.showTabBar` là API để show lại tab bar
   *  https://developers.tiki.vn/docs/api/ui/tab-bar/show-tab-bar
   */
  function showTabBar(options: IShowTabBarOptions): void;

  interface IShowTabBarRedDotOptions {
    index: number;

    success?: () => void;

    fail?: () => void;

    complete?: () => void;
  }

  /**
   * my.showTabBarRedDot là API để hiển thị nốt đỏ ở góc trên phải của một Tab Bar Item
   * https://developers.tiki.vn/docs/api/ui/tab-bar/show-tab-bar-red-dot
   */
  function showTabBarRedDot(options: IShowTabBarRedDotOptions): void;
}
