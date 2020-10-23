# RELEASE VERSION: 28th October 2020
## FEATURES
### RETAIL
IM-7193 - Reports - Re-worked 7 standard reports. Min Ko's team.  
IM-5087 - Search field in the POS is partial  
IM-3626 - Change Backoffice Shops overview to use a datagrid  
IM-6676 - Display stock info when creating purchase order  
_Qty On Hand and Qty on other PO is now available via the Column Chooser on the Data Grid_  
IM-6674 - Backoffice - Hide markup and deduct amount on Vendor  
IM-6689 - Manufacturing item number, vendor item number in item creation  
IM-6688 - Hierarchy notes as the first starting point    
IM-6488 - Inventory - add Vendor Item Number to PO's  
IM-6059 - POS - better user feedback for form filling  
_When the keyboard appears on the POS the current field name now appears next to the input field._  
### SELF SERVE
IM-5712 - Buying Bundles (Meals)  
IM-7094 - Lounge - Delivery threshold depends on Delivery charge  
_Within Self Serve lounge the free delivery threshold is now disabled until a Delivery charge has been entered_  
IM-4955 - API endpoint for validating tenant, shop and table  
IM-4905 - Create SelfOrder UI  
_Creation of the Self Order UI_  
IM-5010 - Fix CORS error on SelfOrder app  
IM-4925 - 500 response on add tile to composer group  
IM-4931 - Remove authentication from GW  
IM-4934 - Create BasketButton + BasketModal  Component  
IM-5167 - Validate ComposerTiles when adding them  
IM-7105 - Lounge - Change Address step to be UK specific  
_Self Self Lounge Shop Set up has now been updated to use a UK format address _  
IM-7107 - Lounge - Modify payment warning text  
_Self Serve Lounge now has a warning when setting up the tenant to show the user that the OB Payments can be used for trial/demo purposes_  
### PLATFORM
IM-5034 - Tenant Creation in Platform Admin  
IM-3434 - Tenant Features  
_Added Tenant Features to the internal use Platform Admin_  
IM-7147 - connectorId exposed in the Cash API  
_Added the ConnectorId the the Public API response for Morning Amounts and Daily Closure._  
IM-6693 - Return Code in Transaction Response in API  
_Public API POST Transaction endpoint, response now includes the returnCode and returnDescription._  
## BUGS
IM-7270 - Integration GW  - Upsert Master Item new Item  
_Fixed a bug in the integration GW which caused an error when trying to add an item to an existing Master Item using the Upsert MasterItem endpoint. Added mapping in the integration GW for manufacturerMasterItemNo._  
IM-4305 - GET CondimentGroup using id returns a 204  
_Fixed a bug in Kiosk MS which caused a 204 to be returned when getting Condiment Groups by ID_  
IM-7135 - Customer module: Account currency not saved  
_It is no longer possible to save a Customer without the Account Currency being set_  
IM-5287 - Wrong total calculation on NOK  
IM-7027 - Error in Z-report - Bikester  
IM-4289 - GET condimentGroup API not returning body  
_Fixed a bug in Kiosk MS which caused a 204 response to be returned on the CondimentGroup endpoints_  
IM-2921 - PoS - Clerk login can be used on another tenant  
IM-6568 - POS throws error when returning receipt while customer widget is enabled  
_Fixed issue where returning a customer transaction with more than one discount applied would cause an error_  
IM-7226 - *URGENT* Return receipt not printed - AddNature POS3  
_Fixed a bug in the POS UI which allowed the user to start a payment before the item requests had finished. This caused the POS to fall into a strange state on the payment_  
IM-7181 - Cant see recieve goods list overview - AddNature  
IM-7288 - Goods Receipt Save and Commit - (AddNature)  
_Fixed a bug within Inventory UI => Receive Goods, which allowed the user to click `Save & Commit` multiple times when posting a Goods Receipt Note_  
IM-7235 - Stock GRN Recorded BY - Internet Stores  
IM-7162 - Creating new dimensions adds imagine created barcodes - Seeds  
IM-7260 - Cant do offline sales - Hummel  
_Fixed a bug which caused Offline cache to return no results due to historic link to Item Units which is now obsolete_  
IM-7268 - Inventory - Item Import Barcodes not created in barcode table - Van Os  
IM-7199 - Customer Display NL Language  
_Added support for nl-nl , fi-fi and de-de in Customer Display_  
IM-7287 - Inventory - Markup calculation confusing  
IM-7015 - InventoryUI: Adding barcodes to items  
IM-6921 - Simple Pos, not to make sale go trough after POS device throws error  
IM-7075 - Lounge - Item duplication when editing items  
_Fixed a bug in Self Serve Lounge which caused items to be duplicated when editing an existing item_  
IM-7096 - Lounge - Omitting company logo causes Pop to fail  
IM-7153 - Platform Admin - Tenant expiry showing a date when set to Never  
IM-7504 - Hummel - 'Print Label' on GRN defaults to printing 1 label and should assume the quantity on the GRN for that line  
_Fixed a bug which meant only 1 label was printed from Inventory=>Receive Goods, when pressing Print label on an item line. This will now print the quantity being received._  
## Other Improvements  
IM-6484 - SCO compatibility with Visual Composer: Data fetching/storage  
IM-6835 - Update ReportUI/GW to support reworked generic reports  
IM-4853 - Update `HttpClientExtension` to handle different 4xx status codes from MSs on Kiosk Gateway  
_Added additional handling of 4xx status codes in Kiosk GW_  
IM-4890 - Speed up getting ComposerListEntries  
_Improved speed of the ComposerListEntries being returned _  
IM-7154 - OrderNumber on email receipt from TOP & POP  
IM-7433 - Admin NL Translations  



