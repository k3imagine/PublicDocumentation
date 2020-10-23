<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="RELEASE_VERSION_28th_October_2020_0"></a>RELEASE VERSION: 28th October 2020</h1>
<h2 class="code-line" data-line-start=1 data-line-end=2 ><a id="FEATURES_1"></a>FEATURES</h2>
<h3 class="code-line" data-line-start=2 data-line-end=3 ><a id="RETAIL_2"></a>RETAIL</h3>
<p class="has-line-data" data-line-start="3" data-line-end="14">IM-7193 - Reports - Re-worked 7 standard reports. Min Ko’s team.<br>
IM-5087 - Search field in the POS is partial<br>
IM-3626 - Change Backoffice Shops overview to use a datagrid<br>
IM-6676 - Display stock info when creating purchase order<br>
<em>Qty On Hand and Qty on other PO is now available via the Column Chooser on the Data Grid</em><br>
IM-6674 - Backoffice - Hide markup and deduct amount on Vendor<br>
IM-6689 - Manufacturing item number, vendor item number in item creation<br>
IM-6688 - Hierarchy notes as the first starting point<br>
IM-6488 - Inventory - add Vendor Item Number to PO’s<br>
IM-6059 - POS - better user feedback for form filling<br>
<em>When the keyboard appears on the POS the current field name now appears next to the input field.</em></p>
<h3 class="code-line" data-line-start=14 data-line-end=15 ><a id="SELF_SERVE_14"></a>SELF SERVE</h3>
<p class="has-line-data" data-line-start="15" data-line-end="32">IM-5712 - Buying Bundles (Meals)<br>
IM-7094 - Lounge - Delivery threshold depends on Delivery charge<br>
<em>Within Self Serve lounge the free delivery threshold is now disabled until a Delivery charge has been entered</em><br>
IM-4955 - API endpoint for validating tenant, shop and table<br>
IM-4905 - Create SelfOrder UI<br>
<em>Creation of the Self Order UI</em><br>
IM-5010 - Fix CORS error on SelfOrder app<br>
IM-4925 - 500 response on add tile to composer group<br>
IM-4931 - Remove authentication from GW<br>
IM-4934 - Create BasketButton + BasketModal  Component<br>
IM-5167 - Validate ComposerTiles when adding them<br>
IM-5669 - Fix item flow from Micros<br>
<em>Obsolete</em><br>
IM-7105 - Lounge - Change Address step to be UK specific<br>
_Self Self Lounge Shop Set up has now been updated to use a UK format address _<br>
IM-7107 - Lounge - Modify payment warning text<br>
<em>Self Serve Lounge now has a warning when setting up the tenant to show the user that the OB Payments can be used for trial/demo purposes</em></p>
<h3 class="code-line" data-line-start=32 data-line-end=33 ><a id="PLATFORM_32"></a>PLATFORM</h3>
<p class="has-line-data" data-line-start="33" data-line-end="38">IM-5034 - Tenant Creation in Platform Admin<br>
IM-3434 - Tenant Features<br>
<em>Added Tenant Features to the internal use Platform Admin</em><br>
IM-6693 - Return Code in Transaction Response in API<br>
<em>Public API POST Transaction endpoint, response now includes the returnCode and returnDescription.</em></p>
<h2 class="code-line" data-line-start=38 data-line-end=39 ><a id="BUGS_38"></a>BUGS</h2>
<p class="has-line-data" data-line-start="39" data-line-end="73">IM-7270 - Integration GW  - Upsert Master Item new Item<br>
<em>Fixed a bug in the integration GW which caused an error when trying to add an item to an existing Master Item using the Upsert MasterItem endpoint. Added mapping in the integration GW for manufacturerMasterItemNo.</em><br>
IM-4305 - GET CondimentGroup using id returns a 204<br>
<em>Fixed a bug in Kiosk MS which caused a 204 to be returned when getting Condiment Groups by ID</em><br>
IM-7135 - Customer module: Account currency not saved<br>
<em>It is no longer possible to save a Customer without the Account Currency being set</em><br>
IM-5287 - Wrong total calculation on NOK<br>
IM-7027 - Error in Z-report - Bikester<br>
IM-4289 - GET condimentGroup API not returning body<br>
<em>Fixed a bug in Kiosk MS which caused a 204 response to be returned on the CondimentGroup endpoints</em><br>
IM-4598 - Internal error on looking up hierarchy node by code<br>
<em>Not for release notes, isolated fix for a specific data issue</em><br>
IM-2921 - PoS - Clerk login can be used on another tenant<br>
IM-6568 - POS throws error when returning receipt while customer widget is enabled<br>
<em>Fixed issue where returning a customer transaction with more than one discount applied would cause an error</em><br>
IM-7226 - <em>URGENT</em> Return receipt not printed - AddNature POS3<br>
<em>Fixed a bug in the POS UI which allowed the user to start a payment before the item requests had finished. This caused the POS to fall into a strange state on the payment</em><br>
IM-7181 - Cant see recieve goods list overview - AddNature<br>
IM-7288 - Goods Receipt Save and Commit - (AddNature)<br>
<em>Fixed a bug within Inventory UI =&gt; Receive Goods, which allowed the user to click <code>Save &amp; Commit</code> multiple times when posting a Goods Receipt Note</em><br>
IM-7235 - Stock GRN Recorded BY - Internet Stores<br>
IM-7162 - Creating new dimensions adds imagine created barcodes - Seeds<br>
IM-7260 - Cant do offline sales - Hummel<br>
<em>Fixed a bug which caused Offline cache to return no results due to historic link to Item Units which is now obsolete</em><br>
IM-7268 - Inventory - Item Import Barcodes not created in barcode table - Van Os<br>
IM-7199 - Customer Display NL Language<br>
<em>Added support for nl-nl , fi-fi and de-de in Customer Display</em><br>
IM-7287 - Inventory - Markup calculation confusing<br>
IM-7015 - InventoryUI: Adding barcodes to items<br>
IM-6921 - Simple Pos, not to make sale go trough after POS device throws error<br>
IM-7075 - Lounge - Item duplication when editing items<br>
<em>Fixed a bug in Self Serve Lounge which caused items to be duplicated when editing an existing item</em><br>
IM-7096 - Lounge - Omitting company logo causes Pop to fail<br>
IM-7153 - Platform Admin - Tenant expiry showing a date when set to Never</p>
<h2 class="code-line" data-line-start=73 data-line-end=74 ><a id="Other_Improvements_73"></a>Other Improvements</h2>
<p class="has-line-data" data-line-start="74" data-line-end="82">IM-6484 - SCO compatibility with Visual Composer: Data fetching/storage<br>
IM-6835 - Update ReportUI/GW to support reworked generic reports<br>
IM-4853 - Update <code>HttpClientExtension</code> to handle different 4xx status codes from MSs on Kiosk Gateway<br>
<em>Added additional handling of 4xx status codes in Kiosk GW</em><br>
IM-4890 - Speed up getting ComposerListEntries<br>
_Improved speed of the ComposerListEntries being returned _<br>
IM-7154 - OrderNumber on email receipt from TOP &amp; POP<br>
IM-7433 - Admin NL Translations</p>
<br>
<br>
<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="RELEASE_VERSION_14th_October_2020_0"></a>RELEASE VERSION: 14th October 2020</h1>
<h2 class="code-line" data-line-start=1 data-line-end=2 ><a id="FEATURES_1"></a>FEATURES</h2>
<h3 class="code-line" data-line-start=2 data-line-end=3 ><a id="Public_API_2"></a>Public API</h3>
<p class="has-line-data" data-line-start="3" data-line-end="6">IM-7152 - Faster stock lookup endpoint<br>
IM-6618 - Create Transactions<br>
IM-7005 - Shop Budget uploads</p>
<h3 class="code-line" data-line-start=6 data-line-end=7 ><a id="SimplePOS_6"></a>SimplePOS</h3>
<p class="has-line-data" data-line-start="7" data-line-end="9">IM-6814 - Release SimplePOS<br>
IM-7002 - Optional receipt print and email</p>
<h3 class="code-line" data-line-start=9 data-line-end=10 ><a id="SelfOrder_9"></a>SelfOrder</h3>
<p class="has-line-data" data-line-start="10" data-line-end="14">IM-5395 - Visual Profiles<br>
IM-6307 - Visual Profiles in Apps<br>
IM-5739 - Visual Composer - Breadcrumbs<br>
IM-5746 - Visual Composer - Pagination on Shops List</p>
<h3 class="code-line" data-line-start=14 data-line-end=15 ><a id="Lounge_14"></a>Lounge</h3>
<p class="has-line-data" data-line-start="15" data-line-end="16">IM-7026 - Mock API</p>
<h2 class="code-line" data-line-start=16 data-line-end=17 ><a id="Bugs_16"></a>Bugs</h2>
<h3 class="code-line" data-line-start=17 data-line-end=18 ><a id="Portal_17"></a>Portal</h3>
<p class="has-line-data" data-line-start="18" data-line-end="20">IM-7177 - Translation error message when logging into the portal<br>
IM-6625 - Sidebar Icons Missing</p>
<h3 class="code-line" data-line-start=20 data-line-end=21 ><a id="POS_20"></a>POS</h3>
<p class="has-line-data" data-line-start="21" data-line-end="23">IM-7023 - Invalid Clerk message when logging in to POS<br>
IM-6796 - Not possible to use 2 gift vouchers in one transaction</p>
<h3 class="code-line" data-line-start=23 data-line-end=24 ><a id="Public_API_23"></a>Public API</h3>
<p class="has-line-data" data-line-start="24" data-line-end="26">IM-7136 - Item Update failing<br>
IM-7202 - PUT customer by external unique id&lt;/span&gt;&lt;/li&gt;</p>
<h3 class="code-line" data-line-start=26 data-line-end=27 ><a id="POP_26"></a>POP</h3>
<p class="has-line-data" data-line-start="27" data-line-end="28">IM-6964 - POP signup process fails&lt;/span&gt;&lt;/li&gt;</p>
<h3 class="code-line" data-line-start=28 data-line-end=29 ><a id="Lounge_28"></a>Lounge</h3>
<p class="has-line-data" data-line-start="29" data-line-end="30">IM-7103 - Prevent user from going to next step until requests complete</p>
<h3 class="code-line" data-line-start=30 data-line-end=31 ><a id="Infrastructure_30"></a>Infrastructure</h3>
<p class="has-line-data" data-line-start="31" data-line-end="32">IM-7262 - Update of language in Portal not working</p>
<h3 class="code-line" data-line-start=32 data-line-end=33 ><a id="Inventory_32"></a>Inventory</h3>
<p class="has-line-data" data-line-start="33" data-line-end="34">IM-7184 - Can’t receive goods</p>
<br>
<br>
<h1 class="code-line" data-line-start=35 data-line-end=36 ><a id="RELEASE_VERSION_30th_September_2020_35"></a>RELEASE VERSION: 30th September 2020</h1>
<h2 class="code-line" data-line-start=36 data-line-end=37 ><a id="Features_36"></a>Features</h2>
<h3 class="code-line" data-line-start=37 data-line-end=38 ><a id="Platform_Admin_37"></a>Platform Admin</h3>
<p class="has-line-data" data-line-start="38" data-line-end="39">IM-6623 - User Management</p>
<h3 class="code-line" data-line-start=39 data-line-end=40 ><a id="Inventory_39"></a>Inventory</h3>
<p class="has-line-data" data-line-start="40" data-line-end="42">IM-4384 - Show margin when creating a product<br>
IM-6409 - Make Item List the default landing tab</p>
<h2 class="code-line" data-line-start=42 data-line-end=43 ><a id="Technical_42"></a>Technical</h2>
<h3 class="code-line" data-line-start=43 data-line-end=44 ><a id="Cloud_Connector_43"></a>Cloud Connector</h3>
<p class="has-line-data" data-line-start="44" data-line-end="45">IM-6986 - Tidy Receipt and Adyen Payments</p>
<h3 class="code-line" data-line-start=45 data-line-end=46 ><a id="Infrastructure_45"></a>Infrastructure</h3>
<p class="has-line-data" data-line-start="46" data-line-end="47">IM-6268 Path Based Routing</p>
<h2 class="code-line" data-line-start=47 data-line-end=48 ><a id="Bugs_47"></a>Bugs</h2>
<h3 class="code-line" data-line-start=48 data-line-end=49 ><a id="Customer_48"></a>Customer</h3>
<p class="has-line-data" data-line-start="49" data-line-end="54">IM-6031 - Customer Loyalty table - Shop, POS, Balance and Spend display changes<br>
IM-7146 - Last Visit date in Customer Details not updating<br>
IM-6599 - Account Deposit not updating Customer Balance<br>
IM-6579 - CustomerMS cannot process transactions<br>
IM-7097 - Customer History transaction totals wrong</p>
<h3 class="code-line" data-line-start=54 data-line-end=55 ><a id="POS_54"></a>POS</h3>
<p class="has-line-data" data-line-start="55" data-line-end="59">IM-6830 - Positive discount is shown on the receipt<br>
IM-6839 - External Vouchers error<br>
IM-6620 - Handling of returned account deposits<br>
IM-5544 - Customer Widget shipping address lists twice</p>
<h3 class="code-line" data-line-start=59 data-line-end=60 ><a id="Portal_59"></a>Portal</h3>
<p class="has-line-data" data-line-start="60" data-line-end="62">IM-6583 - Error when adding permission to a role<br>
IM-6631 - No feedback when editing a user and saving</p>
<h3 class="code-line" data-line-start=62 data-line-end=63 ><a id="Backoffice_62"></a>Backoffice</h3>
<p class="has-line-data" data-line-start="63" data-line-end="67">IM-6781 - RBO Currency conversion fail<br>
IM-5551 - Hierarchy nodes cannot be updated in backoffice<br>
IM-5550 - Fails when sending emails<br>
IM-5370 - Expire button on Credit Memo alignment</p>
<h3 class="code-line" data-line-start=67 data-line-end=68 ><a id="Stock_Management_67"></a>Stock Management</h3>
<p class="has-line-data" data-line-start="68" data-line-end="69">IM-6775 - Logs for adjustments doesn’t filter by store</p>
<h3 class="code-line" data-line-start=69 data-line-end=70 ><a id="Platform_Admin_69"></a>Platform Admin</h3>
<p class="has-line-data" data-line-start="70" data-line-end="72">IM-6887 - Changing expiration date via UI doesn’t update POSIdentity.Tenant<br>
IM-7137 - Required fields when editing tenant not populated</p>
<h3 class="code-line" data-line-start=72 data-line-end=73 ><a id="Inventory_72"></a>Inventory</h3>
<p class="has-line-data" data-line-start="73" data-line-end="75">IM-6357 - Timeout issues in Inventory Module<br>
IM-7045 - Change barcode on an item</p>
<h3 class="code-line" data-line-start=75 data-line-end=76 ><a id="Admin_75"></a>Admin</h3>
<p class="has-line-data" data-line-start="76" data-line-end="77">IM-6909 - When saving connector the page fails to reload</p>
