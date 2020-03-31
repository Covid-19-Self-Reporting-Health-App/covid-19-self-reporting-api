const router = require('express').Router();
const {authGuard} = require('../auth');
const client = require('../redis-client');
module.exports = router;

// daily = {
//     url: String;
//     description: String;
//     messageType: String;
// }

// post a new daily
router.post('/', authGuard, async (req, res, next) => {
  try {
    const {body} = req;
    await client.setAsync('daily', JSON.stringify(body));
    return res.send('success');
  } catch (e) {
    next(e);
  }
});

// get the current daily
router.get('/', async (req, res, next) => {
  try {
    const success = await client.getAsync('daily');
    return res.status(200).json(JSON.parse(success));
  } catch (e) {
    next(e);
  }
});
