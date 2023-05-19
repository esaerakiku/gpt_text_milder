// app.js
require('dotenv').config();  // 追加
const express = require('express');
const axios = require('axios');
const cors = require('cors');  
const app = express();

app.use(cors());  
app.use(express.json());

app.post('/improve_text', async (req, res) => {
    const text = req.body.text;
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', 
        {"model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": text + "Politely rephrase the above text so that it is not obvious that it is a swear word, such as seemingly complimenting the other person or demeaning yourself, and then output it in the same language as the above text."}],
        "temperature": 0.7,
        "max_tokens": 100
         },
        { headers: { Authorization: `Bearer ${process.env.OPENAI_SECRET_KEY}` } }  // 修正
        );
        const improved_text = response.data.choices[0].message.content.trim();
        res.json({ improved_text });
    } catch (error) {
        console.error('Error improving text:', error);
        res.status(500).json({ error: error.message });
    }
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
