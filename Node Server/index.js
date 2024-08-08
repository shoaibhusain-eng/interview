const express = require('express');
const axios = require('axios');
// const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const baseUrl = 'https://jsonplaceholder.typicode.com';
// app.use(bodyParser);

app.get('/', (req, res) => {
    res.send("Server is working")
})

app.get('/posts', async (req, res) => {
    try {
        console.log(res);
        let result = await fetch(`${baseUrl}/posts`);
        res.status(200).send(await result.json());
    }
    catch (error) {
        console.log(error.message);
    }
})

app.get('/postlist', async (req, res) => {
    try {
        const result = await axios.get(`${baseUrl}/posts`);
        res.status(200).send(result.data);
    }
    catch (error) {
        console.log(error.message);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})