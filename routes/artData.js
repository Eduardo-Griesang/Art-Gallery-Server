const { Router } = require("express")
const { getArt, postArt, getArts, patchArts, deleteArt } = require("../controls/artData")

const router = Router()

router.get("/", getArts)

router.get("/:id", getArt)

router.post("/", postArt)

router.patch("/:id", patchArts)

router.delete("/:id", deleteArt)

router.delete("/", (req, res) => {
    res.send("Delete requisition")
})

module.exports = router