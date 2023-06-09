# RELEASE VERSION: 9th June 2023

##### POS:  Do Not Require a 'Payment Type' to be selected if the balance to pay is 0.00(zero) <span class="ticket">IM-13451</span>  
 POS :Not now necessary to choose a payment type if total transaction value = 0.00  
  <span class="new">New Feature</span> <span class="service">POS</span>  
  
##### Transfers - Items not received are removed from In-Transit <span class="ticket">IM-13675</span>  
 Partial receipts of transfers now possible. Unreceived items remain In-Transit.  
  <span class="new">New Feature</span> <span class="service">Inventory</span> <span class="service">Portal</span>  
  
##### Bulk Item Import Failure <span class="ticket">IM-13728</span>  
 Fix Bulk Item Import Failure  
  <span class="bug">Bug</span> <span class="service">BulkItemImport</span>  
  
##### Fixes to report filters to remove the No Data drop down <span class="ticket">IM-13741</span>  
 Analysis - removal of 'no data' tag on free text filters  
  <span class="debt">Technical Debt</span> <span class="service">Analysis</span>  
  
# RELEASE VERSION: 5th June 2023

##### InventoryUI: ItemCreation UI is missing Barcode length validation <span class="ticket">IM-13732</span>  
 Fix InventoryUI: ItemCreation UI is missing Barcode length validation  
  
 <div class="breaking-change"><p>This change is made on a new version of the API endpoint, the current version will be deprecated 1 year from the release date above, for more information on the request/response models please refer to the <a href="" target="_blank">swagger documentation</a></p></div> 
<span class="debt">Technical Debt</span>  
  
##### BI Gateway - salesDetails endpoint param page=2 shows empty results <span class="ticket">IM-13711</span>  
 Stock Movements now filtering by date given in the 'Since' field  
  <span class="bug">Bug</span> <span class="service">BI Gateway</span>  
  
##### Inventory - various bug fixes in Custom Attributes (unknown 500 error if I try to use a string longer than 2000 char) <span class="ticket">IM-12016</span>  
 User friendly error on custom attributes   
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### POS - Journal print out has dates in wrong format <span class="ticket">IM-11743</span>  
 Fixed issue where data was printed in wrong format  
  <span class="bug">Bug</span> <span class="service">POS</span>  
  
# RELEASE VERSION: 23rd May 2023
  
##### Gift Aid Keyboard: Not possible navigate between fields <span class="ticket">IM-11741</span>  
 Fixed issue where the green button in gift aid keyboard had no action  
  <span class="bug">Bug</span> <span class="service">POS</span>  
  
##### POS Item dimension order incorrect <span class="ticket">IM-12007</span>  
 Fix POS Item dimension order incorrect  
  <span class="bug">Bug</span> <span class="service">POS</span>  
  
##### STI -S1 - Add Count Naming to Companion App <span class="ticket">IM-13478</span>  
 Add Count Naming to Companion App  
  <span class="new">New Feature</span> <span class="service">Companion</span>  
  
##### SNM - S6.3 - Prevent Serialized Item being sold without Serial Number at POS <span class="ticket">IM-13639</span>  
 Prevent procedure to payment if one or more serialized items do not have serial numbers assigned.  
  <span class="new">New Feature</span> <span class="service">Item Management</span>  
  
##### Editing count name is not saved <span class="ticket">IM-13691</span>  
 Fixed issue where editing count name was not saved  
  <span class="bug">Bug</span> <span class="service">Companion</span>  
  
##### ANL S0.6 - Access control on sidebar entries  <span class="ticket">IM-13695</span>  
 Added Analysis in the Permissions  
  <span class="new">New Feature</span> <span class="service">Analysis</span>  
  
##### Stock - Exchange transactions are not being recorded in stock schema <span class="ticket">IM-13710</span>  
 Fix Stock - Exchange transactions are not being recorded in stock schema  
  <span class="bug">Bug</span> <span class="service">Stock Management</span>  
  
##### Item Import After Uploading Giving the Save Status <span class="ticket">IM-13715</span>  
 Fixed issue when loading Item import page  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Stock take - selecting 1 master item selects all <span class="ticket">IM-13717</span>  
 Fixed issue in stock take where all master items were selected  
  <span class="bug">Bug</span> <span class="service">Stock Management</span>  
  
# RELEASE VERSION: 16th May 2023

##### Inventory - various bug fixes in Custom Attributes (Remove the Id column from the CA table) <span class="ticket">IM-12014</span>  
 Removed Id column from CA table  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Offline stock not transferable to 'On-hand' if item on-hand qty is negative. <span class="ticket">IM-10472</span>  
 Fixed issue where couldn't transfer item to 'on-hand' if it is negative  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
# RELEASE VERSION: 11th May 2023

##### POM - S2.1 - Make 'Primary Vendor Field' on Matrix Tabs (Both Variant and Non-Variant versions) Read Only <span class="ticket">IM-13652</span>  
 Primary Vendor now NOT selectable from Matrix Tab  
  <span class="new">New Feature</span> <span class="service">Item Management</span> <span class="service">Portal</span>  
  
# RELEASE VERSION: 10th May 2023

##### G00100 - Customer - S1 - provide additional option for External Unique Id to be system generated <span class="ticket">IM-11496</span>  
 Customer: Additional option for ext unique ID to be system generated  
  
 <div class="breaking-change"><p>This change is made on a new version of the API endpoint, the current version will be deprecated 1 year from the release date above, for more information on the request/response models please refer to the <a href="" target="_blank">swagger documentation</a></p></div> 
<span class="new">New Feature</span> <span class="service">Customer</span>  
  
# RELEASE VERSION: 9th May 2023

##### Data pagination in products endpoint of BI gateway <span class="ticket">IM-11092</span>  
 BI GW- Pagination  
  <span class="bug">Bug</span> <span class="service">BI Gateway</span>  
  
##### VendorMS: Add migration to recreate all vendoritems <span class="ticket">IM-13680</span>  
 VendorMS: Fixed issue where primary vendor was not shown  
  <span class="bug">Bug</span> <span class="service">Inventory</span> <span class="service">RBO</span>  
  
##### POS - Rebrand K3 Imagine logo <span class="ticket">IM-13443</span>  
 Rebrand POS with new logo  
  <span class="new">New Feature</span> <span class="service">POS</span>  
  
##### ms-bulkitemimport - Update to dotnet 6.0 <span class="ticket">IM-10707</span>  
 ms-bulkitemimport - Update to dotnet 6.0  
  <span class="debt">Technical Debt</span> <span class="service">TBC</span>  
  
##### BI Gateway - StockMovements  <span class="ticket">IM-13611</span>  
 Stock Movements now filtering by date given in the 'Since' field  
  <span class="bug">Bug</span> <span class="service">BI Gateway</span>  
  
##### Inventory - Stock Lookup UI stuck loading on response  <span class="ticket">IM-13689</span>  
 Resolved issue with the stock lookup UI hanging when loading item information  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
# RELEASE VERSION: 4th May 2023

##### POS: Customer - It is missing the labels on the soft keyboard to add new address <span class="ticket">IM-7865</span>  
 POS - Soft Keyboard Labels for adding Customer Address.  
  <span class="new">New Feature</span> <span class="service">POS</span>  
  
##### ms-weborder - Update to dotnet 6.0 <span class="ticket">IM-10765</span>  
 ms-weborder - Update to dotnet 6.0  
  <span class="debt">Technical Debt</span> <span class="service">TBC</span>  
  
##### Sales report query returns more rows than expected <span class="ticket">IM-13570</span>  
 Analysis - Sales (Beta) report now showing correct number of sales.  
  <span class="bug">Bug</span> <span class="service">Analysis</span>  
  
# RELEASE VERSION: 3rd May 2023

##### Stock MS Transfer Modified Date <span class="ticket">IM-10414</span>  
 Added modified date on transfer out  
  <span class="bug">Bug</span> <span class="service">Stock Management</span>  
  
##### Donated Stock : It is missing the printing server software <span class="ticket">IM-13397</span>  
 Fixed issue where could not download print server  
  <span class="bug">Bug</span> <span class="service">Donated Stock</span>  
  
# RELEASE VERSION: 2nd May 2023

##### ms-bulkstocktakeimport - Update to dotnet 6.0 <span class="ticket">IM-10708</span>  
 ms-bulkstocktakeimport-update to dotnet 6.0  
  <span class="debt">Technical Debt</span> <span class="service">TBC</span>  
  
# RELEASE VERSION: 26th April 2023

##### ANL Item analysis filters - Item barcode <span class="ticket">IM-13515</span>  
 Analysis - Item (Beta) filters - Item barcode  
  <span class="new">New Feature</span> <span class="service">Analysis</span>  
  
##### POM - S3.1 item Search  <span class="ticket">IM-13572</span>  
 Added non prImary vendor in the item search in PO  
  <span class="new">New Feature</span> <span class="service">Item-Search Component</span>  
  
##### [Item Management] Changing the cost price from Vendor Management Modal does not update the Margin on the item card <span class="ticket">IM-13605</span>  
 Fixed issue where changing the cost from vendor mngmt didnt update estimated margin  
  <span class="bug">Bug</span> <span class="service">Item Management</span>  
  
# RELEASE VERSION: 25th April 2023

##### ANL Item analysis filters - Master item name <span class="ticket">IM-13513</span>  
 Added master item name filter on Item Analysis  
  <span class="new">New Feature</span> <span class="service">Analysis</span>  
  
##### ANL Item analysis filters - Item description <span class="ticket">IM-13514</span>  
 Analysis - Item Description Filter  
  <span class="new">New Feature</span> <span class="service">Analysis</span>  
  
# RELEASE VERSION: 24th April 2023

##### Item Import & stock import Not Working <span class="ticket">IM-13642</span>  
 Item Import & stock import Not Working  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### [Item Management] Primary Vendor is not populated on item card and Vendor Management modal after item creation <span class="ticket">IM-13602</span>  
 [Item Management] Primary Vendor is not populated on item card and Vendor Management modal after item creation  
  <span class="bug">Bug</span> <span class="service">Item Management</span>  
  
##### NPM-Package Item Search Shop Select Not Working <span class="ticket">IM-13421</span>  
 Inventory Transfers - Item Search within Shop Fixed  
  <span class="bug">Bug</span> <span class="service">All_UI's</span>  
  
##### Inventory - Changing Vendor Cost does not update the Vendor Cost field within Matrix <span class="ticket">IM-13597</span>  
 Updating the cost within Vendor Management is now reflected on the item  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
# RELEASE VERSION: 20th April 2023

##### POS Z-Read Do NOT split out different card types on Z Report <span class="ticket">IM-13464</span>  
 Z-Read Quantity and Values grouped on 'Card' and NOT 'Card Name' with Adyen integration  
  <span class="new">New Feature</span> <span class="service">POS</span>  
  
##### ANL Item analysis filters - Vendor ItemNO <span class="ticket">IM-13516</span>  
 Implemented Vendor Item No in Item Analysis  
  <span class="new">New Feature</span> <span class="service">Analysis</span>  
  
##### Analysis - Item (Beta) Shop Filter Issue <span class="ticket">IM-13537</span>  
 Analysis - Item (Beta) Stop filter bug resolved  
  <span class="bug">Bug</span> <span class="service">Analysis</span>  
  
##### Public API - PUT vendorsbyvendorno endpoint failing <span class="ticket">IM-13557</span>  
 Fix Public API - PUT vendorsbyvendorno endpoint failing  
  <span class="bug">Bug</span> <span class="service">Public API</span>  
  
# RELEASE VERSION: 17th April 2023

##### Visual Composer : Profile Overview Error Message Not Friendly/Meaningful to User <span class="ticket">IM-13194</span>  
 Visual Composer -   
  <span class="bug">Bug</span> <span class="service">Visual Composer</span>  
  
##### SNM - S5 - (UI) Sell by Serial Number at POS <span class="ticket">IM-12946</span>  
 Sell/Return by Serial Number at POS  
  <span class="new">New Feature</span> <span class="service">Item Management</span>  
  
##### SNM - S7 -  Item number and SN to Fluctuating Transaction Line Properties <span class="ticket">IM-12957</span>  
 Serial Number  saved to fluctuating properties.  
  <span class="new">New Feature</span> <span class="service">Item Management</span>  
  
##### SNM - S6 - (UI) Sell by Serial Number BY Item number at POS <span class="ticket">IM-12952</span>  
 Adding Serial Number to Item Sale/Return at POS  
  <span class="new">New Feature</span> <span class="service">Item Management</span>  
  
##### RBO - Can only expire gift vouchers if expirationdate has passed <span class="ticket">IM-12351</span>  
 Expiry of Gift Vouchers in Backoffice now works.  
  <span class="bug">Bug</span> <span class="service">Backoffice</span>  
  
# RELEASE VERSION: 4th April 2023

##### Stock MS - POST stocktake-selectedby-ids <span class="ticket">IM-13582</span>  
 Stock MS - POST stocktake-selectedby-ids  
  <span class="debt">Technical Debt</span> <span class="service">Companion</span> <span class="service">Stock Management</span>  
  
##### Sales(Beta) Analysis Returns Error when attempting to Pre-Group <span class="ticket">IM-13584</span>  
 Sales(Beta) Analysis Returns Error when attempting to Pre-Group  
  <span class="bug">Bug</span> <span class="service">Analysis</span>  
  
##### ANL - Sales (Beta) do not include 'Cash Statement' records in report. <span class="ticket">IM-13477</span>  
 Cash Statements now not included in Sales Report  
  <span class="bug">Bug</span> <span class="service">Reports</span>  
  
# RELEASE VERSION: 3rd April 2023

##### Barcode not found when adding items does not show toast <span class="ticket">IM-9744</span>  
 Inventory - not found toast now showing   
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### ms-selfserveadmin - Update to dotnet 6.0 <span class="ticket">IM-10754</span>  
 ms-selfserveadmin update to dotnet 6.0  
  <span class="debt">Technical Debt</span> <span class="service">TBC</span>  
  
##### POM - S3 - Use Selected Vendor's Currency and Item Cost on New PO <span class="ticket">IM-13460</span>  
 New PO's now use Vendor Currency and Vendor tem Costs  
  <span class="new">New Feature</span> <span class="service">Item Management</span>  
  
##### ANL Item analysis filters - Master Item No <span class="ticket">IM-13517</span>  
 Implemented Master Item No filter in Item Analysis   
  <span class="new">New Feature</span> <span class="service">Analysis</span>  
  
##### Public API - Create Vendor endpoint failing <span class="ticket">IM-13555</span>  
 Resolved issue with creating a new Vendor via POST /api/v1.0/Vendor  
  <span class="bug">Bug</span> <span class="service">Public API</span>  
  
# RELEASE VERSION: 30th March 2023

##### ANL Item analysis filters - Item No <span class="ticket">IM-13518</span>  
 Implemented Item No filter in Item Analysis  
  <span class="new">New Feature</span> <span class="service">Analysis</span>  
  
##### ANL Item analysis filters - Dimensions  <span class="ticket">IM-13512</span>  
 Implemented Dimensions in Item Analysis  
  <span class="new">New Feature</span> <span class="service">Analysis</span>  
  
##### Stock - Can't save and commit a Transfer <span class="ticket">IM-13528</span>  
 Stock - can't save and commit a transfer   
  <span class="bug">Bug</span> <span class="service">Inventory</span> <span class="service">Stock Management</span>  
  
##### Tenant Creation: Demodata/seed data not being set <span class="ticket">IM-13519</span>  
 Demo data and default settings now being applied on tenant creation  
  
 <div class="breaking-change"><p>This change is made on a new version of the API endpoint, the current version will be deprecated 1 year from the release date above, for more information on the request/response models please refer to the <a href="" target="_blank">swagger documentation</a></p></div> 
<span class="bug">Bug</span> <span class="service">Platform Admin</span>  
  
##### Analysis - Sales Beta - Report not running due to weightedaveragetenantcost not present <span class="ticket">IM-13521</span>  
 Fixed Analysis - Sales Beta - Report not running due to weightedaveragetenantcost not present  
  <span class="bug">Bug</span> <span class="service">Analysis</span>  
  
# RELEASE VERSION: 29th March 2023

##### Backoffice - Cannot rename or delete vendors <span class="ticket">IM-13551</span>  
 Resolved issue where a vendor could not be renamed or deleted  
  <span class="bug">Bug</span> <span class="service">Backoffice</span>  
  
##### Missing Information on Matrix tab of Item (Matrix items only) <span class="ticket">IM-13520</span>  
 Fixed Missing Information on Matrix tab of Item (Matrix items only)  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Printed receipt always shows 0% <span class="ticket">IM-13446</span>  
 Receipts now only show VAT relevant to items on receipt  
  
 <div class="breaking-change"><p>This change requires a connector reboot for the changes to take effect.</p></div> 
<span class="bug">Bug</span> <span class="service">Connector</span> <span class="service">POS</span>  
  
# RELEASE VERSION: 22nd March 2023

##### SNM - SerialNumbers can only be linked to Items of type 'Serialized'  <span class="ticket">IM-13455</span>  
 Can only save Serial No to item type Serialized  
  <span class="bug">Bug</span> <span class="service">Portal</span>  
  
##### ITM - Add Reference Column to Item List Movements Grid <span class="ticket">IM-12695</span>  
 Reference column added to Item List Movements Grid  
  
 <div class="breaking-change"><p>This change is made on a new version of the API endpoint, the current version will be deprecated 1 year from the release date above, for more information on the request/response models please refer to the <a href="" target="_blank">swagger documentation</a></p></div> 
<span class="new">New Feature</span> <span class="service">Inventory</span> <span class="service">Item Management</span>  
  
# RELEASE VERSION: 21st March 2023

##### POM - S0.6 - Add Currency to Vendor Creation <span class="ticket">IM-13459</span>  
 Vendor now requires a specified currency on creation  
  <span class="new">New Feature</span> <span class="service">Item Management</span>  
  
##### Stock - Purchase order cancel remaining items fails <span class="ticket">IM-13439</span>  
 Stock - Cancelling of remaining Items on PO resolved  
  <span class="bug">Bug</span> <span class="service">Stock Management</span>  
  
##### PO: Can not cancel a placed PO <span class="ticket">IM-13366</span>  
 Inventory - Issue with Cancelling placed PO's resolved.   
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Stock - Purchase order fails to create item stock record <span class="ticket">IM-13461</span>  
 Resolved issue with creating Purchase Order with multiple lines of same item but different serial number  
  <span class="bug">Bug</span> <span class="service">Stock Management</span>  
  
# RELEASE VERSION: 20th March 2023

##### Welcome details not send after creating a new tenant/user <span class="ticket">IM-13441</span>  
 Platform Admin - Welcome Email now sent when new tenant created  
  <span class="bug">Bug</span> <span class="service">Portal</span>  
  
# RELEASE VERSION: 16th March 2023

##### PublicAPI: Remove vendorNo update <span class="ticket">IM-13334</span>  
 PublicAPI: Remove vendorNo update  
  <span class="bug">Bug</span> <span class="service">Public API</span>  
  
##### Unable to create new items <span class="ticket">IM-13466</span>  
 Inventory - Bug Fixed - Unable to use creation wizard as timing out  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Cost price in Analysis Items beta report is being reflected as last Cost instead of Weighted Average <span class="ticket">IM-13394</span>  
 Analysis - Items - Now shows weighted average cost instead of last cost.  
  <span class="bug">Bug</span> <span class="service">Backoffice</span>  
  
##### Stocktake Approval fails - 409 conflict <span class="ticket">IM-13353</span>  
 Companion now shows message that the Stocktake cannot be reviewed if already closed  
  <span class="bug">Bug</span> <span class="service">Stock Management</span>  
  
##### Public API - Kiosk import endpoint error <span class="ticket">IM-13498</span>  
 Resolved issue with Auth on the KioskImport endpoints  
  <span class="bug">Bug</span> <span class="service">Public API</span>  
  
##### LS Pay Integration - FROM IPE <span class="ticket">IM-13423</span>  
 LS Pay Integration  
  <span class="new">New Feature</span> <span class="service">Payments</span>  
  
# RELEASE VERSION: 15th March 2023

##### Transfers - (Part1) Cost at Sending Shop should be used on Transfer Document <span class="ticket">IM-13013</span>  
 Transfer-Out document now uses sending shop weighted average cost.  
  <span class="new">New Feature</span> <span class="service">Inventory</span>  
  
##### Transfers - (Part2) Weighted Average Cost should be updated when receiving items from other shop <span class="ticket">IM-13014</span>  
 Weighted average cost is now recalculated wen receiving on a transfer-in.  
  <span class="new">New Feature</span> <span class="service">Inventory</span>  
  
# RELEASE VERSION: 14th March 2023

##### Received Goods - Loading page continuously showing Overreceive error <span class="ticket">IM-13481</span>  
 Fixed an issue where the loading of received goods failed with currency code error  
  <span class="bug">Bug</span> <span class="service">Inventory</span> <span class="service">Public API</span>  
  
##### Received Goods - Loading page continuously showing  <span class="ticket">IM-13434</span>  
 Fixed an issue where the loading of received goods failed with currency code error  
  <span class="bug">Bug</span> <span class="service">Inventory</span> <span class="service">Public API</span>  
  
##### Intersolve: Clerk without a password is asked to entered one to refund voucher <span class="ticket">IM-11693</span>  
 Fixed issue where a clerk without a password was asked to entered one to refund voucher  
  <span class="bug">Bug</span> <span class="service">IntersolveUI</span>  
  
# RELEASE VERSION: 13th March 2023

##### PlatformAdminGW - Don't fail create a new tenant if a mail can't be send <span class="ticket">IM-13432</span>  
 Fixed issue where tenant could not be created if an email could not be sent  
  <span class="debt">Technical Debt</span>  
  
