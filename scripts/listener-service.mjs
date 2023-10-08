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
        this.registerFillListener()
        this.registerPenListener()
        this.registerEraserListener()
        this.registerClearListener()
    }

    registerRangeListener() {
        this.elementService.rangeElement
            .addEventListener('input', (value) => {
                this.handleRangeChange(value.currentTarget.value);
            });
    }

    registerFillListener() {
        this.elementService.fillButtonElement
            .addEventListener('click', () => {
                this.handleFillClick();
            });
    }

    registerPenListener() {
        this.elementService.penButtonElement
            .addEventListener('click', () => {
                this.handlePenClick();
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

    handleFillClick() {
        window.mySketchpadConfiguration.option = 'fill';
    }

    handlePenClick() {
        window.mySketchpadConfiguration.option = 'pen';
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