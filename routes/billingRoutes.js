const keys = require('../config/keys');
const strip = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  //requireLogin: a middle ware to check if user is logged in. we can pass as many middlewares as we want here.
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await strip.charges.create({
      amount:500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    })

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
