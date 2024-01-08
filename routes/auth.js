const express= require('express')
const passport = require('passport')
const router = express.Router()

router.get('/google', passport.authenticate('google', { scope: ['profile']}))

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/'}), (req, res) => {
    res.redirect('/dashboard')
})

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if(err) {
            res.json({message: "Error is found while logging you out"})
        } else {
            res.redirect('/')
        }
    })
    
})



module.exports = router