const user = require('../../models/user')
const util = require('../../util')

module.exports =(express) => {
  const router = express.Router();


//READ and Find All URLS----------------------------------------------------//
  router.get('/users', (req, res) => {
  user.findAll( (err) => {
    util.debug('Error: Someone tried to access all urls', err, 'error');
    res.status(500).json(err);
  }, (data) => {
    util.debug("Someone accessed all users", data, 'success')
    res. status(200).json(data);
  })
});

//READ and Find specific url by id---------------------------------------------------->
router.get("/users/:id", (req, res) => {
    req.body.id = req.params.id;
    user.find(req.body, (err) => {
      util.debug('Error: Someone tried to access a single url', err, 'error');
      res.status(500).json(err);
    }, (data) => {
      util.debug("Someone accessed a single url", data, 'success')
      res.status(200).json(data);
    })
  });


//create and generate short url------------------------------------------------------------------->
router.post("/users", (req, res) => {
    var generate = require("../../util");
    req.body.shorturl = generate.returnStringGen();
    user.create(req.body, (err) => {
      util.debug('Error: Someone tried to generate a short url', err, 'error');
      res.status(500).json(err);
    }, (data) => {
      util.debug("Someone generated a short url", data, 'success')
      res.status(200).json(data);
    });
  });


    // update specific url by finding id ------------------------------------------------------->
    router.post("/users/:id", (req, res) => {
      req.body.id = req.params.id;
      user.update(req.body, (err) => {
        util.debug('Error: Someone tried to update a url', err, 'error');
        res.status(500).json(err);
      }, (data) => {
        util.debug("Someone updated a url", data, 'success')
        res.status(200).json(data);
      })
    });

    // delete url specific url by finding id ----------------------------------------------------->
    router.delete("/users/:id", (req, res) => {
      req.body.id = req.params.id;
      user.destroy(req.body, (err) => {
        util.debug('Error: Someone tried to delete a url', err, 'error');
        res.status(500).json(err);
      }, (data) => {
        util.debug("Someone deleted a url", data, 'success')
        res.status(200).json(data);
      })
    });





return router;

}
