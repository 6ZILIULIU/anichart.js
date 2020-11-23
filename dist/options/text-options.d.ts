import { FontOptions } from "./font-options";
import { BaseOptions } from "./base-options";
export interface TextOptions extends BaseOptions {
    text?: string | Function;
    fillStyle?: string | CanvasGradient | CanvasPattern;
    font?: FontOptions;
}
