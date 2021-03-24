const jwt = require('jsonwebtoken');
const api = require('../api/torre');

const controller = {

  me: async (req, res) => {
    try {
      const token = req.headers['authorization'].split(' ')[1];
      const user = jwt.decode(token);
      const torreBio = await api.getBioInfo(user.torre_user);
      const profile = torreBio.person;
      return res.status(200).json(profile);
    } catch (e) {
      return res.status(500).json({error: `${e}`});
    }
  },

};
module.exports = controller;
