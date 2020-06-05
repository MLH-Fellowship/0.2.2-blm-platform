const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');

const secret = require('../client_secret.json');

const accessSpreadsheet = async () => {
  const doc = new GoogleSpreadsheet('13kgiZp4_mk-kRbndPMqf8ofrf26arB6gOb69YoXsRKc');
  await promisify(doc.useServiceAccountAuth)(secret);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];

  const rows = await promisify(sheet.getRows)({
    offset: 1
  });

  const dataList = {};

  rows.forEach( row => {
    const data = {
      'url': row.url,
      'title': row.title,
      'description': row.description,
      'facebook': row.facebook,
      'instagram': row.instagram,
      'twitter': row.twitter,
      'image': row.image,
      'updated': row.lastUpdated
    };

    dataList.push(data);
  });

  console.log(dataList);

};

accessSpreadsheet();
