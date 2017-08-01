const parseCookies = (req, res, next) => {

  if (!req.cookies) {
    parseData(req);
  } else {
  
  }

};

module.exports = parseCookies;