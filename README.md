# ng-graph-bar

This repo is for distribution on `npm` and `bower`. The source for this module is in the
[main AngularJS repo](https://github.com/angular/ng-graph-bar).
Please file issues and pull requests against that repo.

## Install

You can install this package either with `bower`.

### bower

```shell
bower install ng-graph-bar
```

Add a `<script>` and `<link css>` to your `index.html`:

```html
<link rel="stylesheet" href="bower_componetns/ng-graph-bar/styles/ng-graph-bar.css" />
....
<script src="bower_componetns/ng-graph-bar/scripts/ng-graph-bar.js"></script>
```

Then add `ngRoute` as a dependency for your app:

```javascript
angular.module('myApp', ['ngGraph']);
```
// in app html
<ng-graph-bar template="bower_components/ng-graph-bar/templates/bar.html" data="data">

// in controller
```javascript
...
$scope.data = [
    { name : "Label1", colorClass : 'bar-graph-1', value : '20' },
    { name : "Label2", colorClass : 'bar-graph-2', value : '30' },
    { name : "Label3", colorClass : 'bar-graph-3', value : '10' },
    { name : "Label4", colorClass : 'bar-graph-4', value : '20' },
    { name : "Label5", colorClass : 'bar-graph-5', value : '5' }
];
...
```

All styles you cant edit in ng-graph-bar/styles/ng-graph-bar.css

## Documentation

Documentation is available on the
[ngGraphBar docs site]().

## License

The MIT License

Copyright (c) 2010-2015 Plcgi1, Inc. http://

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
