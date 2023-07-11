const pool = require('../pool')

const getAll = (req, res) => {

    pool.query(
        'select * from driver'
    ,
    [],
    (err, result) => {
        if(err) throw err;
        res.status(200).json(result.rows);
    });
}

module.exports = getAll;