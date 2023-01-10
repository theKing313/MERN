import express from 'express';
// import mongoose from 'mongoose';
import mongodb from 'mongodb';

import restaurantsRouter from './routes/restaurants.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 5000;

// 2
const CONNECTION_URL = 'mongodb://127.0.0.1:27017';
const MongoClient = mongodb.MongoClient
MongoClient.connect(CONNECTION_URL).then((client) => {
    const databasename = 'new';
    const connect = client.db(databasename)

    // db.createCollection(
    //     "restaurants",
    //     {
    //         "address": {
    //           "building": "8825",
    //           "coord": [-73.8803827, 40.7643124],
    //           "street": "Astoria Boulevard",
    //           "zipcode": "11369"
    //         },
    //         "borough": "Queens",
    //         "cuisine": "American",
    //         "grades": [ {
    //           "date": {"$date": "2014-11-15T00:00:00.000Z"},
    //           "grade": "Z",
    //           "score": 38
    //         },
    //         {
    //           "date": {"$date": "2014-05-02T00:00:00.000Z"},
    //           "grade": "A",
    //           "score": 10
    //         },
    //         {
    //           "date": {"$date": "2013-03-02T00:00:00.000Z"},
    //           "grade": "A",
    //           "score": 7
    //         },
    //         {
    //           "date": {"$date": "2012-02-10T00:00:00.000Z"},
    //           "grade": "A",
    //           "score": 13
    //         }],
    //           "name": "Brunos On The Boulevard",
    //           "restaurant_id": "40356151"
    //        }
    // )
    // var authColl = db.getCollection("new")
    // restaurants = conn.db(databasename).collection()
    // console.log(connect)
    // console.log(authColl)
    // .toArray(function(err, names) {   
    //     if(!err) {
    //         console.log(names)
    //     }
    // });
 }).catch((err) => {
  
    // Printing the error message
    console.log(err.Message);
 })





// 1
// const CONNECTION_URL = 'mongodb://127.0.0.1:27017';
// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true})
// const db = mongoose.connection










app.use(express.urlencoded({ extended: false }));
app.use(express.json())// that line says that we can use json in OUr server as a body instead of a post element
// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(bodyParser.urlencoded({ extended: false }));
// combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/restaurants',restaurantsRouter);// http://localhost:subscribers


app.listen(PORT,()=> console.log('server has started'))

export default app