import XLSX from 'xlsx';
import getHeaderRowFromWorkbook from '../getHeaderRowFromWorkbook';
import getWorkbookParams from './getWorkbookParams';
XLSX.utils.decode_range = jest.fn(function () {
  return {
    s: {
      c: 0,
      r: 0
    },
    e: {
      c: 2,
      r: 2
    }
  };
});
describe('getHeaderRowFromWorkbook', function () {
  it('should return headers values using the first row values from the workBook', function () {
    var workbook = getWorkbookParams();
    var headers = getHeaderRowFromWorkbook(workbook);
    var expectedHeaders = ['First_Name', 'Last_Name', 'Email'];
    expect(headers).toEqual(expectedHeaders);
  });
  it('should return empty values if workbook sheet is not valid', function () {
    var headers = getHeaderRowFromWorkbook([]);
    expect(headers.length).toBe(0);
  });
  it('should call XLSX.utils.decode_range with the right argument', function () {
    var workbook = getWorkbookParams();
    getHeaderRowFromWorkbook(workbook);
    expect(XLSX.utils.decode_range).toHaveBeenCalledWith(workbook.Sheets[workbook.SheetNames[0]]['!ref']);
  });
});