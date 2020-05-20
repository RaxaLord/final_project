require('dotenv').config();
const express = require('express'),
  session = require('express-session'),
  massive = require('massive');

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;
const {
  login,
  register,
  logout,
  userSession,
  updateProfile,
} = require('./controllers/authCtrl');

const app = express();
app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookies: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
    rejectUnauthorized: false,
  }),
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
})
  .then((db) => {
    console.log('connected to database');
    app.set('db', db);
  })
  .catch((err) => console.log(err));

// user endpoints
app.post('/auth/login', login);
app.post('/auth/register', register);
app.get('/auth/logout', logout);
app.get('/auth/user_session', userSession);
app.put('/auth/update_profile', updateProfile);

// location endpoints

// saved endpoints

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port: ${SERVER_PORT}`);
});
