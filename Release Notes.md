# 13th March 2019 - Scheduled
## Features
### POS 
 - Added Gift Receipt functionality. You can now mark transaction lines to automatically print a Gift Receipt, or repreint a gift receipt from the journal
 - Added functionality to view Cash Statements from the receipt journal
 - Added functionality to allow the Email Receipt to be customised via a Shop Feature
 - Added functionality for Norwegian Fiscalization which prevents the execution of Cash Statements when ther is open parked notes. This must be enabled via a Shop Feature. This is a readiness addition and not yet implemented in the backend.

### Reports
 - Added Overview Report
 - Added Index Report
 - Added Employee Report
 - Added Top List Report
 - Added Stock Report
 - Added Financial Stock Report

### Backoffice
 - Clerks can now be a "local clerk" to many shops

## Bug Fixes
### POS
 - Fixed some danish translations
 - Fixed issue where cost was not being returned by the gateway

### Item Management
 - Fixed issue where movements were not showing the right type/direction
 - Added maintenence controllers to republish data to rabbit
 - Fixed error when creating duplicate hierarchy nodes

### Reports
 - Fixed issue where cash staements and morning amount would be included in the simpel reports

### Stock management
 - Fixed issue adding quantities from matrix Grid would add "Qty"
 - Added maintenence controllers to republish data to rabbit

### Support UI
 - Fixed errors and validations when creating new users
 
### Backoffice
 - Added maintenence controllers to republish data to rabbit
 
 

---
# 1st March - Hotfix
## Bugs
### Reports
 - Fixed error where the filters would be hidden on the Transactions Report
 - Fixed cash statements appearing in the Sales Analysis
 - Fixed issue where Expenses would appear in the wrong reports
 - Fixed issue where the printing of the financial report was not formatted well
 - Fixed issue where the financial report would not print over more than one page
 
### POS
 - Fixed issue where creating customers would error if the customer number already existed

### Support UI
 - Fixed bugs with user creations and validations

---

# 28th February - Hotfix
## Features
### Admin
 - Added ability for admins to turn off Clean Cash
 
## Bugs
### Reports
 - Fixed error where the menu would appear on the print view
 - Fixed error with alignment of monetary values
 - Fixed avatar logo that was missing
 - Fixed cash statement error in financial report
 - Fixed curly brackets appearing in Reports

---

# 28th February 2019
## Features
### Portal
 - New user interface implemented
 - Added functionality for lost/forgotten password
 
### Reports
 - New user interface implemented
 - Transaction report improvements in Beta

### Item Management
 - Added support to print the currency symbol on the label
 
### POS
 - Added "Shop Logo" widget which will display the Shop's ImageURL defined in the backoffice
 - Added "Product Image" widget which will display the product's image if provided in Item Management#

### Tracking
 - Implemented auto cleanse of tracking data older than 30 days via Kubernetes CronJob

### Support UI
 - Added better validation of usernames and email addresses during user creation

## Bugs
### POS
 - Fixed a bug where Rounding payment lines were not being recorded to the database
 - Fixed a bug where the clerk's language was not overruling the shop/backoffice user lamguage
 - Fixed issue where the Cash statement was showing on the charts
 - Fixed bug where web orders were not being marked as closed
 
### Support UI
 - Fixed bug where Password was showing as expired on first creation
 - Fixed bug where selecting a shop in Shop Details was displaying the wrong data
 - Fixed bug where you could not assign widgets unless you were an administrator

### Item management
 - Fixed bug where item creation would error "Failed to create items"

### Price and Promotion Engine
 - Fixed bug saving new item prices
 
 
---
# 20th February 2019
## Features
### Reports
 - Localizations added for Dutch and German
 - Transaction Report updated and in final Beta

### Item Management
 - Localizations added for Dutch and German

### Price and Promotion Engine
 - Localizations added for Dutch and German

### Stock Management
 - Transfer Outs can now only be sent to shops in the same Group as the Sending store
 - Localizations added for Dutch and German

