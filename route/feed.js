import  express  from "express";
import {getParking, createVoiture}  from '../controller/controller.js'
export const router = express.Router();


router.get ('/posts', (req, res, next)=> {
    console.log ('test dans le route')
    next()
} , getParking);

router.post(
    '/post',
    createVoiture

);

