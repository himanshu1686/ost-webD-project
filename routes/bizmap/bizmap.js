const router = require('express').Router();
const Forum = require('../../models/Forum/Forum');
//const nodemailer = require('nodemailer');
//const { google } = require('googleapis');
const jwt = require('jsonwebtoken');
// const OAuth2 = google.auth.OAuth2;
const User = require('../../models/User/User');
const config = require('config');
// const oauth2Client = new OAuth2(
//   '389790068785-osb9rej502bbdbt6kil1jjrvo825o6fr.apps.googleusercontent.com',
//   'AVbe59TwBKQmN-bBU5DrR-Sh',
//   'https://developers.google.com/oauthplayground'
// );
//list parameters meaning in oauth2Client  here 

// oauth2Client.setCredentials({
//   refresh_token:
//     '1//04R3kx2jVZu4ZCgYIARAAGAQSNwF-L9IrCheKCfWnTvdmi6CsbDcZi9ULg2CFTcvJDQgdJJcqYZl6g9oSipnTsdZ_esddSlvVA6I'
// });
//new refresh token
// const accessToken = oauth2Client.getAccessToken();
//discussion forum add message

router.get('/verify_message/:token', async (req, res) => {
  try {
    let obj = jwt.verify(req.params.token, config.get('emailSecret'));
    let id = obj.message.id;
    const map = await Forum.findById(id);
    map.verified = true;
    await map.save();
    return res.status(200).json({
      message: 'verified successfully'
    });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({
      error
    });
  }
});
router.post('/add_message', async (req, res) => {
  try {
    const newMessage = new Forum({
      content: req.body.content,
      name: req.body.name,
      image: req.body.image
    });
    await newMessage.save();

    return res.status(200).json({
      message: 'successfully added'
    });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({
      error: error
    });
  }
});

router.post('/get_messages', async (req, res) => {
  try {
    const forum = await Forum.find();
    return res.status(200).json({
      messages: forum
    });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({
      error: error
    });
  }
});

router.post('/create_user', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    // // console.log(user);
    if (user) {
      return res.status(200).json({ user: user });
    }
    newUser = new User({
      name: req.body.name,
      image: req.body.image,
      username: req.body.username
    });
    await newUser.save();
    return res.status(200).json({
      user: user
    });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({
      error
    });
  }
});

module.exports = router;
