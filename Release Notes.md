# Production - 8th August 2018
## Bugs
### Item Management
 - Made UI currency symbol agnostic
 - Added Group code to Tax Code combobox to amke it clearwer which code is being selcted
 - Typos in the language file
 - Deleting Dimension values in Dimension Templates wasn't refreshing the UI when deleting the 2nd and further value
### Stock Management
 - Stocktake variances rounded to 2 decimal places
 - Error retrieving Vendors in UI resulted in error
 - Receive Goods wordings corrected and various bugs resolved
 - Partial stocktakes fixed to find correct items
### Admin
 - Button Management now working
 - Edit receipt line comboboxes now working
### Reports
 - Date filters now fixed so "End date" is taken from the end of the day
 - Weekly Sales report now showing correctly
 - Suburst report now showing correctly
### PPE
 - Item Search bug fixed
### Public API
 - Bug creating integrators and integrations fixed
 - Swithced to use Integration ID instead of Integrator ID
## Features
### POS
 - POS now configures the receipt lines in line with the Imagine model rather than the old DdD one
 - New simple "Stock Lookup" widget
 - New "Find Customer" widget
 - New advanced "Stock Lookup" widget which shows stock from all branches in all variants in a Matrix Grid
### Stock Management
 - Now supports multi-language
 - Transfers is now implemented (Beta feature)
### Reports
 - Now supports multi-language
### Public API
 - Now supports Stock Adjustments
## Other
 - Connector now ready for production
 - Remote access to Connector now working
 - Support Platform now ported to Imagine
 - POS Tracking now ported to Imagine
 - AppMetrics added to all backend services
 
