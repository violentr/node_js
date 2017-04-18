var express = require('express');
var bookRouter = express.Router();

var router = function (nav, db) {
  db.connect();
  bookRouter.route('/')
    .get(function (req, res) {
      db.query("select * from books", function (err, recordset) {
        console.log(recordset);
        res.render("bookListView", {
          nav: nav,
          books: recordset
        });
      });
    });

  bookRouter.route('/:id')
    .get(function (req, res) {
      var id = req.params.id;
      db.query('select * from books where book_id=?', id, function (err, recordset) {
        if (recordset === 0) {
          res.status(404).send('Book Not Found!');
        } else {
          res.render('bookView', {
            nav: nav,
            book: recordset[0]
          });
        }
      });
    });
  return bookRouter;
};

module.exports = router;
