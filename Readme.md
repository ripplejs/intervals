# intervals

  Plugin for cleaner setInterval. It will automatically
  remove all intervals when the view is unmounted.

  Taken from the example in the [React docs](http://facebook.github.io/react/docs/reusable-components.html).

## Installation

  Install with [component(1)](http://component.io):

    $ component install ripplejs/intervals

## API

Adds a `setInterval` method:

```js
var View = ripple(template)
  .use(intervals);

View.mounted(function(){
  this.set('seconds', 0);
  this.setInterval(this.tick.bind(this), 1000);
});

View.prototype.tick = function() {
  this.set('seconds', this.get('seconds') + 1);
};
```

## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
