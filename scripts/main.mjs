import { CreatorService } from './creator-service.mjs'
import { ListenerService } from './listener-service.mjs'

window.rainbowColors = [
    "#FF0000", // Red
    "#FF7F00", // Orange
    "#FFFF00", // Yellow
    "#00FF00", // Green
    "#0000FF", // Blue
    "#4B0082", // Indigo
    "#9400D3"  // Violet
  ];

window.mySketchpadConfiguration = {
    gridSize: 16,
    color: '#000000',
    option: 'pen',
    rainbowIndex: 0
}

const listenerService = new ListenerService();
listenerService.initialize();

const creatorService = new CreatorService();
creatorService.createDrawingGrid();