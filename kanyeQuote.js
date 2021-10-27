import { text } from 'express';
import fetch from 'node-fetch';

const kanyeQuote = async (req, res) => {
  const response = await fetch("https://api.kanye.rest/");
  const kanyeQuote = await response.json();
  res.send(kanyeQuote);
}

export default kanyeQuote;