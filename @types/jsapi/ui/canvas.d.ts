/// <reference no-default-lib="true"/> 
declare namespace my {
  interface ILinearGradient {
    addColorStop(stop: number, color: string): void;
  }

  /* tslint:disable:no-empty-interface */
  interface ICircularGradient extends ILinearGradient {}
  /* tslint:enable:no-empty-interface */

  interface IGetImageDataSuccessResult {
    readonly width: number;
    readonly height: number;
  }

  interface IGetImageDataOptions {
    x: number;
    y: number;
    width: number;
    height: number;
    success?: (result: IGetImageDataSuccessResult) => void;
    fail?: () => void;
    complete?: () => void;
  }

  interface IPutImageDataOptions {
    data: number[];
    x: number;
    y: number;
    width: number;
    height: number;
    success?: () => void;
    fail?: () => void;
    complete?: () => void;
  }

  interface ICanvasToTempFilePathOptions {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    destWidth?: number;
    destHeight?: number;
    fileType?: "jpg" | "png";
    quality?: number;
    success?(): void;
    fail?(): void;
    complete?(): void;
  }

  interface ICanvasContext {
    toTempFilePath(options: ICanvasToTempFilePathOptions): void;
    setTextAlign(
      textAlign: "left" | "right" | "center" | "start" | "end"
    ): void;
    setTextBaseline(
      textBaseline:
        | "top"
        | "hanging"
        | "middle"
        | "alphabetic"
        | "ideographic"
        | "bottom"
    ): void;
    setFillStyle(color: string): void;
    setStrokeStyle(color: string): void;
    setShadow(
      offsetX: number,
      offsetY: number,
      blur: number,
      color: string
    ): void;

    createLinearGradient(
      x0: number,
      y0: number,
      x1: number,
      y1: number
    ): ILinearGradient;
    createCircularGradient(x: number, y: number, r: number): ICircularGradient;
    setLineWidth(lineWidth: number): void;
    setLineCap(lineCap: "round" | "butt" | "square"): void;
    setLineJoin(lineJoin: "round" | "bevel" | "miter"): void;
    setMiterLimit(miterLimit: number): void;
    rect(x: number, y: number, width: number, height: number): void;
    fillRect(x: number, y: number, width: number, height: number): void;
    strokeRect(x: number, y: number, width: number, height: number): void;
    clearRect(x: number, y: number, width: number, height: number): void;
    fill(): void;
    stroke(): void;
    beginPath(): void;
    closePath(): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    arc(
      x: number,
      y: number,
      r: number,
      sAngle: number,
      eAngle: number,
      counterclockwise?: number
    ): void;
    bezierCurveTo(
      cp1x: number,
      cp1y: number,
      cp2x: number,
      cp2y: number,
      x: number,
      y: number
    ): void;
    clip(): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    scale(scaleWidth: number, scaleHeight: number): void;
    rotate(rotate: number): void;
    translate(x: number, y: number): void;
    setFontSize(fontSize: number): void;
    fillText(text: string, x: number, y: number): void;
    drawImage(
      imageResource: string,
      x: number,
      y: number,
      width: number,
      height: number
    ): void;
    setGlobalAlpha(alpha: number): void;
    setLineDash(segments: number[]): void;
    transform(
      scaleX: number,
      skewX: number,
      skewY: number,
      scaleY: number,
      translateX: number,
      translateY: number
    ): void;
    setTransform(
      scaleX: number,
      skewX: number,
      skewY: number,
      scaleY: number,
      translateX: number,
      translateY: number
    ): void;
    getImageData(options: IGetImageDataOptions): void;
    putImageData(options: IPutImageDataOptions): void;
    save(): void;
    restore(): void;
    draw(reserve?: boolean, callback?: () => void): void;
    measureText(text: string): { width: number };
  }

  /**
   * `my.createCanvasContext` là API dùng để tạo ra canvas drawing context.
   * Canvas drawing context là một đối tượng với các thuộc tính và phương thức mà bạn có thể sử dụng để kết xuất hình ảnh trong component Canvas.
   * https://developers.tiki.vn/docs/api/ui/canvas/my.createCanvasContext
   */
  function createCanvasContext(canvasId: string): ICanvasContext;
}
