const router = require('express').Router();

const Map = require('../../models/Map/Map');
// const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const jwt = require('jsonwebtoken');
const config = require('config');

router.get('/all_business', async (req, res) => {
  try {
    const map = await Map.find({ verified: true });
    // // console.log(map);
    return res.status(200).json(map);
  } catch (error) {
    // console.log(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
