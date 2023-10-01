// api/proxy.js
const fetch = require('node-fetch');

export default async function(req, res) {
  const url = 'https://script.google.com/macros/s/AKfycbw8K2wgXTepS4eZyjkxx-L4YgWIobURpYKcxT8cwquuuItlwszfT54crr_10pE0vbcU/exec';
  
  const formData = req.body;

  try {
    const response = await fetch(url, { method: 'POST', body: new FormData(formData),});

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
