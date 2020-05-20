const bcrypt = require('bcrypt');

module.exports = {
  login: async (req, res) => {
    const db = req.app.get('db');
    const { email, password } = req.body;
    const foundUser = await db
      .select_user(email)
      .catch((err) => console.log(err));

    if (!foundUser.length) {
      res.status(401).send('That user does not exist!');
    } else {
      const matchPasswords = await bcrypt
        .compare(password, foundUser[0].password)
        .catch((err) => console.log(err));

      if (matchPasswords) {
        req.session.user = {
          user_id: foundUser[0].user_id,
          username: foundUser[0].username,
          email: foundUser[0].email,
          location: foundUser[0].location,
          photo: foundUser[0].photo,
        };
        res.status(200).send(req.session.user);
        console.log('User successfully logged in!');
      } else {
        res.status(401).send('Incorrect Credentials!');
      }
    }
  },

  register: async (req, res) => {
    const db = req.app.get('db');
    const { username, email, location, password, photo } = req.body;
    const foundUser = await db
      .select_user(email)
      .catch((err) => console.log(err));

    if (foundUser.length > 0) {
      res.status(409).send('That user already exist! Please login');
    } else {
      const saltRounds = 12;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      const createdUser = await db.add_user([
        username,
        email,
        location,
        hashedPassword,
        photo,
      ]);
      req.session.user = {
        username: createdUser[0].username,
        location: createdUser[0].location,
        photo: createdUser[0].photo,
      };
      res.status(200).send(req.session.user);
      console.log('User successfully made an account!');
    }
  },

  updateProfile: async (req, res) => {
    try {
      const db = req.app.get('db');
      const { username, location, photo } = req.body;
      const { user_id } = req.session.user;

      const user = await db.update_user([user_id, username, location, photo]);

      req.session.user = user[0];

      res.sendStatus(200);
      console.log('Updated User Info');
    } catch (err) {
      console.log('Error updating user!', err);
      res.status(500).send(err);
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.status(200).send('User successfully logged out!');
    console.log('User successfully signed out!');
  },

  userSession: (req, res) => {
    res.status(200).send(req.session.user);
    console.log('Got user session!');
  },
};
