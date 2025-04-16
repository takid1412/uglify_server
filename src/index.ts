import express, {Request, Response} from 'express';
import UglifyJS from 'uglify-js';
import {Logger} from "./log";

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.text({type: '*/*'}));

app.post('/minify', (req, res) => {
    const jsCode = req.body;
    if(!jsCode || typeof jsCode !== 'string') {
        res.status(400).send("Invalid or missing JS Code");
    }

    const result = UglifyJS.minify(jsCode);

    if(result.error){
        Logger.log(result.error);
        res.status(500).send(result.error.message);
    }

    res.type('text/javascript').send(result.code);
});

app.listen(port, () => {
    Logger.log(`🚀 UglifyJS Server running at http://localhost:${port}`)
})