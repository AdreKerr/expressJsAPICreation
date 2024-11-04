const pool = require('../config/dbconfig');



class StateDao {



    constructor() {
        this.pool = pool;
    }

    findAll(req, res) {
        pool.query('SELECT * FROM states', (err, rows) => {
            console.log(rows);
            res.send(rows);
        })
    }

}

module.exports = StateDao;