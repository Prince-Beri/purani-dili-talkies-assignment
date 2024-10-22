import express from 'express';
import { createServer } from 'http';
const app = express();
const port = process.env.PORT || 3000;

const server = createServer(app);


app.use('/', (req, res) => {
    res.send('Hello World...');
});

server.listen(port, () => {
    console.log(`App is runing on ${port}`);
});