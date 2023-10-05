import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axe from '../../../../axe';
import GMap from '..';
import MapMarker from '../../MapMarker';
describe('<GMap/>', function () {
  it('should be accessible', _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
    var html, results;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            expect.assertions(1);
            html = ReactDOMServer.renderToString(React.createElement(GMap, {
              zoom: 10,
              latitude: -33.836538,
              longitude: 151.1279,
              header: "Title"
            }, React.createElement(MapMarker, {
              latitude: -33.941264,
              longitude: 151.2042969,
              label: "Botany Bay",
              description: " Botany, New South Wales, Australia"
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