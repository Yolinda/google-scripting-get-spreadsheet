# google-scripting-get-spreadsheet
This file contains two functions created in _Google Scripting_, both functions provide the same results.

## How to open a Spreadsheet
There are several ways to open a Google Spreadsheet when creating a Google script. If your Script is bound to the Spreadsheet you can use the getActiveSheet() function in Google. However, the two functions included in this file allows users to either open a document using the Spreadsheet ID or URL. 

## Open by Spreadsheet ID
The __openSheetById(sheetID, sheetName)__ function can be used to open a Google Spreadsheet using the Spreadsheet ID. The spreadsheet ID can be obtained in the URL of the document. As per the example below, the ID of the spreadsheet document is located after the https://docs.google.com/spreadsheets/d/ tag and before the /edit#gid=0 tag as highlighted below.

https://docs.google.com/spreadsheets/d/1qpyC0XzvTcKT6EISywvx32r3ssA0MwQoFDE8p-Bll4hps/edit#gid=0

## Open by Spreadsheet URL
The __openSheetByURL(sheetURL, sheetName)__ function can be used to open a Google Spreadsheet using the Spreadsheet URL.

## Using functions
When running the function the following variables should be amended / changed:-
* The __sheetID__ variable should be replaced with the Spreadsheet ID.
* The __sheetURL__ variable should be replaced with the Spreadsheet URL.
* The __sheetName__ variable should be replaced with the sheet name that the user wishes to open and read data from.

## Variables explained
* var spreadsheet -> Variable stores the location of the spreadsheet, whether it is opened by ID or URL
* var dataSheet -> Defines the sheet from which the data will be read or pulled
* var dataRange -> Variable stores the full data range of the identified sheet
* var dataValues -> Variable stores the raw data as extracted from the identified sheet - returned as an array.
