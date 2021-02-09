# RELEASE VERSION: (Pre-release) 23rd February 2021
## FEATURES
### RETAIL
IM-7243 - Use default label template in GRN print all functionality  
_Inventory - change to the print label facility._  
IM-8112 - GCON002 Add columns to show the overall on-hand quantity and min/max on-hand for each item  
_Inventory - shows overall quantity on hand._  
IM-8261 - Change length of vendorno in public API
_Increased permitted value for Vendor Number to 20 characters_  
IM-8358 - Add a toggle in Admin->Receipt Setup to hide loyalty  
_POS/Admin and Connector Update to allow loyalty to be printed on the receipt._  
IM-7151 - Feature request: add {itemVendorName} as a label variable  
_Add {itemVendorName} variable for use. See Help files for further details_  
IM-6470 - Inventory - update the way Vendor is present on List and Summary  
_Item summary now shows current vendor and a new field showing any previous vendors. Item list will show the current vendor._  
IM-8323 - Inventory - Adding Vendor doesn't allow to specify Vendor number  
_Removed obsolete fields from 'Add Vendor' within Item Creation process, now only require name and optional Vendor Number._  
IM-5599 - POS Graphs  
_Improved the visibility of the sales target on the chart and the summarised button now keeps it's set state._  
IM-7132 - PPE - Option to delete unused item bundles  
_PPE - Ability to delete a bundle that is not attached to a promotion_  
IM-8229 - Inventory Search Text Box Requires the Quick Clear X Function   
_"X" has been added to the search box_  
IM-6684 - PosUI: Clear indication if not connected to connector  
_POS - Clear indication of connector status_  
### SELF SERVE
IM-7955 - Add Swedish to language picker  
_SCO - Addition of Swedish to the language picker_  
### PLATFORM
IM-5807 - Platform Admin - Connector Management Listing View  
_Connector management added to platform admin_  
IM-6517 - Platform Admin - Assign Shop Features  
_Ability to assign Shop Features within tenants now added to Platform Admin_  
IM-8044 - Email Customers  
_Platform Admin - Email to Imagine Portal users or selected group from dropdown list_  
IM-8249 - Platform Admin - inactive shops in Widgets  
_Platform Admin - Addition of status column on shop - widgets and shop features_  
## BUGS
IM-7688 - Clerk login password input not cleared  
_Simple POS - Fixed bug with password not clearing on input_  
IM-8493 - Scanning multiple gift labels at POS returns  wrong value on second label scanned  
_Fixed issue. Scanning the gift label will return the quantity and items from original receipt, no need to scan all gift labels._  
IM-7498 - Reports - Sales Analysis Data Not Showing by Item  
_Fixed issue with Sales Analysis report not showing data by item_  
IM-7720 - POS Park transactions:  Receipt line is cut and not well organised  
_Fixed bug where the item lines in POS where not organized _  
IM-8167 -  Item Create - Hierarchy Selection can be By-passed  
_Inventory - Fixed bug with Hierarchy when creating new item_  
IM-7283 - Customer: Create New group Fields are filled  
_Removed the placeholders from the fields_  
IM-7315 - Loyalty - Audit Log: Save Configuration button should not be displayed
_Removed Save button from Audit log_  
IM-7472 - PPE – Price Field Format not 2 Decimal Places on Promotions Setup  
_Fixed the decimal place to show as 2 places even when the value is 0_  
IM-7748 - Item Hierarchy Label Template Field Disappears  
_Fixed the tax rate form to include a scroll bar for longer lists_  
IM-7731 - Admin Shop Setup: Year displayed is 0001  
_Fixed the issue where year displayed is 0001_  
IM-6888 - ExceptionHandlingMiddleware is missing from ms-posidentity  
_Added exception handling to pos identity service_  
IM-7915 - Extended Receipt not updating correctly on Connector  
_Extended receipt option now saving correctly in admin and printing_  
IM-7920 - User details with only one module enabled  
_Fixed an issue which stopped users being able to access their user details when they only have 1 module enabled_  
IM-7976 - Public API - Stock Adjustment mapping error  
_Fixed an error when posting a stock adjustment through the StockAdjustment endpoint on the Public API_  
IM-8380 - Username not being validated in the Platform UI  
_Added validation in platform admin when adding a user to an existing tenant to check if the username already exists_  
IM-8464 - Visual Composer - 'Choose a tile type' menu blank  
_Visual composer - update tile type menu _  
IM-8477 - UI - Styling of drop down elements are different  
_Fixed styling of drop down element on transactions page_   

