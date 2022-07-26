import express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import {router} from "./route/feed.js" ;
import dotenv from "dotenv" ; 
dotenv.config();


const app = express();

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/feed', router);
app.use('/test', (req, res) => res.send('ok'))

mongoose
  .connect(
    'mongodb+srv://'+ process.env.DB_USER +':'+ process.env.DB_PSSWD + '@cluster0.lovnk.mongodb.net/test'
  )
  .then(result => {

    app.listen(3000);
  })
  .catch(err => console.log(err));
