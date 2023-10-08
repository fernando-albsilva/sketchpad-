import { CreatorService } from "./creator-service.mjs";

export class ListenerService {
    constructor() {}

    get rangeElement() {
        return document.querySelector("#range-input");
    }
    
    get clearButtonElement() {
        return document.querySelector("#clear-button");
    }
    
    
    initialize() {
        this.registerListeners() 
    }

    registerListeners() {
        this.registerRangeListener()
        this.registerClearListener()
    }

    registerRangeListener() {
        this.rangeElement
            .addEventListener('input', (value) => {
                this.handleRangeChange(value.currentTarget.value);
            });
    }

    registerClearListener() {
        this.clearButtonElement
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
        const creatorService = new CreatorService(value * 16);
        creatorService.resetGrid();
        creatorService.createDrawingGrid();
    }
}