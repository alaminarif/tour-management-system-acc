const express = require("express");
const router = express.Router();
const tourControllers = require("../controllers/tours.controllers");
const viewCount = require("../middleware/veiwCount");

router
  .route("/cheapest")
  //
  .get(tourControllers.getCheapestTour);
router
  .route("/:id")
  //
  .get(viewCount, tourControllers.getATour)
  .patch(tourControllers.updateATour);

router
  .route("/")
  //
  .get(tourControllers.getAllTour)
  .post(tourControllers.createTours);

module.exports = router;
