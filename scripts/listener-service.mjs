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
    }

    handlePenClick() {
        window.mySketchpadConfiguration.option = 'pen';
    }

    handleFillClick() {
        window.mySketchpadConfiguration.option = 'fill';
    }
    
    handleEraserClick() {
        window.mySketchpadConfiguration.option = 'eraser';
    }

    handleClearClick() {
        this.createNewGrid()
    }

    createNewGrid(value) {
        this.creatorService.resetGrid();
        this.creatorService.createDrawingGrid();
    }
}