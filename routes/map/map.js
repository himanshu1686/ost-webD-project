const router = require('express').Router();

const Map = require('../../models/Map/Map');
// const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const jwt = require('jsonwebtoken');
const config = require('config');
// const OAuth2 = google.auth.OAuth2;
// const oauth2Client = new OAuth2(
//   '389790068785-osb9rej502bbdbt6kil1jjrvo825o6fr.apps.googleusercontent.com',
//   'AVbe59TwBKQmN-bBU5DrR-Sh',
//   'https://developers.google.com/oauthplayground'
// );
// oauth2Client.setCredentials({
//   refresh_token:
//     '1//04R3kx2jVZu4ZCgYIARAAGAQSNwF-L9IrCheKCfWnTvdmi6CsbDcZi9ULg2CFTcvJDQgdJJcqYZl6g9oSipnTsdZ_esddSlvVA6I'
// });
// const accessToken = oauth2Client.getAccessToken();

router.get('/verify/:token/:latitude/:longitude', async (req, res) => {
  try {
    let obj = jwt.verify(req.params.token, config.get('emailSecret'));
    let id = obj.map.id;
    const map = await Map.findById(id);
    map.verified = true;
    map.latitude = req.params.latitude;
    map.longitude = req.params.longitude;
    await map.save();

    const output2 = `
    <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <title>Business Successfully Accepted</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"
      />
  
      <style type="text/css"></style>
    </head>
    <body style="background-image: url('bg.jpg')">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td align="center">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px;"
            >
              <tr>
                <td
                  align="left"
                  style="padding: 0px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; "
                >
                  <h1
                    style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; color:  #3C4E62; line-height: 48px; text-align: center"
                  >
                    Business Successfully Accepted
                  </h1>
                </td>
              </tr>
            </table>
          </td>
        </tr>
  
        <tr>
          <td align="center">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px;"
            >
              <tr>
                <td
                  align="left"
                  style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;"
                >
                  <p class="" style="margin: 0; color:  #3C4E62">
                    Hi Sir/Mam, Your business has been successfully accepted.

                  </p>
                  <br />
                  
                </td>
              </tr>
  
              <tr>
                <td
                  align="left"
                  style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;"
                >
                  <p class="" style="margin: 0; color:  #3C4E62">
                    Cheers,
                  </p>
                  <p class="" style="margin: 0; color:  #3C4E62">
                    Project Aashray
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  
    
    `;

    // let transporter = nodemailer.createTransport({
      // host: 'mail.google.com',
      // port: 587,
      // service: 'Gmail',
      // secure: false, // true for 465, false for other ports
      // auth: {
      //   user: config.get('gmailUsername'), // generated ethereal user
      //   pass: config.get('gmailPassword') // generated ethereal password
      // },
      // tls: {
      //   rejectUnauthorized: false
      // }
    //   service: 'gmail',
    //   auth: {
    //     type: 'OAuth2',
    //     user: 'aashrayproject@gmail.com',
    //     clientId:
    //       '389790068785-osb9rej502bbdbt6kil1jjrvo825o6fr.apps.googleusercontent.com',
    //     clientSecret: 'AVbe59TwBKQmN-bBU5DrR-Sh',
    //     refreshToken:
    //       '1//04R3kx2jVZu4ZCgYIARAAGAQSNwF-L9IrCheKCfWnTvdmi6CsbDcZi9ULg2CFTcvJDQgdJJcqYZl6g9oSipnTsdZ_esddSlvVA6I',
    //     accessToken: accessToken
    //   }
    // });

    // setup email data with unicode symbols
    // let mailOptions = {
    //   from: '"Project Aashray" <aashrayproject@gmail.com>', // sender address
    //   to: map.email, // list of receivers
    //   subject: 'Business In Review', // Subject line
    //   text:
    //     'Thanks for registring your business with us. Your business is currently under review.',
    //   html: output2
    // };

    // send mail with defined transport object
    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     return; // // console.log(error);
    //   }
    //   // // console.log('Message sent: %s', info.messageId);
    //   // // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // });

    return res.status(200).json({
      message: 'verified successfully'
    });
  } catch (error) {
    // console.log(error);
    return res.status(200).json({
      error
    });
  }
});

