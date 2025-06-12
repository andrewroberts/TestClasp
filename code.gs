// Open a Google Spreadsheet,
// add a new row to the end of the sheet, and then copy the contents of the
// first row to the new row.

function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menuEntries = [{name: "Copy First Row to New Row", functionName: "copyFirstRowToNewRow"}];
  ss.addMenu("Copy First Row to New Row", menuEntries);
}

function copyFirstRowToNewRow() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var firstRow = sheet.getRange(1, 1, 1, sheet.getLastColumn());
  var newRow = sheet.getRange(sheet.getLastRow() + 1, 1, 1, sheet.getLastColumn());
  newRow.setValues([firstRow.getValues()[0]]);
}