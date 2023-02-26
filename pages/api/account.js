import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.ACCESS_TOKEN;

export default async function handler(req, res) {
  const username = 'traore';
  const mnemonic = 'lemon budget retreat there quiz lock animal file ladder knife dumb smile option napkin cherry nation strategy slogan tongue unique velvet delay home ostrich';

  const response = await fetch('https://api.benkiko.io/v1/account/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + API_KEY
    },
    body: JSON.stringify({ username, mnemonic })
  });

  const data = await response.json();
  res.json(data);
}
