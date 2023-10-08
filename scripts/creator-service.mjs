export class CreatorService {

    constructor(gridSize) {
        this.gridSize = gridSize;
        this.drawingElements = [];
        this.drawingContainerElement = this.getGridContainer()
    }

    resetGrid() {
       const children = Array.from(this.drawingContainerElement.children);
       children.forEach(element => element.remove())
    }

    createDrawingGrid() {
        const iteration = Array.from(
            { length: (this.gridSize * this.gridSize) }
            , (_, index) => index + 1
        );

        iteration.forEach(index => {
            let div = this.createDiv();
            div = this.applyStyleInGridItem(div);
            this.setListener(div);
            this.addItemInGridContainer(div);
        })
    }

    createDiv() {
        return document.createElement('div');
    }

    applyStyleInGridItem(div) {
        const basis = 100 / this.gridSize;

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
                event.srcElement.style.backgroundColor = 'black';
            }
        });
    }

    addItemInGridContainer(div) {
        this.drawingContainerElement.appendChild(div);
    }

    removeItemFromGridContainer(div) {
        this.drawingContainerElement.removeChild(div);
    }

    getGridContainer() {
        const mainElement = document.querySelector('main')
        const drawingContainerElement =
            mainElement?.firstElementChild?.querySelector('div')?.firstElementChild;
        return drawingContainerElement;
    }
}