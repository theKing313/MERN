import express from 'express';
// import Subscribers from '../models/subscriber.js';
const router = express.Router();
router.get('/', async(req,res)=>{
    // const subscribers = await Subscribers.find();
    res.json()
})

export default router;