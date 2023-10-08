import { CreatorService } from "./creator-service.mjs";
import { ElementService } from "./element-service.mjs";

export class ListenerService {
    constructor() {
        this.creatorService = new CreatorService();
        this.elementService = new ElementService();
    }
    
    initialize() {
        this.registerListeners() 
    }

    registerListeners() {
        this.registerRangeListener()
        this.registerPenListener()
        this.registerRainbowListener()
        this.registerFillListener()
        this.registerEraserListener()
        this.registerClearListener()
    }

    registerRangeListener() {
        this.elementService.rangeElement
            .addEventListener('input', (value) => {
                this.handleRangeChange(value.currentTarget.value);
            });
    }

    registerPenListener() {
        this.elementService.penButtonElement
            .addEventListener('click', () => {
                this.handlePenClick();
            });
    }
    
    registerRainbowListener() {
        this.elementService.rainbowButtonElement
            .addEventListener('click', () => {
                this.handleRainbowClick();
            });
    }

    registerFillListener() {
        this.elementService.fillButtonElement
            .addEventListener('click', () => {
                this.handleFillClick();
            });
    }

    registerEraserListener() {
        this.elementService.eraserButtonElement
            .addEventListener('click', () => {
                this.handleEraserClick();
            });
    }

    registerClearListener() {
        this.elementService.clearButtonElement
        .addEventListener('click', () => {
            this.handleClearClick();
        });
    }
    
    handleRangeChange(value) {
        window.mySketchpadConfiguration.gridSize = value * 16;
        this.createNewGrid();
    }

    handleRainbowClick() {
        window.mySketchpadConfiguration.option = 'rainbow';
        this.removeDisabledClass();
        this.addDisabledClass(this.elementService.rainbowButtonElement);
    }

    handlePenClick() {
        window.mySketchpadConfiguration.option = 'pen';
        this.removeDisabledClass();
        this.addDisabledClass(this.elementService.penButtonElement);
    }

    handleFillClick() {
        window.mySketchpadConfiguration.option = 'fill';
        this.removeDisabledClass();
        this.addDisabledClass(this.elementService.fillButtonElement);
    }
    
    handleEraserClick() {
        window.mySketchpadConfiguration.option = 'eraser';
        this.removeDisabledClass();
        this.addDisabledClass(this.elementService.eraserButtonElement);
    }

    handleClearClick() {
        this.createNewGrid()
    }

    createNewGrid() {
        this.creatorService.resetGrid();
        this.creatorService.createDrawingGrid();
    }

    removeDisabledClass() {
        this.elementService.fillButtonElement.classList.remove("disabled");
        this.elementService.eraserButtonElement.classList.remove("disabled");
        this.elementService.penButtonElement.classList.remove("disabled");
        this.elementService.rainbowButtonElement.classList.remove("disabled");
    }

    addDisabledClass(element) {
        element.classList.add("disabled");
    }
}