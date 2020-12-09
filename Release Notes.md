# RELEASE VERSION: 8th December 2020
## FEATURES
### RETAIL
IM-7435 - The field with item no. is missing when opening an item card in imagine.   
_Inventory UI now shows the master item and item no on the summary and matrix tab_  
IM-4011 - Cash Statement Reconcile all payment Types  
_Now have the ability to reconcile all payment types in the POS. These can be configured in Backoffice=>Payment Types menu_  
IM-424 - Item/Inventory UI - Select Default Label Template   
_Add ability to set default label template on Item Hierarchy which then sets the default on the item_  
IM-6668 - Print labels from Purchase order  
_PO now has the ability to print labels in a similar fashion to GRNs_  
IM-6670 - Backoffice - Expand template field  
_Expanded the Template field in the label templates within the Backoffice module_  
IM-6671 - backoffice - print test label  
_Added the ability to print a test label from within the backoffice label templates screen_  
IM-6394 - Inventory - label prices to honour regional settings for currency  
_Inventory - label prices now honour regional settings for currency based on a shops language_  
IM-6559 - Inventory - add Vendor Item Number column to Item import spreadsheet  
_Added Vendor Item Number to the inventory item import_  
IM-5969 - Inventory - increase the field length for Manufacturer Item No:  
_Changed Manufacturer Item No to 30 characters_  
IM-4070 - Copy purchase order  
_Added the ability to copy an existing Purchase Order within the Inventory Module_  
IM-4804 - Inventory PO bulk export template - Vendor Item No should be read only  
_In Inventory bulk export for Purchase orders the Vendor Item No is now read only_  
IM-7219 - Add default label template to master item  
_It is now possible to select a Default Label Template on the Master Item and during Item Creation_  
IM-6669 - Adding new print variables  
_Added {masterItemNo} as a variable that can be used in Label Templates_  
IM-7203 - Custom attribute and dimension selectors for label templates  
_Added custom attribute and dimension selectors in Label Templates_  
IM-6487 - Disable CARD payment type if no integration is selected for the connector  
_If no integrated card terminal is setup within Admin then the Card payment option no longer shows in the POS_  
IM-7213 - MS Stock Modifications  
_Added GET Stocktakes and GET Stocktake counts to the Public Api_  
IM-7214 - Public API - Output StockTake  
_Added a new GET endpoint for stocktakes in the public api_  
IM-5355 - Adding custom attributes to existing item  
_Adding a required attribute to an existing item now prompts the user to confirm they want to proceed_  
IM-4093 - Edit gift receipt in Admin  
_Under Receipts in Admin module can now add lines to a Header or Footer on Vouchers_  
### SELF SERVE
IM-6621 - SelfServe Admin - Payment provider config  
_Self Serve Admin - Add payment provider selection_  
IM-6948 - Multilanguage shop config  
_Self Serve Admin - Allow per shop language to be configured._  
### PLATFORM
IM-7189 - Public API - Item Hierarchy Tax Codes  
_Public API now allows for tax codes to be assigned to Item Hierarchy in the same way that the UI allows._  
IM-7216 - Password Reset  
_Tenant Administrators can now reset user passwords through User Management in the Portal, option to force user to change the password on login can be selected. _ 
IM-5970 - Platform Admin - Tenant Apps Report  
_A Report that can be exported of App by Tenant _ 
IM-6518 - Platform Admin - Assign Widgets  
_Platform Admin users can now easily apply Widgets across all shops they have access to_  
IM-3456 - Public API stock lookup should include shopId  
_Added ShopId query parameter option to all stock lookup endpoints in the public api_  
IM-5340 - Public API - improve error message for Master Item POST failed  
_Public api item endpoints, the barcode is a required field so will return an error message if the barcode is not included_  
IM-6130 - Public API - Currency Price on Items   
_Through the public api currency prices can now be added and updated through the item and Master Item endpoints_  
IM-6317 - Public API - Add Vendor Item No in PUT and POST item  
_Added VendorItemNo property to PUT/POST on Item requests in the public api_  
IM-6816 - Public API -loyalty Endpoints  
_Added Public API endpoints to get customer loyalty balance and update loyalty balance_  
IM-7864 - Public API - Goods Receipt Line Serial Number  
_Goods Receipt Endpoints on the public api now include the serial number on the goods receipt line_  
## BUGS
IM-5171 - Inventory-ItemList Copy MasterItem not working  
_Fixed a bug which caused copying of items to fail in Inventory_  
IM-7278 - Portal UI Roles Gateway Permissons not working  
_Fixed a bug causing an error on the roles. Roles can now only be updated/assigned by the tenant admin_  
IM-7394 - 500 error on page size in visual composer  
_Fixed a 500 error on page size in Visual Composer, caused when viewing Composer Tiles. Note: a database re-index may also be required alongside this fix_  
IM-7117 - Image scaling on Kiosk with Selected Item  
_Fixes an issue of Image scaling on Kiosk_  
IM-7495 - Delete Composer Group - Toaster UI issue  
_Visual Composer - Delete Composer group_  
IM-7829 - Differences in balancing of cash accounts  
_Fixed issue with differences showing on Cash Statement where change not taken into account._  
IM-7739 - Cannot Commit GRN - Duplicate GRN lines  
_Stock MS now aggregates goods receipt lines so that when these come in through the public api these do not cause errors when receiving the goods_  
IM-7671 - Scanning a Receipt for Return Doesn't Work With 4-Digit POSID  
_Fixed issue with scanning receipts where the POSID is 4 digits_  
IM-7771 - Stock UI -Transfers closed can be changed  
_Fixed a bug which allowed transfers to be saved after closing or the receive all button to be pressed after close_  
IM-7679 - Search in Inventory list  
_Fixed an issue in the inventory item search so that it will match on multiple words_  
IM-7870 - No lines added when doing a new transfer  
_Item No and Description are now showing when item added to a Transfer Out_  
IM-7322 - Create new customer: Warn about currency after change every field  
_Warn about currency it is not displayed after leaving every field_  
IM-7383 - Add new Customer: Issue with long names  
_First name and last name fields are limited to 50 characters_  
IM-7818 - Gift card and credit note not cutting paper  
_Fixed an issue where vouchers/credit notes were not being cut by the receipt printer_  
IM-6739 - InventoryUI: No feedback about a discarded barcode  
_Inventory UI now has an error show when you try to add a barcode to an existing item and the barcode already belongs to another item._  
IM-5571 - Inventory Part receive PO  
_When receiving a Goods Receipt Note from a Purchase Order and performing a partial receive, When creating further Goods Receipt Notes this will then show only the remaining quantities of items to receive._  
IM-7269 - Can't Add Addition Dimension Value to Existing Item  
_Fixed issue with adding a new dimension value to existing Item_  
IM-7626 - Clerk sent to daily closure module when pressing Cancel button at item lookup  
_Fixed a bug which caused the item search cancel button to route to the cash statement screen_  
IM-7334 - Voucher amount not correct  
_Fixed an issue where spending on a Gift voucher resulted in wrong amount being deducted._  
IM-7274 -  Inventory - missing scroll bar on Matrix grid  
_Scroll bar has been added to Dimension Matrix within Goods Receipt_  
IM-5063 - POS - failed payment lines are reprinted when transaction completed  
_Failed payment lines no longer being printed_  
IM-2649 - RboMS - When changing a Shop's local currency, remove the existing exchange rates  
_Changing shop currency will remove any existing exchange rates set against the old currency._  
IM-5383 - POS - Credit note prints copy  
_Credit Note receipt copy no longer being printed._  
IM-6742 - In Report - sales analysis - on clerks  no figures  
_Figures for the Clerk series are now returned in the Sales Analysis Report_  
IM-7120 - Web Order decreases item stock but does not create an item movement  
_When processing a Web order on the POS this will now create a corresponding stock movement for the items if the barcode exists in Imagine_  
IM-7289 - Creating credit card receipt for every gift receipt printed  
_Fixed a bug on the Connector which meant a credit card receipt was printed for every item marked to print a gift receipt and the payment method was card._  
IM-7196 - InventoryUI: Adding barcodes to items during item creation  
_Fixed issue when editing a barcode on variant during item creation threw an error._  
IM-7729 - Create Item SAVE button creates Duplicate Items  
_When saving the new item the Save button is disabled until the request is completed_  
IM-7312 - Inventory - matrix tab missing Name field  
_Fixed a bug which meant the item name was not shown in the matrix tab within inventory when the item only had 1 variant _  
IM-7438 - GRN/PO matrix grid Item Dimension Sequence  
_Matrx grid in inventor->Goods Receipt now shows the items in the order as set by the dimension sequence_  
IM-6792 - Customer - Update currency on empty field  
_Currency field is now a required field, if the field is left blank using the PublicAPI then it will default to the tenant currency._  
IM-6791 - Customer: Export not containing data  
_No. of visits is now updating as expected, Total Spent is the running total purchased on Account_  
IM-7402 - Inventory: Tax Rate should not have Select all option  
_Select all value was removed_  
IM-6567 - Item - cannot make a top level hierarchy  
_Moved Item Hierarchy over to Inventory and added validation to prevent duplicate Codes_  
IM-7271 - Customer: Issue on Focus for the correct tab  
_The focus is on the correct tab_  
IM-7266 - Customer: Address Name field is filled by default  
_Address name field is fixed. It is not filled by default anymore_  
IM-7272 - Customer: Unassociate button remove the Customers before click on Save  
_Save button is disabled when associated customers tab is selected._  
IM-7101 - Public API - Blank StockTake adds all shop articles  
_Fixed issue where creating a blank Stocktake via the PublicAPI added all items _  
IM-7499 - Modifier Group - Number Picker - Modifier details missing  
_Fixed bug to modifier group where the modifier details were missing_  
IM-7690 - Manual Card and Cash button cause error  
_Fixed an error when running simple pos on the castles device and paying on cash or card_  
IM-7815 - Portal Users   
_Fixed a bug when a large amount of users and roles caused the users to show a continuous spinner on the portal_  
IM-7846 - Not able to find items in Stock look-up  
_Fixed a bug which meant items were showing as not found on the stock lookup_  
IM-7964 - Incorrect Items removed from Elasticsearch  
_Fixed a bug which caused items to be deleted from ES incorrectly_  
IM-8019 - Inventory local prices   
_fixed a bug which caused the local prices step in item creation to display incorrect fields_  
## Other Improvements  
IM-7770 - Public API - Transfer does not contain location  id but name  
_Public API GET Transfers now includes both from and to location Ids as well as the name_  
IM-6540 - Kitchen Display -> Order Status Display  
_Rename of Kitchen Display to Order Status Display_  
IM-6859 - Better caption on dropdown when adding new composer tile  
_Adding Search caption to dropdowns in Visual Composer_  
IM-6073 - Customer UI always uses en-gb  
_Implemented language support in the customer module_  
IM-7065 - SimplePos/Kiosk start screen image comes from Visual Profile  
_SimplePOS and Kiosk start screen images now comes from the visual profile_  


