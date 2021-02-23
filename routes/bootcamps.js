const express = require("express");
const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  updateBootcamps,
  deleteBootcamps,
  getBootcampsInRadius,
} = require("../controllers/bootcamps");

// Include other resource routers
const courseRouter = require("./courses")

const router = express.Router();

// Re-route into the other resource router
router.use("/:bootcampId/courses", courseRouter);

router.route("/").get(getBootcamps).post(createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamps)
  .delete(deleteBootcamps);

router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);

module.exports = router;
