/// Importacion de dependencias
import "dotenv/config"
import express from 'express'

import boardRoutes from './routes/board.routes'

/// Declaración de constantes necesarias

const app = express()

app.use(express.json({}));

app.listen(process.env.PORT,()=>{
    console.log('app corriendo en el puerto' + process.env.PORT)
})

app.use('/boards',boardRoutes)