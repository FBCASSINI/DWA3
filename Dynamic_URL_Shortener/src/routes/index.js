const user = require("../models/user");
module.exports = (express) => {
const router = express.Router();

router.get("/launch/:shorturl", (req, res) => {
    req.body.shorturl = req.params.shorturl;
    user.findShortURL(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.redirect("http://www." + data.longurl);
    })
  });
router.use('/api/v1/', require('./api/users')(express));

return router;

};
