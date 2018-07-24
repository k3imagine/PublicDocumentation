# Production - 25th July 2018
## Bugs
### Item Management
 - Made UI currency symbol agnostic
 - Added Group code to Tax Code combobox to amke it clearwer which code is being selcted
 - Typos in the language file
 - Deleting Dimension values in Dimension Templates wasn't refreshing the UI when deleting the 2nd and further value
### Stock Management
 - Stocktake variances rounded to 2 decimal places
 - Error retrieving Vendors in UI resulted in error
### Admin
 - Button Management now working
 - Edit receipt line comboboxes now working
### Reports
 - Date filters now fixed so "End date" is taken from the end of the day
## Features
### POS
 - POS now configures the receipt lines in line with the Imagine model rather than the old DdD one
 - New simple "Stock Lookup" widget
 - New "Find Customer" widget
### Stock Management
 - Now supports multi-language
### Reports
 - Now supports multi-language
### Public API
 - Now supports Stock Adjustments
