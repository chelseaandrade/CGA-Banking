const express = require( 'express' )
const { addFinance, getFinance, getTotal } = require( '../controller/finance' )

const router = express.Router()

//user Auth


router.get( '/getTotal', getTotal )
router.post( '', addFinance )
router.get( '', getFinance )




module.exports = router
