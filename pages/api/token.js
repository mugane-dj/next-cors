import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

export default async function handler(req, res) {
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  const response = await fetch('https://api.benkiko.io/v1/token/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
  res.json(data);
}
