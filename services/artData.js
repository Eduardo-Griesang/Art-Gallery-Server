const fs = require("fs")

const arts = JSON.parse(fs.readFileSync("./data.json"))

function getAllArt() {
    return arts
}

function getArtByID (id) {
    const artFilteredByID = arts.filter((art) => art.id === id)[0]

    return artFilteredByID
}

function sendArtToDatabase(newArt) {
    fs.writeFileSync("./data.json", JSON.stringify([...arts, newArt]))
}

function modifyArtParam(modify, id){
    let newArts = arts
    const modifyIndex = newArts.findIndex((art) => art.id === id)
    console.log(newArts, modifyIndex)

    const modifiedContent = {...newArts[modifyIndex], ...modify}
    newArts[modifyIndex] = modifiedContent

    fs.writeFileSync("./data.json", JSON.stringify(newArts))
}

function deleteArtFromArts(id){
     const artsNOTToBeDeleted = arts.filter((art) => art.id != id)

     fs.writeFileSync("./data.json", JSON.stringify(artsNOTToBeDeleted))
}

module.exports = {
    getAllArt,
    getArtByID,
    sendArtToDatabase,
    modifyArtParam,
    deleteArtFromArts
}