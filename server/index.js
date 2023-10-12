const express = require('express');
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')

const authRoutes = require('./routes/AuthRoutes')
const app = express();

mongoose.connect(keys.mongoURI)
  .then(() => {
    console.log('connected');
    new User({ googleId: profile.id }).save();
  })
  .catch(e => console.log(e));

  
authRoutes(app)
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
