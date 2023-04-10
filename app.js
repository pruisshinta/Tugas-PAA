const express = require('express');
const app = express();
const connection = require('./db');

app.get('/karyawan', (req, res) => {
  connection.query('SELECT * FROM tabel_karyawan', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
