const express = require('express');
const router = express.Router();
//const mongoose = require('mongoose');
//const usersSchemaModel = require('../models/users-schema');

//mongoose.Promise = global.Promise;
/*mongoose.connect(db.database, (err) => {
    if (err) {
        res.json(err);
    } else {
        console.log('Database Connected Successfully');
    }
});*/

// Get All Users
router.get('/getusers', function (req, res) {
    /* if (err) {
         return res.status(403).send({ success: false, msg: 'Unauthorized.' });
     } else {
         res.json({"name":"Azam"});
     }*/
    res.json({ "name": "Azam" });
});

//Delete users
router.delete('/user/:id', function (req, res) {

    if (err) {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    } else {
        res.json({ "id": "0001" });
    }
});



//export the router to main application file
module.exports = router;