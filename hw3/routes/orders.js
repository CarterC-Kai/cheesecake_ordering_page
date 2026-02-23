import dbms from './dbms.js';
import express from 'express';

// Made by: Carter Chan

var router = express.Router();

/* post the orders */

// Had to use both get and post to make the order page work, not sure why
router.get('/', function(req, res, next) {
  // array for toppings and quantity
  var order = [
    { "topping": "Wildberry", "quantity": "2" },
    { "topping": "Blueberry", "quantity": "6" },
    { "topping": "Plain", "quantity": "3" },
  ]

  res.json(order);
});

router.post('/', function(req, res, next) {
  var month = req.body.month;
  var year = "2026";
  var sql = 'SELECT * FROM orders ORDER BY month;';

  con.query(sql, [month, year], function (err, result) {
    if (err) throw err;

    res.json
    ({
      month: month,
      summary: result // This now contains dynamic data from your DB
    });
  });
});

export default router;
