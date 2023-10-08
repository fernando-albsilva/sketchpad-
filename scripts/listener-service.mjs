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
        this.registerClearListener()
    }

    registerRangeListener() {
        this.elementService.rangeElement
            .addEventListener('input', (value) => {
                this.handleRangeChange(value.currentTarget.value);
            });
    }

    registerClearListener() {
        this.elementService.clearButtonElement
        .addEventListener('click', () => {
            this.handleClearClick();
        });
    }
    
    handleRangeChange(value) {
       this.createNewGrid(value);
    }

    handleClearClick() {
        this.createNewGrid(this.rangeElement.value)
    }

    createNewGrid(value) {
        this.creatorService.resetGrid();
        this.creatorService.createDrawingGrid(value * 16);
    }
}