# RELEASE VERSION: 11th November 2020
## FEATURES
### RETAIL
IM-5187 - Add connector name on Z-report  
_Connector Name now shows on the top of the printed Z Report_  
IM-4920 - Customer turnover for export   
### SELF SERVE
IM-7240 - Visual Composer - Add image preview  
_Within Visual Composer > Composer Groups - This allow the preview of an image url before saving to ensure it is correct._  
### PLATFORM
IM-4889 - Create Platform Admin App  
IM-5358 - POC - Connector Free Receipt Printing (and opening cash draw)  
IM-6972 - Generate Welcome Email and Password on User Creation  
IM-3138 - Add to DeviceWorker_Pay all payment modalities necessary for full POS operation (Verifone)  
## BUGS
IM-5501 - Public API - Create multiple vendors  
_Fixed an issue on the Public API which threw an error when trying to create multiple vendors on the Vendor/vendors endpoint_  
IM-6656 - Email Receipts Missing 0  
_This fixes the second decimal on the emailed receipts within selforder_  
IM-6655 - Email Receipts Missing Currency Symbol  
_this puts the currency symbol on the email receipt from SelfOrder_  
IM-7450 - Public API - Shop endpoints return locationId  
_In Public API GET Shops endpoints we now return the locationId which is used in other public api requests for Stock_  
IM-6751 - Expense payed out on card give cash difference in cash statement  
_A change has been made to the POS so that expenses can only be paid on Cash payment type._  
IM-5500 - Public API - Create stocktake response  
_Fixed a bug in the public api which led to a 500 response when creating a partial stocktake which included no selection. This now results in a blank stocktake._  
IM-6186 - Text "gift certificate" does not appear on e-mail receipt  
_Fixed an issue which caused Gift certificates to be excluded from the emailed receipt_  
IM-3515 - RBO - it's not possible to set VAT on GV when creating new store  
_Option to set the VAT on GV now appears once the the Primary Group has been added to the shop_  
IM-3124 - RBO - Data Export. It is possible to start an export with mandatory fields missing  
_All fields are now validated before export can be started_  
IM-3125 - RBO - Data Export. The time difference between the `Created` and `Completed` is incorrect  
_The Created time and Completed time are now showing correctly._  
IM-5549 - PoS - Email receipt does not show item comments for Item Group  
_Item Group comments added on a transaction are now included in the email receipt_  
IM-7120 - Web Order decreases item stock but does not create an item movement  
_When processing a Web order on the POS this will now create a corresponding stock movement for the items if the barcode exists in Imagine_  
IM-7437 - Inventory GRN/PO Matrix Grid  
_Fixed a bug which caused the matrix grid to show as a blank box once a quantity was set. This occurred on items with large amounts of item variants._  
IM-7603 - Hourly Sales Report  
_Fixed the hourly sales report to correctly display data by hour. This also include People Counter data entered through the API_  
IM-7501 - Public API : Basket Endpoint 404  
_The public api endpoint is now aligned to use the new PPE design._  
IM-5815 - Signup UI special characters in username  
_A change to Signup UI to only allow the following special characters to be allowed `-,.@_`_  
IM-7544 - On Cancel payment transaction was still going trough and UI showing success  
_This fixes the issue where if the user cancels the payment at the PED but the transaction completes on imagine._  
## Other Improvements  
IM-7434 - Inventory NL Translations  
IM-7492 - POS NL Translation   



