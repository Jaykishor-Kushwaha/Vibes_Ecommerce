const express = require("express");

const {
  addFeatureImage,
  getFeatureImages,
} = require("../../controllers/common/feature-controller");

const router = express.Router();

router.post("/add", addFeatureImage);
router.get("/get", getFeatureImages);

module.exports = router;
// const express = require("express");
// const {
//   addFeatureImage,
//   getFeatureImages,
// } = require("../../controllers/common/feature-controller");

// const router = express.Router();

// router.post("/add", addFeatureImage); // POST route to add a feature image
// router.get("/get", getFeatureImages); // GET route to retrieve all feature images

// module.exports = router;

