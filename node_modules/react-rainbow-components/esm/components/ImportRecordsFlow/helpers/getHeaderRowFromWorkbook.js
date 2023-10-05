import XLSX from 'xlsx';
export default function getHeaderRowFromWorkbook(workbook) {
  try {
    var sheet = workbook.Sheets[workbook.SheetNames[0]];
    var headers = [];
    var range = XLSX.utils.decode_range(sheet['!ref']);
    var C;
    var R = range.s.r;

    for (C = range.s.c; C <= range.e.c; ++C) {
      var cell = sheet[XLSX.utils.encode_cell({
        c: C,
        r: R
      })];
      var hdr = "UNKNOWN ".concat(C);
      if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
      headers.push(hdr);
    }

    return headers;
  } catch (error) {
    console.log(error);
    return [];
  }
}