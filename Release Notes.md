# Production - 3rd October 2018
## Bugs
### POS
 - Stock and Customer widgets not clearing down after a transaction is finished
 - Clerk not redirected after login when using cleancash
 - Connectors were not mulittenanted - now they are
 - Journals print button was missing translation text
 - Invalid credentials resulting in redirection loop

### Price and Promotion Engine
 - General errors when setting up a promotions
 - Bug fixed creating a hierarchy discount
 - Error creating a Bundle promotion
 
### Item Management
 - View figures tab now works
 - Updating items without variants was throwing an error
 
### Stock Management
 - Now support label printing from Receive Goods
 
## Features
### POS
 - Customer widget now supports the creation and edit of customers
 
### Public API
 - Customer now has an "isActive" property

### Price and Promotion Engine
 - Now supports multibuys for Prices, not just percentage discounts

## Other
 - Connector now support slabel printing with the Citizen CL-S521
 - Adjustment data is now being rabbited out


---
# Production - 19th September 2018
## Bugs
### Stock Management
 - Stocktake scanning increment error now scan increases by 1 instead of prefixing a 1
 - Language string bug in Vendor combobox

### Item Management
 - Bug saving variants one standard items causing error now fixed

## Features
### POS
 - Multicurrency Gift Certificates - When creating a gift certificate it will be linked to the currency of the store issuing it. If that currency is not supported by the store you are trying to redeem in, it will show as not found
 - Matrix Stock Lookup - The Stock Widget now allows you to view your stock in all your stores in a Matrix Grid
 - Customers - You can now create and edit customers at the POS

### Backoffice
 - Gift Voucher Management - View, audit, and manually expire gift certificates
 - Clerk Passwords no longer mandatory - Sign in with just the Clerk Number
 - Clerk Roles - Clerks can now be associated to configurable roles which are linked to Button Management Profiles which can restrict the functionality at the POS based upon the clerk role
 - Groups - You can now link stores to Groups, and your Expense Codes, Reason Codes and Item Groups can be selected at group level to give more control over what appears locally at the POS for different stores

### Stock Management
 - Stock Transfers - Transfer goods in and out of stores
 
### Public API
 - Will now accept web orders - addition of this functionality to the POS is still pending
 - Will now accept modification of objects through external identifiers
 - Can now park a note (receipt/transaction) through the Public API
 - Can now pass in a basket to the PPE from an external source, like and eCommerce engine
 - Will now accept Stocktakes to be passed in
 - Now has paged GET methods where appropriate
 - Added some update methods which were missing

## Other
 - Safe deletion of Vendors - Will not actually delete any data unless there is no related data for this
 - PPE has some backend model changes
 - All UIs are now multilnaguage capable (though some are awaiting translation)
 - CleanCash Fiscalization for Sweden is completed
 - We have added a Globals microservice to allow things like the buttons, currencies etc to be managed for all tenants not just individual tenants which will make future maintenence easier
  - We have added a Number Generation microservice which will automatically create numbers in various places. This is still to be added to the UIs

---
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
 
