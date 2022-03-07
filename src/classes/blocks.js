import { row, col, css } from "../utils";

export class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
        Block.prototype.optionsParams = { styles: "" }; //possible options and their default values
    }

    toHTML() {
        throw new Error("метод toHTML не реализован");
    }

    setValueFromForm(form) {
        this.value = form.value.value;
    }

    setOptionsFromForm(form) {
        for (let key in this.optionsParams) {
            this.options[key] = form[key].value;
        }
    }

    resetOptions() {
        for (let key in this.optionsParams) {
            this.options[key] = this.optionsParams[key];
        }
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
        this.optionsParams = { ...super.optionsParams, ...{ tag: "h1" } };
    }

    toHTML() {
        let ops = this.options;
        ops.tag = ops.tag || "h1";
        return row(col(`<${ops.tag}>${this.value}</${ops.tag}>`), css(ops.styles));
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
        this.optionsParams = { ...super.optionsParams, ...{ imageStyles: "", alt: "" } };
    }

    toHTML() {
        const { imageStyles: is, alt = "", styles } = this.options;
        return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}"></img>`, css(styles));
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
        this.optionsParams = { ...super.optionsParams };
    }

    toHTML() {
        let html = this.value.map(col).join("");
        return row(html, css(this.options.styles));
    }

    setValueFromForm(form) {
        this.value = form.value.value.split(";").map((x) => x.split(":")[1].trim());
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
        this.optionsParams = { ...super.optionsParams };
    }

    toHTML() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles));
    }
}
export const blocks = { TitleBlock, ImageBlock, ColumnsBlock, TextBlock };
