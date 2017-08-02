const parseCookies = (req, res, next) => {
  req.cookies = {};
  if (req.headers.cookie) {
    var cookies = req.headers.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].split('=');
      var cookieKey = cookie[0].trim(); 
      req.cookies[cookieKey] = cookie[1];
    }
  }
  
  next();
};

module.exports = parseCookies;