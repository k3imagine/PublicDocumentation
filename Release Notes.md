# 16th October 2019

## Features

### POS
 - Gift vouchers now support multi currrency, this requires the shop to have exchange rates setup.

### Stock
 - Backend improvements to optimise performance
 - Stock logs improved to show more relevant information

### Back office
 - Void transaction now can be limited to certain clerks


## Bugs

### POS
 - Clerk shown against the article now shows the correct number instead of the internal id
 - POS Search now uses elastic search
 - Sales graphs now show correct figures excluding cash statements
 - Fixed a bug when inserting return movements

### Back office
 - Clerk search now uses clerk number instead of ID

### Stock
 - Fixed a bug when inserting stocktake movements

### Public API
 - Vendor endpoint now limits the vendor number in the same way as the UI

---

# 2nd October 2019

## Features

### Item
 - Added option for shortcut which is used to quickly access the item on the POS

### POS
 - Added the shortcut key to the right menu to quickly access items
 - Trash icon now used consistently across the POS UI

### Stock
 - Refactored to be less dependant on messages from other modules

### Public API
 - Added a new PUT method to masteritems which also updates the child items
 - StockLookup endpoint now includes the vendor against each item
 - Added a new GET method to item which finds the item based upon the barcode or additional barcodes
 - Transaction endpoint now returns the currency code of the transaction
 - GET endpoint for Goods receipt now accepts a datetime filter
 - A new endpoint has been added to GET transfers by shop id, this also accepts a datetime filter

## Bugs

### Portal
 - Fixed an issue causing a redirect when only one module was enabled

### Item
 - Refactored item group messages

### Stock
 - Fixed a ui issue where the stock log filters placeholder text was incorrect

### POS
 - Fixed graphs to exclude cash statement amounts
 - Fixed a bug which caused exchange lines to be recorded as wrong movement type
 - Fixed reprint method so all future receipt copies include the payment method and amount

### Public API
 - Fixed a timeout issue on csv import
 - Fixed an issue which caused an error on csv import

---

# 18th September 2019
## Features

### Admin
 - POS options now contain an option to `Automatically aggregate identical item lines in a transaction`
 
### Item
 - Ability to print discount labels by discount % or amount
 - Ability to view and edit VendorItemNumber

### POS
 - `Automatically aggregate identical item lines in a transaction` is used by the POS and will split the lines if unchecked
 - Added option to print gift labels which also contains a set expiry date which can be overwridden per line on the POS
 - Inactive items are now excluded from the item search
 - Discount labels can be used on the POS
 
### Stock
 - Bulk import now has a feature to download a csv file which contains the id values for tax,taxgroups and groups so the values can be used in the xls import
 - Stock search now updated to use elastic search
 - Stock transfer screens have been updated to new UI
 - Stock lookup overview introduced which shows item stock for all shops
 - In the stock screens when adding an item the Add button now displays at the top and bottom of the page, this eliminates the need to scroll to the top of the page
 - Stocktake now includes a location option
 - Vendor Item number now displays on purchase order and goods receive item list.
 - You can now search by vendorItemNo in the goods receive and purchase order screens 

## Bugs

### Item
 - Fixed a bug which stopped changes being saved on Item Hierarchys

### POS
 - Changed Web order pick list to print the barcode

### Public API
 - When importing prices on the csv import if no end date is added to the price record it automatically sets this to 5 years in the future
 - When importing prices if it finds an existing record with a matching start date and item id then it will update the existing price record
 - Fixed an issue where the task message was not being sent to an external endpoint
 - `/MasterItem/masteritemno/masteritemno` endpoint now returns the master item with items contained
 - Updated error message when creating a master item but not sending required custom attributes
 - Fixed stock take item count endpoint
 - Fixed Stock lookup endpoints
 - Fixed Stock adjustment endpoints
 - Fixed cash endpoints
 - Fixed basket endpoint
 - Fixed Get Single vendor endpoint
 - Web Order and order in store endpoints now return the text value on orderType not internal number
 - Voucher endpoint now returns the voucherType as the text value not internal number
 - updated price endpoints and improved error handling
 - Master Item and Item response now have the type response as the text value not internal number
 - Fixed a bug where customer address was not being set as primary billing or shipping address