## Bugs
### POS
 - Fixed issue with error returning no results for customer search
 - DdD Connector renamed to K3 Connector
 - Fixed issue where duplicate payment lines are added when cancelling a transaction
 - Fixed issue where entering an invalid email address into Email Receipt would then not be editable
 - Fixed issue where CurrencyUnits would be displayed in the wrong order
 - Fixed error creating new customers in the Find Customer widget

### Admin
 - DdD Connector renamed to K3 Connector

### Reports
 - Minor fixes to the Financial Report

### Stock Management
 - Searches now utilise the Vendor filter
 - Fixed issues creating purchase orders and not showing on the PO list
 - Fixed an issue where the On Order quantity was not getting adjusted properly when receiving against a PO

### Tracking
 - Fixed tracking Microservice for PublicAPI requests

### Support
 - Fixed issues utilising Shop Context between screens

### Connector
 - Fixed issue where it would not print a receipt when a customer number contains non-numeric characters

### Tenant Creation
 - Major overhaul to the tenant creation process to make it work more seamlessly
 
---
# 7th February 2019
## Features
### POS
 - Added the ability for the POS to run offline completely from reboot of PC
 - POS can now be "installed" via chrome
 - POS will now check for config changes every minute, meaning a reload of the POS is not necessary when changing settings
 - Added the ability to search for Entered Text in the POS and display in electronic journal
 - Added support for CCV payment terminal integration (pending certification)
 - Now records the unit price when sales price is 0 for use in the public API

### Backoffice
 - Added support for Shoebox labels, where it will print a left, right and box section with a sequence number

### Reports
 - Added the ability to negate groupings for the Generic reports
 - Improvements to the Overview report (Beta)
 - Improvements to the Transaction Report (Beta)

### Public API
 - Added endpoints for Stock Lookup
 - Added endpoints for Goods Receive Notes
 - Added enddpoints for Clerks
 - Extended Item endpoints to accept additional barcodes

## Bug Fixes
### Item Management
 - Fixed issue where dimension sequences were not being set
 
### Price and Promotion Engine
 - Fixed issue where Basket in wrong currency would throw an error
 
### POS
 - Fixed an issue in reprinting receipts (requires connector update)
 - Fixed issue recording VAT on certain transactions
 - Fixed issue where updates would cause notifications to spam the user
 - Fixed issue where local clerks could still log into other stores
 
### Stock Management
 - Fixed issue when committing a Purchase Order which had previously been a draft throwing an error
 - Purchase Orders have been fully refactored
 - Fixed issue where On Hand was just matching On Order
 - Fixed a rounding issue for prices
 
---

# 1st February 2019
## Features
## Bug Fixes
### POS
 - Fixed issue recording VAT on some transactions

### Reports
 - Fixed issue where Financial Report was not separating connector data
---
# 31st January 2019
## Features
### Backoffice
 - Added an Active/Inactive toggle to Vendors
 - Added an Active/Inactive toggle to Shops
 
### Stock Management
 - Added a Matrix button to add items from a matrix grid in Purchase Orders
 
### Reports
 - Added new Transaction List report
 
### Admin
 - Currency and number values now support the local number format

### Item Management
 - Currency and number values now support the local number format
 
### Support Platform
 - Restricted access to certain functions to administrators only
 
### Reports
 - (Beta) Transaction List report has been added
 - (Beta) Overview report has been added
 
## Bug Fixes
### Stock Management
 - Fixed various issues saving/creating/committing a Purchase Order
 - Fixed various issues saving/creating/committing a Goods Receive
 - Fixed the dates of Goods Receive in main screen
 - Changes where made to the searches in all views
 - When opneing a GRN which is linked to a PO the PO should be connected/displayed
 - When viewing a closed PO(and GRN) the Matrix button should not be displayed
 - Fixed label printing in Goods receiving
 - Fixed every input field in the app to disallow negative integers
 
