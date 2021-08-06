const auth = (req, res, next) => {
    // will require users to be logged in, if not logged in will redirect.
    if (!req.session.logged_in) {
      res.redirect('/');
    } else {
      next();
    }
  };
  
  module.exports = auth;