import { FontOptions } from "../options/FontOptions";
import { BaseComponent } from "./BaseComponent";
import { TextOptions } from "../options/text-options";
import { Pos } from "../types/position";
declare class Text extends BaseComponent {
    text: string | ((n: number) => string);
    fillStyle: string | CanvasGradient | CanvasPattern;
    offset: Pos | ((sec: number) => Pos);
    _text: string;
    font: FontOptions;
    protected cOffset: Pos;
    private finalFont;
    constructor(options: TextOptions);
    update(): void;
    preRender(): void;
    render(): void;
}
export { Text };