# RELEASE VERSION: 14th October 2020
## FEATURES
### Public API
IM-7152 - Faster stock lookup endpoint
IM-6618 - Create Transactions
IM-7005 - Shop Budget uploads
### SimplePOS
IM-6814 - Release SimplePOS
IM-7002 - Optional receipt print and email
### SelfOrder
IM-5395 - Visual Profiles
IM-6307 - Visual Profiles in Apps
IM-5739 - Visual Composer - Breadcrumbs
IM-5746 - Visual Composer - Pagination on Shops List
### Lounge
IM-7026 - Mock API
## Bugs
### Portal
IM-7177 - Translation error message when logging into the portal
IM-6625 - Sidebar Icons Missing
### POS
IM-7023 - Invalid Clerk message when logging in to POS
IM-6796 - Not possible to use 2 gift vouchers in one transaction
### Public API
IM-7136 - Item Update failing
IM-7202 - PUT customer by external unique id</span></li>
### POP
IM-6964 - POP signup process fails</span></li>
### Lounge
IM-7103 - Prevent user from going to next step until requests complete
### Infrastructure
IM-7262 - Update of language in Portal not working
### Inventory
IM-7184 - Can't receive goods

# RELEASE VERSION: 30th September 2020
## Features
### Platform Admin
IM-6623 - User Management
### Inventory
IM-4384 - Show margin when creating a product
IM-6409 - Make Item List the default landing tab
## Technical
### Cloud Connector
IM-6986 - Tidy Receipt and Adyen Payments
### Infrastructure
IM-6268 Path Based Routing
## Bugs
### Customer
IM-6031 - Customer Loyalty table - Shop, POS, Balance and Spend display changes
IM-7146 - Last Visit date in Customer Details not updating
IM-6599 - Account Deposit not updating Customer Balance
IM-6579 - CustomerMS cannot process transactions
IM-7097 - Customer History transaction totals wrong
### POS
IM-6830 - Positive discount is shown on the receipt
IM-6839 - External Vouchers error
IM-6620 - Handling of returned account deposits
IM-5544 - Customer Widget shipping address lists twice
### Portal
IM-6583 - Error when adding permission to a role
IM-6631 - No feedback when editing a user and saving
### Backoffice
IM-6781 - RBO Currency conversion fail
IM-5551 - Hierarchy nodes cannot be updated in backoffice
IM-5550 - Fails when sending emails
IM-5370 - Expire button on Credit Memo alignment
### Stock Management
IM-6775 - Logs for adjustments doesn't filter by store
### Platform Admin
IM-6887 - Changing expiration date via UI doesn't update POSIdentity.Tenant
IM-7137 - Required fields when editing tenant not populated
### Inventory
IM-6357 - Timeout issues in Inventory Module
IM-7045 - Change barcode on an item
### Admin
IM-6909 - When saving connector the page fails to reload
