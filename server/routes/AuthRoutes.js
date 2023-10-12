const passport = require('passport')

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));
app.get('/', (req, res) => {
  res.send('Home Page!')
})
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/home'); 
  });

}