### Admin
 - Currency header labels were switched over
 - CVR string stranslated to Comany Number
 - Fixed issue where saving Shop Setup would not pop a successful toast message
 - Fixed issue where saving Button Management would not pop a successful toast message
 - Fixed issue where saving POS Options would not pop a successful toast message, Button Management and POS Options 
 - Fixed issue where the receipt preview would not display Bold lines in the same way they were printed. Whilst we could not exactly match, it is now more proportionally representative. 
 
### Item Management
 - Fixed issues where it would not display the item's selcted hierarchy node
 - Fixed validation error to pop a toaster when the name is too long
 - Fixed issue where Restock level and Reorder Point logic for which should be higher was the wrong way round
 - Fixed issue where items would create dimensions with the wrong ordinal positions meaning the matrix grid would display incorrectly
 - Fixed issue where updating items would fail
 
### Price and Promotion Engine
 - Fixed issue saving Least Expensive discount
 - Fixed issue saving Multibuy discount
 - Fixed issue saving Multibuy with Price Discount
---
# 24th January 2019
## Bug Fixes
### POS 
 - Fixed an issue where the toaster overlay prevents access of buttons. Implemented a whole new toaster.
 - Fixed an issue where returns would be different depending on the method of return
 
### Order Ready Board
 - Addition of Network bypass for Pilot site
---

# 23rd January 2019
## Features
### POS
 - Added a button to Clear All Discounts
 - Added a "Toggle Filters" button to Receipt Search so it takes up less screen space

### Order Ready Board
 - Now live in Production

### Price and Promotion Engine
 - Enhancement to the basket calculation to improve performance and scalability
 
### Other
 - Added a reindex fucntion in the backend to rebuild receipt search indexes

## Bugs
### POS
 - Fixed an sisue where transactionType for CashStatement lines came through as Sale
 - Fixed an issue where Offline database might not get initialised
 - Fixed an issue where making a return for a discounted transaction would not bring back the discounted amount
 - Fixed Foreign Credit Note change to now issue an Imagine Credit Note
 - Fixed Foreign Gift Certificate change to issue an Imagine Credit Note
 
### Reports
 - Fixed issue with Week Numbers going above 53 on the Weekly Sales report

### Public API
 - Fixed issue with return amounts when original price is 0

### Connector
 - Return text on return receipt is fixed and translatable

---
# 17th January 2019
## Features
### POS
 - Updated Swedish translations
 - Added a Shop Filter to Receipt Search to search for eceipts from local store only, or all stores
 - Added Payment Types to the Receipt Search
 
 ### Connector
 - Added "Return" to the header on return receipts
 
### Support Platform
 - Added security to Connector Details screen to restrict to only that user groups tenants
 
### Stock Managemnet
 - Added backend functionality for Offline Stock management. Still not ready for market as the UI work is to be completed.
 
## Bugs
### POS
 - Fixed an issue where if the Tracking service was not available it would block/slow down POS usage. Implemented a Service Worker to track these and manage offline much more effectively.
 - Fixed an issue where receipts may be duplicated in Receipt Search
 - Added negative symbols to return values in Receipt Search
 
### Number Generation
 - Fixed a bug where seeded DemoData would not jump the automatic number sequence which would cause an error generating new Clerk numbers, amongst other things.
 
### Stock
 - Fixed a bug preventing Goods Receive Notes being generated
 
### Support Platform
 - Fixed a bug which caused the erroneous creation of new Databases with funny names

### Connector
 - Fixed an issue where the connector would error when an alphanumeric barcode was used, which cause transactions to not be saved properly

---

# 14th January 2019
## Features
### POS
 - Future receipts will now be searchable on Payment Type/Method

### Reports
 - Added Average Transaction basket to Financial Report
 - (BETA) Added Overview report
 
## Bug Fixes
### POS
 - Fixed issue where receipt search was not displaying discount lines
 
### Reports
 - Fixes to the Financial Report for reconciliation

### Backoffice
 - Fixed error saving a global clerk

---
# 10th January
## Features
### Internal API
 - Added new Internal API gateway to improve PPE performance
 
## Bug Fixes
### Admin
 - Fixed issue where setting receipt line items back to be blank/nothing wasn't possible

### Backoffice
 - Fixed issue saving a clerk as a local clerk
 
