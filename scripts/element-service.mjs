export class ElementService {
    constructor() {}

    get colorPickerElement() {
        return document.querySelector("#color-picker-input");
    }

    get clearButtonElement() {
        return document.querySelector("#clear-button");
    }

    get rangeElement() {
        return document.querySelector("#range-input");
    }
     
    get gridContainerElement() {
        const mainElement = document.querySelector('main')
        const drawingContainerElement =
            mainElement?.firstElementChild?.querySelector('div')?.firstElementChild;
        return drawingContainerElement;
    }
}