// Load in dependencies
var colors = require('colors');

// Set up addProperty (magic maker)
var fnProto = Function.prototype,
    arraySlice = [].slice;
function addProperty(color, func) {
  // Generate a colorized fn for the function
  var colorizedFn = function () {
    // Iterate over the arguments and colorize them
    var args = arraySlice.call(arguments),
        coloredArgs = args.map(function (arg) {
          // If the argument is a string, colorize it
          if (typeof arg === 'string') {
            return func(arg);
          } else {
            return arg;
          }
        });

    // Invoke the coloredArgs on the original function
    // DEV: Unfortunately, there will be a context loss since console.log.log === log.log for context
    console.log(arguments.callee
    return arguments.callee.caller;
  };

  // Add the colorizedFn to the prototype
  if (Object.defineProperty) {
    Object.defineProperty(fnProto, color, {
      get: colorizedFn,
      configurable: true,
      enumerable: false
    });
  } else {
  // DEV: Technically, this is not necessary but if we ever add browser support like colors
    fnProto.__defineGetter__(color, colorizedFn);
  }
}

// Add the basic set to our set
var skipKeys = ['mode', 'addSequencer', 'setTheme'],
    colorKeys = Object.keys(colors);
colorKeys.forEach(function (key) {
  // If the key is in our skip keys, skip it
  if (skipKeys.indexOf(key) !== -1) {
    return;
  }

  // Otherwise, add the color
  addProperty(key, colors[key]);
});

// Proxy color's addProperty
var colorsAddProperty = colors.addProperty;
colors.addProperty = function addFnColorsProperty (color, func) {
  // Add it to our method
  addProperty(color, func);

  // Add if to colors
  return colorsAddProperty.apply(this, arguments);
};

// Export colors
module.exports = colors;