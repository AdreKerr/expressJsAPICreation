//? IMPORT OUR MYSQL "pool" variable connection 
const pool = require('../config/dbconfig');


class AnimalDao {



    constructor() {
        this.pool = pool;
    }


    findAllInfo(req, res) {
        pool.query('SELECT * from animal_info', (err, rows) => {
            console.log(rows)

            res.send(rows);
        })
    }
    findIdOne(req,res){
        pool.query('SELECT * from animal_info WHERE id = 1',(err, rows) => {
            console.log(rows)
            res.send(rows)
        })
    }
}

module.exports = AnimalDao;