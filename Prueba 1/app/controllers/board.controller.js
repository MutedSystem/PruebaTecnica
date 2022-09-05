/// importacion de dependencias
import * as boardDAO from '../DAO/board.dao'

export const createBoard = (req, res) => {
    try {
        console.log(req.body);
        let title = req.body.title
        if (!title) {
            return res.status(400).json({
                message: 'not data provided'
            })
        } else {
            boardDAO.createBoard(title)
                .then((createResponse) => {
                    return res.status(createResponse.code).json({
                        item: createResponse.board
                    })
                })
                .catch((createError) => {
                    return res.status(createError.code).json({
                        message: createError.message
                    })
                })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'internal server error'
        })
    }
}

export const getBoard = (req,res) =>{
    try {
        let boardId = req.params.id;
        if(!boardId){
            return res.status(400).json({
                message: 'not data provided'
            })
        }else{
            boardDAO.getBoard(boardId)
            .then((getResponse) => {
                console.log(getResponse.board.stage);
                if(getResponse.board.stage <=1 && getResponse.board.stage >=3){
                    return res.status(400).json()
                }else{
                    boardDAO.updateBoard(boardId)
                    .then((updateResponse)=>{
                        return res.status(updateResponse.code).json({
                            board: updateResponse.board
                        })
                    })
                    .catch((udateError)=>{
                        return res.status(udateError.code).json({
                            message: udateError.message
                        })
                    })
                }
                
            })
            .catch((getError) => {
                return res.status(createError.code).json({
                    message: createError.message
                })
            })
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'internal server error'
        })
    }
}