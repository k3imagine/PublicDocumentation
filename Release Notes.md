# RELEASE VERSION: 23rd February 2022 (Pre-release)
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
IM-11133 - ISV - S3 - Selling an Intersolve Intersolve Gift Card  
_Selling Intersolve gift card_  
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
_Parking receipt without Customers_  
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
