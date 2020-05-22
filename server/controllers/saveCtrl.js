module.exports = {
  saveLocation: async (req, res) => {
    try {
      const db = req.app.get('db');
      const { user_id } = req.session.user;
      const { location_id } = req.params;

      console.log('location id =', location_id);

      await db.save_location([user_id, location_id]);
      res.sendStatus(200);
      console.log('Successfully saved location to users list!');
    } catch (error) {
      console.log('Ran into an error trying to save that location, try again!');
      res.status(500).send(error);
    }
  },

  unsaveLocation: async (req, res) => {
    try {
      const db = req.app.get('db');
      const { saved_id } = req.params;
      // console.log(req.params.saved_id);

      await db.remove_saved_location(saved_id);

      res.sendStatus(200);
      console.log('Successfully removed location from saved list!');
    } catch (error) {
      console.log('Ran into a problem trying to remove that location!');
      res.status(500).send(error);
    }
  },

  getSaved: async (req, res) => {
    try {
      const db = req.app.get('db');
      const { user_id } = req.session.user;
      const saved = await db.get_saved_locations(user_id);

      res.status(200).send(saved);
      console.log('Successfully got all saved locations!');
    } catch (error) {
      console.log('Having problems getting saved locations!');
      res.status(500).send(error);
    }
  },
};