router.post('/add_to_graph', async (req, res) => {
  const map = new Map({
    latitude: '27.2038',
    longitude: '77.5011',
    address: req.body.address,
    name: req.body.name,
    description: req.body.description,
    contact: req.body.contact,
    email: req.body.email,
    category: req.body.category,
    links: req.body.links
  });
  await map.save();
  const emailToken = jwt.sign(
    {
      map: {
        id: map._id
      }
    },
    config.get('emailSecret'),
    {
      // expiresIn: 36000
    }
  );
  const url = `https://project-aashray.herokuapp.com/graph/verify/token_value/latitude_value/longitude_value`;
  const token = emailToken;

  const output = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>New Business Registration</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
    
        <style type="text/css"></style>
      </head>
      <body style="background-image: url('bg.jpg')">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td align="center">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px;"
              >
                <tr>
                  <td
                    align="left"
                    style="padding: 0px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; "
                  >
                    <h1
                      style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; color:  #3C4E62; line-height: 48px; text-align: center"
                    >
                      Business Registration Verification
                    </h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
    
          <tr>
            <td align="center">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px;"
              >
                <tr>
                  <td
                    align="left"
                    style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;"
                  >
                    <p class="" style="margin: 0; color:  #3C4E62">
                      This mail is regarding the new business verification
                    </p>
                    <br />
                    <p class="" style="margin: 0; color:  #3C4E62">
                      Name: ${req.body.name}
                      <br />
                      Contact: ${req.body.contact}
                      <br />
                      email: ${req.body.email}
                      <br />
                      category: ${req.body.category}
                      <br />
                      Description: ${req.body.description}
                      <br />
                      Address: ${req.body.address}
                      <br />
                    </p>
                  </td>
                </tr>
    
               
    
                <tr>
                  <td
                    align="left"
                    style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;"
                  >
                    <p class="text-center" style="margin: 0; color:  #3C4E62">
                      Get the latitudes and longitudes of the above address from the google maps
                      (search the address, and long press the location pointer in
                      the map for the address, and that will give you the correct
                      latitudes and longitudes for any address)
    
                      <br />
                      Open
                      <span style="font-style: italic; font-weight: bold"
                        >${url}</span
                      >
                      in your browser, and congratulations, the latitudes and
                      longitudes have been successfully added, and the business has been successfully verified
                      <br/>
                      Token Value: ${token}
                    </p>
                  </td>
                </tr>
    
                <tr>
                  <td
                    align="left"
                    style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;"
                  >
                    <p class="" style="margin: 0; color:  #3C4E62">
                      Cheers,
                    </p>
                    <p class="" style="margin: 0; color:  #3C4E62">
                      Project Aashray
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    
    
    `;

  //let transporter = nodemailer.createTransport({
    // host: 'mail.google.com',
    // port: 587,
    // service: 'Gmail',
    // secure: false, // true for 465, false for other ports
    // auth: {
    //   user: config.get('gmailUsername'), // generated ethereal user
    //   pass: config.get('gmailPassword') // generated ethereal password
    // },
    // tls: {
    //   rejectUnauthorized: false
    // }
  //   service: 'gmail',
  //   auth: {
  //     type: 'OAuth2',
  //     user: 'aashrayproject@gmail.com',
  //     clientId:
  //       '389790068785-osb9rej502bbdbt6kil1jjrvo825o6fr.apps.googleusercontent.com',
  //     clientSecret: 'AVbe59TwBKQmN-bBU5DrR-Sh',
  //     refreshToken:
  //       '1//04R3kx2jVZu4ZCgYIARAAGAQSNwF-L9IrCheKCfWnTvdmi6CsbDcZi9ULg2CFTcvJDQgdJJcqYZl6g9oSipnTsdZ_esddSlvVA6I',
  //     accessToken: accessToken
  //   }
  // });

  // setup email data with unicode symbols
  // let mailOptions = {
  //   from: '"Project Aashray" <aashrayproject@gmail.com>', // sender address
  //   to: 'aashrayproject@gmail.com', // list of receivers
  //   subject: 'Business registration verification', // Subject line
  //   text: 'A new business has been registered for Project Aashray',
  //   html: output
  // };

  // send mail with defined transport object
  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     return; // // console.log(error);
  //   }
  //   // // console.log('Message sent: %s', info.messageId);
  //   // // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // });

  const output2 = `
  <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>Business In Review</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />

    <style type="text/css"></style>
  </head>
  <body style="background-image: url('bg.jpg')">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td align="center">
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 600px;"
          >
            <tr>
              <td
                align="left"
                style="padding: 0px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; "
              >
                <h1
                  style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; color:  #3C4E62; line-height: 48px; text-align: center"
                >
                  Business In Review
                </h1>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td align="center">
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 600px;"
          >
            <tr>
              <td
                align="left"
                style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;"
              >
                <p class="" style="margin: 0; color:  #3C4E62">
                  Hi Sir/Mam, thanks for registering your business with us. Your
                  business is going through our business verification process.
                  Below are the details of your business -->
                </p>
                <br />
                <p class="" style="margin: 0; color:  #3C4E62">
                  Name: ${req.body.name}
                  <br />
                  Contact: ${req.body.contact}
                  <br />
                  email: ${req.body.email}
                  <br />
                  category: ${req.body.category}
                  <br />
                  Description: ${req.body.description}
                  <br />
                  Address: ${req.body.address}
                  <br />
                </p>
              </td>
            </tr>

            <tr>
              <td
                align="left"
                style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;"
              >
                <p class="" style="margin: 0; color:  #3C4E62">
                  Cheers,
                </p>
                <p class="" style="margin: 0; color:  #3C4E62">
                  Project Aashray
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>

  
  `;

  // let transporter2 = nodemailer.createTransport({
  //   // host: 'mail.google.com',
  //   // port: 587,
  //   // service: 'Gmail',
  //   // secure: false, // true for 465, false for other ports
  //   // auth: {
  //   //   user: config.get('gmailUsername'), // generated ethereal user
  //   //   pass: config.get('gmailPassword') // generated ethereal password
  //   // },
  //   // tls: {
  //   //   rejectUnauthorized: false
  //   // }
  //   service: 'gmail',
  //   auth: {
  //     type: 'OAuth2',
  //     user: 'aashrayproject@gmail.com',
  //     clientId:
  //       '389790068785-osb9rej502bbdbt6kil1jjrvo825o6fr.apps.googleusercontent.com',
  //     clientSecret: 'AVbe59TwBKQmN-bBU5DrR-Sh',
  //     refreshToken:
  //       '1//04R3kx2jVZu4ZCgYIARAAGAQSNwF-L9IrCheKCfWnTvdmi6CsbDcZi9ULg2CFTcvJDQgdJJcqYZl6g9oSipnTsdZ_esddSlvVA6I',
  //     accessToken: accessToken
  //   }
  // });

  // // setup email data with unicode symbols
  // let mailOptions2 = {
  //   from: '"Project Aashray" <aashrayproject@gmail.com>', // sender address
  //   to: req.body.email, // list of receivers
  //   subject: 'Business In Review', // Subject line
  //   text:
  //     'Thanks for registring your business with us. Your business is currently under review.',
  //   html: output2
  // };

  // // send mail with defined transport object
  // transporter2.sendMail(mailOptions2, (error, info) => {
  //   if (error) {
  //     return; // // console.log(error);
  //   }
  //   // // console.log('Message sent: %s', info.messageId);
  //   // // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // });

  return res.status(200).json({
    message: 'Successfully done'
  });
});

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
