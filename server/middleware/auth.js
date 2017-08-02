const models = require('../models');
const Promise = require('bluebird');
const cookieParser = require('./cookieParser.js');



module.exports.createSession = (req, res, next) => {
  models.Sessions.create().then((data) => {
    models.Sessions.get({id: data.insertId}).then((result) => {
      req.session = result;
      res.cookies = {shortlyid: {value: result.hash}};
      next();
    }).catch((err) => {
      console.log(err);
    });
  }).catch((err) => {
    console.log(err);
  });
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

