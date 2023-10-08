import { CreatorService } from './creator-service.mjs'
import { ListenerService } from './listener-service.mjs'


window.mySketchpadConfiguration = {
    gridSize: 16,
    color: '#000000',
    option: 'pen'
}

const listenerService = new ListenerService();
listenerService.initialize();

const creatorService = new CreatorService();
creatorService.createDrawingGrid();