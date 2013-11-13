var jsOpt = (function(jsOpt) {

  var isDefined = function(v) {
    return (typeof v != 'undefined' && v !== null);
  };

  var optionFor = function(value) {

    return {
      defined: function() {
        return isDefined(value);
      },
      empty: function() {
        return !this.defined();
      },
      get: function() {
        if(isDefined(value)) {
          return value;
        }
        throw new Error('Option is none(). There is nothing inside.');
      },
      getOrElse: function(defaultValue) {
        return isDefined(value) ? value : defaultValue;
      },
      doWith: function(func) {
        if(isDefined(value)) func(value);
      },
      map: function(func) {
        return isDefined(value) ? optionFor(func(value)) : none();
      },
    };

  };

  jsOpt.some = jsOpt.option = function(value) {
    return optionFor(value);
  };

  jsOpt.none = function() {
    return optionFor(null);
  };

  return jsOpt;

}(jsOpt || {}));
