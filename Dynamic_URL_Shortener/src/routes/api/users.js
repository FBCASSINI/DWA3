const user = require('../../models/user')

module.exports =(express) => {
  const router = express.Router();


//READ and Find All URLS----------------------------------------------------//
  router.get('/users', (req, res) => {
  user.findAll( (err) => {
    res.status(500).json(err);
  }, (data) => {
    res. status(200).json(data);
  })
});

//READ and Find specific url by id---------------------------------------------------->
router.get("/users/:id", (req, res) => {
    req.body.id = req.params.id;
    user.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });


//create and generate short url------------------------------------------------------------------->
router.post("/users", (req, res) => {
    var generate = require("../../util");
    req.body.shorturl = generate.returnStringGen();
    user.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });


    // update specific url by finding id ------------------------------------------------------->
    router.post("/users/:id", (req, res) => {
      req.body.id = req.params.id;
      user.update(req.body, (err) => {
        res.status(500).json(err);
      }, (data) => {
        res.status(200).json(data);
      })
    });

    // delete url specific url by finding id ----------------------------------------------------->
    router.delete("/users/:id", (req, res) => {
      req.body.id = req.params.id;
      user.destroy(req.body, (err) => {
        res.status(500).json(err);
      }, (data) => {
        res.status(200).json(data);
      })
    });





return router;

}
