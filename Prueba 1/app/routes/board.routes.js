/// importacion de dependencias
import {Router} from 'express'

import * as boardController from '../controllers/board.controller'

let router = Router()

/// creacion de rutas

router.post('/',boardController.createBoard)

router.get('/:id',boardController.getBoard);

//// exportacion de rutas

export default router