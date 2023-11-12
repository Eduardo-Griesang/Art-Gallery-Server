const { getAllArt, getArtByID, sendArtToDatabase, modifyArtParam, deleteArtFromArts } = require("../services/artData")

function getArts (req, res) {
    try {
        const arts = getAllArt()
        res.send(arts)
    } 
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

function getArt (req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)){
            const art = getArtByID(id)
            res.send(art)
        } else {
            res.status(422)
            res.send(`The id:${id} is not valid`)
        }
    } 
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

function postArt(req, res){
    try{
        const newArt = req.body
        if(req.body.photo && req.body.title && req.body.description && req.body.the_art){
            const sendArt = sendArtToDatabase(newArt)
            res.status(201)
            res.send(sendArt)
        } else{
            res.status(422)
            res.send("The body sent doesn't have all the params required")
        }
    }
    catch(err){
        res.send(err.message)
    }
}

function patchArts(req, res){
    try{
        const id = req.params.id
        if(id && Number(id)){
            const body = req.body
            modifyArtParam(body, id)
            res.send("Art item modified with success")
        } else {
            res.status(422)
            res.send(`The id:${id} is not valid`)
        }
    }
    catch(err){
        res.send(err.message)
    }
}

function deleteArt(req, res){
    try{
        const id = req.params.id
        if(id && Number(id)){
            deleteArtFromArts(id)
            res.send(`Art ${id} was deleted`)
        } else {
            res.status(422)
            res.send(`The id:${id} is not valid`)
        }   
    }
    catch(err){
        res.send(err.message)
    }
}

module.exports = {
    getArts,
    getArt,
    postArt,
    patchArts,
    deleteArt
} 