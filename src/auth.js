const {TOKEN} = require('./server');

const authGuard = (req, res, next) => {
  const token = req.get('token');
  if (TOKEN === token) next();
  else {
    const error = new Error('Authentication required');
    error.status = 401;
    next(error);
  }
};

module.exports = {authGuard};
