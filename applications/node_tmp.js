const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
app.use(bodyParser.json());

const secret = "your_secret_key";

function verifySignature(req) {
  const signature = req.headers['x-hub-signature-256'];
  const hmac = crypto.createHmac('sha256', secret);
  const digest = 'sha256=' + hmac.update(JSON.stringify(req.body)).digest('hex');
  return signature === digest;
}

app.post('/webhook-handler', (req, res) => {
  if (!verifySignature(req)) {
    return res.status(401).send('Invalid signature');
  }
  console.log("Webhook received:", req.body);
  res.status(200).send('OK');
});

app.listen(3000, () => console.log('Webhook server running on port 3000'));