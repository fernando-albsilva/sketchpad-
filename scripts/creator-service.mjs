import { ElementService } from "./element-service.mjs";

export class CreatorService {

    constructor() {
        this.drawingElements = [];
        this.elementService = new ElementService();
    }

    resetGrid() {
       const children = Array.from(this.elementService.gridContainerElement.children);
       children.forEach(element => element.remove())
    }

    createDrawingGrid() {
        const gridRows = window.mySketchpadConfiguration.gridSize;  
        const gridColumns = window.mySketchpadConfiguration.gridSize;

        const iteration = Array.from(
            { length: (gridRows * gridColumns) }
            , (_, index) => index + 1
        );

        iteration.forEach(index => {
            let div = this.createDiv();
            div = this.applyStyleInGridItem(div);
            this.setListener(div);
            this.addItemInGridContainer(div);
        })

        this.setContainerListener()
    }

    createDiv() {
        return document.createElement('div');
    }

    applyStyleInGridItem(div) {
        const basis = 100 / window.mySketchpadConfiguration.gridSize;

        let properties = '';
        properties += properties.concat('color: blue;');
        properties += properties.concat('border: 0.5px solid #cfcdcd;')
        properties += properties.concat(`flex: 1 0 ${basis}%;`)

        div.setAttribute('style', properties);
        return div;
    }

    setListener(div) {
        div.addEventListener('mouseover', (event) => {
            const isMouseClicked = event.buttons === 1;
            if (isMouseClicked) {

                switch (window.mySketchpadConfiguration.option) {
                    case 'pen': 
                        this.actionPen(event)
                        break;

                    case 'eraser': 
                        this.actionEraser(event)
                        break;

                    case 'rainbow': 
                        this.actionRainbow(event)
                        break;

                    default:
                        break;
                }
            }
        });
    }

    setContainerListener() {
        this.elementService.gridContainerElement.addEventListener('click', (event) => {
            if (window.mySketchpadConfiguration.option === 'fill') {
                this.actionFill()
            }
        });
    }
    
    actionPen(event) {
        event.srcElement.style.backgroundColor = this.elementService.colorPickerElement.value;
    }

    actionRainbow(event) {
        event.srcElement.style.backgroundColor = 
            window.rainbowColors[window.mySketchpadConfiguration.rainbowIndex]    
        
            if (window.rainbowColors.length - 1 > window.mySketchpadConfiguration.rainbowIndex) {
                window.mySketchpadConfiguration.rainbowIndex++;
            } else {
                window.mySketchpadConfiguration.rainbowIndex = 0;
            }
    }

    actionFill() {
        const children = Array.from(this.elementService.gridContainerElement.children);
        children.forEach(element => {element.style.backgroundColor = this.elementService.colorPickerElement.value;})
    }

    actionEraser(event) {
        event.srcElement.style.backgroundColor = '';
    }

    addItemInGridContainer(div) {
        this.elementService.gridContainerElement.appendChild(div);
    }

    removeItemFromGridContainer(div) {
        this.elementService.gridContainerElement.removeChild(div);
    }
}