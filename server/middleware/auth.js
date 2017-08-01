const models = require('../models');
const Promise = require('bluebird');
const cookieParser = require('./cookieParser.js');
//console.log(cookieParser);


module.exports.createSession = (req, res, next) => {
  console.log('res is totally here', res.cookie);
  
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

