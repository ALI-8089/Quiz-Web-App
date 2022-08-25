const express = require ('express')
const router = express.Router()
const USERHELPER = require ('../Controller/userHelper')

router.get('/test',USERHELPER.getQuestions)



module.exports = router