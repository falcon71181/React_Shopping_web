import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axe from '../../../../axe';
import AvatarGroup from '..';
var avatars = [{
  src: 'images/user/user1.jpg',
  assistiveText: 'Jose Leandro',
  title: 'Jose Leandro'
}, {
  src: 'images/user/user2.jpg',
  assistiveText: 'Tahimi Leon',
  title: 'Tahimi Leon'
}, {
  src: 'images/user/user3.jpg',
  assistiveText: 'Carlos Miguel',
  title: 'Carlos Miguel'
}, {
  src: 'images/user/user4.jpg',
  assistiveText: 'Jane Doe',
  title: 'Jane Doe'
}];
describe('<AvatarGroup/>', function () {
  it('should be accessible', _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var html, results;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = ReactDOMServer.renderToString(React.createElement(AvatarGroup, {
              avatars: avatars
            }));
            _context.next = 4;
            return axe(html);

          case 4:
            results = _context.sent;
            expect(results).toHaveNoViolations();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});