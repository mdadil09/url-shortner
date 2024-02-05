const { nanoid } = require("nanoid");
const UrlData = require("../Models/urlModel");

const generateURL = async (req, res) => {
  try {
    const body = req.body;
    console.log(body.url);
    if (!body.url) return res.status(400).json({ error: "url is required" });
    const shortID = nanoid(8);

    await UrlData.create({
      shortId: shortID,
      redirectURL: body.url,
      visitHistory: [],
    });

    return res.json({ id: shortID });
  } catch (error) {
    console.log(error);
  }
};

const getAnalytics = async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const result = await UrlData.findOne({ shortId });
    return res.json({
      totalClicks: result.visitHistory.length,
      analytics: result.visitHistory,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  generateURL,
  getAnalytics,
};