##### Display screen for creating Expense should only show expense Name <span class="ticket">IM-11121</span>  
 Only the expense name now showing when trying to create expense.  
  <span class="new">New Feature</span> <span class="service">POS</span>  
  
##### POSUI: Offline Functionality <span class="ticket">IM-13167</span>  
 Fixed issue where could not use POS when offline  
  <span class="bug">Bug</span> <span class="service">POS</span>  
  
# RELEASE VERSION: 6th March 2023

##### DRN - S2 - Enhance POS Receipt Number Search to Use Part Strings <span class="ticket">IM-13173</span>  
 DRN - S2 - Enhance POS Receipt Number Search to Use Part Strings  
  <span class="new">New Feature</span> <span class="service">POS Identity</span> <span class="service">Search</span>  
  
##### PoS: add a * to First and Last Name <span class="ticket">IM-11407</span>  
 POS - Added * to Customer required fields first name and last name  
  <span class="new">New Feature</span> <span class="service">POS</span>  
  
##### Wrong Cost on PO PDF File <span class="ticket">IM-13147</span>  
 Inventory - Cost price entered on the PO now reflected in the PDF   
  <span class="bug">Bug</span> <span class="service">Inventory</span> <span class="service">Item Management</span>  
  
# RELEASE VERSION: 2nd March 2023

##### Login error links to old K3 website <span class="ticket">IM-13360</span>  
 Fixed an issue where the old k3 website was shown when logging errored   
  <span class="bug">Bug</span> <span class="service">Portal</span>  
  
# RELEASE VERSION: 27th February 2023

##### VAT is showing incorrectly on receipts where transactions which have multiple Items with 0% and another Vat Rate eg 20% <span class="ticket">IM-13313</span>  
 Fixed issue where VAT was showing incorrectly in receipts  
  
 <div class="breaking-change"><p>This change requires a connector reboot for the changes to take effect.</p></div> 
<span class="bug">Bug</span> <span class="service">Connector</span> <span class="service">POS</span>  
  
# RELEASE VERSION: 23rd February 2023

##### Inventory : Create a GRN Giving 500 error <span class="ticket">IM-13405</span>  
 Inventory : Create a GRN Giving 500 error  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Inventory : Create PO Giving 500 Error <span class="ticket">IM-13364</span>  
 Inventory : Create PO Giving 500 Error  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Create Tenant: 400 error <span class="ticket">IM-13332</span>  
 Fixed version where creating a tenant was giving a 400 error  
  <span class="bug">Bug</span> <span class="service">Platform Admin</span>  
  
##### OSD: 500 error when loading OSD <span class="ticket">IM-13215</span>  
 Fixed issue where OSD was giving a 500  
  <span class="bug">Bug</span> <span class="service">Order Status Display</span>  
  
# RELEASE VERSION: 21st February 2023

##### Public API - Kiosk import endpoint not updating existing Items <span class="ticket">IM-12948</span>  
 Public API - Kiosk import endpoint not updating existing Items  
  <span class="bug">Bug</span> <span class="service">Public API</span>  
  
# RELEASE VERSION: 20th February 2023

##### OSD - create an order clear-down button <span class="ticket">IM-13162</span>  
 Added <Clear down> button OSD config tab to set all orders to Done  
  <span class="new">New Feature</span> <span class="service">Order Status Display</span>  
  
# RELEASE VERSION: 17th February 2023

##### Adyen - Display the last 5 digits of the API key in Admin - FROM IPE <span class="ticket">IM-13368</span>  
 Adyen - Display the last 5 digits of the API key in Admin  
  <span class="new">New Feature</span> <span class="service">Payments</span>  
  
##### Adyen - Change of data to be captured for reporting purposes - FROM IPE <span class="ticket">IM-13367</span>  
 Adyen - Change of data to be captured for reporting purposes  
  <span class="new">New Feature</span> <span class="service">Payments</span>  
  
# RELEASE VERSION: 14th February 2023

##### ItemCreation unable to edit an item <span class="ticket">IM-13325</span>  
 Item Creation unable to edit an item  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Companion App - log rocket  <span class="ticket">IM-13265</span>  
 Fixed issue with Companion App Log Rocket  
  <span class="bug">Bug</span> <span class="service">Portal</span>  
  
##### MS-RBO - error when sending email with card receipt <span class="ticket">IM-13312</span>  
 Fixed issue where the email receipt was not received in POS  
  <span class="bug">Bug</span> <span class="service">RBO</span>  
  
# RELEASE VERSION: 13th February 2023

##### Public API - vendorsbyvendorno  <span class="ticket">IM-13201</span>  
 Resolved issue where an error was being returned even though endpoint was functioning as expected  
  <span class="bug">Bug</span> <span class="service">Public API</span> <span class="service">Stock Management</span>  
  
# RELEASE VERSION: 9th February 2023

##### Stock Management - Get stocktake <span class="ticket">IM-13352</span>  
 Optimised SQL query when getting a stocktake by ID, This improves loading performance in companion app  
  <span class="debt">Technical Debt</span> <span class="service">Companion</span> <span class="service">Stock Management</span>  

##### Companion - Optimizing stockTake queries <span class="ticket">SD-183</span>  
 Optimised SQL queries within companion app  
  <span class="debt">Technical Debt</span> <span class="service">Companion</span>

# RELEASE VERSION: 8th February 2023

##### file selector dialog broken  <span class="ticket">IM-13356</span>  
 Inventory - Item import and Backoffice - Upload budget bug fixed  
  <span class="bug">Bug</span> <span class="service">Side Bar</span>  
  
# RELEASE VERSION: 7th February 2023

##### PLA - S1 – Configure License and Contracts email address <span class="ticket">IM-13058</span>  
 added LicenseContractsTeamEmailAddress field in the DB  
  <span class="new">New Feature</span> <span class="service">Platform Admin</span>  
  
##### PLA - S2 - Set Explicit Tenant Expiry Date <span class="ticket">IM-13059</span>  
 nrn  
  <span class="new">New Feature</span> <span class="service">Platform Admin</span>  
  
##### Platform admin - Connector command list cannot see all commands <span class="ticket">IM-13304</span>  
 Platform Admin - View connector command list   
  <span class="bug">Bug</span> <span class="service">Platform Admin</span>  
  
##### Custom attribute not searchable <span class="ticket">IM-13291</span>  
 Fixed issue where we could not search an item using a '-'  
  <span class="bug">Bug</span> <span class="service">POS</span>  
  
# RELEASE VERSION: 2nd February 2023

##### SNM - S3 - Tenant Feature. 'Serial Number Mask' <span class="ticket">IM-12943</span>  
 New Tenant Feature ' Add Serial Number Mask'  
  <span class="new">New Feature</span> <span class="service">Item Management</span>  
  
##### SNM - S2 - Tenant Feature. 'Enable SN Tracking' <span class="ticket">IM-12940</span>  
 New Tenant Feature ' Enable Serial Number Tracking'  
  <span class="new">New Feature</span> <span class="service">Item Management</span>  
  
##### SNM - S1 - Create New Item Type 'Serialized' <span class="ticket">IM-12939</span>  
 New Item Type 'Serialized' now configurable  
  <span class="new">New Feature</span> <span class="service">Item Management</span>  
  
# RELEASE VERSION: 31st January 2023

##### Matrix - Multicopy for Local Price Not Copied Correctly <span class="ticket">IM-13290</span>  
 Fixed issue where multicopy for Local Price was not copied  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
# RELEASE VERSION: 26th January 2023

##### Stocktake Task Service  <span class="ticket">IM-13286</span>  
 Resolved issue where starting a recount would cause an error whilst trying to create the new count.  
  <span class="bug">Bug</span> <span class="service">Stock Management</span>  
  
# RELEASE VERSION: 25th January 2023

##### Inventory Matrix Copy item details not working <span class="ticket">IM-12839</span>  
 Inventory Matrix Copy item details not working  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Item Movement Shows incorrect additional Entries <span class="ticket">IM-13016</span>  
 Inventory - Bug Fixed Item movement shows correct movement for transfers  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
# RELEASE VERSION: 24th January 2023

##### Item Creation Vendors List No Longer Alphabetical  <span class="ticket">IM-12903</span>  
 Vendors dropdown when creating an item now in Alphabetical order  
  <span class="bug">Bug</span> <span class="service">Inventory</span> <span class="service">Item Management</span> <span class="service">UX</span>  
  
##### Can't save a vendor with a Duplicate VendorNO <span class="ticket">IM-12953</span>  
 Fixed issue with general error message when creating a vendor with duplicated number  
  <span class="bug">Bug</span> <span class="service">RBO</span>  
  
##### Offline Stock - Moving an item to Vendor Return or Another Shop doubles the loss of item qty when actioned. <span class="ticket">IM-13155</span>  
 Fixed issue when ,moving items out of offline stock that doubled the loss of item qty when actioned  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### OSD requiring ORB opening first <span class="ticket">IM-13208</span>  
 Fixed issue on OSD where it was required to open ORB first  
  <span class="bug">Bug</span> <span class="service">Order Ready Board</span> <span class="service">Order Status Display</span>  
  
# RELEASE VERSION: 23rd January 2023

##### DisplayName Column Show Twice <span class="ticket">IM-12902</span>  
 Fixed issue with header labels in Modifiers group  
  <span class="bug">Bug</span> <span class="service">Product Configurator</span>  
  
# RELEASE VERSION: 18th January 2023

##### POSAdminUI - Hide Chart on POS <span class="ticket">IM-12776</span>  
 Resolved issue where the chart was not displaying regardless of boolean setting within POS Options  
  <span class="bug">Bug</span> <span class="service">Pos Admin</span>  
  
# RELEASE VERSION: 17th January 2023

##### Include Text and List type Custom Item Attributes values in Elastic Search <span class="ticket">IM-12989</span>  
 Include Text and List type Custom Item Attributes values in Elastic Search  
  <span class="new">New Feature</span> <span class="service">Inventory</span> <span class="service">POS</span>  
  
##### ms-promotion - Update to dotnet 6.0 <span class="ticket">IM-10745</span>  
 N/A  
  <span class="new">New Feature</span> <span class="service">TBC</span>  
  
# RELEASE VERSION: 16th January 2023

##### remove node-sass from RBO <span class="ticket">IM-13271</span>  
 remove node-sass from RBO  
  <span class="debt">Technical Debt</span> <span class="service">RBO</span>  
  
##### Inventory --> Receive Goods unable to 'Save and Commit' new GRN <span class="ticket">IM-12832</span>  
 Fixed issue where Save and commit button was disabled after filling the fields  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
# RELEASE VERSION: 12th January 2023

##### Unique Sequential Number barcode label template variable. <span class="ticket">IM-12894</span>  
 Additional Label Template variable {SequenceNo} added  
  <span class="new">New Feature</span> <span class="service">Inventory</span>  
  
# RELEASE VERSION: 11th January 2023

##### Stock Take - Auto fill "Show counts for section" <span class="ticket">IM-13025</span>  
 Auto fill Show counts in StockTake  
  <span class="new">New Feature</span> <span class="service">Stock Management</span>  
  
##### OOP S5: Send alert to SS Companion for Out of Paper <span class="ticket">IM-11712</span>  
 OOP S5: Send alert to SS Companion for Out of Paper  
  <span class="new">New Feature</span> <span class="service">SCO</span>  
  
##### gw-orb - Update to dotnet 6.0 <span class="ticket">IM-10679</span>  
 gw-orb - Update to dotnet 6.0  
  <span class="new">New Feature</span> <span class="service">TBC</span>  
  
##### ms-stockmanagement - Update to dotnet 6.0 <span class="ticket">IM-10757</span>  
 ms-stockmanagement - update to dotnet 6.0  
  <span class="new">New Feature</span> <span class="service">Stock Management</span>  
  
# RELEASE VERSION: 9th January 2023

##### POS Admin [Receipt setup]: It does not allow to add blank lines <span class="ticket">IM-13022</span>  
 Fixed issue where was not possible to insert blank lines in Receipt setup  
  <span class="bug">Bug</span> <span class="service">Pos Admin</span>  
  
##### Public API - GET StockTakeHeaders date filters not accurate <span class="ticket">IM-12917</span>  
 Resolved issue where date filters were not accurately reflected in filter. Note there is a new POST endpoint for StockTakeHeaders, please see the swagger page for details.  
  <span class="bug">Bug</span> <span class="service">Public API</span>  
  
##### MovementType: Receipt should be Renamed to Receive Goods <span class="ticket">IM-12813</span>  
 Renamed 'Receipt' to 'Receive Goods' in Item ->Movement type  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Inventory > Item Import  requires manufacturer item number <span class="ticket">IM-13101</span>  
 Fixed issue where manufacturer item number were required on item import  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Product Configurator - Create/Updating Bundle Giving Error 500 <span class="ticket">IM-13064</span>  
 We can now create and update bundle successfully  
  <span class="bug">Bug</span> <span class="service">Product Configurator</span>  
  
# RELEASE VERSION: 20th December 2022

##### NumberGen connection string  <span class="ticket">IM-13206</span>  
 Resolved issue where connection string was expiring causing login errors and ultimately application errors  
  <span class="bug">Bug</span> <span class="service">NumberGeneration</span>  
  
##### OSD: 500 error when loading OSD <span class="ticket">IM-13215</span>  
 Fixed issue where OSD was failing to load due to invalid data  
  <span class="bug">Bug</span> <span class="service">Order Status Display</span>  
  
# RELEASE VERSION: 14th December 2022

##### Fixes to sales report to get it up to par with Item report <span class="ticket">IM-13197</span>  
 Analysis - Fixes to Sales Beta to bring it in line with Item Beta  
  <span class="debt">Technical Debt</span> <span class="service">Analysis</span>  
  
##### SQL fix for sales report <span class="ticket">IM-13188</span>  
 Analysis - Sales Beta SQL Fix.  
  <span class="debt">Technical Debt</span> <span class="service">Analysis</span>  
  
# RELEASE VERSION: 13th December 2022

##### Custom Attribute ID Mismatch GW/UI/MS <span class="ticket">IM-13183</span>  
 Fixed issue with CA ID mismatch  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
# RELEASE VERSION: 8th December 2022

##### ItemMS: remove Index constraint from itm.vendor <span class="ticket">IM-12954</span>  
 Removed Index constraint from itm.vendor  
  <span class="bug">Bug</span> <span class="service">Item Management</span>  
  
# RELEASE VERSION: 6th December 2022
  
##### Simple POS Wakeup Request <span class="ticket">IM-13006</span>  
 Fixed issue where Simple POS sent an empty Body in the post request  
  <span class="bug">Bug</span> <span class="service">Simple POS</span>  
  
##### Fix the issue with PPE in SimplePOS <span class="ticket">IM-12710</span>  
 Fixed issue where basketusesppe is was false in simple pos gateway  
  <span class="bug">Bug</span> <span class="service">Basket</span> <span class="service">Simple POS</span>  
  
# RELEASE VERSION: 1st December 2022

##### Stock Take - Item of previous stock take is reselected <span class="ticket">IM-13021</span>  
 Fixed issue where an item from a previous stock take was automatically reselected when counting a new stock take  
  <span class="bug">Bug</span> <span class="service">Stock Management</span>  
  
##### Sales(beta) and Items(beta) analysis returns an error when  'Group by Columns' is used <span class="ticket">IM-13099</span>  
 Fixed issue where grouping by columns in Item analysis and sales beta returned error  
  <span class="bug">Bug</span> <span class="service">Analysis</span>  
  
##### ANL - itemsReport and my-anlysis links broken <span class="ticket">IM-13141</span>  
 Fixed issue where Item (Beta) and My analysis redirected to dashboard when within the analysis module  
  <span class="bug">Bug</span> <span class="service">Analysis</span> <span class="service">Portal</span>  
  
##### ANL - Change filter box format on Sales and Item Analyses <span class="ticket">IM-13106</span>  
 Analysis filter box controls changed to make better use of space, Superficial UI only.  
  <span class="new">New Feature</span> <span class="service">Analysis</span>  
  
# RELEASE VERSION: 17th November 2022

##### ANL 3.6 Item Analysis KPIs <span class="ticket">IM-12672</span>  
 Added KPI on Item Analysis  
  <span class="new">New Feature</span> <span class="service">Analysis</span>  
  
##### SCO: Discounted values are sending across Micros <span class="ticket">IM-13056</span>  
 Resolved issue where discounted value sent to Micros rather than full value  
  <span class="bug">Bug</span> <span class="service">Self Checkout</span>  
  
# RELEASE VERSION: 14th November 2022

##### Incorrect Cost Price being picked up by Purchase Order <span class="ticket">IM-12881</span>  
 New PO now takes Vendor Cost as default Last Cost   
  <span class="new">New Feature</span> <span class="service">Inventory</span>  
  
# RELEASE VERSION: 9th November 2022

##### SCO: Discounted values are sending across Micros <span class="ticket">IM-13056</span>  
 Resolved issue where discounted value sent to Micros rather than full value  
  <span class="bug">Bug</span> <span class="service">Self Checkout</span>  
  
##### STK-S2-Take User to Newly Created Stock Take and Calculation Form <span class="ticket">IM-12559</span>  
 After calculating the ST it will redirect the user to the remembered filter list  
  <span class="new">New Feature</span> <span class="service">Inventory</span>  
  
##### Public API - not returning null fields <span class="ticket">IM-13098</span>  
 Fixed issue where null fields were not being returned  
  <span class="debt">Technical Debt</span>  
  
# RELEASE VERSION: 8th November 2022

##### Stock Take - Reset overview leaves date fields blank <span class="ticket">IM-13024</span>  
 Fixed issue where Reset left date fields blank in Stocktake  
  <span class="bug">Bug</span> <span class="service">Stock Management</span>  
  
##### STK-S1-Retain filter options on return to initial form <span class="ticket">IM-12563</span>  
 Retain filter options on return to stock take submenu  
  <span class="new">New Feature</span> <span class="service">Inventory</span>  
  
# RELEASE VERSION: 7th November 2022

##### POS/Inventory - trying to print labels gives 500 error <span class="ticket">IM-12898</span>  
 Fixed issue where printing label were giving a 500 error  
  <span class="bug">Bug</span> <span class="service">Inventory</span> <span class="service">NumberGeneration</span> <span class="service">POS</span>  
  
# RELEASE VERSION: 3rd November 2022
  
##### Sales Analysis does not include sales of Item Groups <span class="ticket">IM-12929</span>  
 Included Sales of item groups in Sales(Beta)  
  <span class="new">New Feature</span> <span class="service">Analysis</span>  
  
##### MS-SearchAggregator throwing errors <span class="ticket">IM-11769</span>  
 Fixed issue where Ms-Searchaggregator was throwing errors whenever an item was created or updated   
  <span class="bug">Bug</span> <span class="service">Search</span>  
  
# RELEASE VERSION: 2nd November 2022

##### ANL 3.5 Item Analysis UI save report <span class="ticket">IM-12671</span>  
 Check Save Item report works  
  <span class="new">New Feature</span> <span class="service">Analysis</span>  
  
##### STK-S3- Hide the 'Physical Location' column from the Stocktake Discrepancy list and show shop and title.  <span class="ticket">IM-12561</span>  
 Removed 'physical location' column from stocktake discrepancy  
  <span class="new">New Feature</span> <span class="service">Inventory</span>  
  
##### ANL – S2.3.3 - 'My Analysis' to show all User Saved Reports component <span class="ticket">IM-12827</span>  
 My Analysis' to show all User Saved Reports component  
  <span class="new">New Feature</span> <span class="service">Analysis</span>  
  
##### Image Management UI is broken <span class="ticket">IM-13043</span>  
 fixed the issue where image management had lost style  
  <span class="bug">Bug</span> <span class="service">Item Management</span>  
  
##### Elastic Search Reindex fails on large tenant <span class="ticket">IM-11428</span>  
 Fixed issue where on large datasets when performing a reindex through ms-searchaggregator failed with an error  
  <span class="bug">Bug</span> <span class="service">Search</span>  
  
##### Login to k3 portal from iframe cookie problem <span class="ticket">IM-11500</span>  
 Change portalRefreshToken and portalApiToken cookie  
  <span class="new">New Feature</span> <span class="service">Platform Support</span>  
  
# RELEASE VERSION: 27th October 2022

##### DeviceWorkerGW - WakeUp Call Failing <span class="ticket">IM-13001</span>  
 Fixed issue where wakeup call was failing  
  <span class="bug">Bug</span> <span class="service">Connector</span>  
  
##### OSD - 'main item' issued a different OrderId to the rest of the order meaning comments are not shown on OSD <span class="ticket">IM-12834</span>  
 OSD - Main item orderid different to the rest of the order meaning comments are not shown   
  <span class="bug">Bug</span> <span class="service">Order Status Display</span>  
  
##### TOP Total amount to pay not in local currency <span class="ticket">IM-12793</span>  
 Fixed issue in TOP total amount to pay was not in local currency  
  <span class="bug">Bug</span> <span class="service">TOP</span>  
  
##### POS Admin - Receipt Setup won't load if there is an empty field <span class="ticket">IM-12890</span>  
 Fixed issue where Receipt setup didn't load if there was an empty field  
  <span class="bug">Bug</span> <span class="service">Pos Admin</span>  
  
##### Public API - GRN close endpoint is returning a 400 <span class="ticket">IM-13002</span>  
 Fixed issue where GRN close endpoint was returning 400 in the Public api  
  <span class="bug">Bug</span> <span class="service">Public API</span>  
  
##### Public API - Kiosk import endpoint Duplicate Barcodes/ItemNos <span class="ticket">IM-12787</span>  
 Fixed issue with the Kiosk Import Item endpoint where it would fail to import further items if an error occurred.  
  <span class="bug">Bug</span> <span class="service">Item Management</span>  
  
# RELEASE VERSION: 17th October 2022