# RELEASE: 28th January 2021
## FEATURES
Added a new Analysis Module, this has been auto enabled for all tenants using the existing Reports Module. Documentation can be found within the [K3 Imagine Documentation](https://www.k3imagine.com/documentation/Analysis.html "K3 Imagine | Analysis Module")
_Please note the Master Item summary currently will not display by Master Item, this will be fixed in the next release on the 23rd February including historic data_

# RELEASE VERSION: 26th January 2021
## FEATURES
### RETAIL
IM-7871 - Item Hierarchy In Inventory Section Has NO Delete Option  
_Add a Delete option to Item Hierarchy_  
IM-8105 - Need to be able to print several of the same label at once from Pos  
_POS Ui now allows you to enter a quantity when printing a label for an item from the search _  
IM-5941 - External VoucherID in imagine  
_External VoucherID supported allowing 3rd Party systems to create vouchers_  
IM-2744 - Transaction report - Load More button not showing more records  
_Fixed Load More button to pull in more transactions and displays them on screen_  
IM-7336 - GW - Align HMRC fraud prevention header to the latest spec  
_HMRC fraud prevention header updated to latest spec_  
IM-7745 - View transactions from the 9-Box calculations  
_Button added to view the transactions from the 9-box calculation._  
IM-7144 - Search/filter transactions endpoint - MS+GW  
_Endpoints added to allow for filtering of transactions on date range_  
IM-7191 - Log everything related to the following events transaction import, transaction clear, user login, HMRC auth - MS+GW  
_Logs extended to include a range of events_  
IM-7140 - Search/filter transaction - UI  
_Search/Filter function added to Transactions page, can filter on date range and can exclude submitted transactions_  
IM-7190 - View/Clear logs - UI  
_Logs tab added to menu that include range of event details and ability to be cleared down._  
IM-7264 - Customer: It is not possible remove an address  
_Fixed bug where after clicking Add new address was not possible to undo this action_  
IM-7811 - PPE Enhancement - Master item filter  
_Added the ability to input a master item on item bundle creation._  
IM-7906 - UI - Add date to view already submitted transaction  
_Date range for the submissions now shows on the page when viewing that submission period._  
IM-7960 - UI - submission page needs date filter  
_Date range filter has been added to the submissions page_  
IM-8134 - New SideBar/TopBar for All Imagine Modules  
_Implemented new top bar and side bar in the retail suite_  
IM-8315 - UI - Show/hide already submitted transaction  
_Switch added to show/hide submitted transactions when performing a search._  
IM-8318 - UI - Delete dialog user feedback changes  
_Dialog added for deleting transactions that shows date range and number of transaction to be included._  
IM-8354 - Status page in POS  
_Implemented the Platform status in the ellipsis menu of the POS_  
IM-8368 - UI - Brexit 9 box text changes  
_Text within 9 box submissions updated to reflect leaving EU _  
### SELF SERVE
IM-6622 - SelfServe Admin - Pathmap  
_User able to create POP Path Map in Self Serve Admin_  
IM-8126 - Implementation of Top Bar and Side Bar  
_Implemented new topbar/sidebar in the Self Serve applications_  
### PLATFORM
IM-4811 - New Sidebar/TopBar  
_New Sidebar implemented into the Portal and Platform Admin_  
IM-7173 - Portal - alter error message for log on  
_Portal - Better explanation when login not working/_  
IM-8252 - Platform Admin - add Rest button to clear search criteria  
_Platform Admin - Reset button for search _  
IM-7750 - Platform Admin - Partners - Add Tenant/User to Partners  
_Platform Admin - Add Tenant/User to Partners_  
IM-8199 - Status page link in portal  
_Added a link in the portal for the Imagine status page_  
IM-8352 - Status Page in portal  
_Added Imagine platform status to the portal dashboard_  
## BUGS
IM-8270 - POS - paying with Gift Certificate asks for value  
_Fixed an issue where paying with a Gift Certificate was asking for an amount instead of the certificate number._  
IM-8260 - ItemUI cannot load  
_Fixed a bug which caused item management to display a blank page on load_  
IM-7580 - POS [Sell Set]: Issue when type a barcode to Set start  
_Fixed master item query on sell set_  
IM-8069 - Assigned Clerk Role Code not displayed  
_Fixed a bug where the clerk role code was not displayed correctly_  
IM-7449 - PosUI: removing a weborder from receipt  
_When removing a web order from the transaction window this now sets the quantity on hand and quantity reserved back to its previous state so that the web order can be processed at another time_  
IM-8206 - Clerk language not displayed after saving  
_Solved a bug where the Clerk language was not displayed after saving_  
IM-7683 - POS: Can not remove a discount on gift certificate  
_Fixed bug where could not remove a discount from gift certificate_  
IM-7670 - POS Item group: Issue on the text in the Filter button  
_Fixed typo in Filter _  
IM-8208 - PPE Promotion display doesn't handle long description gracefully  
_Fixed issue where PPE Promotion page display became distorted by long item descriptions_  
IM-8279 - MTD MS - Logs are not logging for 500 errors  
_MTD logs now recording 500 errors_  
IM-8271 - Deletion of transactions errors out  
_Fixed issue where deleting transactions caused an error_  
IM-7959 - UI - the menu gone missing on reload on 9 box calculation page  
_Fixed issue with the menu not showing on reload of submission page._  
IM-5553 - Duplicate voucher bounces  
_Fixed an issue which caused an attempt to resend a voucher to the backend which resulted correctly in a duplicate voucher response_  
IM-5556 - StockMs uses a lot of memory  
_Fixed a memory leak within stock ms_  
IM-7259 - Customer: fields should be validated in New Customer form  
_Fixed the validation on Customer fields_  
IM-7429 - StockMs: Handling of an items alternative barcodes on PurchaseOrders  
_Corrected the handling of an items alternative barcodes on Purchase Orders_  
IM-6957 - Fix connector receipt mapping  
_Fixed issue with Connector parsing old receipts_  
IM-8401 - Request to /sales returns 500 on the KioskGW  
_Setting virtual connector does not trigger an error on the payment_  
IM-8287 - Visual Composer: Can not edit the Visual Profiles  
_Fixed the visual profile not editable_  
IM-8266 - DEV - Tenant creation failing via Platform Admin  
_Fixed an issue when inserting demo data on new tenants_  
IM-8286 - UI - New sidebar  
_Fixed to the new top/sidebar_  
IM-8365 - UI - Transactions page, submission ID missing  
_Submission id not visible against transaction if user selects to include submitted transactions in the search._  
IM-8400 - Public API - POST Error 500 on PO  
_POSTing a Purchase order through the public API was causing an error 500. This is now fixed_  
## Other Improvements  
IM-6007 - Version number in POS UI does not reflect released version  
_POS - Now reflects the correct released version._  


# RELEASE VERSION: 12th January 2021
## FEATURES
### RETAIL
IM-7458 - Get certification from Mobile Pay  
_Obtained certification from Mobile Pay_  
IM-6965 - Vendor Number Length  
_Vendor No. length increased to allow 10 digits_  
IM-7436 - Goods received missing information in view when created from API  
_Goods receipt notes within inventory now display the Number,notes and description fields _  
IM-3002 - RBO - Warn user of duplicates of the same combination of Reason Code  
_Added a warning to the user of duplicates of the same combination of Reason Code_  
IM-2997 - RBO - The clerk pin should be hashed in DB  
_Clerk password are not encrypted in the DB_  
IM-6777 - Grid of Logs doesn't give enough information  
_Item movements tab within inventory now allows you to choose the columns to display, along with this extra columns have been added to show Barcode and Item No_  
IM-5372 - See balance of loyalty points on printed receipt   
_The receipt will now show the Loyalty Points earned on the transaction and the currently available to spend points, these are minus any in quarantine.**This ticket requires a connector reboot**_  
IM-7812 - PPE Enhancement - Limit the promotions to store(s)  
_PPE Enhancement to limit the promotions to store(s)_  
IM-8277 - Kiosk GW - Custom order numbers  
_-_  
### SELF SERVE
IM-5327 - TOP - Payment abstraction  
_Payment will be based on the payment provider in SelfServeAdmin_  
IM-6809 - New greek translations  
_Added missing Greek translations to Kiosk for modifiers and min/max_  
IM-6811 - Nets Android integration  
_Simple POS can now take payments on the Castles S1 Android POS device through the NETS integration_  
IM-7721 - OSD - Order Details: Collection / Delivery  
_Order Status Display now shows an icon to indicate if an order is for delivery or pick up in store_  
### PLATFORM
IM-7148 - User Management UI from Platform Admin -> Portal  
_User management moved from Platform Admin to the Portal and upgraded UI_  
IM-7648 - Platform Admin - Users page UI/UX  
_Updated the UI of the User Management module in the Portal_  
IM-6585 - Portal - warn when removing all tenant admin user  
_Warning now given if you are removing a Tenant Admin, unable to disable your own user and a green highlight has been added to Tenant Admin users._  
IM-6841 - Integration Management  
_Platform Admin - Create, edit and update integrators and integrations_  
IM-8046 - Platform Admin - Integrator Search  
_Platform Admin - Add Search to Integrators_  
## BUGS
IM-7844 - Customer Import - Address Name  
_Customer Import for the Public API now links Primary Billing Name and Primary Shipping Name to the customer_  
IM-7301 - PO Item Group Filter Doesn't Work  
_Fixed an issue where the PO Item Group filter doesn't work_  
IM-7627 - Multi label print failing 504  
_Changed the label print implementation to use batches so that it now can handle a large number of labels._  
IM-8239 - PoS - gift labels scan as the transaction total and not the item price  
_Fixed a bug where gift labels scan as the transaction total and not the item price_  
IM-7759 - Employee report only shows Shops  
_Employee report now has Clerks grouping available_  
IM-7323 - Create New Customer: No warning when using an existing External Unique ID  
_Fixed bug where no warning was displayed when entering an existing Unique ID_  
IM-7194 - In the shop overview of the backoffice the Primary group stays empty  
_Backoffice - Primary Group column in Shops list now populated correctly_  
IM-7227 - Shipping address - make county not mandatory  
_POS - County field no longer mandatory_  
IM-7548 - PoS - setting Spanish as shop language has a negative effect on PoS  
_Added support for Spanish_  
IM-7604 - POS: Spelling error for incorrect password  
_Text for incorrect password is fixed_  
IM-7826 - 4 Digit POS ID - Cannot sell vouchers or credit notes  
_Fixed issue with selling vouchers and credit notes when the POS ID is 4 digits_  
IM-7712 - Changing datatype of custom attributes breaks UI if attribute is already in use  
_Fixed a bug where changing datatype of custom attributes breaks the UI if attribute is already in use_  
IM-7635 - PPE Item Bundle Custom Attribute Type  
_PPE - Create a bundle with a customer attribute text filter_  
IM-3095 - User logging in Firefox fails  
_Fixed error logging in to Portal using Firefox browser_  
IM-7451 - Voucher printing formatting of receiptId **This ticket requires a connector reboot**_  
_Corrected formatting of receipt barcode when printing vouchers_  
IM-6632 - Portal - Tab no shown as active on reload  
_Fixed incorrect highlighting of the active tab in the top bar on refresh of Portal_  
IM-7099 - SelfServe Apps using ARM: IP undefined  
_Simple POS and Kiosk will now show a message if the Connector does not have a valid IP address. This can occur if entering these applications just after configuring a new connector_  
IM-8021 - POP is being indexed in search engines  
_Added noindex tags to POP UI so that this is not indexed by search engines_  
IM-8023 - Inventory - Item Creation edit item save button not working  
_Inventory - Details entered on the Variants edit screen are now saved_  
IM-8114 - Inventory - Cannot add extra items to an existing GRN  
_Fix a bug in Inventory where you could not add extra items to an existing GRN_  
## Other Improvements  
IM-8118 - Update Order model for Order endpoint in PublicAPI  
_Update Order model for Order endpoint in PublicAPI to reflect changes made to ms-orb_  
IM-6575 - Product Configurator Version update+Translate  
_Product configurator now supports additional language strings. Only en-gb currently available_  
IM-7628 - Update SearchAgg and SearchMS with DisplayInKitchenProperties  
_Added self serve information to Item data within Elastic search_  


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
_Matrix grid in inventor->Goods Receipt now shows the items in the order as set by the dimension sequence_  
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