### POS
 - Fixed issue where different properties are displayed when scanning a receipt vs searching for it for return

### Stock Management
 - Fixed issue saving a Goods Recieve Note
---
# 7th January 2019
## Features
### POS
 - Emailed Receipt now comes "from" a store's email address (See Backoffice release note)
 - Added the capability to auto roll over the POS ID when the maximum receipt number has been reached

### Backoffice
 - Backend now supports an EmailReceipt "from" parameter. This is to be added to the UI as part of the new UX work but can be configured manually in the data for the time being
 
### Price and Promotion Engine
 - Basket calculation speed for item prices has been improved

### Public API
 - Increased timeout value for CSV imports
 - CSV import will now import successful lines, reject valid ones and respond with the appropriate issue for each rejected line
 
## Bug Fixes
### Portal
 - Fixed an issue where the portal screen would load blank when re-visiting it after a period of time
 
### POS
 - Fixed issue when "stay logged in" feature was enabled that caused subsequenct receipts to have 0 receipt numbers
 
### Support Platform
 - Fixed issues creating users and assigning modules

### Public API
 - Various import bugs fixed

---

# 3rd January 2019
## Features
### POS
 - Receipt Search "Find Note" functionality now uses elastic search and you can search for and reprint historical receipts
 - Modifications made to the english translations around "notes" to "trasactions"

### Connector
 - Returns will now print a separate slip asking for notes and a signature
 
## Bug Fixes
### POS
 - Fixed an issue with the Swedish Language on the home screen
 
### Price and Promotion Engine
 - Fixed issue preventing the user from accessing the module
 
### Connector
 - Fixed issue where the price would not print in the correct alignment when the item details wrap over a line

### Support Platform
 - Fixed general issues when loading tenant information
 
---

# 19th December 2018
## Features
### POS
 - Gift Vouchers and Credit Memos now have a configurable expiration date. The default expiration date is 365. 
 - Now supports Customer Facing Displays. To automate its deployment to a second screen we recommend using google chrome with our extension: https://chrome.google.com/webstore/detail/k3-imagine-companion-exte/kimblkaofpaipeibpkjfngeajffkepen
 - Receipt numbers have been altered to support up to 999 POS per store
 - Receipt number has now been put underneath the receipt barcode to make it clear what it represents
 - Added support in the POS for "Offline" returns so they do not go into main stock. Configuration in the Back Office needs to follow to reflect his change but can be added by K3 in the interim
 - Swedish translations updated
 
### Admin
 - Added configuration for Customer Facing Displays

### Item Management
 - Added the ability to switch and resequence your dimensions and their values
 
### Support Platfoprm
 - Now restricts user to only see data within their user group
 
### Public API
 - Now supports partial redemption of Gift Vouchers
 - CSV Import will now only reject failed records and allow the remaining records to be imported
 
### Reports
 - Financial Report has been enhaced with abetter layout for cash statements
 
### Stock management
 - Added Stock Lookup feature to search for and scan items and return all article statistics
 - Added the ability to enter quantities to purchase order through a Matrix Grid
 

## Bugs
### POS
 - Issue when searching for items with an unusual tax setup (deliverate or otherwise) has been resolved
 - Fixed an issue where you could over-return a value onto a gift voucher, which should have been invalid behaviour
 - Fixed a bug where Cash Statements were getting submitted as Sales Transqactions and skewing report information
 - Fixed an issue where scanning the receipt barcode was not creating the return transaction
 - Fixed a bug where having duplicate ItemTaxCode records could misrecord VAT calculation

### Price and Promotion Engine
 - Fixed a bug where duplicated item data may get added to the PPE

### Admin
 - Fixed an issue where terminal configuration wasn't being included in the response from the API

### Backoffice
 - Fixed a date filter issue when from and to dates are the same day
 
### Price and Promotion Engine
 - Big refactor featuring many bug fixes
 
### Reports
 - Fixed reports to stop them displaying Cash Statements as Sales

