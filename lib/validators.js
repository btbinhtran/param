
/**
 * Module dependencies.
 */

var validator = require('tower-validator');

/**
 * Expose `validators`.
 */

module.exports = validators;

/**
 * Define default validators.
 */

function validators(param) {
  // XXX: todo
  param.validator('present', function(self, obj){
    return null != obj;
  });

  ['eq', 'neq', 'in', 'nin', 'contains', 'gte', 'gt', 'lt', 'lte', 'match'].forEach(function(key){
    param.validator(key, function(self, obj, val){
      return validator(key)(obj, val);
    });
  });
}