const express = require("express");
const {
  generateURL,
  getAnalytics,
  updateUrl,
  deleteUrl,
} = require("../controllers/urlShort");
const protect = require("../middlewares/auth");

const router = express.Router();

router.post("/", generateURL);
router.get("/analytics/:shortId", protect, getAnalytics);
router.patch("/update/:id", protect, updateUrl);
router.delete("/delete/:id", protect, deleteUrl);

module.exports = router;