# RELEASE VERSION: 28th October 2020
## FEATURES
### RETAIL
IM-7193 - Reports - Re-worked 7 standard reports  
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
IM-7027 - Error in Z-report fixed  
IM-4289 - GET condimentGroup API not returning body  
_Fixed a bug in Kiosk MS which caused a 204 response to be returned on the CondimentGroup endpoints_  
IM-2921 - PoS - Fixed an issue where Clerk login can be used on another tenant  
IM-6568 - POS throws error when returning receipt while customer widget is enabled  
_Fixed issue where returning a customer transaction with more than one discount applied would cause an error_  
IM-7226 - Fixed issue with Return receipt not being printed 
_Fixed a bug in the POS UI which allowed the user to start a payment before the item requests had finished. This caused the POS to fall into a strange state on the payment_  
IM-7181 - Can't see recieve goods list overview fixed  
IM-7288 - Goods Receipt Note Save and Commit fixed  
_Fixed a bug within Inventory UI => Receive Goods, which allowed the user to click `Save & Commit` multiple times when posting a Goods Receipt Note_  
IM-7235 - Stock GRN RecordedBY value now not NULL  
IM-7162 - Creating new dimensions adds imagine created barcodes  
IM-7260 - Fixed issue where specific retailers can't do offline sales  
_Fixed a bug which caused Offline cache to return no results due to historic link to Item Units which is now obsolete_  
IM-7268 - Inventory - Item Import Barcodes not created in barcode table  
IM-7199 - Fixed Customer Display to use NL Language  
_Added support for nl-nl , fi-fi and de-de in Customer Display_  
IM-7287 - Inventory - Markup calculation confusing  
IM-7015 - InventoryUI: Fixed issue when adding barcodes to items with only one variant  
IM-6921 - Simple Pos, not to make sale go through after POS device throws error  
IM-7075 - Lounge - Item duplication when editing items  
_Fixed a bug in Self Serve Lounge which caused items to be duplicated when editing an existing item_  
IM-7096 - Lounge - Omitting company logo causes Pop to fail  
IM-7153 - Platform Admin - Tenant expiry showing a date when set to Never  
IM-7504 - 'Print Label' on GRN defaults to printing 1 label and should assume the quantity on the GRN for that line  
_Fixed a bug which meant only 1 label was printed from Inventory=>Receive Goods, when pressing Print label on an item line. This will now print the quantity being received._  
## Other Improvements  
IM-6484 - SCO compatibility with Visual Composer: Data fetching/storage  
IM-6835 - Update ReportUI/GW to support reworked generic reports  
IM-4853 - Update `HttpClientExtension` to handle different 4xx status codes from MSs on Kiosk Gateway  
_Added additional handling of 4xx status codes in Kiosk GW_  
IM-4890 - Speed up getting ComposerListEntries  
_Improved speed of the ComposerListEntries being returned _  
IM-7154 - OrderNumber on email receipt from TOP & POP  
IM-7433 - Merged in Admin NL Translations  



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
