# fn-colors [![Donate on Gittip](http://badgr.co/gittip/twolfson.png)](https://www.gittip.com/twolfson/)

Add [colors][colors] methods to `Function.prototype`

**WARNING**: This will result in context (i.e. `this`) loss every time unless you use `.bind`.

[colors]: https://github.com/Marak/colors.js

## Getting Started
Install the module with: `npm install fn-colors`

```javascript
var fn_colors = require('fn-colors');
console.log.green('Hello World!'); // 'Hello World!' in green
```

## Documentation
Currently, only default [colors and styles][styles] work. `fn-colors` returns the `colors` which has a proxied `addProperty(color, func)`, allowing you to add colors one-by-one.

> If you are dying for your `setTheme` support, please create an issue. I am pretty fast at responding and patching. However, this was a side project of a side project of a side project.

[styles]: https://github.com/Marak/colors.js#colors-and-styles

### How does it work?
`fn-colors` operates by directly extending `Function.prototype`. For each color added, it adds a [getter property][getter] which will colorize any function it is invoke on.

To dive deeper, it receives `console.log` as its context (i.e. `this`) when `console.log.green` is run. It wraps the function (`console.log` in this case) and returns a special function (i.e. `colorizedFn`) such that any time it is invoked, it maps all the string arguments into colorized strings.

[getter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/get

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint via [grunt](https://github.com/gruntjs/grunt) and test via `npm test`.

## License
Copyright (c) 2013 Todd Wolfson

Licensed under the MIT license.
