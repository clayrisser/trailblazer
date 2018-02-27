import _ from 'lodash';

module.exports = function error(err, verbose = false) {
  const { log } = this.req.trailsApp;
  if (err.originalError) err = err.originalError;
  if (err.statusCode) err.code = err.statusCode;
  if (err.output) err.code = _.get(err, 'output.statusCode');
  let code = 500;
  const statusCode = Number(err.code);
  if (statusCode && (100 <= statusCode && statusCode < 600)) code = statusCode;
  log.transports.console.label = code;
  if (code >= 500) {
    log.error(err);
  } else if (process.env.NODE_ENV !== 'production') {
    if (verbose) {
      log.warn(err);
    } else {
      log.warn(err.message);
    }
  }
  const response = { message: err.message };
  if (err.data) response.payload = err.data;
  return this.status(code).json(response);
};
