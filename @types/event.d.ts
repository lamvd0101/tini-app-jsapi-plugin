/// <reference no-default-lib="true"/>

declare namespace TiniTypes {
  interface IBaseEvent {
    readonly type: string;
    readonly timeStamp: number;
    readonly target: {
      readonly tagName: string;
      readonly dataset: Readonly<Record<string, any>>;
      readonly targetDataset: Readonly<Record<string, any>>;
      readonly offsetLeft: number;
      readonly offsetTop: number;
    };
    readonly currentTarget: {
      readonly tagName: string;
      readonly dataset: Readonly<Record<string, any>>;
      readonly offsetLeft: number;
      readonly offsetTop: number;
    };
  }

  interface ICustomEvent extends IBaseEvent {
    readonly detail: Readonly<Record<string, any>>;
  }

  interface ITouch {
    readonly identifier: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly clientX: number;
    readonly clientY: number;
  }

  interface ICanvasTouch {
    readonly identifier: number;
    readonly x: number;
    readonly y: number;
  }

  interface ITouchEvent extends IBaseEvent {
    readonly touches: ReadonlyArray<ITouch | ICanvasTouch>;
    readonly changedTouches: ReadonlyArray<ITouch | ICanvasTouch>;
  }
}
