const express = require('express');
const cors = require('cors');
const app = express();
const port = 12307;
app.use(cors());
app.use('/data', express.static('./data'));
app.use('/', express.static('./dist'));
app.use('/public', express.static('./public'));

app.get('/', (req, res) => {
  res.send('./dist/index.html');
});

app.listen(port, () => {
  console.log(`server run at http://192.168.101.222:${port}`);
});
