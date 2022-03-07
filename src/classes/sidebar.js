import { model } from "../model";
import { addingBlock, css, formBlock } from "../utils";
import { inputBlock } from "../utils";
import { blocks } from "./blocks";

export class Sidebar {
    constructor(selector, updateCallback) {
        this.$el = document.querySelector(selector);
        this.update = updateCallback;

        this.init();
    }

    init() {
        this.$el.innerHTML = "";
        this.$el.insertAdjacentHTML("afterbegin", this.template);

        window.remove = this.remove.bind(this);
        window.apply = this.apply.bind(this);
        window.addBlock = this.addBlock.bind(this);
        window.moveUp = this.moveUp.bind(this);
        window.moveDown = this.moveDown.bind(this);
    }

    get template() {
        let template = model.map((x, i) => {
            let inputs = [inputBlock("value", css(x.value))];

            inputs.push(
                ...Object.keys(x.options).map((k) => {
                    return inputBlock(k, css(x.options[k]));
                })
            );
            return formBlock(x.constructor.name, inputs, i, model.length);
        });
        template.push(addingBlock(Object.keys(blocks)));
        return template.join("");
    }

    apply(event, index) {
        event.preventDefault();
        model[index].setValueFromForm(event.target);
        model[index].setOptionsFromForm(event.target);
        this.update();
    }

    remove(index) {
        model.splice(index, 1);
        this.update();
    }

    addBlock(event) {
        if (event.target.value) {
            console.log(event.target.value);

            let block = new blocks[event.target.value]("", {});
            block.resetOptions();
            model.push(block);
            this.update();
        }
    }

    moveUp(index) {
        if (index <= 0 || index >= model.length) return;

        var block = model[index];
        model.splice(index, 1);
        model.splice(index - 1, 0, block);
        this.update();
    }

    moveDown(index) {
        if (index < 0 || index >= model.length - 1) return;

        var block = model[index];
        model.splice(index, 1);
        model.splice(index + 1, 0, block);
        this.update();
    }
}
