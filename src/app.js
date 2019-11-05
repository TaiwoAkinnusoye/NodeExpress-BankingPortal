import fs from 'fs';
import path from 'path';
import express from 'express';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render({title: 'Index'})
});

app.listen(3000, 'PS Project Running on port 3000');