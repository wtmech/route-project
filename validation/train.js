const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateTrainInput(data) {
  let errors = {};

  data.routeName = !isEmpty(data.routeName) ? data.routeName : '';
  data.runNumber = !isEmpty(data.runNumber) ? data.runNumber : '';
  data.operator = !isEmpty(data.operator) ? data.operator : '';


  if (Validator.isEmpty(data.routeName)) {
    errors.routeName = 'Route Name is a required field';
  }

  if (Validator.isEmpty(data.runNumber)) {
    errors.runNumber = 'Run Number is a required field';
  }

  if (Validator.isEmpty(data.operator)) {
    errors.operator = 'Operator ID is a required field';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}