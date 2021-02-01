const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const server = require('http').createServer(app);

const path = require('path');

const config = require('config');
const db = config.get('mongoURLLocal');

// app.use(
//   cookieSession({
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: [cookieKey]
//   })
// );
//
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
  })
  .then(() => {
    // console.log('Mongo successfully connected');
  })
  .catch(err => {
    // console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 app.use(cors());

// app.use('/bizmap', require('./routes/bizmap/bizmap'));
app.use('/graph', require('./routes/map/map'));
//app.use('/add_data', require('./routes/bulk/bulk'));

//Only for production, doesn't matter, don't delete this
//Serve static assets if in production

app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
   console.log(`Server started on ${PORT}`);
});
