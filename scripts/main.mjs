import { CreatorService } from './creator-service.mjs'
import { ListenerService } from './listener-service.mjs'

const listenerService = new ListenerService();
listenerService.initialize();
const creatorService = new CreatorService(16);
creatorService.createDrawingGrid();