import express from 'express';

let app = express();

app.get('/', (req, res) => {
  res.send('Hello There');
});

app.listen(3000, () => {
  console.log('Listening to port 3000');
});
