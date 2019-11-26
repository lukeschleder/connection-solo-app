const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    console.log(req.params);
    const queryText = `SELECT * 
    FROM "meditations"
    WHERE "id" = $1;`;
    const queryValues = [req.params.id];

    pool.query(queryText, queryValues)
        .then((response) =>{
            console.log('in random meditation GET', response);
            res.send(response.rows)
            
        })
        .catch((error) =>{
            console.log('GET error in random meditation', error);
            res.sendStatus(500);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;