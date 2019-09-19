const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use('/services/catalog/v4/category/shop/new/all-new/index.json', proxy({
    'target':'https://www.westelm.com',
    'secure': false,
    'logLevel':'debug',
    'changeOrigin': true
  }));
};