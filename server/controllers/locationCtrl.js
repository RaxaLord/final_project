module.exports = {
  addLocation: async (req, res) => {
    try {
      const db = req.app.get('db');
      const { name, address, state, description, rating, image } = req.body;
      const foundLocation = await db
        .get_all_locations(name)
        .catch((err) => console.log(err));

      if (foundLocation.length > 0) {
        res.status(409).send('That location has already been posted!');
      } else {
        await db.add_location([
          name,
          address,
          state,
          description,
          rating,
          image,
        ]);

        res.sendStatus(200);
        console.log('Added New Location!');
      }
    } catch (err) {
      console.log("Sorry, we coulnd't add that location! Please try again");
      res.status(500).send(err);
    }
  },

  getAllLocations: async (req, res) => {
    try {
      const db = req.app.get('db');
      const locations = await db.get_all_locations();

      res.status(200).send(locations);
      console.log('Collected all locations!');
    } catch (err) {
      console.log('Having a problem getting locations, try again!');
      res.status(500).send(err);
    }
  },

  getOneLocation: async (req, res) => {
    try {
      const db = req.app.get('db');
      const location = await db.get_one_location(req.params.id);

      res.status(200).send(location);
      console.log('Found location!');
    } catch (error) {
      console.log('Having a problem finding that location, try again!');
      res.status(500).send(error);
    }
  },

  // updateLocation: async (req, res) => {
  //   try {
  //     const db = req.app.get('db')
  //     const
  //   } catch (error) {}
  // },
};
