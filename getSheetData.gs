// Open spreadsheet using sheet Id, makes data available in an array
function openSheetById(sheetID, sheetName) {

  var spreadsheet = SpreadsheetApp.openById(sheetID);
  var dataSheet = spreadsheet.getSheetByName(sheetName);
  var dataRange = dataSheet.getDataRange();
  var dataValues = dataRange.getValues();

  return dataValues;

}

// Open spreadsheet using sheet URL, makes data available in an array
function openSheetByURL(sheetURL, sheetName) {

  var spreadsheet = SpreadsheetApp.openByUrl(sheetURL);
  var dataSheet = spreadsheet.getSheetByName(sheetName);
  var dataRange = dataSheet.getDataRange();
  var dataValues = dataRange.getValues();

  return dataValues;

}
