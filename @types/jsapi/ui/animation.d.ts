/// <reference no-default-lib="true"/> 
declare namespace my {
  /* tslint:disable:no-empty-interface */
  interface IAnimationInfo {}
  /* tslint:enable:no-empty-interface */

  interface IAnimation {
    opacity(value: number): IAnimation;
    backgroundColor(color: string): IAnimation;
    width(length: number): IAnimation;
    height(height: number): IAnimation;
    top(top: number): IAnimation;
    left(left: number): IAnimation;
    bottom(bottom: number): IAnimation;
    right(right: number): IAnimation;
    rotate(deg: number): IAnimation;
    rotateX(deg: number): IAnimation;
    rotateY(deg: number): IAnimation;
    rotateZ(deg: number): IAnimation;
    rotate3d(x: number, y: number, z: number, deg: number): IAnimation;
    scale(sx: number, sy?: number): IAnimation;
    scaleX(sx: number): IAnimation;
    scaleY(sy: number): IAnimation;
    scaleZ(sz: number): IAnimation;
    scale3d(sx: number, sy: number, sz: number): IAnimation;
    translate(tx: number, ty?: number): IAnimation;
    translateX(tx: number): IAnimation;
    translateY(ty: number): IAnimation;
    translateZ(tz: number): IAnimation;
    translate3d(tx: number, ty: number, tz: number): IAnimation;
    skew(ax: number, ay?: number): IAnimation;
    skewX(ax: number): IAnimation;
    skewY(ay: number): IAnimation;
    matrix(
      a: number,
      b: number,
      c: number,
      d: number,
      tx: number,
      ty: number
    ): IAnimation;
    matrix3d(
      a1: number,
      b1: number,
      c1: number,
      d1: number,
      a2: number,
      b2: number,
      c2: number,
      d2: number,
      a3: number,
      b3: number,
      c3: number,
      d3: number,
      a4: number,
      b4: number,
      c4: number,
      d4: number
    ): IAnimation;

    step(options?: ICreateAnimationOptions): void;

    export(): IAnimationInfo;
  }

  interface ICreateAnimationOptions {
    duration?: number;
    timeFunction?:
      | "linear"
      | "ease"
      | "ease-in"
      | "ease-in-out"
      | "ease-out"
      | "step-start"
      | "step-end";

    delay?: number;
    transformOrigin?: string;
  }

  /**
   * `my.createAnimation` là api để tạo ra một animation instance.
   * Animation instance sử dụng các hàm của nó để mô tả animation và cuối cùng, sử dụng hàm export để truyền thuộc tính animation vào các view trên TXML.
   *
   */
  function createAnimation(options?: ICreateAnimationOptions): IAnimation;
}
