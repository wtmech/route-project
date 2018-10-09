const express = require('express');
const router = express.Router();

//Trains Model
const trainRoutes = require('../../models/TrainRoutes');

//Validation
const validateTrainInput = require('../../validation/train');

//@route   GET api/routes/test
//@desc    Tests movie route
//@access  Public
router.get('/test', (req, res) => res.json({ msg: 'test works' }));

//@route   GET api/routes
//@desc    Get routes
//@access  Public
router.get('/', (req, res) => {
  trainRoutes.find()
    .sort({ date: -1 })
    .then(routes => res.json(routes))
    .catch(err => res.status(404).json({ noroutesfound: 'No routes found' }));
});

// @route   POST api/routes
// @desc    Add train
// @access  public
router.post(
  '/',
  (req, res) => {
    const { errors, isValid } = validateTrainInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    trainRoutes.findOne({runNumber: req.body.runNumber}).then(route => {
      if (route) {
        errors.runNumber = 'This run  already exsists';
        return res.status(400).json(errors);
      } else {
        const newRoute = new trainRoutes({
          trainLine: req.body.trainLine,
          routeName: req.body.routeName,
          runNumber: req.body.runNumber,
          operator: req.body.operator
        });
        newRoute
          .save()
          .then(route => res.json(route))
          .catch(err => console.log("YOOOOOOOOOOOOO", err));
      }
    })
  }
);

// @route   UPDATE api/routes/:id
// @desc    Update route
// @access  public
router.put('/:id', function(req, res, next) {
  trainRoutes.findByIdAndUpdate(req.params.id, req.body, function (err, route) {
    if (err) {
      return next(err)
    } else {
      res.json(route);
    }
  });
});

// @route   DELETE api/routes/:id
// @desc    Delete train
// @access  public
router.delete(
  '/:id',
  (req, res) => {
    trainRoutes.findById(req.params.id)
      .then(route => {
        route.remove().then(() => res.json({ success: true }));
      })
      .catch(err => res.status(400).json({ trainnotfound: 'No route found with that ID' }))
  }
)

module.exports = router;

