/**
 *
 */

var apiHelpers = require("./helpers/api");
var models = require("../../models");
const router = require("express").Router();

<<<<<<< HEAD:server/web-api/exception.js
router.post("/exception", function(req, res) {
=======
router.get("exception", function(req, res) {
>>>>>>> master:server/web-api/exception.js
  var exception = apiHelpers.getModelData(req.body, models.NgException);
  console.log(exception);

  // TODO(sina): log this to disk once our FE logging is setup
  //             don't use console.log, to ensure it goes to a separate logger, e.g. the setup via
  //             https://github.com/EFForg/pushserver/blob/master/routes/errors/log_error.js
  return res;
});

module.exports = router;
