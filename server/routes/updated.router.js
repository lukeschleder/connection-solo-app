const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/', (req, res) => {
    console.log(req.body);
    console.log(req.user);
    const newUserInfo = req.body;
    const queryText = `UPDATE "user"
    SET
    self_connection = $1,
    others_connection_name = $2,
    others_connection_phonenumber = $3,
    timestamp_sobriety_start = $4,
    money_savedperday = $5,
    time_savedperday = $6
    WHERE "id" = $7;
    `;
    const queryValues = [
        newUserInfo.selfgoal,
        newUserInfo.connectionname,
        newUserInfo.connectionphonenumber,
        newUserInfo.sobrietystartdate,
        newUserInfo.moneysaved,
        newUserInfo.timesaved,
        req.user.id,
    ];
    pool.query(queryText, queryValues)
    .then((response) =>{
        console.log('PUT response', response);
        res.sendStatus(200);    
    })
    .catch((error) =>{
        console.log('PUT error', error);
        res.sendStatus(500);
    })  
});

module.exports = router;