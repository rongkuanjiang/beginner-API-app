const express = require('express');
const { readFile } = require('fs').promises;


const app = express();

app.get('/', async (request, response) => {
    response.send(await readFile('./return.html', 'utf8'));
    
    /*readFile('./return.html', 'utf8', (e, html) => {
        if (e) {
            response.status(500).send();
        }
        response.send(html);
    });*/
});

app.listen(process.env.PORT || 3000, () => console.log('app available on localhost 3000'));