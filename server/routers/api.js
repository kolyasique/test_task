const BaseRouter = require('express').Router();

const ParseRouter = require('./siteParse.router');

BaseRouter.use('/', ParseRouter);
// BaseRouter.use('/game', GameRouter);

BaseRouter.get('*', (req, res) => {
  res.json({ msg: 'no end point' });
});

module.exports = BaseRouter;