### Stock
 - Added retry logic to stock movements
 - Fixed a bug which caused the stock location to not be updated when changing a shops details
 - Fixed a bug which caused the stock take to redirect back to the list when choosing a calculated stocktake
 - Fixed an error in the stock logs causing no results to be shown
 - Fixed various issues in the PO/GRN screens
 - Fixed an issue when creating a new PO from the stock lookup
 - Currency code list in purchase order/goods receipt now returns all available currencies from Imagine
 - Fixed an issue which stopped you from adjusting item stock to 0
 - Fixed an issue which caused an error when performing a negative goods receipt when the item had no previous stock movements
 - Stock discrepancy now refreshes on recount
 - Stock UI fixed to display the correct dimension sequence as set in item management

---

# 4th September 2019
## Features
 
### Item
 - Edit item UI updates to new UX
 - Item active toggle added to the list view
 - Added custom attributes support on label printing
 
### POS
 - Changed heading text on receipt for customer signature 
 - Added Swedish Fiscalisation shop feature which allows the setting of maximum number of times a receipt can be reprinted

## Bugs
### Platform
 - Fixed an issue in all UI's where token was too large, this led to the need to log out and back in to use the modules
 
### POS
 - Fixed receipt search to abide by the `show all shops flag`
 - Fixed an issue which caused the stock lookup to not display correctly for single variant items
 - Fixed an error when eturning a transaction that contained multiple items
 - Fixed order in store isPaid flag to be set on payment on the POS.

### Portal
 - Fixed an issue when only one module was enabled causing a log in loop
 
### Admin
 - Connector now automtically saves in lower case

---

# 21st August 2019
## Features

### POS
 - Added ability to reprint a z report
 - Parked transactions now reload the selected customer
 - Inactive clerks can no longer log in to the POS
 - Customer account limits now in place

### Connector
 - Label now support additional line properties
 
### Item
 - Item tax rates are now a multi select to allow items to be sold in multiple countries
 
### Stock
 - Stock Transfers migrated to new UX
 - Stock Lookup search migrated to elastic search
 
## Bugs
### POS
 - Fixed an issue when returning vouchers which tried to create a new voucher with the same number
 - Fixed an issue which caused order in store to fail on creation due to missing customer properties

### Public API
 - Fixed the taxCode endpoints

### Stock
 - Fixed an error when receiving a Goods Receipt note which contained multiple lines of the same item
 - Fixed an issue showing stock lookup values when the item had no movement
 
---

# 07th August 2019
## Features

### POS
 - Customer Sales history available as part of the Customer widget
 - Order In Store feature added to the POS
 - Included ability to return Order In Store transactions at the POS

### Item
 - New Item Creation converted to new UI
 - Item list converted to new UI
 
### Stock
 - Stock Lookup converted to new UI
 - Stock edits now logged
 - Stocktake converted to new UI
 - Added ability to delete stock counts that have not been committed
 
## Bugs
### Stock
 - Fixed Stock Lookup bug when no movement existed
 - Stock movement now recorded if item sale and item group sale performed together
 - Fixed issue with goods receipt erroring when commiting a negative amount
 - Stock tables not translatable
 - Fixed issue in stock takes when scanning the first item
 - Fixed issues displaying partial stocktake filter options
 - Removed incorrect stocktake warning text
 
### Item Management
 - Fixed issue assigning dimension type to dimensions when creating the item
 - Fixed issue adding dimensions to template when dimension has the same type.
 - Fixed an issue where item figures and movements failed to load if the item no contained special characters
 - Fixed an issue when creating multiple item hierarchy failed
 - Fixed an issue changing a item barcode if it contained no variants
 - Fixed an issue which caused a continuous spinner if no custom attribute existed, this also would not allow the first attribute to be added
 - Changed time format in item movement to 24 hour
 - Fixed issue when deleting item hierarchy which contains a sale record

### POS
 - Fixed an issue where receipt copy didn't display the item group sold
 - Fixed an issue which wasn't unreserving web order stock when skipped
 - Fixed an issue in stock lookup
 - Cash statement now correctly adjusts for rounding in countries which only trade in whole denominations
 - Fixed issue which caused an error when updating a customer record
 - Fixed issue when discount code converts to an integer

