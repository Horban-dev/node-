const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy({
    clientID: '896819412048-9pgi251l85hvohgdrl1mknokk388g8m0.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile) => {
    console.log(accessToken);
    console.log(refreshToken)
    console.log(profile)

}));

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/'); 
  });


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
