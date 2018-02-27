import _ from 'lodash';

module.exports = function success(payload, message, meta) {
  if (_.isUndefined(payload)) {
    if (_.isString(message)) {
      return this.json({ message });
    }
    return this.json({
      message: '',
      payload: message
    });
  }
  return this.json({ message: message.toString(), payload, ...meta });
};