### Public API
 - Fixed an issue which caused adjustments to fail if a single line errored
 - Fixed an issue stopping web order stock from being reserved 
 
### RBO
 - Fixed an issue where the store name was longer than the text box
 - Changed error message when trying to expire an already expired gift voucher/credit memo
 - Adjusted the labels in gift voucher UI
 - Fixed issue when saved shop tax groups were not displayed correctly
 
### Admin
 - Fixed translation issues

 
--- 

# 24th July 2019
## Features

### Backoffice
 - Transactions converted to tenant Currency
 
### Stock
 - Stock UI converted to new UX for stocktake and stock lookup
 - Delete stock takes
 - All table headings are now translatable
 
### Item Management
 - Item list converted to new UX
 - Fixed bug in creating custom attributes
 - Time format is now in 24 hours in movements
 - Improved item search now using Elastic Search

## Bugs
### Item Management
 - Fixed Item figures and movements when these include characters that need url encoding
 - Fixed bug in adding multiple item hierarchy
 - Fixed bug which caused an error when updating a single variant item barcode
 
### Public API
 - Changed adjustments to return errored lines but still create other adjustments

### RBO
 - Fixed issue which caused long store names to expand beyond the field edges
 - 'Expire' button in Vouchers no longer shows for expired voucehers
 
### POS
 - Fixed issue converting discount code to integer
 
### Admin
 - Fixed issue translating headers
 
--- 

# 10th July 2019
## Features

### Stock
 - Added logging of manual stock edits
 - Updated UI for creating Stocktake by Item Group

## Bugs
### Item Management
 - Fixed issue when getting stock figure if item required url encoding 
 - Fixed issue adding mulitple Item hierarchies
 - Fixed issue changing Item Barcode
 - Fixed issue when creating Customer Attributes
 
### POS
 - Fixed Stock lookup widget
 - Receipt copy of item group sale now as original Receipt
 - Fixed issue with POS language when base and clerk language not set
 - Fixed issue saving edits to customer information via Customer Widget
 - Fixed issue with login placeholder text if clear password
 - Resolved issue with customer number length allowed in Customer Widget field 
 
### Reports
 - Fixed issue with grouping by Item Group 
 
### RBO
 - Within Gift Vouchers updated labels on date filters
 - Shops Tax Group now populated from Primary Group

### Portal
 - Fixed issue with refresh token
 
### Integration Gateway
 - Fixed errors when sending payload with ItemHierarchyNodeCode
 
### PPE
 - Fixed issue where couldn't Edit promotions
 
### Stock
 - Stocktake now shows item number and dimensions
 - Stocktake recount warning message replaced with confirm button
 - Fixed partial stocktake custom attribute name issue
 
### Customer
 - Primary Shipping and Primary Billing address can now be set
 - Credit limit and Account Currency now saves

--- 

# 26th June 2019
## Features

### Item Management
 - Added Dimension type setup
 - Updated UI for custom attributes and Item hierarchy

### Portal
 - When the user only has one module this now logs in straight to the module

### PPE
 - Updated UI to use siebar and topbar
 - All Promotion types are now working

### RBO
 - Can now set the vat rate to be used on vouchers 

### POS
 - POS now supports VAT on vouchers
 
### Reports
- Report speed improvements
- Reports now using the task service which includes email notifications when the report is reading to be viewed

## Bugs
### POS
 - Fixed error thrown when loading the POS
 
### Public API
 - Changed response when importing csv file

### Integration Gateway
 - Fixed errors when importing master items

--- 

# 12th June 2019
## Features
### General
 - Updated German translations
 
### Portal
 - Added forgotten password functionality
 - Added bypass of landing page when only a single module is selected (Making Tax Digital)

### Item Management
 - Improved ability to resequence dimensions and dimension attributes

### Replenishment (Beta)
 - General improvements and fixes

### Public API
 - Validations added to the GRN data model
 - CSV Import now supports multiple prices per item

### Stock Management
 - Added ability to delete a GRN

### Admin
 - Fully converted to new UX

