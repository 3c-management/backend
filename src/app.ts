import "reflect-metadata";

//packagkes
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet'

const app:Express = express();

app.use(cors({
  credentials: true,
}));
app.use(helmet());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

export default app;