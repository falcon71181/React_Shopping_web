import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axe from '../../../../axe';
import Sidebar from '..';
import SidebarItem from '../../SidebarItem';
describe('<Sidebar/>', function () {
  it('should be accessible', _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var html, results;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = ReactDOMServer.renderToString(React.createElement(Sidebar, {
              selectedItem: "User 1"
            }, React.createElement(SidebarItem, {
              icon: React.createElement("img", {
                alt: "user-1",
                src: "images/user/user1.jpg"
              }),
              name: "User 1",
              label: "User 1"
            }), React.createElement(SidebarItem, {
              icon: React.createElement("img", {
                alt: "user-1",
                src: "images/user/user2.jpg"
              }),
              name: "User 2",
              label: "User 2"
            }), React.createElement(SidebarItem, {
              icon: React.createElement("img", {
                alt: "user-1",
                src: "images/user/user3.jpg"
              }),
              name: "User 3",
              label: "User 3"
            }), React.createElement(SidebarItem, {
              icon: React.createElement("img", {
                alt: "user-1",
                src: "images/user/user4.jpg"
              }),
              name: "User 4",
              label: "User 4"
            })));
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