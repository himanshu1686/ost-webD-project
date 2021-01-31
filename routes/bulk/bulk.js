const router = require('express').Router();
const xlsxFile = require('read-excel-file/node');
const Map = require('../../models/Map/Map');

router.get('/get_excel_file', async (req, res) => {
  try{ 
    console.log("inside /get_excel_file");
  const rows = await xlsxFile('./models/data.xlsx');
  // // console.log(rows);
  for (let i = 1; i < rows.length; ++i) {
    const lat = rows[i][6]
      .split(' ')
      .join('')
      .split(',')[0];
    const long = rows[i][6]
      .split(' ')
      .join('')
      .split(',')[1];
    const map = new Map({
      name: rows[i][1],
      address: rows[i][5],
      category: rows[i][0],
      contact: rows[i][4],
      links: rows[i][3],
      description: rows[i][2],
      latitude: lat,
      longitude: long,
      verified: true
    });
    await map.save();
  } 
}
catch ( err ){
  console.log(err);
}
  });

module.exports = router;