## Bugs
### Stock Management
 - Fixed error thrown saving a GRN
 
### POS
 - Fixed issue on Android with the Customer widget not displaying the on screen keyboard

### Reports
 - Removed "Item" grouping on reports to enhance performance

### Dataswitch Gateway
 - Fixed bugs importing items

--- 

# 30th May 2019
## Features
### Stock Management
 - Purchase Orders and Goods Receive have now been converted to the new UI
 - Now supports Negative Receive Goods which will be interpreted as a Return to Vendor

### Connector
 - Worldline WiPay now a supported EFT type

## Bugs
### Stock Management
 - Partial Goods Received quantities now accurately deducing the outstanding amount to receive
 Fixed issue where incrementing a count on a stock take would return a null barcode in the response throwing a toaster error

### Item management
 - Fixed issue where creating items with no variants would throw errors and also not display anything in the Matrix tab
 - Fixed bug with the Next button being incorrectly disabled in the Purchase Order paging

### Portal
 - Fixed issue interpeting + symbol when resettign password
 - Fixed issue where long shop names would not display correctly in the Sidebar
 - Fixed issue where clicking a sidebar option which is meant to have suboptions (like the POS) but has none defined, would incorrectly route them to the selected app anyway  triggering errors

### Integration Gateway
 - Fixed issue where Upseting masteritems would fail when alphanumeric values were used

---

# 16th May 2019
## Features
### Backoffice
 - Added the Data Export functionality for German Fiscalization requirements (pending certification)
 - Vendor email address length extended to 80 characters
 
### POS
 - Now prevented from pressing the Payment button when a transaction is empty
 - Find customer widget has been improved

### Admin
 - Converted the Manage K3 Connector screen to the new UX

### Customers (Not publicly available)
 - Customer list now pages the search results

### Connector
 - Now shows sales and return counts on X/Z report
 - Now shows count/value of cancelled sales
 - Now shows count/value of voided lines

### Dataswitch Integration
 - Now supports hierarchies by Code

### Public API
 - Master items can now be returned by Updated Since as a filter
 - Return to Vendor endpoints added

### Portal
 - Release notes now hidden by default. Tap to expand.

## Bugs
### POS
 - Revide Integration inappropriate toasters
 - Solid integration validations improved
 - When a price is changed as an Increase it no longer shows as a discount
 - Web orders now correctly adjust stock in and out of Committed/On hand during transaction flow
 - Missing translations added

### Backoffice 
 - Editing tax group name no longer creates a new tax group

### Reports
 - Hamburger menu now showing properly on Mobile
 - Turnover Ex Vat KPI now calculating correctly
 - Date filter now picking up the right dates
 
### Stock Management
 - Removed Inactive shops from Side menu
 
### Admin
 - Fixed the required fields in the SHop Setup screen

### Support
 - Fixed the toaster framework so the Ellipsis menu is now clickable after the "hidden" overlay

### General
 - Fixed index warnings in the RBO Microservice
 
### Portal
 - Fixed issue with long tokens by moving to local storage
 - Fixed issue with modules that are meant to have sub-options misbehaving when no options are present
---

# 2nd May 2019
## Features
### POS
 - Norwegian Fiscalization - Voided lines are now logged and recorded on the connector and printed on the Z report when the Norwegian Fiscalization shop feature is enabled
 - Norwegian Fiscalization - Quantity adjustments are disabled when when the Norwegian Fiscalization shop feature is enabled
 - Norwegian Fiscalization - Cancelled sales are now logged and recorded on the connector and printed on the Z report when the Norwegian Fiscalization shop feature is enabled
 - Now allows you to make account payments to the customers account

### Admin
 - Admin module is now using the new UX

### Connector
 - Supports the recording of Voided Lines
 - Supports the recording of Cancelled Sales
 - Supports the detection of the current drawer open/closed status
 - Supports the printing of Account Deposit payments
 - Supports the printing of special receipt headers for fiscal purposes

### Integration Gateway
 - Added support for ItemHierarchy Codes
 - Added support for Tax Groups and Codes

## Bugs
### Item management
 - Fixed issue where Item was not searching on Vendor Item Number
 - Fixed issue with the rabbit publiher to the Item Exchange

