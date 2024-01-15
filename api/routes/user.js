const express = require( 'express' )
const { userSignup, userLogin, loginWithGoogle } = require( '../controller/user' )
const router = express.Router()

//user Auth
router.post( '/signup', userSignup )
router.post( '/login', userLogin )
router.post( '/loginWithGoogle', loginWithGoogle )


module.exports = router