##### ms-kiosk - Update to dotnet 6.0 <span class="ticket">IM-10729</span>  
 Kiosk MS updated to dotnet 6.0  
  <span class="new">New Feature</span> <span class="service">TBC</span>  
  
##### gw-kiosk : Endpoint "Basket/createdetailed" Throw Error  <span class="ticket">IM-12554</span>  
 EndpointforCreateDetailedBasket  
  <span class="bug">Bug</span> <span class="service">All_GW's</span>  
  
##### CPN - App back button stops working after choosing Which PO/Transfer to Receive. <span class="ticket">IM-12773</span>  
 App back button stops working  
  <span class="bug">Bug</span> <span class="service">Store Companion</span>  
  
##### Old Sidebar Self Serve Admin (Imagine Portal Menu) <span class="ticket">IM-11522</span>  
 Fixed issue where Self Serve Admin and submenus redirects to the menu  
  <span class="bug">Bug</span> <span class="service">Portal</span>  
  
##### PromotionMS: Missing mapping from promotion -> promotionsimpleVM <span class="ticket">IM-12551</span>  
 promotionShowOnPOS  
  <span class="bug">Bug</span> <span class="service">Price and Promotion Engine</span>  
  
##### Old sidebar on Product Configurator (imagine Portal Menu)  <span class="ticket">IM-12816</span>  
 New sidebar in Product Configurator  
  <span class="bug">Bug</span> <span class="service">Portal</span> <span class="service">Product Configurator</span>  
  
##### Bin Icon Needs to be removed from Transfer In <span class="ticket">IM-11750</span>  
 Removed bin icon from Transfer In  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Stock Adjustment Created with default date <span class="ticket">IM-12570</span>  
 Fixed issue where stock adjustment were created with the default date ‘0001-01-01  
  <span class="bug">Bug</span> <span class="service">Public API</span> <span class="service">Stock Management</span>  
  
##### Item Creation - Success Message appears for Picture not deleted <span class="ticket">IM-11379</span>  
 Delete button is now disabled until an item is selected   
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Stock doesn't recognise the alternate barcodes  <span class="ticket">IM-12858</span>  
 Resolved issue where file import within Stocktake is not recognising alternate barcodes for items  
  <span class="bug">Bug</span> <span class="service">Inventory</span> <span class="service">Stock Management</span>  
  
##### Delete a Promotion in PPE <span class="ticket">IM-12224</span>  
 Soft delete can now be performed on PPE Promotion  
  <span class="new">New Feature</span> <span class="service">Price and Promotion Engine</span>  
  
##### Identity - Tenant Deletion exclude inactive tenants <span class="ticket">IM-12201</span>  
 Fixed issue where inactive tenants are notified that their tenant is not being actively used  
  <span class="new">New Feature</span> <span class="service">Identity</span>  
  
##### OOP S2: SS Admin setting for "Disable SCO when out of paper" <span class="ticket">IM-11708</span>  
 Admin can now disable Sco printer when out of paper  
  <span class="new">New Feature</span> <span class="service">Self Serve Admin</span>  
  
##### OOP S1.5: Implement the PaperStatus() value <span class="ticket">IM-11913</span>  
 PaperStatus value now stored to local POS storage  
  <span class="new">New Feature</span> <span class="service">Connector</span>  
  
##### ANL - S0.5 - Configure Row Limits for Analyses <span class="ticket">IM-12759</span>  
 Configure Row Limits for Analyses  
  <span class="new">New Feature</span> <span class="service">Analysis</span> <span class="service">Portal</span>  
  
##### SCO - update translations <span class="ticket">IM-12434</span>  
 SCO Translations   
  <span class="new">New Feature</span> <span class="service">SCO</span>  
  
