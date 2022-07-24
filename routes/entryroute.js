const express = require('express')
const router = express.Router()
const {
     createEntry,
     getEntry,
     getEntrys,
     deleteEntry,
     updateEntry


} = require('../controllers/entryController')

//GET all
router.get('/' ,getEntrys)
 

//GET a single
router.get('/:id', getEntry)

//POST a workout
router.post('/', createEntry)

//DELETE
router.delete('/:id', deleteEntry)

//DELETE
router.patch('/:id', updateEntry)


module.exports = router