### Reports
 - Fixed date/time bug in financial report resulting in incorrect overall totals

### POS
 - Fixed issues with the Solid Insurance integration which switched to use https
 - Fixed issues with Revide integration not seartching for customer
 - Fixed rounding bug for returns

### Backoffice
 - Fixed issue where it would not redirect to login when the token has expired/is invalid

### Stock management
 - Fixed issue where null address for a vendor would result in an error creating a GRN
 - Fixed issue when scanning a barcode to increment quantities
---
# 17th April 2019
## Features
### POS
 - Updated dutch translations for some widgets
 - Added support to restrict quantity adjustments for norwegian fiscalizations
 - A4/A5, Portrait or Landscape orientation added for Google Cloud Printing

### Portal
 - Password reset in the support UI will now ask a user to reset their password on the next login

### Admin
 - Started conversion to the new UI. Work in progress, subsequent changes occuring bit by bit
 
### Reports
 - Started adding support for Account Deposits and ensure they are properyl excluded from figures
 
## Bugs
### Item Management
 - Fixed issue where the seed data would incorrectly create the search parameters, resulting in search errors for new tenants

### POS
 - Fixed issue where stock lookup widget returning 0s and not displaying grid

### Portal
 - Fixed issue where + symbol was not being included in the password

### Support
 - Fixed issue where new users were not inheriting the tenant's user group

### Public API
 - Updated item model
---
# 3rd April 2019
## Features
### Portal
 - Added release notes and links to documentation to Portal landing page
 
### Connector
 - Added Google Cloud Print support

### Admin
 - Added Google Cloud Print support
 - Added German translations

### Item Management
 - Updating MasterItemName now updates all items

### Stock Management
 - Stock management is now utilising weighted average costs
 - Backend now supports multi-currency receipt of goods and purchase orders

### Public API
 - Added support to import a Customer XLS file
 - Added support for a new Item Import which includes an opening receipt of goods and cost price

### POS 
 - Added a count of receipt reprints performed so it can be used for future fiscal requirements
 - Added the ability to restrict the number of reprints of receipts

### Integration Gateway
 - Added support for Tax Groups to be integrated
 - Added support for Item Hiearchies to be integrated

### Support Platform
 - Added support for creating and using Shop Feature Templates to make assignment of such things to retailers easier
 - Users no longer required to have a global unique email address. Unique username is the only requirement

## Bug Fixes
### Portal
 - Fixed issue where login form was not recognised by password managers
 - Fixed issue where the page was not loading correctly forcing a refresh
 
### Admin
 - Added exception handling middleware
 - Fixed issue where new tenants would not have any Line parameeters for their receipt configuration

### Identity
 - Fixed issue where shop and tenant data not getting distributed correctly

### POS
 - Fixed issue with setting a blank morning amount
 - Added german translations to widgets
 - Fixed issue with the recording of various types of data to enhance the Financial Report
 - Fixed bug where Gift Certificate was not showing in receipt search as a line parameter
 - Fixed issue where prices were not being pulled from the group correctly when defined in the PPE
 - Fixed error sending eReceipt on the defualt tempalte not substituting varaibles
 - Fixed issue where Reprint Last Receipt was not printing the right details

### Stock Management
 - Fixed issue where user name length would stop documents being saved

### Public API
 - Fixed issue where item dimension values and hierarchies not creating the matrix
 - Fixed issues where Customers were not being upserted properly
 - Fixed error where it would delete items if not present in a master item update

### Number Generation
 - Fixed issue where Vendor Number generation would fail due to an invalid max length

### Integration Gateway
 - Fixxed issue where vendors would keep getting deactivated

### Reports
 - Fixed Financial report to handle multiple cash statements on the same date
 - Fixed financial report to handle daily closure counts
 

---

# 14th March 2019
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

### Connector
 - Connector now supports printing of stock documents, but the UI work to enable this is still pending

## Bug Fixes
### POS
 - Fixed some danish translations
 - Fixed issue where cost was not being returned by the gateway
 - Fixed bug when returning receipts would cause endless error loop
 - Fixed bug where product image was not getting cleared between transactions

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
 
