/// Importacion de dependencias
import { createConnection } from '../database'

/// Definicion de querys
const ADD_QUERY = "INSERT INTO `board` (`id_board`, `title`, `stage`) VALUES (NULL, ?, '1'); SELECT * FROM board WHERE id_board LIKE LAST_INSERT_ID();"
const GET_QUERY = "SELECT * FROM board WHERE id_board LIKE ?;"
const UPDATE_QUERY = "UPDATE board SET stage=(SELECT SUM(stage+1) FROM board WHERE id_board LIKE ?) WHERE id_board LIKE ?; SELECT * FROM board  WHERE id_board LIKE ?;"

/// Funciones DAO
export const createBoard = (boardTitle) => {

    /// Creando conexiones a la base de datos
    let connect = createConnection();
    return new Promise((resolve, reject) => {

        connect.query(ADD_QUERY, boardTitle, (addError, addResult) => {
            if (addError) {
                /// Cierre de conexiones
                connect.end()
                reject({
                    code: 500,
                    message: "wrong data"
                })
            } else {
                /// Cierre de conexiones
                connect.end()

                resolve({
                    code: 201,
                    board: {
                        id_board: addResult[1][0].id_board,
                        title_board: addResult[1][0].title,
                        stage_board: addResult[1][0].stage,
                    }
                })
            }
        })
    })

}

export const getBoard = (boardId) => {
    /// Creando conexiones a la base de datos
    let connect = createConnection();
    return new Promise((resolve, reject) => {

        connect.query(GET_QUERY, boardId, (getError, getResult) => {
            if (getError) {
                /// Cierre de conexiones
                connect.end()
                reject({
                    code: 500,
                    message: "wrong data"
                })
            } else {
                /// Cierre de conexiones
                connect.end()

                resolve({
                    code: 200,
                    board: getResult[0]
                })
            }
        })
    })
}

export const updateBoard = (boardId) => {
    /// Creando conexiones a la base de datos
    let connect = createConnection();
    return new Promise((resolve, reject) => {

        connect.query(UPDATE_QUERY, [boardId,boardId,boardId], (updateError, updateResult) => {
            if (updateError) {
                /// Cierre de conexiones
                connect.end()
                reject({
                    code: 500,
                    message: "wrong data"
                })
            } else {
                /// Cierre de conexiones
                connect.end()
                
                resolve({
                    code: 200,
                    board: {
                        id_board: updateResult[1][0].id_board,
                        title_board: updateResult[1][0].title,
                        stage_board: updateResult[1][0].stage,
                    }
                })
            }
        })
    })
}