##### Add ids to plus/minus btns in selfserve <span class="ticket">IM-12712</span>  
 ID attributes not working on self serve app and It`s been reverted back to previous version  
  <span class="debt">Technical Debt</span> <span class="service">SelfServe Components</span>  
  
# RELEASE VERSION: 13th October 2022

##### Update Connector Compose variables <span class="ticket">IM-9572</span>  
 Connector compose variables updated  
  <span class="new">New Feature</span> <span class="service">Platform Admin</span>  
  
# RELEASE VERSION: 11th October 2022

##### Public API - GET StockTakeHeaders returning 415 error <span class="ticket">IM-12909</span>  
 Fixed issue where PublicAPI GET StockTakeHeaders returned 415 error  
  
 <div class="breaking-change"><p>This change is made on a new version of the API endpoint, the current version will be deprecated 1 year from the release date above, for more information on the request/response models please refer to the <a href="https://publicapi.k3imagine.com/swagger/index.html" target="_blank">swagger documentation</a></p></div> 
<span class="bug">Bug</span> <span class="service">Public API</span>  
  
# RELEASE VERSION: 7th October 2022

##### Connector suddenly gone from admin/tenant <span class="ticket">IM-12874</span>  
 Resolved issue where connector details removed when adding a new connector  
  <span class="bug">Bug</span> <span class="service">Connector</span>  
  
# RELEASE VERSION: 6th October 2022

##### Companion: Issues with PO and stocktake <span class="ticket">IM-12893</span>  
 Fixed issue where could not load scheduled stock take and submit a PO in Companion  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
# RELEASE VERSION: 5th October 2022

##### DSW IDM: Reset Delta from Asset execution <span class="ticket">IM-11431</span>  
 Reset Delta is available in IDM Delete Deletion Method   
  <span class="new">New Feature</span> <span class="service">DSW-Asset: IDM</span>  
  
##### DSW - IDM Add Where Clause <span class="ticket">IM-11068</span>  
 Add 'Where' clause  
  <span class="new">New Feature</span> <span class="service">DSW-Asset: IDM</span>  
  
##### BI GW - 404 Not Found when calling Vendors <span class="ticket">IM-12885</span>  
 Fixed issue where Vendor endpoint not found on the gateway  
  <span class="bug">Bug</span> <span class="service">BI Gateway</span>  
  
# RELEASE VERSION: 4th October 2022

##### Public API - CurrencyCode needs adding as required field for creating GRN <span class="ticket">IM-12479</span>  
 CurrencyCode now required field via API, opening created GRN in UI now shows items as currency set.   
<span class="bug">Bug</span> <span class="service">Public API</span>  
  
# RELEASE VERSION: 3rd October 2022

##### Bug with cancel warning on item creation <span class="ticket">IM-10102</span>  
 Removed the toast when cancelling the item creation  
  <span class="bug">Bug</span> <span class="service">Backoffice</span>  
  
##### Port AdminUI(Expansions) to Angular 12 <span class="ticket">IM-11201</span>  
 Port AdminUI(Expansions) to Angular 12  
  <span class="debt">Technical Debt</span>  
  
##### ms-micros - Update to dotnet 6.0 <span class="ticket">IM-10730</span>  
 ms-micros - Update to dotnet 6.0  
  <span class="new">New Feature</span> <span class="service">TBC</span>  
  
##### PoS Admin - Expand expansions to include all Shop Features <span class="ticket">IM-12529</span>  
 Added all shop features in POS Admin  
  <span class="new">New Feature</span> <span class="service">Pos Admin</span>  
  
##### POM - S0 VendorMS <span class="ticket">IM-12064</span>  
 n/a  
  <span class="new">New Feature</span> <span class="service">Item Management</span>  
  
##### Master item sorting <span class="ticket">IM-10526</span>  
 Master item sort  
  <span class="new">New Feature</span> <span class="service">Search</span>  
  
##### POM - S0.6 Microservices for vendors <span class="ticket">IM-12425</span>  
 Remove Vendor models and functionality in ItemMS and StockMS  
  <span class="new">New Feature</span> <span class="service">Item Management</span>  
  
##### POM - S0.5 <span class="ticket">IM-12079</span>  
 Point the Gateways to the new VendorMS   
  <span class="new">New Feature</span> <span class="service">Item Management</span>  
  
##### ANL 3.4 Item Analysis MS SQL query <span class="ticket">IM-12653</span>  
 Created new endpoints and query that would produce the expected Dataset for the UI  
  <span class="new">New Feature</span> <span class="service">Analysis</span>  
  
##### CPN - Remove Word 'Test' from Expected Items lines. <span class="ticket">IM-12758</span>  
 CPN - Remove Word 'Test' from Expected Items lines  
  <span class="bug">Bug</span> <span class="service">Store Companion</span>  
  
##### CPN - Items with long descriptions do not format properly in companion for receipts. <span class="ticket">IM-12700</span>  
 Fixed issue where Items with long names did not format properly when receiving a PO in Companion  
  <span class="bug">Bug</span> <span class="service">Store Companion</span>  
  
##### NumgenMS: EAN validation <span class="ticket">IM-12689</span>  
 Better suggestion on the valid checksum message  
  <span class="bug">Bug</span> <span class="service">NumberGeneration</span>  
  
##### SCO - 500 error when processing a payment <span class="ticket">IM-12602</span>  
 SCO 500 payment error fixed on test environment.  
  <span class="bug">Bug</span> <span class="service">SCO</span>  
  
##### CPN - Consolidate Scanned Quantities in Receive PO <span class="ticket">IM-12698</span>  
 Fixed issue where scanning the same barcode to receive items against a PO created different entries for the same item  
  <span class="bug">Bug</span> <span class="service">Store Companion</span>  
  
##### PO will not accept new prices <span class="ticket">IM-12780</span>  
 PO will not accept new prices  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### ANL - Sales Analysis {Sales (Beta)} over reporting transaction quantities, sales, tax, profit, cost. <span class="ticket">IM-12817</span>  
 Over Reporting of Sales Fixed  
  <span class="bug">Bug</span> <span class="service">Analysis</span>  
  
##### Public API - Upsert Master Items Query paramater for Vendor/Item Groups <span class="ticket">IM-11974</span>  
 Added new endpoints to API to check if Item Hierarchy or Vendor already exists, returns Boolean value.  
  <span class="new">New Feature</span> <span class="service">Public API</span>  
  
##### Public API refresh token flow <span class="ticket">IM-11698</span>  
 Fixed Integration identity so that the public API refresh token is only generated if this is explicitly requested.  
  <span class="debt">Technical Debt</span> <span class="service">Public API</span>  
  
##### MS-NumGen: Update .NET 6 <span class="ticket">IM-12687</span>  
 MS-NumGen: Update .NET 6  
  <span class="debt">Technical Debt</span> <span class="service">NumberGeneration</span>  
  
##### MS-Analysis: Some SQL errors found <span class="ticket">IM-12696</span>  
 Fixed issue where leaving DateTime empty was giving error  
  <span class="bug">Bug</span> <span class="service">Analysis</span>  
  
##### ANL - (Sales) Persist Error/Info Messages <span class="ticket">IM-12677</span>  
 Error Messages persist until acknowledgement.  
  <span class="bug">Bug</span> <span class="service">Analysis</span>  
  
##### Weighted Average Cost Calculated Incorrectly <span class="ticket">IM-12703</span>  
 Weighted Average Cost Calculated Incorrectly  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Inventory - Custom Attributes of type Text are showing as item-creation.attributes-tab.undefined Data Type <span class="ticket">IM-12693</span>  
 Fixed issue where Custom Attributes of type Text were showing as item-creation.attributes  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Figures Tab on Item Card Not Showing Cost Price and On-Hand Value <span class="ticket">IM-12706</span>  
 Figures Tab on Item Card Not Showing Cost Price and On-Hand Value  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### PO and Vendor Return Order No should be unique <span class="ticket">IM-12757</span>  
 PO and Vendor Return Order now checked for uniqueness   
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Item Import UI - Error on uploading an file for the 2nd time <span class="ticket">IM-10924</span>  
 Fixed issue when uploading a file for the 2nd time in item import  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### 'From Shop'  field in Item Movements for 'Vendor Return' not populated. <span class="ticket">IM-10484</span>  
 Fixed issue where 'from shop' was not shown in the vendor return  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Inventory - Custom Attributes give a 500 error on Name <span class="ticket">IM-11742</span>  
 Added a proper error message when entering a CA name longer than 20 characters  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### PO/GRN - Different Print Label Icons <span class="ticket">IM-9739</span>  
 Fixed issue where different icons from print label were shown in PO and in GRN  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Inventory - various bug fixes in Custom Attributes (Make the Type column show the types name) <span class="ticket">IM-12015</span>  
 Show the type of Custom Attributes instead of the number  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Card transaction in progress flag stuck on true <span class="ticket">IM-12648</span>  
 Bug Fix -Card transaction in progress flag stuck on true  
  <span class="bug">Bug</span> <span class="service">POS</span> <span class="service">Transaction</span>  
  
##### Incorrect Cost Prices Showing on Item Card Summary and Matrix Tabs <span class="ticket">IM-12705</span>  
 Incorrect Cost Prices Showing on Item Card Summary and Matrix Tabs  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Public API: Sales itemgroup mapping <span class="ticket">IM-12679</span>  
 Fixed issue where creating a transaction through the sales endpoint without the itemgroup returned a transaction with itemgroup = 0  
  <span class="bug">Bug</span> <span class="service">Public API</span>  
  
##### GET Vendor via Public API  <span class="ticket">IM-12604</span>  
 getVendorAPI  
  <span class="bug">Bug</span> <span class="service">Public API</span>  
  
##### POST Vendor via Public API Not Generating VendorNo <span class="ticket">IM-12603</span>  
 pAPIGenerateVendorNo  
  <span class="bug">Bug</span> <span class="service">Public API</span>  
  
##### Public API - MasterItemId needs adding to the Sales endpoint for reporting <span class="ticket">IM-12607</span>  
 MasterItemId_added_EndpointSales  
  <span class="bug">Bug</span> <span class="service">Public API</span>  
  
##### Inventory: Issues erasing search <span class="ticket">IM-11440</span>  
 Fixed issue where redoing a search after clicking the backspace button causes the result list to remain and displays [object object]  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Inventory -> Logs -> Clear Filters Button is not Working <span class="ticket">IM-11650</span>  
 Filter button is now working in Inventory Logs  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Public API - Stocktake count POST error <span class="ticket">IM-12867</span>  
 PublicAPI-StockTakeCountPOST  
  <span class="bug">Bug</span> <span class="service">Public API</span>  
  
##### InternetStores - New Stocktakes have no items added to them <span class="ticket">IM-12835</span>  
 Fixed issue where creating a full stocktake returned a 524 error  
  <span class="bug">Bug</span> <span class="service">Inventory</span> <span class="service">Stock Management</span>  
  
##### gw-publicapi - Update to dotnet 6.0 <span class="ticket">IM-10690</span>  
 Public API GW updated to .net 6  
  <span class="new">New Feature</span> <span class="service">TBC</span>  
  
# RELEASE VERSION: 29th September 2022

##### NumgenMS: Fix GetNext() <span class="ticket">IM-12646</span>  
 Fixed issue where NextNumber could return an already used number  
  <span class="bug">Bug</span> <span class="service">NumberGeneration</span>  
  
##### Delete Return to Vendor:  Issue on the pop up text <span class="ticket">IM-10376</span>  
 Fixed text to delete return to vendor  
  <span class="bug">Bug</span> <span class="service">RBO</span>  
  
# RELEASE VERSION: 26th September 2022

##### Payment Breakdown returning a 500 in some cases. <span class="ticket">IM-12853</span>  
 Payment Breakdown OK  
  <span class="debt">Technical Debt</span> <span class="service">SelfServe Components</span>  
  
# RELEASE VERSION: 25th September 2022

##### Additional Changes to the Analysis UI <span class="ticket">IM-12471</span>  
 Additional Changes to the Analysis UI  
  <span class="debt">Technical Debt</span>  
  
##### Port AdminUI(Button Management) to Angular 12 <span class="ticket">IM-11200</span>  
 Port AdminUI(Button Management) to Angular 12  
  <span class="debt">Technical Debt</span> <span class="service">Pos Admin</span>  
  
##### Customer Display: POS Admin is missing display selector <span class="ticket">IM-11942</span>  
 Added display selector in POS Admin  
  <span class="bug">Bug</span> <span class="service">Pos Admin</span>  
  
##### Port AdminUI(Receipt Setup) to Angular 12 <span class="ticket">IM-11197</span>  
 Port Receipt Setup to Angular 12  
  <span class="debt">Technical Debt</span>  
  
##### Add Totals to Vendor Return Document <span class="ticket">IM-11919</span>  
 Inventory - Vendor Return - Cost totals now show correctly   
  <span class="new">New Feature</span> <span class="service">Inventory</span>  
  
##### PoS Admin - Button Management requires dxi-items to be removed and added <span class="ticket">IM-12345</span>  
 POS Admin - Button management   
  <span class="new">New Feature</span> <span class="service">Backoffice</span> <span class="service">Pos Admin</span>  
  
##### Port AdminUI - Shop Setup - Gift & Voucher Setup <span class="ticket">IM-11452</span>  
 Port AdminUI -> Shop Setup to POS Admin  
  <span class="debt">Technical Debt</span> <span class="service">Pos Admin</span>  
  
##### Receipt setup: character count on Header and Footer <span class="ticket">IM-12600</span>  
 Show character count on header and footer in the receipt setup  
  <span class="new">New Feature</span> <span class="service">Pos Admin</span>  
  
##### POS UI version number <span class="ticket">IM-12227</span>  
 Removed -dev suffix from the POS version  
  <span class="debt">Technical Debt</span>  
  
##### G00090 - S4 -Using Item Info's at POS <span class="ticket">IM-12372</span>  
 Using Item info at POS  
  <span class="new">New Feature</span> <span class="service">Backoffice</span>  
  
##### G00090 - S3 - Ordering Item Infos <span class="ticket">IM-12371</span>  
 Ordering Item info should persist  
  <span class="new">New Feature</span> <span class="service">Backoffice</span>  
  
##### COM - S2 - Customer Order to Pick, Pack and Dispatch <span class="ticket">IM-11518</span>  
 Describes the functionality pick, pack and dispatch the order.  
  <span class="new">New Feature</span> <span class="service">POS</span>  
  
##### COM - S3 - Automated API Tests <span class="ticket">IM-11830</span>  
 Postman suite that covers CustomerOrder tests  
  <span class="new">New Feature</span> <span class="service">Web Order</span>  
  
##### COM - S1 - Modify Customer Order List at POS <span class="ticket">IM-11516</span>  
 Added detailed summary information for all non-closed customer orders  
  <span class="new">New Feature</span> <span class="service">POS</span>  
  
##### POS: Issues on E-mail receipt copy <span class="ticket">IM-10503</span>  
 Added validation in the email receipt copy  
  <span class="bug">Bug</span> <span class="service">POS</span>  
  
##### POSUI - Discount Reason Text overlaps with ReasonId <span class="ticket">IM-10971</span>  
 Fixed issue where discount code overlaps the discount reason text in POS  
  <span class="bug">Bug</span> <span class="service">POS</span>  
  
##### Keyboard not showing correctly for input type email <span class="ticket">IM-10796</span>  
 keyboard_email_ok  
  <span class="bug">Bug</span> <span class="service">POS</span>  
  
##### PoS - the shift/caps lock key is not obvious on the on-screen keyboard <span class="ticket">IM-11206</span>  
 Added a shift key when adding a customer in POS  
  <span class="bug">Bug</span> <span class="service">POS</span>  
  
# RELEASE VERSION: 20th September 2022

##### New Stocktakes have no items added to them <span class="ticket">IM-12835</span>  
 Hotfix stock service, stock take creation timing out when tenant contains a large amount of items  
  <span class="bug">Bug</span> <span class="service">Stock Management</span> <span class="service">Inventory</span>  

# RELEASE VERSION: 14th September 2022

##### TOP Going to wrong table, Not Clearing Cache <span class="ticket">IM-12697</span>  
 Fixed issue the order went to the wrong table in TOP  
  <span class="bug">Bug</span> <span class="service">TOP</span>  
  
# RELEASE VERSION: 13th September 2022

##### Kiosk Basket Issues <span class="ticket">IM-12763</span>  
 Fixed issue when adding items with no modifies and with modifies  
  <span class="bug">Bug</span> <span class="service">Kiosk</span>  
  
# RELEASE VERSION: 8th September 2022

##### To assist with diagnosing problems with the Kiosk UI we want to add Log Rocket <span class="ticket">IM-12756</span>  
 Log Rocket added to Kiosk UI  
  <span class="debt">Technical Debt</span>  
  
# RELEASE VERSION: 23rd August 2022

##### Only 1 action is logged while changing available loyalty points and clearing quarantine <span class="ticket">IM-10654</span>  
 Logged 2 actions when changing available loyalty points  
  <span class="bug">Bug</span> <span class="service">Customer</span>  
  
##### Clearing loyalty points from quarantine <span class="ticket">IM-12597</span>  
 Fixed issue when saving loyalty points  
  <span class="bug">Bug</span> <span class="service">Customer</span>  
  
# RELEASE VERSION: 18th August 2022

##### Collection 3 of Changes to ANL- S1 - Sales Analysis (IM-11573) <span class="ticket">IM-12498</span>  
 A collection of changes to the UI with regard to the saving and recalling of reports.  
  <span class="bug">Bug</span> <span class="service">Analysis</span>  
  
##### Collection 2 of Changes to ANL- S1 - Sales Analysis (IM-11573) <span class="ticket">IM-12477</span>  
 Fixed issues in the UI of Sales Analysis  
  <span class="bug">Bug</span> <span class="service">Analysis</span>  
  
##### A collection of Issues/bugs/changes to IM-11573 (ANL - S1 - Sales Analysis) <span class="ticket">IM-12437</span>  
 Fixed some issues on the ticket IM-11573  
  <span class="bug">Bug</span> <span class="service">RBO</span>  
  
##### ANL – S2 - Recalling and Saving Analysis Reports <span class="ticket">IM-11661</span>  
 Add the ability to save analysis reports  
  <span class="new">New Feature</span> <span class="service">Analysis</span>  
  
##### Collection 4 of Changes to ANL- S1 - Sales Analysis (IM-11573) <span class="ticket">IM-12543</span>  
 A collection of changes to the UI with regard to the saving and recalling of reports.  
  <span class="bug">Bug</span> <span class="service">Analysis</span>  
  
##### ANL - S1.5 - Sales Analysis UI <span class="ticket">IM-11992</span>  
 UI for Sales Report  
  <span class="new">New Feature</span> <span class="service">Analysis</span>  
  
# RELEASE VERSION: 17th August 2022

##### Collection 6 of Changes to ANL- S1 - Sales Analysis (IM-11573) <span class="ticket">IM-12614</span>  
 A collection of changes to the UI with regard to the saving and recalling of reports.  
  <span class="bug">Bug</span> <span class="service">Analysis</span>  
  
# RELEASE VERSION: 2nd August 2022

##### Public API - CurrencyCode needs adding as required field for creating GRN <span class="ticket">IM-12479</span>  
 CurrencyCode now required field via API, opening created GRN in UI now shows items as currency set.  
  <span class="bug">Bug</span> <span class="service">Public API</span>  
  
# RELEASE VERSION: 26th July 2022

##### Intersolve: Card details are not printed in the receipt <span class="ticket">IM-11729</span>  
 Fixed issue where card details were not printed in the receipt  
  <span class="bug">Bug</span> <span class="service">IntersolveUI</span>  
  
##### Item Import Vendor Xref duplicate <span class="ticket">IM-12450</span>  
 Fix implemented to stop duplicate key entries being created for item and vendor  
  <span class="bug">Bug</span> <span class="service">Item Management</span>  
  
##### Change button to not be enabled by default in Trimit <span class="ticket">IM-10981</span>  
 Trimit - Not a member by default   
  <span class="new">New Feature</span> <span class="service">POS</span>  
  
##### Kiosk UI - Bulgarian language support <span class="ticket">IM-12399</span>  
 Add Bulgarian language support for Ikea  
  <span class="new">New Feature</span> <span class="service">Kiosk</span>  
  
##### Stock movement event <span class="ticket">IM-12524</span>  
 n/a  
  <span class="debt">Technical Debt</span>  
  
# RELEASE VERSION: 14th July 2022

##### Customer [Company]: Some fields are not validated <span class="ticket">IM-9115</span>  
 Added validation on Add Company  
  <span class="bug">Bug</span> <span class="service">Customer</span>  
  
##### SimplePOS TOP POP itemLine issues <span class="ticket">IM-12040</span>  
 Item Line issue for all Self serve fixed  
  <span class="bug">Bug</span> <span class="service">SelfServe Components</span>  
  
##### BasketMS: Fragile implementation - Using app can get into "limbo" mode in certain circumstances <span class="ticket">IM-11673</span>  
 Resolved issue where BasketMS could get in limbo if connection lost before sale completed  
  <span class="bug">Bug</span> <span class="service">Kiosk</span> <span class="service">POP</span> <span class="service">SelfServe Components</span> <span class="service">Simple POS</span> <span class="service">TOP</span>  
  
##### TOP/POP -> Update Order button is greyed out after editing the Order <span class="ticket">IM-12039</span>  
 TOP/POP update order button bug  
  <span class="bug">Bug</span> <span class="service">POP</span> <span class="service">TOP</span>  
  
##### Blank text field in receipt text is not showing <span class="ticket">IM-12028</span>  
 Blank text fields within receipt setup now reflected on receipt preview and applied to printed receipt.  
  <span class="bug">Bug</span> <span class="service">Admin</span>  
  
##### Unable to add new custom payment type <span class="ticket">IM-11025</span>  
 Fixed issue where we could not save new payment type in Backoffice  
  <span class="bug">Bug</span> <span class="service">Backoffice</span>  
  
##### Customer - cannot save Currency to an existing customer <span class="ticket">IM-11470</span>  
 Fixed issue where we could not save currency to an existing customer  
  <span class="bug">Bug</span> <span class="service">Customer</span>  
  
##### Back-Office Label Template - Required Field Toaster Change <span class="ticket">IM-9738</span>  
 Backoffice Label Template toaster change  
  <span class="bug">Bug</span> <span class="service">Backoffice</span>  
  
##### Custom payment types not on cash statement. <span class="ticket">IM-9269</span>  
 custom_payment_cash_statements  
  <span class="bug">Bug</span> <span class="service">POS</span>  
  
##### Sales graph on the POS adding an additional 0 to the sales price <span class="ticket">IM-12036</span>  
 Bug Fix POS graph showing additional 0  
  <span class="bug">Bug</span> <span class="service">POS</span>  
  
# RELEASE VERSION: 12th July 2022

##### Integration MS: JSON payload not stored or retrieved after .Net upgrade <span class="ticket">IM-12368</span>  
 Fixed issue where json payload was not retrieved after .NET upgrade  
  <span class="bug">Bug</span> <span class="service">Integrations</span>  
  
# RELEASE VERSION: 27th June 2022

##### Public API - Master item Upsert <span class="ticket">IM-12400</span>  
 ItemNo now set to allow 20 characters  
  <span class="bug">Bug</span> <span class="service">Item Management</span> <span class="service">Public API</span>  
  
##### Item Management / Public API - CSV import validation <span class="ticket">IM-12213</span>  
 Uploading CSV with email parameter will send any error message with upload to address given  
  <span class="bug">Bug</span> <span class="service">Item Management</span> <span class="service">Public API</span>  
  
# RELEASE VERSION: 9th June 2022

##### Inventory - Tax Code not saving against Item Hierarchy <span class="ticket">IM-12398</span>  
 Fixed issue where  Tax Code was not saving against the Item Hierarchy  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
# RELEASE VERSION: 24th May 2022

##### MTD - time zones back from UTC cause incorrect dates in Submitted form <span class="ticket">IM-11884</span>  
 Fixed an issue where time zones less that UTC caused an issue with the incorrect date being submitted for transactions  
  <span class="bug">Bug</span> <span class="service">Making Tax Digital</span>  
  
# RELEASE VERSION: 19th May 2022

##### ms-shopify - Update to dotnet 5.0 <span class="ticket">IM-10755</span>  
 ms Shopify dotnet update 5.0  
  <span class="new">New Feature</span> <span class="service">TBC</span>  
  
##### Simple PoS - > Failed Transaction when using Virtual Connector to make Payment <span class="ticket">IM-11994</span>  
 Can now process payment successfully as the Virtual connection issue as been fixed  
  <span class="bug">Bug</span> <span class="service">SimplePOS</span>  
  
##### Import count list stocktake doesn't work <span class="ticket">IM-12343</span>  
 Stocktake - bug fix import count list   
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
# RELEASE VERSION: 16th May 2022

##### Integration API - Error 500 returned on gw-integration/api/v1.0/ItemHierarchys <span class="ticket">IM-12195</span>  
 Fixed issue where error 500 given when adding Item Hierarchy via Integration API  
  <span class="bug">Bug</span> <span class="service">Integrations</span>  
  
# RELEASE VERSION: 12th May 2022

##### PoS - I cannot enter a phone number in the E168 format with the on-screen keyboard <span class="ticket">IM-11207</span>  
 POS/Customer setting to allow placeholder of + to be added to customer phone number for use with cashier entered country codes  
  <span class="bug">Bug</span> <span class="service">POS</span>  
  
##### Item List - Printing barcodes - ValidateBarcode is null <span class="ticket">IM-12214</span>  
 Fixed validation issue to print a label  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Stock MS - aggregate purchase order lines  <span class="ticket">IM-12220</span>  
 Fixed issue where could not send 2 lines on a PO from the same item  
  <span class="bug">Bug</span> <span class="service">Stock Management</span>  
  
# RELEASE VERSION: 10th May 2022

##### ISV - S9.0 Improvements request by Intersolve <span class="ticket">IM-11846</span>  
 Improvements request by Intersolve  
  <span class="new">New Feature</span> <span class="service">IntersolveGW</span> <span class="service">IntersolveMS</span> <span class="service">POS</span> <span class="service">POS Gateway</span>  
  
##### GRN: Open existing GRN is not showing details  <span class="ticket">IM-12063</span>  
 Fixed issue where GRN details were not displayed  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Can't save an Item with a ItemTag <span class="ticket">IM-12199</span>  
 Fixed issue where editing an item that has a tag triggered a 500 error code  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Stock Movements - 0 Quantity <span class="ticket">IM-9845</span>  
 Fixed issue where a movement with quantity 0 was created  
  <span class="bug">Bug</span> <span class="service">Stock Management</span>  
  
##### When creating a Gift certificate when returning an item two receipts are printed out. <span class="ticket">IM-10865</span>  
 Fixed issue where using gift card to pay a return 2 gift certificates were printed  
  <span class="bug">Bug</span> <span class="service">POS</span>  
  
##### Inventory - Discount labels not recognised for 0 to 9 and 100% discounts <span class="ticket">IM-11425</span>  
 Fixed issue with Discount Labels not recognising integers 1 - 9 and 100  
  <span class="bug">Bug</span> <span class="service">Inventory</span> <span class="service">POS</span>  
  
# RELEASE VERSION: 4th May 2022

##### USG - S1 - Shop Groups <span class="ticket">IM-11770</span>  
 Added User shop groups under Portal Menu  
  <span class="new">New Feature</span> <span class="service">Portal</span>  
  
# RELEASE VERSION: 27th April 2022

##### Public API- ItemImport broken endpoint <span class="ticket">IM-11856</span>  
 Fixed issue with uploading file to itemImport endpoint  
  <span class="bug">Bug</span> <span class="service">Public API</span>  
  
##### ItemMS: itemImport is not working <span class="ticket">IM-11959</span>  
 Fixed issue where importing items via excel file and specifying shopId caused GRN generation to fail  
  <span class="bug">Bug</span> <span class="service">Item Management</span>  
  
##### Inventory - refreshing the Stock Lookup screen causes a 400 error <span class="ticket">IM-11372</span>  
 Labels - Inventory Stock Lookup Adjustment Refresh Not Showing Error  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### PublicApi - Imported items are not showing in Inventory <span class="ticket">IM-12054</span>  
 Resolved issue where items imported through the Public API were not showing in the Inventory.  
  <span class="bug">Bug</span> <span class="service">Item Management</span> <span class="service">Public API</span>  
  
##### Public API - CSV import  <span class="ticket">IM-12018</span>  
 Fixed issue where CSV Imports were not working  
  <span class="bug">Bug</span> <span class="service">Item Management</span> <span class="service">Public API</span>  
  
##### G00057 - S5 - Offline Stock - Other Offline Actions <span class="ticket">IM-8652</span>  
 Added the possibility to transfer offline stock to another stock store location  
  <span class="new">New Feature</span> <span class="service">RBO</span>  
  
##### COM - S0 - Web Order API Enhancements <span class="ticket">IM-11538</span>  
 Enhancement on the web order API to support picking functionality  
  <span class="new">New Feature</span> <span class="service">POS</span>  
  
##### COM - S0.5 - Web Order Configuration <span class="ticket">IM-11540</span>  
 Added Customer Orders page and holding period set to 2 in POSAdmin  
  <span class="new">New Feature</span> <span class="service">POS</span>  
  
##### Customer - Unable to distinguish between customers with the same name <span class="ticket">IM-11910</span>  
 Customer - Groups now shows customer unique ID.  
  <span class="new">New Feature</span> <span class="service">Customer</span>  
  
##### Default Currency to Shop Currency on Goods Receipt <span class="ticket">IM-11807</span>  
 Default Currency to Shop Currency on Goods Receipt  
  <span class="new">New Feature</span> <span class="service">Inventory</span>  
  
##### CustomerGW Dotnet 6 and C#10 <span class="ticket">IM-11604</span>  
 CustomerGW Dotnet 6 update  
  <span class="debt">Technical Debt</span>  
  
##### DSW UI Upgrade Angular Version <span class="ticket">IM-9358</span>  
 The UI upgraded to Angular 9  
  <span class="debt">Technical Debt</span>  
  
# RELEASE VERSION: 22nd April 2022

##### SCO - fluctuating properties are being added/updated wrong <span class="ticket">IM-12058</span>  
 Fixed issue where fluctuating properties were not saved correctly to the database  
  <span class="bug">Bug</span> <span class="service">Public API</span> <span class="service">SCO</span>  
  
# RELEASE VERSION: 20th April 2022

##### Profit Margin not available on item creation <span class="ticket">IM-9504</span>  
 Inventory - Item creation now shows profit margin on item creation  
  <span class="bug">Bug</span> <span class="service">Backoffice</span>  
  
##### Inventory - prevent minus quantities on Vendor Return <span class="ticket">IM-11371</span>  
 Inventory - Prevention of minus quantities.  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### OSD - Orders with no Display Category are being marked as Done immediately <span class="ticket">IM-10658</span>  
 Fixed issue where order with no display category were not shown in the Order board  
  <span class="bug">Bug</span> <span class="service">Order Ready Board</span> <span class="service">Order Status Display</span>  
  
##### G00090 - S1.1 - Creating Item Infos does not respect Bool Custom Attribute types <span class="ticket">IM-10617</span>  
 Bug Fix - Item Information shows correct custom attributes  
  <span class="bug">Bug</span> <span class="service">Backoffice</span>  
  
##### Payment method CARD in the financial report <span class="ticket">IM-11839</span>  
 Analysis - Bug Fix for cancelled payment types  
  <span class="bug">Bug</span> <span class="service">Analysis</span> <span class="service">Reports</span>  
  
##### Item Creation - not able to edit Variants  <span class="ticket">IM-12029</span>  
 Fixed issue where could not edit variants in Item creation  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### token not refreshing in analysis module <span class="ticket">IM-11696</span>  
 Analysis - Bug Fix module not refresh correctly  
  <span class="bug">Bug</span> <span class="service">Analysis</span>  
  
##### Customer Display: Showing item image <span class="ticket">IM-11940</span>  
 Customer Display now searches variant for image first, then MasterItem and if none found will display no image  
  <span class="new">New Feature</span> <span class="service">POS</span>  
  
##### Inventory - alternative thumb nails for Item List and other places <span class="ticket">IM-11829</span>  
 Item images now duplicated to variants from MasterItem if empty and vice versa, they are not updated unless empty.  
  <span class="new">New Feature</span> <span class="service">Inventory</span> <span class="service">Product Configurator</span>  
  
##### Discount Label – Discount Price not Printed Correctly if the Decimal Place Ends with a Zero <span class="ticket">IM-9382</span>  
 Labels - Dscounted price is printed correctly with decimal places on labels   
  <span class="new">New Feature</span> <span class="service">Inventory</span> <span class="service">Item Management</span>  
  
##### GCS - S1 - Create global setting 'Allow Price Embedded Barcode at POS' <span class="ticket">IM-11803</span>  
 Option added to enable or disable 18 digit price embedded barcode function. By default this option is disabled. If required the option should be be enabled within the UI. There has been no functional change to how 18 digit barcodes are handled  
  <span class="new">New Feature</span> <span class="service">Portal</span>  
  
##### Add currency code when entering cash statement values <span class="ticket">IM-11806</span>  
 Added currency code label on the soft keyboard when entering cash statement values  
  <span class="new">New Feature</span> <span class="service">POS</span>  
  
##### DSW HttpCaller: Importing API Auth - Duplication Issue <span class="ticket">IM-8978</span>  
 N/A  
  <span class="bug">Bug</span> <span class="service">DSW: Copy Flow</span>  
  
##### DSW: Email - Send Payload UX <span class="ticket">IM-10534</span>  
 Email - Send Payload UX  
  <span class="new">New Feature</span> <span class="service">DSW-Asset: Email</span>  
  
##### DSW On Prem Agent - Deleting an Agent Tied to Connections 2 <span class="ticket">IM-10407</span>  
 DSW - Deleting an Agent tied to connections   
  <span class="bug">Bug</span> <span class="service">DSW: On-Prem Agent</span>  
  
# RELEASE VERSION: 5th April 2022

##### TOP/POP - Item Modifier Minimum Selection <span class="ticket">IM-9078</span>  
 It is not possible to add an item to the basket that has mandatory modifier requirement without making a selection.  
  <span class="bug">Bug</span> <span class="service">POP</span> <span class="service">TOP</span>  
  
##### Using an iPad I can't scroll the new composer tile modal <span class="ticket">IM-7697</span>  
 Visual Composer - iPad can now see the add button (save)  
  <span class="bug">Bug</span> <span class="service">Self Serve</span> <span class="service">Visual Composer</span>  
  
##### Using an Ipad I can't edit a Composer Tile in Composer Group <span class="ticket">IM-7696</span>  
 Visual Composer - Can now edit the composer tile on iPad  
  <span class="bug">Bug</span> <span class="service">Self Serve</span> <span class="service">Visual Composer</span>  
  
##### Clerks - Local Shop Clerk setting not saved in UI. <span class="ticket">IM-9465</span>  
 Fixed issue where local shop clerk was not saved  
  <span class="bug">Bug</span> <span class="service">Backoffice</span>  
  
##### Total On Hand in Item summary screen incorrect <span class="ticket">IM-11716</span>  
 Inventory - Item List Total   
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Order Status Display print showing wrong order number <span class="ticket">IM-9613</span>  
 Order Status Display - now showing the correct order number   
  <span class="bug">Bug</span> <span class="service">Order Status Display</span>  
  
##### Item Price showing Incorrectly on TOP and POP <span class="ticket">IM-11918</span>  
 TOP and POP prices issue fixed and are now displaying correctly as Sales Price  
  <span class="bug">Bug</span> <span class="service">POP</span> <span class="service">TOP</span>  
  
##### Registered 3 times "Change" on receipt <span class="ticket">IM-11895</span>  
 POS - Bug fixed for POS payments   
  <span class="bug">Bug</span> <span class="service">POS</span>  
  
##### Customer - Unable to clear dropdown boxes <span class="ticket">IM-11909</span>  
 Customer - Clear language and Company box of selected incorrectly.  
  <span class="bug">Bug</span> <span class="service">Customer</span>  
  
##### Customer - Missing languages in dropdown <span class="ticket">IM-11908</span>  
 Customer - Creation now showing more languages   
  <span class="bug">Bug</span> <span class="service">Customer</span>  
  
##### Version number missing on POS <span class="ticket">IM-10375</span>  
 POS - Bug fixed version number now showing  
  <span class="bug">Bug</span> <span class="service">POS</span>  
  
##### PoS - Over payment on returns with split payments <span class="ticket">IM-11548</span>  
 Fixed issue where POS accepted return a value greater than the item price on split payments  
  <span class="bug">Bug</span> <span class="service">POS</span>  
  
##### POSUI - PPE not working after a refund <span class="ticket">IM-11805</span>  
 POS - PPE now working correctly after a refund.  
  <span class="bug">Bug</span> <span class="service">POS</span> <span class="service">Price and Promotion Engine</span>  
  
##### Issue when using Account Payments <span class="ticket">IM-8907</span>  
 Accounts Payments - Changes to not show in the POS Chart  
  <span class="bug">Bug</span> <span class="service">POS</span> <span class="service">Reports</span>  
  
##### Customer Display: variant text displayed wrong <span class="ticket">IM-11939</span>  
 Customer Display - fixed displayed variant text   
  <span class="bug">Bug</span> <span class="service">POS</span>  
  
# RELEASE VERSION: 4th April 2022

##### OSD SQL Deadlocks <span class="ticket">IM-12008</span>  
 Removed retry logic from the order status display UI ,Changed orb ms GET request to filter out done orders, this is used by the Order Ready Board and added logrocket to order status display  
  <span class="debt">Technical Debt</span>  
  
# RELEASE VERSION: 31st March 2022

##### Top/Pop/Kiosk Pricing not correct if additional qty added to a basket item <span class="ticket">IM-11991</span>  
 Top/Pop and Kiosk pricing now showing correctly when additional quantity is added to the basket  
  <span class="bug">Bug</span> <span class="service">Kiosk</span> <span class="service">POP</span> <span class="service">TOP</span>  
  
##### Simple POS -> PPE not showing on the UI <span class="ticket">IM-11838</span>  
 PPE discount not showing on Simple PoS was fixed so now User can see the amount of discount they on a particular item  
  <span class="bug">Bug</span> <span class="service">Simple POS</span>  
  
##### Kiosk - Printed receipt not correct  <span class="ticket">IM-11949</span>  
 Fixed issue where the total price on the receipt was not correct  
  <span class="bug">Bug</span> <span class="service">Kiosk</span>  
  
##### Inventory - PO, GRN Vendor Returns and Transfers: Issue on alert in the dropdowns <span class="ticket">IM-11464</span>  
 Inventory - Alerts on mandatory fields not hiding the first selection in the dropdowns  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
# RELEASE VERSION: 28th March 2022

##### Order status display multi click <span class="ticket">IM-11960</span>  
 Move Order button disabled after click until request completed to stop multiple clicks registering by mistake  
  <span class="bug">Bug</span> <span class="service">Order Status Display</span>  
  
# RELEASE VERSION: 25th March 2022

##### Item Ms simple/itemid endpoint not returning fluctuating properties  <span class="ticket">IM-11975</span>  
 Fixed an issue with Item management which caused the SCO to send Bottle deposit item as a regular item instead of a condiment  
  <span class="bug">Bug</span> <span class="service">Item Management</span>  
  
##### Public API - Order endpoint time out <span class="ticket">IM-11892</span>  
 Fixed an issue causing the order microservice to crash when adding new orders through the public api  
  <span class="bug">Bug</span> <span class="service">Order Ready Board</span>  
  
##### Orb MS - SQL Blocking from events <span class="ticket">IM-11958</span>  
 ORB MS - SQL issue with events fixed  
  <span class="bug">Bug</span> <span class="service">Order Status Display</span>    
  
# RELEASE VERSION: 22nd March 2022

##### Item Variants Added to Item not appearing in Elastic <span class="ticket">IM-11422</span>  
 Fixed a bug where new item variants were not indexed in elastic search  
  <span class="debt">Technical Debt</span>  
  
##### WeborderMicroservice <span class="ticket">IM-10949</span>  
 Weborderms Update dotnet 2.1 dockerfile  
  <span class="debt">Technical Debt</span>  
  
##### VisualComposerMicroservice <span class="ticket">IM-10953</span>  
 VisualComposer MS update dotnet 2.1 dockerfile  
  <span class="debt">Technical Debt</span>  
  
##### NumberGenerationMicroservice <span class="ticket">IM-10947</span>  
 NumberGenerationMicroservice Update dotnet 2.1 dockerfile  
  <span class="debt">Technical Debt</span>  
  
##### TaskMicroservice <span class="ticket">IM-10951</span>  
 Taskms Update dotnet 2.1 dockerfile  
  <span class="debt">Technical Debt</span>  
  
##### CompanionAppMicroservice <span class="ticket">IM-10952</span>  
 CompanionApp ms Update dotnet2.1 dockerfile  
  <span class="debt">Technical Debt</span>  
  
##### DocumentNumberMicroservice <span class="ticket">IM-10942</span>  
 DocumentNumberms update dotnet2.1 dockerfile  
  <span class="debt">Technical Debt</span>  
  
##### DeviceWorker_ResendCashStatements <span class="ticket">IM-10954</span>  
 DeviceWorker_ResendCashStatements Update dotnet 2.1 dockerfile  
  <span class="debt">Technical Debt</span>  
  
##### SolidIntegrationMicroservice <span class="ticket">IM-10946</span>  
 SolidIntegrationMicroservice Update dotnet 2.1 dockerfile  
  <span class="debt">Technical Debt</span>  
  
##### RevideIntegrationMicroservice <span class="ticket">IM-10948</span>  
 RevideIntegrationMS Update dotnet 2.1 dockerfile  
  <span class="debt">Technical Debt</span>  
  
##### IntegrationMicroservice <span class="ticket">IM-10945</span>  
 Integration ms Update dotnet 2.1 dockerfile  
  <span class="debt">Technical Debt</span>  
  
##### IntegrationIdentityMicroservice <span class="ticket">IM-10944</span>  
 IntegrationIdentityMicroservice Update dotnet2.1 dockerfile  
  <span class="debt">Technical Debt</span>  
  
##### PosIdentityMicroservice <span class="ticket">IM-10943</span>  
 ms-PosIdentity update dotnet2.1 dockerfile  
  <span class="debt">Technical Debt</span>  
  
##### PromotionMicroservice <span class="ticket">IM-10941</span>  
 Promotion ms Update dotnet 2.1 dockerfile  
  <span class="debt">Technical Debt</span>  
  
##### ArmTenantMicroservice <span class="ticket">IM-10940</span>  
 ArmTenantms Update dotnet 2.1 dockerfile  
  <span class="debt">Technical Debt</span>  
  
##### SS Applications slow <span class="ticket">IM-11421</span>  
 Fixed the SS applications slow  
  <span class="debt">Technical Debt</span>  
  
##### Stock Take Complete Event <span class="ticket">IM-11482</span>  
 Dataswitch receives an event when a stocktake is completed within Imagine so that integrations can start a flow on this happening  
  <span class="new">New Feature</span> <span class="service">Event Hub</span>  
  
##### Inventory - warn the user that they won't be able to edit Master Item Number/ItemNumber after item creation <span class="ticket">IM-8211</span>  
 Inventory-Warning message implemented for Master Item Number and Item Number which can not be modified after item creation  
  <span class="new">New Feature</span> <span class="service">Inventory</span>  
  
##### Custom attributes bulk-edit variants <span class="ticket">IM-6562</span>  
 Added the ability to copy values from Custom attributes to other item variants  
  <span class="new">New Feature</span> <span class="service">Inventory</span>  
  
##### Inventory - Receive Goods to have an export to Excel button <span class="ticket">IM-8455</span>  
 Added export to excel button in Receive goods  
  <span class="new">New Feature</span> <span class="service">Inventory</span>  
  
##### Vendor Return Default Sort Order <span class="ticket">IM-11809</span>  
 Vendor Return list is sort in descending order where the latest / newest record shows on top of the list.   
  <span class="new">New Feature</span> <span class="service">Inventory</span>  
  
##### GCS - S0 - Create PORTAL sub menu for global settings. <span class="ticket">IM-11802</span>  
 A new PORTAL sub menu named Configuration created for global setting.  
  <span class="new">New Feature</span> <span class="service">Portal</span>  
  
##### ISV - S6 - Using an Intersolve gift Card as MOP(method of payment) <span class="ticket">IM-11202</span>  
 Use Intersolve card as a method of payment  
  <span class="new">New Feature</span> <span class="service">IntersolveMS</span>  
  
##### ISV - S8.5 cancel of refund <span class="ticket">IM-11754</span>  
 Cancel of refund of Intersolve cards  
  <span class="new">New Feature</span> <span class="service">POS</span>  
  
##### ISV - S9 - Total testing of all functionality together <span class="ticket">IM-11602</span>  
 Tested all ISV funcionalities together  
  <span class="new">New Feature</span> <span class="service">IntersolveGW</span> <span class="service">IntersolveMS</span> <span class="service">IntersolveUI</span>  
  
##### ISV - S8 - Receipts When Using Intersolve Gift Cards <span class="ticket">IM-11234</span>  
 Inform on the receipts about the sale, redemption and use of Intersolve gift cards  
  <span class="new">New Feature</span> <span class="service">IntersolveMS</span>  
  
##### Public API - Stocktake POST error <span class="ticket">IM-11841</span>  
 Fixed issue with posting partial stocktakes after dotnet upgrade  
  <span class="bug">Bug</span> <span class="service">Public API</span>  
  
##### Public API - /StockTake/stockTakeHeaders requires body <span class="ticket">IM-11842</span>  
 Resolved issue with mappings due to dotnet upgrade  
  <span class="bug">Bug</span> <span class="service">Public API</span>  
  
##### Public API - Upload csv unsupported media type <span class="ticket">IM-11844</span>  
 Fixed issue with uploading csv via publicapi  
  <span class="bug">Bug</span> <span class="service">Public API</span>  
  
##### Public API - Stocklookup/barcode mapping error <span class="ticket">IM-11880</span>  
 Fixed a bug on the stock lookup by barcode endpoint when the item had quantites on a purchase order  
  <span class="bug">Bug</span> <span class="service">Public API</span>  
  
##### Not able to delete customer using Public API /Customer/{customerId} <span class="ticket">IM-10381</span>  
 Fixed issue where could not delete customer using Public API  
  <span class="bug">Bug</span> <span class="service">Public API</span>  
  
##### Cant use platform admin commands <span class="ticket">IM-10359</span>  
 Fixed issue where could not use Connector Commands under Tenant within Platform Admin.  
  <span class="bug">Bug</span> <span class="service">Platform Admin</span>  
  
##### Filter out inactive Tenants by default <span class="ticket">IM-11874</span>  
 Fixed issue on show list of active tenant by default. Inactive tenant are excluded from the list.  
  <span class="bug">Bug</span> <span class="service">Platform Admin</span>  
  
##### POS Receipt View Showing Incorrect VAT Amount <span class="ticket">IM-11537</span>  
 Fixed issue where receipt in POS showed incorrect VAT amount  
  <span class="bug">Bug</span> <span class="service">POS</span>  
  
##### POS - Shop & Variants - Items with 3 Dimensions or more not displayed correctly in the matrix grid <span class="ticket">IM-9500</span>  
 POS - Shop Widget - Matrix items with more than 2 variants now grouped into the first 2 variants  
  <span class="bug">Bug</span> <span class="service">POS</span>  
  
##### Stock sale line barcode length <span class="ticket">IM-11514</span>  
 Fixed a bug which caused stock movment to not be created when the item barcode was greater than 20 characters  
  <span class="bug">Bug</span> <span class="service">Stock Management</span>  
  
##### Stock Management MS Purchase Order Error <span class="ticket">IM-11481</span>  
 Added validation to stock service so that multiple lines of the same item cannot exist on a single purchase order  
  <span class="bug">Bug</span> <span class="service">Stock Management</span>  
  
##### OSD - print icon throws a 500 error <span class="ticket">IM-11341</span>  
 Fixed issue where the print icon in OSD throws a 500 error  
  <span class="bug">Bug</span> <span class="service">Order Status Display</span>  
  
##### Simple POS -> Total Amount showing incorrectly in the basket/Unable to process payment successfully <span class="ticket">IM-11788</span>  
 Total price in simple pos showing up as zero as been resolved and also payment can be processed successfully now  
  <span class="bug">Bug</span> <span class="service">SimplePOS</span>  
  
##### SS Apps Connector ID on sales <span class="ticket">IM-8419</span>  
 Self Serve - Connector ID on Sales in RBO  
  <span class="bug">Bug</span> <span class="service">Kiosk</span> <span class="service">Simple POS</span>  
  
##### CAS-86188-H5F7M2 Customer address data is not fully shown when looking up the customer on the pos using the filter <span class="ticket">IM-11520</span>  
 Fixed issue where the customer address was not fully shown when using search button in POS  
  <span class="bug">Bug</span> <span class="service">POS</span>  
  
##### Scheduled tax rate change - Date selection incorrect  <span class="ticket">IM-9419</span>  
 Fixed issue where the 'valid from' date was not saved in Scheduled tax rate  
  <span class="bug">Bug</span> <span class="service">Backoffice</span>  
  
##### Taxcode comes to the POS incorrect or 0 <span class="ticket">IM-11866</span>  
 Fixed issue on Tax Code printed incorrectly on printed receipt and in find receipt  
  <span class="bug">Bug</span> <span class="service">Item Management</span> <span class="service">POS</span>  
  
##### Incorrect Cost label on Item Creation <span class="ticket">IM-11778</span>  
 Fixed label in Local Prices tab from Last Cost to Cost  
  <span class="bug">Bug</span> <span class="service">Item Management</span>  
  
##### Item cost not created <span class="ticket">IM-11751</span>  
 fixed issue where the item cost was not created for a new blank tenant created  
  <span class="bug">Bug</span> <span class="service">Item Management</span>  
  
##### Item Import failure <span class="ticket">IM-11734</span>  
 Fixed issue where importing through Inventory the import fails to insert into item  
  <span class="bug">Bug</span> <span class="service">BulkItemImport</span> <span class="service">Item Management</span>  
  
##### Item List -> Move focus on Reorder is showing Loading Spinner <span class="ticket">IM-11772</span>  
 Inventory - Item List - Reorder showing loading spinner   
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Inventory - Stock take - Error adding item to blank stocktake <span class="ticket">IM-10270</span>  
 Fixed issue error adding item to Partial Stocktake with Partial Type Blank  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### CAS-75174-N3S1C9 Item import ignores commas <span class="ticket">IM-10451</span>  
 Fixed issue where Item import ignored commas  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Inventory - 500 error or system freeze when changing Sales/Cost Price on Item <span class="ticket">IM-11865</span>  
 Resolved issue where after saving update to one variant any further updates to variants would cause a 500 error  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
# RELEASE VERSION: 16th March 2022

##### Inventory - thumb nails not showing in Item List <span class="ticket">IM-11512</span>  
 Fixed issue where the picture of the item is not displayed into item list  
  <span class="bug">Bug</span> <span class="service">Inventory</span>  
  
##### Port AdminUI(POS Option) to Angular 12 <span class="ticket">IM-11199</span>  
 Port AdminUI(POS Option) to Angular 12  
  <span class="debt">Technical Debt</span>  
  
##### Port AdminUI - Shop Setup - General Information <span class="ticket">IM-11703</span>  
 General Information sidebar added in POS ADMIN module and information on the page can be updated  
  <span class="debt">Technical Debt</span>  
  
##### Port AdminUI - Shop Setup - Currency Exchange Rates <span class="ticket">IM-11451</span>  
 Admin UI move currency Exchange Rates to POS Admin (Note new module you need access to new module)  
  <span class="debt">Technical Debt</span> <span class="service">Pos Admin</span>  
  
##### Port AdminUI - POS Options - Customer Display <span class="ticket">IM-11453</span>  
 Move Customer Display from Admin -> POS Options to POS Admin -> POS Options  
  <span class="debt">Technical Debt</span> <span class="service">Pos Admin</span>  
  
##### CUD - S1- Customer Display Configuration <span class="ticket">IM-11553</span>  
 Added the Customer display under POS Options menu  
  <span class="new">New Feature</span> <span class="service">POS</span> <span class="service">Pos Admin</span>  
  
# RELEASE VERSION: 23rd February 2022
## FEATURES
### RETAIL
IM-11727 - Public API - add Get transaction by uuid  
_New endpoint added to retrieve transaction on the unique uuid_  
IM-8651 - G00057 - S4 - Offline Stock - "Return to Vendor" action  
_Ability to move item quantities from the Offline stock list directly to a Vendor return_  
IM-11303 - Currency code on receipts  
_Added currency code in receipts_  
IM-7669 - Inventory - Make connector selection remember selection  
_Recover the last connector choice for print labels in Inventory_  
IM-6584 - Inventory - add 'Type' to the Summary tab  
_Type added to Inventory Summary Tab_  
IM-9910 - Receive Goods Sort  
_Inventory - Purchase order sort order_  
IM-10929 - ICT-S7-InterCompany Price add filtering  
_Filter price list by search text, vendor, hierarchy_  
IM-11133 - ISV - S3 - Selling an Intersolve Gift Card  
_Added functionality to sell Intersolve gift card via the POS_  
IM-11177 - ISV - S4 - Refunding and De-Activating Intersolve Gift Cards  
_Ability to refunding and de activating Intersolve cards_  
IM-11172 - ISV - S1.5 - Create logging functionality  
_Creating a data model to logging_  
IM-11171 - ISV - S2 - Viewing an Intersolve Gift Card Status  
_Ability to see Intersolve card details_  
IM-10900 - ICT-S6-InterCompany Search Items With IC prices on Transfers  
_The search for items should only show items that have a price defined on IC_  
IM-11077 - ISV - S1 - Intersolve Setup Basic Integration  
_Configure different types of gift card_  
IM-11357 - ICT-3.6: Adjustments to the companies page  
_Adjustments to the company page_  
IM-11560 - Cant press enter when searching items in item list  
_Enter can now search items in item list_  
IM-10475 - Gift Aid is triggered on POS when boolean custom attribute is set as 'NO'  
_Gift aid is just triggered on POS when Custom attribute is set to Yes_  
IM-7672 - Inactive Item shows on Purchase Order / Receive Goods Lists  
_When manually selecting items there is 'Show inactive' option_  
IM-7618 - Missing Hierarchy Tax Rate Linked to Missing Item Groups  
_Make tax rate mandatory in Item Hierarchies_  
IM-7532 - Show Custom Attribute Code and Name when creating items  
_Show custom attribute code and name when creating items_  
IM-6626 - Tech Story - PoS - All receipts need to be reviewed for correct time printed  
_Fixed issue where the time stamp printed on the receipt were wrong_  
IM-11192 - ISV - S5 - Making a Payment when Intersolve gift card(s) is present on the transaction.  
_Making payment when Intersolve card is present on the transaction_  
IM-10504 - ICT-S3.5-Add Columns to Transfer Data Entities  
_Added new columns to Transfer Data Entities_  
IM-10461 - ICT-S3-Inter-Company Price Lists  
_Added the ability to maintain the prices in base tenant currency and source location currency_  
IM-10465 - ICT-S4-Inter-Company Transfer Order Creation  
_Added functionality to move items from one location to another which are associated with different companies and that transfer be represented as a sale by the sending location and a purchase by the receiving location_  
IM-10579 - ICT-S5-In-Company Transfer Out Prices  
_Include and record the weighted average cost of items in a In company transfer_  
IM-11752 - Order Needs transaction id and uuid  
_TransactionId and TransactionUUID now recorded against Order_  
IM-11753 - Public API GET Orders  
_Endpoint will now return the transactionId and transactionUuid_  
IM-11756 - PublicApi - Add CustomerName and Reference fields to Order endpoint  
_Customer Name and Reference fields now returned in call to Order endpoint_ 
IM-11800 - Netherlands Translations  
_Updated Dutch Translations_
## BUGS
IM-11342 - Production - Unable to print journals  
_POS - Bug Fix - Print from Journal_  
IM-11554 - PPE - Discount Item Percentage promotion require Item Bundle item  
_PPE - Bug Fix - Discount Item Percentage_  
IM-11613 - Inventory - Barcode not issued to Copy of Masteritem  
_Fixed issue where copying a Masteritem did not issue a barcode to new item_  
IM-11544 - PPE - Item Bundles stuck in 'In Queue' status  
_PPE in queue status bug fix_  
IM-8752 - Customer Loyalty - 'Select/Deselect All' option for items not available  
_Items now have option to Select/Deselect All within Customer Loyalty_  
IM-11250 - Inventory - The column headers in the data grids in Inventory cover results  
_Bug Fix Inventory > Item List > column headers moving correctly._  
IM-7779 - Filter Duplication in PPE Item Bundles (UI Bug)  
_Fixed issue were the filter was duplicated in Item bundle under PPE_  
IM-9642 - POS - Can't disable total amount/percentage discount options via clerk roles  
_Fixed issue where could not disable discount options via clerk roles_  
IM-9734 - InventoryUI: Import Bulk Purchase Order missing data in columns  
_Fixed issue where Import bulk PO did not retrieve some data_  
IM-11117 - Stock take overview does not show all stock takes  
_Stock take overview fix_  
IM-11426 - Public API Create Item endpoint fails  
_Public API~ - Bug fix - Create item endpoint fails_  
IM-7225 - Parking receipt without customer and items  
_Disabled ability to park a transaction with no items attached to it, toaster message added to alert user_  
IM-10785 - Return receipts are not showing the deducted number of loyalty points  
_Fixed issue where return receipts where not showing the deducted number of loyalty points_  
IM-9735 - POS Password allows + and - special characters  
_Fixed issue where '+' and '-' were allowed in clerk password_  
IM-8918 - POS: Spelling error on the reboot connector toast message  
_Fixed spelling error when asked to reboot the connector_  
IM-9374 - Kiosk Verifone Certification - Outstanding Issues  
_Added Reprint last receipt in KIOSK2_  
IM-11589 - Admin Shop Setup: It is possible to change the local currency  
_Make the Local currency for Shop in Backoffice read-only_  
IM-9891 - Item Create Routine - Stock Lookup Summary fields (ReOrder and ReStock) incorrectly populated     
_Inventory - Bug Fix - Reorder and restock showing incorrectly_  
IM-10326 - Issue removing discount from an Item Group  
_Fixed issue where could not remove discount from an item group_  
IM-10490 - RboMs: Cannot send emails for receipts  
_Fixed issue where the receipts were not sent by email_  
IM-10815 - Inventory VR - PDF shows incorrect values  
_PDF issue fixed_  
IM-11274 - Customer Next Page Button Not Working in the Backoffice  
_Fixed issue with Next Page button not responding_  
IM-11296 - PoS - discount showing on items when using transaction discount  
_Fixed issue where a discount was apply to wrong items_  
IM-11564 - RboMS: Prevent local currency change  
_Fixed issue where currencies are deleted if local currency is changed in a request_  
IM-11580 - PdfMS: Image handling  
_Image handling issue fix for PDF_  
IM-11672 - POS: Setting a fixed exchange period is not reflected in POS  
_Fixed issue where a fixed exchange period was not reflected into POS_  
IM-8058 - Item - Matrix Tab Changes Not Being Remembered After Editing  
_Fixed issue where changes in the Item matrix tab was not remembered after editing_  
IM-11695 - TOP and POP - the 'i' information button is not shown  
_Added 'i' information button in TOP and POP_  
IM-11699 - Issues in Transfer  
_Issues resolved_  
IM-11700 - SimplePosUI: Fix flow on sales endpoint  
_Only make sale in SimplePos when connector is turned on_  
IM-11705 - Unable to remove an Item from Price list before saving  
_Unwanted Item can now be removed from the Pricelist_  
IM-11733 - Publicapi - no transactionid returned when order created through TOP  
_Fixed issue where transactionId not been copied to Order table_  
IM-11735 - InventoryGW: crashes on loading a GRN if the GRN has no lines on it  
_Fixed issue when GRN had no lines_  
IM-11745 - UI needs to set Inactive Flag to True when fetching the pricelist  
_Adding inactive Items to Pricelist_  
IM-11760 - Urgent - Public API -  api/v1.0/Transfers/CreateTransfersOutWithLines 500 Internal Service error  
_Fixed issue where CreateTransferOutWithLines was throwing error code 500_
IM-11815 - Simple POS error on second transaction  
_Fixed a bug within Simple POS which caused the second transaction performed to report an error_ 
## Other Improvements   
IM-11736 - Exchange Test for Danish Language  
_Danish Language update for Exchange text_  


# RELEASE VERSION: 26th January 2022
## FEATURES
### RETAIL
IM-10535 - Unable to see item variants on returns screen  
_Added barcode, dimensions and item name on the return screen_  
IM-11057 - ICT-S2.5 Configure Currency at Company-level  
_Inter Company Trading - Configure currency at company level_  
IM-8301 - Inventory - Expanding Hierarchy when creating a product  
_Expanding Hierarchy when creating a product_  
IM-6086 - PoS - The on-screen receipt in Find Receipt does not match the detail on the paper copy  
_Fixed discrepancies between on-screen receipt and the paper copy_  
IM-10615 - Add setting for enabling/disabling the inclusion of images in receipt emails  
_Add option to include image on the receipt email_  
IM-5884 - Stock Take - S1-print a Stock Take discrepancy list  
_Print stock take discrepancy list_  
IM-9661 - Limit the size of an XLS or XLSX file for import  
_Limit import file sizes_  
IM-8317 - Columns should be made sticky  
_Columns made stcky_  
IM-6672 - Customer - Loyalty - give user better feedback if they do not complete fields  
_Validate fields in Customer Loyalty_  
IM-6613 - Reporting KPI with square meter (sq)   
_Added report per sqm in Analysis module_  
IM-6683 - Inventory - be able to select an item by clicking the row in Copy  
_Added the ability to select an item by clicking the row in Copy_  
IM-7525 - Searching for receipts, loading more by default  
_Increased the pagination from 10 to 100 for receipts in POS_  
IM-10388 - Apple Pay - Domain Verification  
_Apple Pay - Domain Verification_  
IM-10737 - ms-payglobalpay - Update to dotnet 5.0  
_ms-payglobal update to dotnet 5.0_  
IM-10387 - Apple Pay - Merchant Identity Certificate Implementation  
_Apple Pay - Merchant Identity_  
IM-10682 - gw-paymentintegration - Update to dotnet 5.0  
_gw-paymentintegration - Update to dotnet 5.0_  
IM-11572 - SCO Finnish language support  
_Added Finish language on SCO_  
IM-11370 - CBL - S4 - View Costs by Location  
_Inventory - Item List - Add company to figures tab._  
IM-10843 - RBP - S1 - Apply Role Based Permissions to Side-Bar Sub Menu Items - Product  
_Role Based Permissions - Side bar Menus_  
IM-11525 - Gift Vouchers removed from Analysis Dashboard Figures  
_Analysis - Sales ex VAT and Sales Value_  
### PLATFORM
IM-10758 - ms-task - Update to dotnet 5.0  
_ms-task update to dotnet 5.0_  
IM-10759 - ms-tenantfeatures - Update to dotnet 5.0  
_ms-tenantfeatures - update to dotnet 5.0_  
IM-10666 - gw-arm - Update to dotnet 5.0  
_gw-arm - Update to dotnet 5.0_  
IM-10699 - gw-starp - Update to dotnet 5.0  
_gw-starp - Update to dotnet 5.0_  
IM-10705 - ms-armtenant - Update to dotnet 5.0  
_ms-armtenant update to dotnet 5.0_  
IM-10715 - ms-externalmsg - Update to dotnet 5.0  
_ms-externalmsg - Update to dotnet 5.0_  
IM-10744 - ms-print - Update to dotnet 5.0  
_ms-print - Update to dotnet 5.0_  
IM-10760 - ms-tracking - Update to dotnet 5.0  
_ms-tracking update to dotnet 5.0_  
IM-10726 - ms-integrationidentity - Update to dotnet 5.0  
_ms-integrationIdentity update to dotnet 5.0_  
IM-10751 - ms-scheduledjobs - Update to dotnet 5.0  
_ms-scheduledjobs - update to dotnet 5.0_  
IM-10733 - ms-numgen - Update to dotnet 5.0  
_ms-numgen - update to dotnet 5.0_  
IM-11404 - Integrate Apple Pay in TopUI   
_Apple Pay - TOP_  
IM-11406 - Apple Pay - Changes to descriptions on certificate section in Admin UI (OB Pay)  
_Apple Pay - Admin UI update._  
IM-11276 - SCO Item scan dialog  
_SCO - Loading page added for scanning_  
IM-11387 - Google Pay - Self Serve Admin UI Change (OB Pay)  
_Self Serve Admin - Google Pay Changes_  
IM-11427 - Google Pay - Merchant ID/Client ID text change in Admin UI (OB Pay)  
_Admin UI - Google Pay test change_  
### MTD & BESPOKE DEVELOPMENT
IM-11373 - Configurable payment icons in SCO   
_SCO - Configurable payment icons_  
## BUGS
IM-11521 - Stock detail view in the POS is not showing the correct figures ptII  
_Fixed issue where the figures were not correct_  
IM-11600 - Discount reasons gone from POS  
_Fixed issue where discount reason was gone from POS_  
IM-11596 - Inventory -> Receive Goods -> Unable to Save and Commit  
_Removed requirement for Currency to be selected before saving GRN_  
IM-11643 - Vendor Return validation problem on entering a saved draft  
_Fixed issue where Save buttons became disabled_  
IM-11692 - Changed Sales price on a matrix item is not saved  
_Fixed issue where updated Sales Price within Matrix not saving_  
IM-11570 - Refresh Token returns {"valueKind":1}  
_Fixed issue where token was not refreshed_  
IM-11301 - Gift receipt layout all wrong  
_Fixed issue where the printed documents are mashed up_  
IM-7043 - Inventory - Required Field Prompts Issue  
_Fixed issue with prompts in required fields under Inventory_  
IM-11318 - Cant save and commit vendor return  
_Fixed issue saving Vendor Return_  
IM-11477 - Exchange date missing from gift receipt  
_Added exchange date on gift receipts._  
IM-8805 - Admin - Receipt Preview Not Showing Correct Header-Footer Messages  
_Gift Receipts and Credit Note now showing correct preview in Receipt Setup_  
IM-10481 - Unable to split payment using gift certificates  
_Fixed issue where could not split the payment using Gift certificate as the second option_  
IM-11474 - Inventory - Cancel Remainder on placed or partially received PO's causes a 404 error  
_Fixed issue where cancel remainder in PO had no action_  
IM-10853 - Item Creation - Enable as Web Item not saved  
_Fixed issue where Enable as Web item was not saved_  
IM-11261 - Menu not updating  
_Highlights the correct submenu_  
IM-9416 - Received Goods - Name and Dimension Column - Visual Issues  
_Received Goods - Name and Dimension Column_  
IM-8718 - Stocktake - Import Count File Not Recognising Secondary Manufacturer Barcodes  
_Fixed issue where import count file didnt recognize secondary manufacturer barcode_  
IM-11136 - Cant print labels from discount labels  
_Fixed issue where discount labels in the range of 55, 56, 57, 58 couldn't be printed from Inventory - Discount labels_  
IM-11078 - PeopleCount MS: POST People count - returns 500 error: object reference not set to instance of an object  
_Fixed bug where POST People count returned 500 error_  
IM-11349 - Add Image Button in Item Creation does not respond to click the second time  
_Add Image button fixed_  
IM-11508 - Transfers throws 500 error  
_Fixed issue where Transfer throws 500 error_  
IM-11380 - Portal Module not available   
_Added Portal module_  
IM-11412 - InventoryUI PO download button has wrong text  
_Text now corrected to Download File rather than Upload_  
IM-11439 - Self Serve Admin Payment Provider errors when no tenant feature exists  
_Self Serve Admin Payment fixed_  
IM-11446 - TOP Failed transaction  
_TOP - Bug Fix - Failed Transaction_  
IM-11458 - Cant create items through API  
_Fixed an issue in item microservice where item dimension values were defaulting to integer data type_  
IM-11463 - Trimit Account Payments Not Working  
_Trimit - Bug Fix - Account Payments_  
IM-11483 - MasterItem & Item not published to rabbit after image change  
_Fixed issue where set an image to an existing item was not published to rabbit_  
IM-11486 - POS - Expenses are included in the POS Chart  
_Fixed issue where expenses are included in the chart_  
IM-11536 - SideBar Spelling error Self Serve Admin  
_Fixed issue where it was displayed Pop Londing Page_  
IM-11541 - InventoryUI: On GRN aggregate item quantity if item is already on the GRN  
_Fixed issue where a new line was created if increased quantity for an item in GRN_  
IM-11542 - Inventory UI - Discount Labels Danish language  
_Inventory - Discount Labels DK Language_  
IM-11545 - Purchase Order: Search button is disabled  
_Fixed issue where search button was disabled in PO_  
IM-11557 - When using Manual Search Item in receive goods, after adding items, the save/commit buttons are disabled  
_Fixed issue where Save/commit buttons where disabled in Receive goods_  
IM-11562 - PosGW crashing on missing VoucherConfiguration in tenantfeature-ms  
_Fixed issue where could not load POS_  
IM-11574 - Commiting a stock take returns error message  
_Fixed the issue where commiting a stock take returns error message_  
IM-11624 -  Imagine Kiosk - modifier issue   
_Kiosk - Bug Fix Modifiers_  
IM-11027 - Gift label and Gift receipt do not function in the same way, the only difference should be the print option.  
_Fixed issue where the period to exchange was not displayed into POS_  
IM-11590 - When marked as gift, calendar not showing correctly on lower resolutions  
_Bug Fix - POS - Calendar showing correctly at lower resolutions_  
## Other Improvements  
IM-11230 - Platform Admin leaking of user data  
_Fixed issue where the whole user list was saved in local storage._  
IM-7619 - RboMS: Voucher currencies and reports  
_Voucher with different currency code_  
IM-11130 - User (username) regex platform admin  
_Allow special characters in username_  
 


# RELEASE VERSION: 30th November 2020
## FEATURES
### RETAIL
IM-8425 - G00047 - UK Gap 5.7 - GCON007 - Item List View  
_Inventory - Addition of manufacturer item no. unit cost. Ability to sort on several columns_  
IM-10460 - ICT-S2-Inter-Company Company Management  
_Inter Company Trading - Manage different legal entities called ‘Companies’ in a single imagine tenant._  
IM-10775 - IIM-S3-Allow External URL to be associated with an  item  
_External URL associated with item_  
IM-8641 - Inventory - Export of Inventory - LOGS file(s)  
_Inventory - Export Logs_  
IM-10597 - CBL - S3 - Add Company Filter to Figures Tab  
_Inventory - Item List - Add company to figures tab._  
IM-6413 - Inventory - make the Search bar static in Item List  
_Inventory - Item -  Search bar static (only Item List)_  
IM-6072 - PoS - add a numeric keypad to the Manager credentials prompt  
_POS - addition of numeric keypad for manager credentials_  
IM-6682 - Inventory - make the instruction for Copy option more detailed  
_Inventory - copy function explained_  
IM-4763 - Add security and styling to the PO excel export in InventoryGW  
_Inventory - PO Export Security_  
IM-11070 - Stock Take - S2- Allow Ordering Discrepancy Column  
_Inventory - Stocktake Discrepancy column_  
IM-10626 - IIM-S2-Allow Multiple Images to be uploaded from local storage and associated with an item  
_Multiple Images associated with an Item_  
IM-10390 - ODP333 Till Printer needs adding into the supported printer list in the manage connector area  
_Manage Connector - ODP333 Printer Added_  
### PLATFORM
IM-11325 - BI Gateway - VendorID in product Request  
_BI GW - VendorID in Product request_  
IM-11099 - Adyen - Utilise Display and Event Notifications  
_Adyen - update_  
IM-9326 - LogRocket Implementation  
_Logrocket implementation_  
IM-10614 - RBP - S1 - Apply Role Based Permissions to Side-Bar Sub Menu Items (Platform)  
_Role based permissions setup_  
IM-10983 - Adyen - On board terminal printer bypass change needed  
_Adyen - Printer bypass change_  
IM-10811 - Adyen Receipt Format Mis-aligned  
_Adyen - receipt bug fix_  
IM-11019 - DK Translations   
_DK Translations_  
## BUGS
IM-7638 - Item Import  
_Removed Caching on Item import download template as this caused new vendors to not show in the list_  
IM-6880 - Extra Entries in the Customer Transaction History  
_Customer Account tab now filters out account adjustments of 0_  
IM-10906 - PlatformAdmin Tenant Creation - Wrong user language set   
_Platform Admin - bug fix for user language_  
IM-10571 - Deleting Receipt/ticket discount   
_POS-Item discount and Line Discount_  
IM-7796 - POS: Missing spaces in some Card terminal actions  
_POS - Update Card Terminal Labels_  
IM-7834 - POS: Add Customer Birthdate field is not validated  
_POS - customer birthdate validation_  
IM-8316 - Purchase Order Can't be saved after Bulk Import  
_Inventory - PO Bulk import_  
IM-7664 - POS: Can not filter item group by No  
_POS-Item Group_  
IM-7821 - Invalid column name Clerk in Stock Report  
_Report - Bug fix in columns_  
IM-7986 - GRN - Possible to Save and Commit an Empty Goods Received Order  
_Inventory - Stop the ability to save an empty GRN_  
IM-7801 - POS: Journals accepts to select a period of the future  
_POS - Bug Fix dates in journal_  
IM-7714 - POS: Issue to display the correct change when using gift certificate  
_POS - bug fix gift certificate_  
IM-10573 - Discount not matching up  
_POS - Bug Fix - Discounts_  
IM-7935 - POS [Account]: null is displayed in <Credit Limit Exceeds> message  
_POS - Bug fix credit limit error message_  
IM-7756 - Customer: Can not save external unique ID and Currency  
_POS - Bug Fix - Customer required fields currency and external unique ID are now saved correctly_  
IM-10338 - CAS-73369-C7J8Y4 issue new return interface IM-9082 checkbox items cannot be checked on a K3POS using touch  
_POS - Bug Fix on return_  
IM-7715 - POS: Issue with filter expense  
_POS - Bug Fix expenses_  
IM-8659 - POS: Remove foreign credit note makes the  sale complete  
_POS Bug Fix - Foreign Credit Note_  
IM-11242 - Order Status Board - Status doesn't update after extension  
_Fixed a bug which caused the status to not update after an extension is fired_  
IM-10364 - Stock adjustment reason code not displaying  
_Inventory - Logs now showing stock adjustment reason code_  
IM-10575 - Ticket discount in Euro's not right when increasing amount of articles  
_POS - Bug Fix on whole transaction discount_  
IM-10261 - GRN info incorrect when receiving PO's via Companion App  
_Inventory - GRN info updated when received via companion._  
IM-10290 - Loadig a partial scheduled stock take takes  minutes in the companion app if it succeeds.  
_This ticket is already in Production_  
IM-10301 - Companion App - Auto Receive PO/Transfer numbers not recognised.  
_Companion app - bug fix Auto receive PO/ Transfer numbers_  
IM-11240 - Public API - Stock Lookup Default Vendor when no movement  
_Stock lookup on public api now returns the default vendor even if the item has had no movements_  
IM-11132 - Simple POS Fails if Item Modifier Qty is incremented   
_Simple POS bug fix modifier Qty._  
IM-11157 - Can't create new Worldline device in Admin  
_Admin - Manage Connector - Creation of new worldline device_  
IM-11158 - Loyalty Bonus Button on POS Takes Time to Load and Display  
_Loyalty Button now showing when customer loaded_  
IM-11193 - Total Amount in Simple POS Calculating Incorrectly  
_Simple POS - Total Amount calculated incorrectly_  
IM-11275 - Numbergen fails to create next order number  
_Fixed issue around Numbergen failing to create next order_  
IM-11281 - Items with modifiers are doubling the item price 
_Fixed an issue within the kiosk where default modifiers were incorrectly adding to the item total_  
IM-11311 - Simple POS handling discount with different currencies  
_Simple POS handling discount fixed for different currencies_  
IM-11326 - Extension Framework - Unable to create and configure extensions  
_Platform Admin - Bug fix extensions_  
## Other Improvements  
IM-10373 - Item MS Importing Items  
_ItemMS - Importing Items_  
IM-11374 - Modifier Prices not included in the Item Prices on the receipt  
_Kiosk Bug Fix modifier prices_  
  


# RELEASE VERSION: 2nd November 2021
## FEATURES
### RETAIL
IM-9602 - S7 Item module - Remove unused screens  
_Item - removal of screens that have been moved to Inventory_  
IM-8912 - Prevent a POS user from entering a negative payment value.  
_It is not not possible to enter a minus sign '-' from the physical or on-screen keyboards_  
IM-9868 - Analysis - S1 - Footfall and Conversion Rate  
_Foot Fall and Conversion Rate_  
IM-10574 - CBL - S1 - ItemCost-MS to record Cost price in POS transaction record  
_Cost By Location - POS records cost price_  
IM-10596 - CBL - S2 - Show Weighted Average Cost by Location   
_Inventory - Show weighted cost by location_  
IM-8619 - Remarks for reports Retail Suite  
_Analysis - Sales ex VAT and Sales Value_  
IM-10994 - Google Pay button needs adding into the TOP UI in the basket  
_TOP - Addition of googlepay button_  
### PLATFORM
IM-9761 - Basket Endpoints to other Self Serve Apps  
_Basket implementation for Self Serve Apps_  
## BUGS
IM-10970 - Platform Admin - Unable to add extension to tenant  
_Platform Admin - Bug Fix add extension_  
IM-11167 - Total Amount in all Self Serve Calculating Incorrectly  
_Total Amount is now fixed in POP, TOP and Kiosk_  
IM-9508 - Ongoing credit card terminal issues  
_Device Worker update - Credit card terminal issues_  
IM-9750 - gift label giving full amount on return when scanning label  
_POS - Gift label bug fix_  
IM-9771 - Order Display - Orders showing in mixed up format  
_The orders now grouped correctly by modifiers_  
IM-11071 - InventoryUI Bug: paging and  column chooser  not working (NaN and undefined)  
_Resolved paging error showing at top of table when first generated_  
IM-10854 - Stock overview in the POS is not showing the correct figures  
_POS - Bug Fix - Stock overview figures_  
IM-10555 - Slow Payments  
_An update has been made to speed up the transaction process_  
IM-10968 - MTD Calculate VAT Return - Offset VAT not included in box 7 calcs  
_Resolved Offset VAT calculations_  
IM-11091 - Not getting discount from PPE  
_PPE - Bug Fix discounts not working_  
IM-11101 - Fix problem with Bundle Mapping  
_Kiosk - Basket update_  
IM-11116 - Order Stuck on ORB Board  
_ORB Board - Order stuck bug fix_  
IM-11137 - Comment on the Basket lines is not being retained  
_Comment Line is now fixed for TOP and POP_  
IM-11173 - Kiosk Payment Lines Not being Populated when using virtual connector  
_Payment Line is now populated_  
IM-11208 - Add Rabbit Message for Basket Sales From Transaction To RBO  
_Transactions for Self Serve apps are now sent to RBO so that these are included in the analysis and Reports modules_  


# RELEASE VERSION: 5th October 2021
## FEATURES
### RETAIL
IM-10386 - Google Pay Configuration  
_Google Pay Configuration has been implemented for POP_  
IM-10361 - S2B Item module - Dimension templates - Adding new template  
_Inventory - Dimension Templates - Adding new Template_  
IM-9616 - S2 Item module - Dimension Templates - Deleting  
_Inventory - Deleting Dimension Templates_  
IM-9608 - S6 Item module - Discount Labels  
_Inventory - discount labels move from Item_  
IM-6138 - Item - import spreadsheet does not list hierarchies well  
_Item - hierarchy list bug fix_  
IM-6355 - have % buttons pre coded with 30,40,50 and 60 % discount  
_POS - Pre-coded Discount buttons (Set in Admin)_  
IM-10589 - CBL - S1.5 - Prevent User from Changing Shop Currency after Shop Creation  
_Backoffice - disable changing currency in shop._  
IM-9589 - S1 Item module - Dimension Templates UI  
_Inventory - Dimension Templates added to Inventory_  
IM-7127 - PoS - Stock Lookup shows inactive shop  
_POS - Stock lookup bug fix_  
IM-9075 - MTD Transactions date format  
_Date format updated to match other fields_  
IM-10520 - EVENTS HUB - New Event request  -  Transfers Header  
_Added events between Imagine and Dataswitch which sends Transfer header information to a dataswitch flow on creation, commit or delete of a transfer within Imagine_  
### PLATFORM
IM-8153 - Public API 2 - Staff/POC  
_Initial POC for Public api v2_  
IM-9803 - BI Gateway - Transaction Data  
_BI Gateway endpoints to return transaction and payment data_  
IM-10641 - BI Gateway - Inventory Levels  
_BI Gateway - Inventory Levels_  
IM-10646 - PA - warn that Username is not valid  
_Platform Admin - Warning invalid characters in username_  
IM-10449 - Remove payment functionality from Euronet payment container  
_Euronet payment container removal_  
IM-10419 - Basket - AgeRestrictedItems  
_Public API: Added a getItemDetails flag to the GET Basket endpoint, if this is set to true then the basketItems will contain the full item object_  
IM-10448 - K3 Pay payment layer in Admin > Manage Connector to be reverted to Verifone UK only  
_K3 Pay Verifone only_  
IM-7782 - Portal/API - Personal Access Tokens  
_Personal Access tokens can be generated in user area within Portal_  
IM-10398 - Adding Euronet to Payment Providers in Admin  
_Addition of Euronet in Admin_  
IM-9317 - Search: The ability to search and sort on Master Items  
_Ability to search and sort on master items_  
IM-10458 - Public API Upserts  
_Upsert endpoints previously used in Integration GW have now been migrated to the public api_  
IM-10578 - BI Gateway - PATs  
_BI Gateway now uses personal access tokens for authentication_  
IM-9679 - Basket PPE Integration  
_Kiosk - Integration with PPE_  
IM-10549 - BI Gateway - Alterations  
_Added vendorId to PurchaseOrders Endpoint_  
IM-10399 - Fiskaly Update  
_Fiskaly update_  
## BUGS
IM-10787 - SearchMs returns wrong totalNumberOfResults  
_The SearchMs now returns the expected number of results_  
IM-10810 - User names are not showing in Integration  
_Username now shows in Integrators table_  
IM-10557 - Create Items - Items not created correctly  
_Bug Fixed for Item Search_  
IM-7682 - PPE rounding error  
_Bug Fix - PPE rounding error_  
IM-7470 - PPE - Inconsistent use of Field Names in Item List, Bundle and Promotions  
_PPE, fixed promotion deal bundle grid to show item name and variant information as opposed to description of the item as this is not always populated and is inconsistent with other views._  
IM-7661 - Create New Item in New Composer Tile directs to the wrong location  
_Bug Fix - Composer group redirecting to item creation_  
IM-7391 - Inventory: No items created causes Issues on messages displayed  
_Fixed a bug which caused an object error in customer->loyalty when the tenant had no data_  
IM-7660 - Inventory: Issues with Item Hierarchies  
_Fixed a bug which caused the image url on item hierarchy to not get saved and for the tax rates to be incorrect on hierarchy when saving_  
IM-10528 - Receive Goods - Price Edit Changes Quantity Instead  
_Inventory - Bug fix Receive goods editing price changes quantity_  
IM-9146 - Analysis sales doesnt match  
_Analysis - Bug fix sales_  
IM-10620 - Loyalty Bonus Button on POS Takes Time to Load and Display  
_POS - Bug Fix - Loyalty bonus takes time to load._  
IM-10799 - Self Serve Admin - Unable to Load or Save Self-Serve Time Slots  
_Self Self Admin - Bug Fix - Time slots is now loading and saving_  
IM-9718 - Items cannot be added to Purchase Order  
_Fixed an issue which caused items not to show when searching the vendor item number in PO creation/edit_  
IM-9154 - Analysis Calculation  
_Analysis - Bug fix calculation_  
IM-9481 - Companion App - Bug preventing destination store from being chosen on Transfer   
_Companion app - bug fix for destination store selection_  
IM-9895 - AD-HOC Stocktake UI issue - Companion App  
_Companion - ADHOC stocktake duplicate issue fixed_  
IM-10264 - Order Stuck on ORB Board  
_ORB Board - Order stuck bug fix_  
IM-10302 - Companion App - Store Information - Total sales figures don't match with Reports or Analysis.  
_Bug Fix - Companion sales not showing correct for the store in store information_  
IM-10456 - Extension Framework - UI loads all event extensions regardless of the configured shop.  
_Extension Framework - bug fix_  
IM-10508 - Sidebar forcing browser redirection opposed to Angular routing  
_Fixed an issue in the sidebar which caused browser to redirect as opposed to using angular routing._  
IM-10519 - EVENTS HUB - Movements Incorrectly repeating the first line  
_Fixed a bug which caused an event to be received in Dataswitch for the same item on a transfer, this now correctly sends one per item line._  
IM-10594 - Public API - Transaction line Item Group  
_Public API - Transaction line Item Group_  
IM-10556 - Reindex button in Platform Button appears not to work  
_Platform Admin - Reindex now sends an email when completed_  
IM-9833 - Creating a new tenant does not work if you are not a platform administrator  
_Platform Admin - new tenant creation bug fixed._  
IM-10855 - Sidebar Customer Submenus Incorrect linking  
_The Sidebar Customer Submenus linking has been addressed_  
IM-10649 - Label Print Arm Settings url  
_Fixed a bug in device settings which meant the labelPrintUrl was always set to production_  
IM-10901 - Unable to access modules from portal sidebar  
_Portal - Modules available in the sidebar_  
IM-10903 - PlatformAdmin - Failed to create a new tenant with new user  
_Fixed UI errors during creation of new tenant_  
IM-11034 - InventoryUI: Error on loading items in itemsoverview  
_Inventory - Bug fix for item overview_  
## Other Improvements  
IM-5480 - Optimize stocktake count import  
_Bug Fix - bulk stocktake import_  
IM-8339 - Move Custom Attributes in Item UI into Inventory UI  
_Inventory - Custom Attributes moved from Item._  


# RELEASE VERSION: 10th August 2021
## FEATURES
### RETAIL
IM-9921 - Item List Additional Columns  
_Inventory -Item list, extra columns manufacturers item number and item cost._  
IM-6034 - PoS - When you refund (return an item), there is no check against the original receipt, so you can use the same receipt more than once.  
_Return items are checked against the original receipt_  
IM-8691 - KFR-129: Filter the barcode that is searched for in Stocktake  
_Inventory - Stocktake barcode filter_  
IM-4807 - Inventory - Movement - Inactive shop showing in the 'Shop' drop down  
_Inventory - Item - movements inactive shops no longer show in drop down_  
IM-5730 - PoS - when off line email receipts get silently dropped  
_POS - Send Email receipt disabled when offline_  
IM-8086 - Edit GRN quantities  
_Inventory - Goods Receive edit quantities and allow over receive option in backoffice_  
IM-9318 - G00090 - S1 - Creating Item Infos  
_Backoffice - Item info setup (Not POS)_  
IM-9810 - Order  - Extension Data  
_Public API - Order extension_  
IM-9601 - S4 Item module - Dimension Types  
_Inventory - Dimension types moved from Item_  
IM-7086 - Print all variants on label print  
_Inventory - Print all variant labels for master item_  
IM-9566 - G00056 - S1 - Return to Supplier: Create Return Document  
_Created Vendor Return document_  
IM-9842 - CnC - S3 - Configure Web Order Dispatch Note Variable Footer Text  
_Adds customisation options to web order dispatch note._  
IM-9843 - CnC - S4 - Print Web Order Dispatch Note  
_Adds ability to print an A4 web order dispatch note._  
IM-9906 - CnC - S5 - Re-print Web Order Dispatch Note  
_Adds ability to reprint web order dispatch note from POS journal._  
IM-9617 - S3 Item module - Dimension Templates - Saving  
_Inventory - Dimension templates saving automatically (no save button)_  
### PLATFORM
IM-10402 - Alphanumeric ordering for the payment provider drop down menu in Admin>Manage K3 Connector  
_Admin - Manage K3 Connector - alphanumeric ordering_  
IM-10379 - Adding Worldline to Payment Providers in Admin  
_Admin - Payment Providers - addition of Worldline_  
IM-10277 - Fiskaly Receipt ID Added to eReceipt  
_Fiskaly Receipt ID Added to eReceipt_  
IM-9802 - BI Gateway - Product Data  
_Additional endpoints - BI gateway - Product Data_  
IM-9800 - BI Gateway (Phase 1)  
_GET Endpoint to obtain Reason Codes_  
IM-9821 - BI Gateway - Inventory Data  
_New Get endpoints for Inventory Data_  
IM-9801 - BI Gateway - Reference Data  
_Additional endpoints for the BI gateway - Reference Data_  
IM-9804 - BI Gateway - Customer Data  
_Additional endpoints for the BI gateway - Customer Data_  
IM-10421 - Filters required on Stock Take Headers API  
_Public API - Stocktake filters_  
## BUGS
IM-10358 - MTD - Unable to view transactions  
_Bug fix applied to restore the view of transactions_  
IM-8392 - Public API Order endpoint issues  
_Public API order endpoints_  
IM-7445 - Stocktake: Total counted quantities is not automatically updated  
_Fixed issue where total counted qty is not automatically updated_  
IM-7400 - Inventory: Create new node, Code field not validated  
_Code node just accepts regular letters and numbers_  
IM-9654 - Analysis - Store Sale Summary Date Selection Shows Extra Dates  
_Fixed issue where extra date was added to the Store Sale Summary_  
IM-9855 - TOP & POP /breakdown/{basketId} 500 internal server error   
_Fixed issue where could not complete a payment in POP_  
IM-8681 - Order Status Display number showing Database ID Instead of Order Number  
_Order Number now displays rather than the database Id_  
IM-9771 - Order Display - Orders showing in mixed up format  
_The orders now grouped correctly by modifiers_  
IM-7822 - POS Filter Customer: labels non-standardised  
_Labels standardised in POS Filter Customer_  
IM-10351 - Adding SimplePOS module on tenant fails  
_SimplePOS bug Fix_  
IM-10420 - Product Configuration - Configuration - Error loading page  
_Product Configurator - bug fix error loading page_  
IM-10455 - Kiosk: Order Status Display -  Issue on the first load if no orbAccessTokenSupport present  
_Kiosk & Order Status Display - Bug Fix re orders not showing._  
IM-7755 - POS: Capital letter are not standardised   
_Capital letters standardised in POS_  
IM-8014 - Inventory - Transfers - Inactive Shop Showing in Location Drop Down List  
_Inventory - Transfers - inactive shops_  
IM-7735 - Inventory - Inactive shop appear in PO drop down  
_Inventory - Purchase order - Inactive shops_  
IM-10329 - POP Gateway Failing on Dev with Basket  
_Fixed issue where the payment in POP could not be completed_  
IM-10423 - Document ID filter on GoodsReceiptNote API  
_Public API - Document ID Filter_  
## Other Improvements  
IM-9841 - Imei pop up is too slow  
_Improved the speed of the IMEI pop up_  


# RELEASE VERSION: 13th July 2021
## FEATURES
### RETAIL
IM-6305 - PoS - Needs picking list in Imagine  
_POS - Picking List_  
IM-8922 - G00060 - S3 - Item Options - Actioning Options at POS - Price  
_Items can be flagged for the price to be prompted on POS._  
IM-8648 - G00057 - S1 - Offline Stock Menu  
_Inventory - Additon of Offline stock_  
IM-8649 - G00057 - S2 - Offline Stock - Download PDF Option  
_Offline Stock - Download a PDF_  
IM-8650 - G00057 - S3 - Offline Stock - "Transfer to On Hand" action  
_Inventory - Offline Stock transfer back to online_  
IM-8462 - G00046 - UK Gap 3.1 - Purchase Order Sort  
_Inventory - Purchase order sort order_  
IM-9211 - Add offline stock via POS (expand on existing feature)  
_Offline Stock via POS_  
IM-9209 - S7 - Add offline stock via Inventory  
_Offline Stock - Add offline stock via Inventory_  
IM-8761 - G00045 - Gift Aid - S1 - Gift Aid Module  
_Add New Module - Gift Aid_  
IM-9529 - G00042 - Customer PPE Explicit Pricing  
_PPE - Multi Buy with Price per item._  
IM-6565 - Back Office - make Reason Code UI more user friendly  
_Backoffice - Reason Code UI improvements_  
IM-6359 - PoS - alter gift receipts to refund just the item listed and not transaction  
_Scanning Gift Receipt now loads just the item to be returned rather than all original transaction_  
IM-9651 - G00045 - Gift Aid - S2 - Gift Aid Receipt Settings  
_Gift Aid - Receipt Settings_  
IM-8776 - G00045 - Gift Aid - S3 - Item Selection  
_Gift Aid - Item Selection_  
IM-8762 - G00045 - Gift Aid - S4 - POS Data Capture  
_Gift Aid - POS Data Capture_  
IM-9799 - CnC - S1 - View Web Order Picking List in modal form  
_Adds option to select printing of the web order picking list to an A4 printer in addition to receipt slip._  
IM-8763 - G00045 - Gift Aid - S5 - View Gift Aid Transactions  
_Gift Aid - List of Gift aid transactions within Gift aid module_  
IM-8764 - G00045 - Gift Aid - S6 - Export Gift Aid Transactions  
_Gift Aid - Export to CSV._  
IM-9798 - CnC - S2 - Print Web Order Picking List on A4  
_Support for printing of POS web order picking list to A4_  
IM-10266 - CnC - S1.5 - Prevent more than one Web Order in Transaction  
_CnC - Prevent multiple orders_  
### PLATFORM
IM-9823 - Basket - CustomerNumber  
_Basket - CustomerNumber - Header level and PublicAPI_  
IM-9356 - Platform Admin - User rights  
_Platform Admin - platform admin user able to see the integrators tab and create new integrators/integrations for the tenants in their group._  
IM-9858 - Stock Transfer Modified Date  
_Inventory - Stock transfer Modified Date_  
### MTD & BESPOKE DEVELOPMENT
## BUGS
IM-9838 - Pos - Item Shortcuts are missing Item Variant Name.    
_Bug Fix - POS shortcuts missing information_  
IM-8933 - Create Bundle fails if you do not enter a value in the Restricted Quantity  
_Product Configurator - Bug fix for 'Restricted Quantity'_  
IM-8055 - Product Configurator: Bundle Sales Price is 0  
_Bug Fix - Product Configurator bundle price issue_  
IM-7700 - Refund transaction should not post an order  
_SimplePOS not posting an order_  
IM-9186 - PO-GRN Item Matrix Issues  
_Fixed issue with 3 dimensions item in PO_  
IM-9483 - A partial stock take with a selection of item groups also includes articles which used to belong to those item groups  
_Stocktake - Bug Fix for inactive items/hierarchy issue_  
IM-9730 - Duplicate Items Displayed on Purchase Order - Find Items Manually  
_Bug Fix - Inventory Purchase order Duplicate items_  
**Automated re-index of ES database required for this fix**  
IM-9789 - InventoryUI: Transfer In grid crashes with Danish culture  
_Bug Fixed - Inventory UI Transfer grid_  
IM-8699 - SimplePOS: Issue with languages  
_SimplePOS - Languages added_  
IM-9411 - Unable to create an Expenses entry in Back Office  
_Bug fixed, functionality restored to previous version and as detailed in the Help files_  
IM-8851 - Dynamic Scroll on Stock Lookup Widget  
_Stock lookup - Scroll bar._  
IM-9145 - POS - using incorrect delimiter still an issue on EUR tenants  
_POS bug Fix - incorrect delimiter for Euro customers_  
IM-9741 - Kiosk Bundles When Adding to Basket  Showing Blank Screen - DEV Environment  
_Bug Fix - Kiosk Bundles showing Blank screen_  


# RELEASE VERSION: 15th June 2021
## FEATURES
### RETAIL
IM-9662 - Implement Budget Template Download and Import Budgets  
_Export and Import Shop budgets_  
IM-8921 - G00060 - S2 - Item Options - Editing Items (PO+Web)  
_Implemented story to edit Items (PO+Web)_  
IM-8925 - G00060 - S4 - Item Options - Actioning Options on PO  
_Inventory - May not be placed on PO on bulk import._  
IM-8922 - G00060 - S3 - Item Options - Actioning Options at POS - Price  
_Items can be flagged for the price to be prompted on POS._  
IM-8962 - G00060 - S5 - Item Options - Actioning Options on PPE and Sets  
_PPE Options and Sets_  
IM-8549 - Add "account" to payment types list  
_POS - Accounts in the payments list_  
IM-8203 - POS Customer: Customer No. and  Currency should not be editable  
_Fixed issue where customer no and account currency were editable_  
IM-5860 - Inventory - a couple of changes to the Figures tab   
_Fixed issue to have Sold label and Available field to displays data_  
IM-9633 - Set redirection pages for Stock screens  
_Redirection pages from Stock to Inventory_  
IM-8915 - G00024 - S2 Customer History  
_Add grid on the customer history that allows line items to be ‘drilled into’ to show more detail of the transaction_  
IM-9084 - G00029 - UK Gap 3.4 - PO Selection Criteria - autopopulate from create screen  
_Inventory - Autopopulate selection_  
IM-9217 - G00042 - Customer PPE - S2 - Customer Pricing  
_PPE - Customer groups for promotions_  
IM-8624 - G00024 - S1 Customer History  
_Customer - Customer History tab_  
IM-8234 - Inventory - limit data entry on Stock Take  
_Inventory - Restriction on quantity counted on stocktakes_  
IM-9560 -  G00041 - S1 - Purchase Order - Autopopulate across stores  
_Inventory - Purchase orders autopopulate for several stores using restock and reorder points._  
IM-8647 - Automatic Column Sorting  
_Backoffice - Automatic Column Sorting_  
IM-5663 - Inventory - have extra detail in the PO's and GRN's to see totals per order  
_Inventory - Add total quantity + total costs to Receive Goods._  
IM-9499 - Inventory - Stock Lookup - No dimension/variant/shop details  
_Fixed issue where the dimensions/variant/shop details were not displayed in Stock Lookup_  
IM-9215 - G00042 - Customer PPE - S1 - Discount by Customer Group  
_PPE - Discounts on customer groups_  
IM-9218 - G00042 - Customer PPE - S3 - Discount Improvements  
_PPE - New Multi Group Deal Bundle promotion added_  
IM-8268 - PoS - TM88v printed receipts don't show barcode  
_TM-T88V - receipt barcode printed_  
**This fix requires a connector reboot**  
IM-9082 - G00097 - POS - Return Function  
_Add option select items to return instead return the whole transaction_  
IM-9268 - G00072 - Add On-Hand and extra columns to Export of Stock Count File  
_Export/Import of stockcount - additional columns_  
IM-7774 - Purchase Order Form To Use Name Instead of Description to Identify an Item.  
_Inventory - PO to use name rather than description_  
IM-8359 - Vendor - Requires Additional Address Lines   
_Vendors - additional address fields_  
### PLATFORM
IM-8130 - Item Validation  
_The Item Creation process now validates the total number of variants created for a Master Item. The default limit is set to 200_  
IM-9530 - Platform Admin - Extension Creation  
_Platform Admin - Extension creation_  
IM-9556 - Update Portal dashboard with image background  
_Portal - New Background images_  
IM-9713 - Automatic Column Sorting PlatformUI  
_Automatic Column Sorting_  
IM-9782 - Public API - Transfer Put   
_Add new endpoints to PUT Transfers in and out_  
IM-9055 - Extension Framework - Extension Management Tool   
_Extension Management Tool_  
IM-9590 - Public API - Item by ID  
_Public API - Item by ID_  
### MTD & BESPOKE DEVELOPMENT
IM-9052 - PO IMEI check companion check  
_Companion App - IMEI changes_  
## BUGS
IM-8829 - Request Header Or Cookie Too Large  
_Bug Fix - Cookie too large_  
IM-8071 - Missing Header Info on completed Receive Goods.  
_Inventory Bug fix - Received Goods Number and Notes field_  
IM-9320 - Customers - new tenants don't have exchange ratios set  
_Customer - exchange ratios_  
IM-9339 - Resend receipts for march 1st to march 16th  
_Project that can resend receipt from a connector_  
**This fix requires a connector reboot**  
IM-8783 - Inventory Transfers - Unable to Save and Commit to Create a Transfer Record  
_Bug Fix - Inventory create transfer error 500_  
IM-9482 - Public API - Mapping error when creating a parked sale  
_Fixed error when creating parked transaction via Public API_  
IM-8900 - Seed Data fails to insert  
_Fixed issue where demo data was not inserted when creating a new tenant and select to insert demo data_  
IM-9752 - Public API - Sales transaction stock movement  
_Fixes issue with quantity when creating sales via public API_  
IM-9790 - MTD API returning two obligations with the same date range  
_MTD - Bug fix_  
IM-9312 - SelfServe apps - Valitor integration  
_Self Serve Bug fix - Valitor integration_  
IM-8516 - Visual bug in Shop creation view  
_Bug Fix - Shop creation visual bug_  
IM-8418 - POS password does not allow certain special characters.  
_Changed Clerk password reset to be numeric only_  
IM-9511 - POS Keyboard Clearing Inputs  
_Fixed issue where values being removed from input field on POS when closing keyboard_  
IM-9514 - Simple POS clerk login failure  
_Fixed a bug in Simple POS which stopped clerks from being able to log in due to password encryption_  
IM-9502 - Inventory Add Items by Matrix button not refreshing  
_Bug - Fixed matrix view_  
IM-9747 - Null cost when adding item to GRN  
_Bug Fix Inventory - cost price on GRN_  
IM-9604 - Item Restock Level & Reorder Point values not reflected in Stock Lookup  
_Inventory - Stock Lookup - Restock and Reorder Points now show_  
IM-9331 - POS - Receipt barcodes not recognised in 'Find Receipt'.  
_POS - Receipt barcode scanning in 'find receipt'_  
IM-7443 - New/Edit Customer Save Button in POS on 1024x768 Res.  
_Fixed issue where was not possible to select the currency on the dropdown_  
IM-7332 - Customer Groups: Issue creating group with name that already exists  
_Fixed issue where was not displayed message that group name already exists_  
IM-7389 - Customer - Groups: Header select all checkbox has no functionality  
_Fixed issue where First name checkbox in Customer Group had no action_  
IM-8674 - Bug with Printing IP when no network is present  
_Startup slip is now printed only when Ethernet port is connected_  
**This fix requires a connector reboot**  
## Other Improvements  
IM-8272 - Move remaining Stock UI functionality into Inventory UI  
_Depreciate Stock and create in Inventory - Stock lookup Overview, Stock lookup, Purchase Orders, Receive Goods, Transfers, Stocktake and Logs_  
IM-8655 - Public API slow Item update  
_Public API - Item update speed_  
IM-9352 - External message ms - BCC/Cc  
_Fixed an issue which meant order receipts were not being bcc'd to the shop when ordering through pop_  


# RELEASE VERSION: 20th April 2021
## FEATURES
### RETAIL
IM-8394 - G00039 - UK Gap 5.11 - Profit Margin Calculation  
_Item detail and Item creation now show the margin % based on cost, sell price and tax rate_  
_Mote: there is a known issue where the profit margin does not show during Item Creation_ 
IM-8742 - G00060 - S1 - Item Options - Editing Items (POS)  
_Added POS item option_ 
_There is a known issue with bulk setting of this value to FALSE in the Summary tab_
IM-2740 - Inventory - Print PO/GRN as a PDF  
_Inventory - Ability to download PO or Receive goods as PDF_  
IM-9068 - G00060 - S3 - Item Options - Actioning Options at POS - Discount  
_POS - Not allowing discount on specific items._  
_This is pre-release and will not currently function in the PoS_ 
IM-9069 - G00060 - S3 - Item Options - Actioning Options at POS - Quantity  
_POS - Stopping increase of quantity_ 
_This is pre-release and will not currently function in the PoS_ 
IM-8398 - Connector Update Button  
_It was added a reboot connector button on POS_  
### PLATFORM
IM-9163 - Summary Transaction Data Access  
_Public API - Transaction Summary data now available_  
IM-9207 - Public API - Purchase Order   
_Public API, purchase orders are now created by passing the barcode only on the purchase order line_  
### MTD & BESPOKE DEVELOPMENT
IM-8756 - Bank ID Integration  
IM-8757 - NAV Service Check (Priority: High)  
## BUGS
IM-8737 - Over receive Goods receipt note on partial  
_Inventory bug fixed regarding over receiving against a PO_  
IM-9260 - Cant enter text in note field on an item  
_POS bug Fix - unable to add item note._  
IM-9329 - Shop Policies in SelfServeAdmin not saving  
_Fixed a bug in self serve admin which caused the policies to not be saved_  
IM-9366 - Product Modifiers After Save Not Available to Edit or Remove - Critical  
_Product Configuration - Bug fix on item modifiers_  
IM-8901 - Inventory Item Creation Tenant Currency  
_Inventory - Item creation local prices_  
IM-8820 - Platform Admin - users active flag is alway s True in UI  
_Platform Admin - bug fix for inactive/active users_  
IM-8547 - Customer - Issues to assign and unassign a customer to/from a group  
_Fixed the issue where could not assign or unassign a customer to/from a group_  
IM-9361 - Item Creation 'Variants' edit page does not load properly   
_Bug fixed with page loading_  
IM-8821 - Inventory - Vendor On Item List Does Not Update When Changed Within Item  
_Vendor Name in Item List now reflects that set against the item_  
IM-9112 - Inventory - Unable to Print Barcode Labels from PO and GRN  
_Inventory - Bug fixed Label printing GRN/PO_  
IM-9362 - POS - Tax not applied to Item Group sales  
_Bug Fix - Tax on Item Groups not works_  
IM-9281 - UI - Transactions "hide submitted..." broken - checkbox using old event  
_Updated checkbox using Im-checkbox from webcomponents_  
## Other Improvements  
IM-8192 - POS Update procedure  
_POS - Automatic Update_  
IM-9352 - External message ms - BCC/Cc  
_Fixed an issue which meant order receipts were not being bcc'd to the shop when ordering through pop_  


# RELEASE VERSION: 23rd March 2021
## FEATURES
### RETAIL
IM-8319 - G00029 - UK Gap 3.4 - PO Selection Criteria - restock+reorder point  
_When editing a purchase order, the reorder point and restock level can be displayed as additional columns._  
IM-9083 - G00029 - UK Gap 3.4 - PO Selection Criteria - last sold date  
_Additional information added_  
IM-8459 - G00037 - UK Gap 4.3 - Purchase Order  
_Added option to automatically create an order for remaining items when cancelling a partially received Purchase order._  
IM-7989 - Gift Voucher Expiry Date  
_Can now set valid period for Gift Vouchers and Credit Notes in days within Shop Setup, expiry date is printed on receipt._  
IM-6190 - Scheduling VAT changes  
_When setting a VAT amount within a Tax Group the option set a start date is now available_  
IM-8393 - G00031 - UK Gap 3.11 - Purchase Order Print or Email PDF  
_When downloading an order as a PDF it will automatically named based on the number and title._  
IM-8912 - Prevent a POS user from entering a negative payment value.  
_It is not not possible to enter a minus sign '-' from the physical or on-screen keyboards_  
IM-8717 - Stock Purchase Order and GRN Close Time not using timezone  
_Inventory - GRN and PO to have timezone information on them_  
IM-8424 - G00036 - UK Gap 4.1 - GCON0036 - Goods Receiving from Purchase Order  
_Inventory - On Goods received, the order selection filter is a combination of the Order Number and the Order Title_  
IM-7483 - POS - add a Label variable for an item's current price  
_The variable {currentPrice} has been added for use in PoS labels_  
### SELF SERVE
### PLATFORM
### MTD & BESPOKE DEVELOPMENT
IM-9051 - Purchase order API needs a new field in the purchaseorderline structure  
_Public api now allows a serialNo to be passed on purchase order lines. Note, Imagine does not support serialised tracking of items_  
## BUGS
IM-8576 - Item list On-hand range values incorrect when negative (Related to IM-8112)  
_Fixed the calculation for the range, correctly taking movements in to account_  
IM-8968 - The connector sets receipt dates to utc time and not local time  
CONNECTOR UPDATE REQUIRED  
_Fixed issue where the time on the receipt was UTC and not local time_  
IM-8852 - Broken buttons  
_Fixed buttons that were deemed to not function as expected_  
IM-8707 - Inventory - Stock Lookup Overview - Variant Dimension Information Required  
_The “Stock Lookup Overview” in the inventory section now shows the variant dimension information_  
IM-8945 - Create Shops fails  
_Issue resolved with store creation._  
IM-9149 - Error in Simple POS at the theatre  
_Added in checking for both a successful transaction and payment. If payment fails we show the error message “Payment Failed”, if transaction fails there is a re-attempt process in place with the RBO MS_  
IM-8428 - RBO - Can't create new Tax Group  
_Fixed issue with creating new Tax Groups_  
IM-8858 - Wrong tax rate used on the POS  
_Fixed issue with wrong tax rate being used when multiple tax groups assigned_  
IM-8644 - Kiosk 2 and Simple POS Card Receipt  
_Card slip is now printed on kiosk 2  or Simple POS transactions_  
IM-9118 - Public API - Transfers  
_Fixed a bug on the public api which meant the Transfer ID was not returned when performing a POST request._  
IM-9095 - Missing items lines in transfers  
_Fixed issue with missing item lines within Transfers_  
IM-8863 - Gift Certificate error - This voucher has expired  
_Fixed issue with Gift Vouchers being issued expired_  


# RELEASE VERSION: 9th March 2021
## FEATURES
### RETAIL
IM-7243 - Use default label template in GRN print all functionality  
_Inventory - change to the print label facility._  
IM-6183 - Issue with keyboard on screen blocks for info.  
_Fixed issue where the unit labels in cash statement were not displayed_  
IM-8546 - Stock counts - add 'Select All' to shop filter and a new date filter  
_Select All filter added as well as new date filter_  
IM-8112 - GCON002 Add columns to show the overall on-hand quantity and min/max on-hand for each item  
_Inventory - shows overall quantity on hand._  
IM-8497 - Feature request for Footer and Header for credit notes  
_Adds CN and GV header and lines to the appropriate receipts. 
IM-7838 - Inventory - limit connectors shown when printing labels  
_Connectors can now be filtered in dropdown selector_  
IM-8261 - Change length of vendorno in public API  
_Increased permitted value for Vendor Number to 20 characters_  
IM-8358 - Add a toggle in Admin->Receipt Setup to hide loyalty  
_POS/Admin and Connector Update to allow loyalty to be printed on the receipt._  
IM-7151 - Feature request: add {itemVendorName} as a label variable  
_Add {itemVendorName} variable for use. See Help files for further details_  
IM-5660 - Inventory - Add the possibility in a PO to cancel the remaining quantity  
_Purchase Order now shows the "Qty Received to date" and allows cancellation from any status after being placed.._  
IM-6470 - Inventory - update the way Vendor is present on List and Summary  
_Item summary now shows current vendor and a new field showing any previous vendors. Item list will show the current vendor._  
IM-8323 - Inventory - Adding Vendor doesn't allow to specify Vendor number  
_Removed obsolete fields from 'Add Vendor' within Item Creation process, now only require name and optional Vendor Number._  
IM-6430 - Search function for receipts only works if corresponding date is also searched for  
_Fixed issue where search a receipt it is needed to enter a date_  
IM-5510 - Define payment types in backoffice by  tenant  
_It is now possible to define your own payment types in the Back Office under Payment Types_  
IM-5599 - POS Graphs  
_Improved the visibility of the sales target on the chart and the summarised button now keeps it's set state._  
IM-7132 - PPE - Option to delete unused item bundles  
_PPE - Ability to delete a bundle that is not attached to a promotion_  
IM-8229 - Inventory Search Text Box Requires the Quick Clear X Function   
_"X" has been added to the search box_  
IM-6684 - PosUI: Clear indication if not connected to connector  
_POS - Clear indication of connector status_  
### SELF SERVE
IM-5389 - Kiosk Management -> Product Configurator  
IM-5390 - Product Configurator - Remove Item Groups  
IM-5564 - Multiple Order Status Displays  
IM-8430 - Expand Images  
_TOP and POP will now allow a user to view images in a bigger full screen lightbox from the item details screen by tapping the image._  
IM-7955 - Add Swedish to language picker  
_SCO - Addition of Swedish to the language picker_  
IM-4796 - Ability to create multiple composer lists  
IM-5068 - Save to Basket in SelfOrder  
IM-5278 - ComposerGroup fixes  
IM-8595 - Add Analysis Data to all Point-Of-Sale applications  
_Self Serve - Data added to enable analysis reporting_  
IM-7691 - Timeslots in OSD - Time Slot Management  
_The OSD will now allow you to manage your time slots using the new button._  
IM-7488 - Hide Order Waiting Time  
_Kiosk will now have the Waiting Time hidden if the relevant setting is configured in SelfServe Admin_  
IM-6444 - KFR-86: Terms and Conditions and Other Pages in SelfServeAdmin  
_Self Serve Admin can now configure your Shop Policies - FAQ, Delivery, Return and Q&A which appear in POP._  
### PLATFORM
IM-5807 - Platform Admin - Connector Management Listing View  
_Connector management added to platform admin_  
IM-6480 - Connector Free printer security   
_Cloud Connector now has an additional security mechanism between the Star Printers and Imagine_  
IM-5040 - Connector Free End of Day  
_Cloud Connector now supports End of Day functions, which are now present and processing in the cloud._  
IM-5797 - Connector Free - Card Payments  
_Cloud Connector now supports Adyen as a payment method, ready for piloting._  
IM-5786 - Ability for Administrators to Disable 2FA  
_Platform Admin - Ability to disable 2FA for a user_  
IM-5834 - Connector Free - Feedback Loop  
_Cloud Connector now offers a detailed Status endpoint which the POS can use to display meaningful error statuses from the cloud-connected hardware_  
IM-6517 - Platform Admin - Assign Shop Features  
_Ability to assign Shop Features within tenants now added to Platform Admin_  
IM-5804 - Platform Admin - Shop Feature Management  
_Platform Admin - Shop feature management_  
IM-6361 - Portal - when using 2FA can the Authentication Code box be in focus?  
_2FA code entry box now in focus by default, ready for the user to enter their code_  
IM-8258 - SearchMs: enable verbatim search for strings  
_Fixed issue to search Receipt in POS without enter dates_  
IM-7842 - Stock Lookup Exclude Zero stock  
_Option to exclude zero stock added to Stock Lookup via the API, this will allow negative stock to still be returned._  
IM-8044 - Email Customers  
_Platform Admin - Email to Imagine Portal users or selected group from dropdown list_  
IM-8249 - Platform Admin - inactive shops in Widgets  
_Platform Admin - Addition of status column on shop - widgets and shop features_  
IM-8480 - Platform Admin - Tenant Creation user validation  
_Platform Admin - User validation_  
IM-8623 - Portal - remove paging from profile/mymodules  
_Remove Paging from Module Reorder Screen_  
IM-8417 - Public API refresh token flow  
_Added scope option to the public api token request so that the refresh token has to be explicitly requested in order for this to be created_  
IM-8769 - Public API -Item Stock Update Adjustment Number  
_Public API Item Stocks Update endpoint now optionally allows user to pass in the adjustment number to be used, if not send this will be auto generated_  
### MTD & BESPOKE DEVELOPMENT
IM-7925 - Export to Excel feature  
_Digital VAT UK added option to download selected transaction as CSV file._  
IM-8388 - HMRC introduced new FP headers, implement them  
_Implemented new FP headers_  
IM-8197 - UI - Update to new side bar, top bar  
_Digital Tax UK Menu and Sidebar updated to new layout theme_  
IM-8198 - GW - Update the K3 nuget to enable module pinning feature  
IM-7926 - Filter transactions by submission periods  
_Digital VAT UK when viewing transaction list the filter start and end date is automatically set by choosing a submission period._  
IM-8386 - Logs deletion by date ranges  
_Digital VAT UK Delete logs now only deletes selected date range_  
IM-8387 - Automatic deletion of logs  
_Logs older than 1 month are now automatically deleted_  
IM-8688 - Fix intermittent HMRC communication issues  
_Resolved intermittent HMRC communication issues_  
## BUGS
IM-7688 - Clerk login password input not cleared  
_Simple POS - Fixed bug with password not clearing on input_  
IM-7066 - SimplePos, isManager for supervisor functions only works the first time  
_The SimplePOS Is Manager function only worked the first time, this is now fixed_  
IM-8804 - Fix language file issue in SelfServeAdmin  
_SelfServeAdmin was displaying dummy langauge strings due to an issue with path based routing which is now resolved._  
IM-8493 - Scanning multiple giftlabels at Pos returns  wrong value on second label scanned  
_Fixed issue. Scanning the gift label will return the quantity and items from original receipt, no need to scan all gift labels._  
IM-8551 - Issue with calculating loyalty points with return on the imagine POS  
_Loyalty Points are now returned to the Customer's balance when performing a return where Loyalty Points were used as payment._  
IM-8798 - Card payment withdraws wrong amount of money due to delimiter error  
_Fixed issue with wrong amount being withdrawn if incorrect delimiter entered_  
IM-8877 - PoS - all GV and CN are created as expired  
_Fixed issue with GV and CN's being expired on creation_  
IM-7498 - Reports - Sales Analysis Data Not Showing by Item  
_Fixed issue with Sales Analysis report not showing data by item_  
IM-7518 - POS: Customer address is not displayed  
_Fixed issue where customer address was not displayed in POS_  
IM-7720 - POS Park transactions:  Receipt line is cut and not well organised  
_Fixed bug where the item lines in POS where not organized_  
IM-8167 -  Item Create - Hierarchy Selection can be By-passed  
_Inventory - Fixed bug with Hierarchy when creating new item_  
IM-7283 - Customer: Create New group Fields are filled  
_Removed the placeholders from the fields_  
IM-7315 - Loyalty - Audit Log: Save Configuration button should not be displayed  
_Removed_ Save _button from Audit log_  
IM-7429 - StockMs: Handling of an items alternative barcodes on PurchaseOrders  
_Corrected the handling of an items alternative barcodes on Purchase Orders_  
IM-7472 - PPE – Price Field Format not 2 Decimal Places on Promotions Setup  
_Fixed the decimal place to show as 2 places even when the value is 0_  
IM-7731 - Admin Shop Setup: Year displayed is 0001  
_Fixeed the issue where year displayed is 0001_  
IM-8643 - Customer Module: Primary billing address goes missing after customer is saved in POS  
_Fixed the issue where the primary  billing address was not saved_  
IM-8527 - POS - Using incorrect delimiter can cause wrong amount to be redeemed  
_Fixed issue where entering the wrong delimiter would cause incorrect amount to be redeemed_  
IM-7427 - Tenant Features - Unable to save valid JSON containing an array  
_Tenant Features now supports arrays and nested json objects_  
IM-6888 - ExceptionHandlingMiddleware is missing from ms-posidentity  
_Added exception handling to pos identity service_  
IM-8422 - Auth code invalid error  
_Fixed issue where the Auth code was giving an invalid error_  
IM-8500 - MTD - Time displayed in logs not clear if AM/PM  
_Time in the logs now displays AM/PM_  
IM-8693 - CSV Export is missing the Record ID  
_RecID column now included in Digital Tax UK transactions export of transactions._  
IM-7526 - Tile buttons not visible in Composer Groups in Visual Composer  
_Bug Fix for the 'x' in Visual Composer > Composer Groups_  
IM-8125 - Order Status Display - Set display categories not showing  
_Order Status Display categories now shows on Tablet devices_  
IM-7680 - P400 val issue  
_Fixed a bug in the Verifone pay integration due to a change in data type in mongo_  
IM-7915 - Extended Receipt not updating correctly on Connector  
_Extended receipt option now saving correctly in admin and printing.  
IM-7882 - Connection string deadlock - ItemManagementMS  
IM-7904 - Connection string deadlock - PPE MS  
IM-7913 - Vault connection string service manual HTTP client - RBO MS  
_Fixes to the RBO Microservice conenction string to improve some stability issues_  
IM-7951 - Connection string deadlock - CustomerMS  
IM-7973 - Connection string deadlock - PeopleCounterMS  
_Update to the people Counter MS to fix SQL issues_  
IM-7920 - User details with only one module enabled  
_Fixed an issue which stopped users being able to access their user details when they only have 1 module enabled_  
IM-7976 - Public API - Stock Adjustment mapping error  
_Fixed an error when posting a stock adjustment through the StockAdjustment endpoint on the public api_  
IM-8656 - Public API - Create Stock take  
_Public API Stocktake POST request now responds with the created stocktakeId_  
IM-8313 - ORB: Error 500  
_Fix issue where ORB could not be loaded_  
IM-8322 - Discounted Item gift label  
_Fixed issue where returning discounted item via gift receipt it was showing original sale price_  
IM-8380 - Username not being validated in the Platform UI  
_Added validation in platform admin when adding a user to an existing tenant to check if the username already exists_  
IM-8464 - Visual Composer - 'Choose a tile type' menu blank  
_Visual composer - update tile type menu_  
IM-8865 - Product Configurator: Restricted quantity and Age restricted are not saved  
_Fixed issue on Product Configurator where restricted quantity and Age restricted are not saved_  
IM-8438 - KFR-97: ORB Compatibility with Multiple OSDs  
_The ORB will now only show orders when all components of the order are completed when using multiple order Status Displays_  
IM-8477 - UI - Styling of drop down elements are different  
_Fixed styling of drop down element on transactions page_  
IM-8565 - UI - Config checkbox update not working  
_Fixed issue with Settings checkbox not updating_  
IM-8622 - Companion App Not setting createdBy for GRNs  
_Companion App now adds the created by when performing a Goods Receipt_  
IM-8767 - UI - Landing page HMRC auth check  
_Digital VAT UK - HMRC authorisation status is correctly displayed in a new browser session, even in incognito mode._  
IM-8799 - Public API -Item Stock Update not be handle multiple requests  
_Public API - new endpoint for updating stock to an explicit value which creates the adjustment via a long running background task_  
IM-9053 - Fetch Timeslots by date in OSD returns incorrect timeslots  
_OSD was returning incorrect timeslots based upon date._  
## Other Improvements  
IM-7654 - Refactor Search Aggregator Transaction Reindex  
_Refactored transaction reindex to perform in batches so that it can handle large data_  
IM-7806 - POP Config (Pick-up, delivery, etc.)  
_SelfServeAdmin now supports the ability to configure your POP delivery and pickup settings._  
IM-7835 - SearchAggregatorMs: Update repository to match recent RboMs migrations  
IM-8040 - Public API - fix docker compose file  
IM-8307 - Make GW-ProductConfig use ms-itemmanagement.item instead of ms-kiosk.item  
IM-8308 - Make GW-VisualComposer use ms-itemmanagement.item instead of ms-kiosk.item  
IM-8383 - Improvements on Simple Pos for a small screen size(mobile and android device)  
_Simple POS - improvements to visual content for mobile devices_  
IM-8295 - Vault stability issue might be caused by old version of nuget packaged  
IM-8331 - New SSP Kiosk Item Import  
IM-8587 - Downpayment fields not exposed as part of public API  
IM-8677 - Extend CA StockTake review to account for SerialNo   


# RELEASE VERSION: 23rd February 2021
## FEATURES
### RETAIL
IM-7901 - Validate Customer Phone Number input against E.164 international standard.  
_Customer Phone Numbers can now validated against the E.164 international standard, by default this is off but can be activated under the Settings tab in the Customer module._  
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
IM-8229 - Inventory Search Text Box Requires the Quick Clear X Function   
_"X" has been added to the search box_  
IM-6684 - PosUI: Clear indication if not connected to connector  
_POS - Clear indication of connector status_  
### SELF SERVE
IM-7955 - Add Swedish to language picker  
_SCO - Addition of Swedish to the language picker_  
IM-7689 - Timeslots in OSD - Order Details  
_OSD can now display and print out orders using a Windows Printer as well as utilise Time Slots which may be configured in SelfServe Admin_  
IM-7488 - Hide Order Waiting Time  
_Kiosk will now have the Waiting Time hidden if the relevant setting is configured in SelfServe Admin_  
IM-6560 - Description shown instead of Name in Stocktake  
_Inventory->Stocktakes and Good receipt notes now show Item Name instead of item description_  
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
IM-8804 - Fix language file issue in SelfServeAdmin  
_SelfServeAdmin was displaying dummy langauge strings due to an issue with path based routing which is now resolved._  
IM-8493 - Scanning multiple giftlabels at Pos returns  wrong value on second label scanned  
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
_Removed 'Save' button from Audit log_  
IM-7472 - PPE – Price Field Format not 2 Decimal Places on Promotions Setup  
_Fixed the decimal place to show as 2 places even when the value is 0_  
IM-7748 - Item Hierarchy Label Template Field Disappears  
_Fixed the tax rate form to include a scroll bar for longer lists_  
IM-6888 - ExceptionHandlingMiddleware is missing from ms-posidentity  
_Added exception handling to pos identity service_  
IM-7526 - Tile buttons not visible in Composer Groups in Visual Composer  
_Bug Fix for the 'x' in Visual Composer > Composer Groups_  
IM-7915 - Extended Receipt not updating correctly on Connector  
_Extended receipt option now saving correctly in admin and printing. CONNECTOR UPDATE REQUIRED_  
IM-7920 - User details with only one module enabled  
_Fixed an issue which stopped users being able to access their user details when they only have 1 module enabled_  
IM-8313 - ORB: Error 500  
_Fix issue where ORB could not be loaded_  
IM-8380 - Username not being validated in the Platform UI  
_Added validation in platform admin when adding a user to an existing tenant to check if the username already exists_  
IM-8363 - Modifiers are always displaying in £  
_Country specific currency symbol is shown is all areas, including Modifiers_  
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

