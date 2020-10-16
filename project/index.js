const { GoogleSpreadsheet } = require('google-spreadsheet');
 
// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet('1ltgJ7DO2j8YNO5nuOQuTHBUPZ4d3l1pPmv-KelBIFO8');
 
(async function() {


// OR load directly from json file if not in secure environment
await doc.useServiceAccountAuth(require('./credentials.json'));

 
await doc.loadInfo(); // loads document properties and worksheets
console.log(doc.title);
await doc.updateProperties({ title: 'renamed doc' });
 
const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
console.log(sheet.title);
console.log(sheet.rowCount);
 
}
) ()