# Production - 28th November 2018
## Features
### POS
 - Added new widget `article-statistic` which shows stock, on order, reserved and available quantiies for the item selected
 - Data for Morning Amount and Cash Statements now uploaded back into imagine and no longer just on the Connector
 - Gift Certificates now have an unlimited value - value no longer embedded in Voucher number
 - POS can now issue Gift Vouchers as change
 - POS can now partially redeem Gift Vouchers

### Backoffice
 - Now supports a vendor name up to 50 characters
 - Major overhaul of Gift Voucher management
 - Major overhaul of Credit Note management
 - Added the ability to upload Sales Budgets via Excel spreadsheet

### Reports
 - (Beta) further work on the Financial Report

### Item Managemnt
 - Added the ability to edit the Tax Rate associated to an item
 - (Beta) Added the ability to switch and manage the dimensions for a product
 - Adding a non-SKU product no longer requires a Vendor to be selected
 - Unit of Measure is no longer mandatory
 - 0 (Zero) cost and price are now considered valid

### Stock Management
 - Added the Stock lookup feature to view all data for a scanned or selcted article-statistic`
 
### Public API
 - Added the ability to create, redeem and balance check Gift Vouchers and Credit Notes

## Bugs
### POS
 - Fixed a bug where different fields would be displayed on the receipt panel depending on if you used a barcode scan or a search
 - Fixed a bug where the VAT was not being recorded against some transactions
 - Fixed a bug in the customer search when using case insensitive "contains" searches
 - Fixed a bug where some parameters were not printing on the receipt
 - Fixed a bug which could have meant a sale was duplicated in the datauplaoded by the connector
 - Fixed a bug where certain items could not be sold
 - Fixed a bug where pasting into the Line Comment could end up in the Barcode box and not get cleared down

### Item Management
 - Fixed the search results to return Master items
 - Fixed a bug in auto price calculation where if the default multiplier is 0 it should not try and recalcluate the price
 - Fixed a bug where it would append the item number even when you are auto-generating
 
### Admin
 - Fixed a bug which meant saving a Shop Currency would set the shop name to blank
---
# Production - 19th November 2018
## Features
### POS
 - Began migration away of Local Storage in favour of IndexDB for offline functionality to increase performance and functionality for the future. (Clerks, products, Expense Codes, Item Groups, Messaging now migrated)
 - Added the ability to assign reason codes at line and receipt level, pulled from the reason codes set up in Backoffice
 - Added support for HTTPS connectivity to the connector, enforced by changes to Google Chrome. Requires manual update to connectors currently in the field (Dev connectors only)
 - (Beta) Added support for using the device camera as a scanner (new widget) Not currently supported on iOS though.
 - Added the ability for a clerk to stay logged in to the POS
 - Solid Insurance widget altered to have 2 fields per line
 - Added display of sales budgets to the POS charts
 - Solid Insurance now supports search by Social Security Number
 
### Backoffice
 - Added better filtering to Gift Voucher screen
 - Added better filtering to Credit Memo screen

### Item Management
 - Added the ability to edit hierarchy nodes so you can associate the relevant tax rates (For when using them as Item Groups)
 
### Admin
 - Added a POS Option to ask for Email Receipt (Previous always on)
 - Added ZVT as a terminal type for EFT
 - Added setting for "stay logged in" to the POS

### Reports
 - (Beta) Added Financial Report (TO be improved later in the week)

### Integration (DataSwitch)
 - Added the ability to create stocktakes
 - Added the ability to retrieve purchase orders
 
### Other
 - Added ZVT Terminal Integration
 
## Bugs
### Portal
 - Have fixed the slowness issue when logging in by making a single API call instead of several dozen. This was particularly bad when many stores were present.
 
### POS
 - Fixed the Chart not refreshing when selecting different options (This had never worked in DdD either)
 - Fixed error searching for customers using the `find-customer` widget. 
 - Fixed an issue where if an item was added to the receipt with 0 price and the price gets altered, adding a subsequent item reset the price back to 0 (This was also present in the DdD version) 
 - Fixed styling of Find Customer widget panel
 - Fixed the need to go "incognito" when switching between Stores/Tenants
 - Fixed the issue when cancelling inusrance in the Solid Insurance widget

### Admin
 - Fix and issue where edit receipt line items might not display or reload, and buttons not appearing
 
### Reports
 - Fixed an issue where Sales Analysis by Profit would not return data
 - Fixed weekly sales not returning data
 - Fixed Sales Sundial not returning data
 
### Item Management
 - Fixed the Manufacturer Item number label in the Matrix tab
 - Fixed the Item Search to only return Master Items corectly
 - Fixed error creating products due to NumbersUsed bug

### Support Platform
 - Fixed a bug where the widgfet configuration was being saved to the wrong microservice database
 
 ---


# Production - 6th November 2018
## Features
### POS
 - Added Web Order/Omni Channel integration
 - We can now utilise the OS Clipboard if the Operating System supports it
 - Added VendorItemNo as a receipt property

### Stock Management
 - Added Purchase Order functionality
 
### Support Platform
 - Added User Group functionality - Users with access to the support platform will only see tenants that are a part of the same User Group. This will allow K3 Europe to only see their customers, UKIn to only see their customers etc.
 - Added Super Administrator privileges for the Imagine team to see all tenants
 - Added Widget Management
 - Added Shop Feature management

### Public API
 - Added Voucher and Credit Memo details in the Transactions for import/use by 3rd party systems

## Bug Fixes
### POS
 - Reverse input on iOS devices fixed
 - Printing journals for Swedish locale now working

### Item Management
 - Fixed the date time in Movements to show the time

### Admin
 - Fixed failure to update edits to receipts when there was already customizations present
 - Put the correct default logo into Receipt Edit
 
 ---

# Production - 18th October 2018
## Features
### POS
 - Added the ability to genrate and print an X Report
 - Added Web Orders/Omni Channel functionality
 - Added Revide Integration
 - Added Solid Insurance integration

### Backoffice
 - Can now define default multiplier and pence deduction to your Vendors for automatic suggested pricing in Item Management
 - Added an external identifier to the Shops screen for better management for integrations
 
### Price and Promotion Engine
 - Added Multibuy With Price discount type
 
### Item Management
 - Added Smart Search capability
 - Added Manufacturer Item Number as a property
 - Added Number Generation support, leaving Item Number blank will generate one for you
 - Added Barcode genration support - leaving it blank will generate a barcode for you. Configurable (in the backend) to use EAN13 or EAN8, further can be added on request
 - Added Barcode Printing functionality
 - Added Copy Item functionality
 - Added support for suggested price calculation based upon vendor values
 
### Admin
 - Added K3 Pay as a payment type in Admin for future support of K3 Pay Gateway
 
### Support Platform
 - Better tools for Tenant and User maintenence
 - Rebrand to K3
 
## Bugs
### POS
 - Errors recalling parked receipt
 - Fixes to widget visibility upon completion of transaction
 - Fixes to currency exchange rates
 - Fixes to the Smart Search to be more filtered

### Admin
 - Fixes to Currency Exchange Rate labels
 
### Item Management
 - Description field reverted back to original value after save
 - Fixed restocking validation
 - Movements not returning Transfer information fixed
 - Various label fixes
 
### Stock Management
 - Error saving and committing a goods receive
 - Switching from Stocktake to Receive Goods would sometimes throw an error
 - Removed non-functioning buttons
 - Can now no longer edit a Commited Receive Goods
 - Fixed a bug where Transfers were not creating Item Units and Movements properly
 - Fixed screens not showing product dimensions

### Price and Promotion Engine
 - Wasn't working when there were multiple barcodes for a product, not finding the item to calculate against
 - Big refactor of first 4 discount types (Discount, Deal Bundle, Least Expensive, Multibuy) correcting many usability issues
 - Price deletions weren't being rabbitted correctly

### Connector
 - Error handling for X Report functionality
 - Logging fixes

### Support Platform
 - Fixes to user module assignment

### Reports
 - Removed redundant message button
 - Fixed tooltip label in chart for Weekly Sales

---

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
 
