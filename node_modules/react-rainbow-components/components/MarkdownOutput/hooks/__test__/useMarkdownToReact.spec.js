"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _reactHooks = require("@testing-library/react-hooks");

var _server = _interopRequireDefault(require("react-dom/server"));

var _useMarkdownToReact = _interopRequireDefault(require("../useMarkdownToReact"));

describe('useMarkdownToReact', function () {
  it('should return valid html for headings', function () {
    var values = ['# This is a level 1 header', '## This is a level 2 header', '### This is a level 3 header', '#### This is a level 4 header', '##### This is a level 5 header', '###### This is a level 6 header'];
    var patterns = [/<h1 class="(.*)">This is a level 1 header<\/h1>/, /<h2 class="(.*)">This is a level 2 header<\/h2>/, /<h3 class="(.*)">This is a level 3 header<\/h3>/, /<h4 class="(.*)">This is a level 4 header<\/h4>/, /<h5 class="(.*)">This is a level 5 header<\/h5>/, /<h6 class="(.*)">This is a level 6 header<\/h6>/];
    values.forEach(function (value, index) {
      var _renderHook = (0, _reactHooks.renderHook)(function () {
        return (0, _useMarkdownToReact["default"])(value);
      }),
          result = _renderHook.result;

      expect(_server["default"].renderToString(result.current)).toMatch(patterns[index]);
    });
  });
  it('should return valid html for lists', function () {
    var values = ['- Item #1\n- Item #2\n- Item #3', '1. Item #1\n2. Item #2\n3. Item #3', '- [x] Item #1\n- [ ] Item #2\n- [ ] Item #3'];
    var patterns = [/<ul class="(.*)"><li class="(.*)">Item #1<\/li><li class="(.*)">Item #2<\/li><li class="(.*)">Item #3<\/li><\/ul>/, /<ol class="(.*)"><li class="(.*)">Item #1<\/li><li class="(.*)">Item #2<\/li><li class="(.*)">Item #3<\/li><\/ol>/, /<ul class="(.*)"><li class="(.*)"><input type="checkbox" checked="" disabled=""\/>(.*)Item #1<\/li><li class="(.*)"><input type="checkbox" disabled=""\/>(.*)Item #2<\/li><li class="(.*)"><input type="checkbox" disabled=""\/>(.*)Item #3<\/li><\/ul>/];
    values.forEach(function (value, index) {
      var _renderHook2 = (0, _reactHooks.renderHook)(function () {
        return (0, _useMarkdownToReact["default"])(value);
      }),
          result = _renderHook2.result;

      expect(_server["default"].renderToString(result.current)).toMatch(patterns[index]);
    });
  });
  it('should return valid html for paragraphs', function () {
    var _renderHook3 = (0, _reactHooks.renderHook)(function () {
      return (0, _useMarkdownToReact["default"])('This is a paragraph');
    }),
        result = _renderHook3.result;

    expect(_server["default"].renderToString(result.current)).toMatch(/<p class="(.*)">This is a paragraph<\/p>/);
  });
  it('should return valid html for horizontal rules', function () {
    var values = ['---', '- - -', '---------', '***', '* * *', '***************'];
    values.forEach(function (value) {
      var _renderHook4 = (0, _reactHooks.renderHook)(function () {
        return (0, _useMarkdownToReact["default"])(value);
      }),
          result = _renderHook4.result;

      expect(_server["default"].renderToString(result.current)).toMatch(/<hr class="(.*)"\/>/);
    });
  });
  it('should return valid html for code', function () {
    var values = ['```js\ndoSomething();\n```', '`doSomenthing`'];
    var patterns = [/<pre[^>]*><code class="[^>]*>([^<]*)<\/code><\/pre>/, /<code\s[^>]*>doSomenthing<\/code>/];
    values.forEach(function (value, index) {
      var _renderHook5 = (0, _reactHooks.renderHook)(function () {
        return (0, _useMarkdownToReact["default"])(value);
      }),
          result = _renderHook5.result;

      expect(_server["default"].renderToString(result.current)).toMatch(patterns[index]);
    });
  });
  it('should return valid html for tables', function () {
    var values = ['| Header |\n| ------- |\n| Cell |', '| Header |\n| :------- |\n| Cell |', '| Header |\n| -------: |\n| Cell |', '| Header |\n| :-------: |\n| Cell |'];
    var patterns = [/<table[^>]*><thead><tr[^>]*><td[^>]*>Header<\/td><\/tr><\/thead><tbody[^>]*><tr[^>]*><td[^>]*>Cell<\/td><\/tr><\/tbody><\/table>/, /<table[^>]*><thead><tr[^>]*><td style="text-align:left"[^>]*>Header<\/td><\/tr><\/thead><tbody[^>]*><tr[^>]*><td style="text-align:left"[^>]*>Cell<\/td><\/tr><\/tbody><\/table>/, /<table[^>]*><thead[^>]*><tr[^>]*><td style="text-align:right"[^>]*>Header<\/td><\/tr><\/thead><tbody[^>]*><tr[^>]*><td style="text-align:right"[^>]*>Cell<\/td><\/tr><\/tbody><\/table>/, /<table[^>]*><thead[^>]*><tr[^>]*><td style="text-align:center"[^>]*>Header<\/td><\/tr><\/thead><tbody[^>]*><tr[^>]*><td style="text-align:center"[^>]*>Cell<\/td><\/tr><\/tbody><\/table>/];
    values.forEach(function (value, index) {
      var _renderHook6 = (0, _reactHooks.renderHook)(function () {
        return (0, _useMarkdownToReact["default"])(value);
      }),
          result = _renderHook6.result;

      expect(_server["default"].renderToString(result.current)).toMatch(patterns[index]);
    });
  });
  it('should return valid html for links', function () {
    var _renderHook7 = (0, _reactHooks.renderHook)(function () {
      return (0, _useMarkdownToReact["default"])('[Link](http://www.example.com/ "A link")');
    }),
        result = _renderHook7.result;

    expect(_server["default"].renderToString(result.current)).toMatch(/<a href="http:\/\/www.example.com\/" title="A link" class="(.*)">Link<\/a>/i);
  });
});