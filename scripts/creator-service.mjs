import { ElementService } from "./element-service.mjs";

export class CreatorService {

    constructor(gridSize) {
        this.gridSize = gridSize;
        this.drawingElements = [];
        this.elementService = new ElementService();
        //this.drawingContainerElement = this.elementService.getGridContainer()
    }

    resetGrid() {
       const children = Array.from(this.elementService.gridContainerElement.children);
       children.forEach(element => element.remove())
    }

    createDrawingGrid(gridSize) {
        const gridRows = gridSize ?? this.gridSize;  
        const gridColumns = gridSize ?? this.gridSize;

        const iteration = Array.from(
            { length: (gridRows * gridColumns) }
            , (_, index) => index + 1
        );

        iteration.forEach(index => {
            let div = this.createDiv();
            div = this.applyStyleInGridItem(div, gridSize ?? this.gridSize);
            this.setListener(div);
            this.addItemInGridContainer(div);
        })
    }

    createDiv() {
        return document.createElement('div');
    }

    applyStyleInGridItem(div, gridSize) {
        const basis = 100 / gridSize;

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
                event.srcElement.style.backgroundColor = this.elementService.colorPickerElement.value;
            }
        });
    }

    addItemInGridContainer(div) {
        this.elementService.gridContainerElement.appendChild(div);
    }

    removeItemFromGridContainer(div) {
        this.elementService.gridContainerElement.removeChild(div);
    }

    // getGridContainer() {
    //     const mainElement = document.querySelector('main')
    //     const drawingContainerElement =
    //         mainElement?.firstElementChild?.querySelector('div')?.firstElementChild;
    //     return drawingContainerElement;
    // }
}