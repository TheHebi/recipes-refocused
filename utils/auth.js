const auth = (req, res, next) => {
    // will require users to be logged in, if not logged in will redirect.
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = auth;