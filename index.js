const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./models/User.js');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const app = express();
const PORT = process.env.PORT || 5000;
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI);

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys:[keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
app.listen(PORT);
