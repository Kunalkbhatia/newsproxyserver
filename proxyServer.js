const express = require('express');
const axios = require('axios');
const app = express();


app.get('/news', async (req, res) => {
  const { q, page, category,apiKey } = req.query;
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'us',
        q: q,
        page: page,
        category: category,
        apiKey,
      },
    });
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching news' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
