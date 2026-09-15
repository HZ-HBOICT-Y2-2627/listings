import express from 'express'
import fs from 'fs/promises'
import cors from 'cors'

const PORT = 1337;
const leet = express();

leet.get('/', async (req, res) => {

    try{
        const htmlC = await fs.readFile('./client.html')
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(htmlC);

    }catch(errr) {
        console.error(errr);
    }
})

leet.get('/secret', (req, res) => {

    res.send('Uv3 84ck3Nd')
})

leet.listen(PORT, () => {
    console.error('LEET started.')
})