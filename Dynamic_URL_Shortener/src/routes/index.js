const user = require("../models/user");
module.exports = (express) => {
const router = express.Router();
const util = require('../util')

router.get("/launch/:shorturl", (req, res) => {
    req.body.shorturl = req.params.shorturl;
    user.findShortURL(req.body, (err) => {
      util.debug('Error: Someone tried to launch shorturl', err, "Error!");
      res.status(500).json(err);
    }, (data) => {
      util.debug('Success: Someone tried to launch short url', data, "Success");
      res.redirect("http://www." + data.longurl);
    })
  });
router.use('/api/v1/', require('./api/users')(express));

return router;

};
