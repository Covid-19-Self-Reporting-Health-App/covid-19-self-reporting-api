require('dotenv').config();
import express, {Response, Request} from 'express';
import bodyParser from 'body-parser';
import {router as apiRouter} from './api';
import {green, yellow} from 'chalk';

const app: express.Application = express();

// parse url-encoded query strings
app.use(bodyParser.urlencoded({extended: false}));

// parse json bodies
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.get('/', (req: Request, res: Response) => {
  return res.send('Hello world!');
});

const PORT = process.env.PORT || 3000;
export const TOKEN: string =
  process.env.SECRET_TOKEN || "don't let me find this in prod!";
app.listen(PORT, () => {
  console.log(`Server listening on port: ${green(PORT)}`);
  console.log(`Your secret authorization token is: ${yellow(TOKEN)}`);
});
