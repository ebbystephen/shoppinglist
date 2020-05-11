var settings = [];

var CATEGORY_LSN = 'cat_det_lsg@$111';
var ITEM_LSN = 'ite_det_lsg@$111';
var SETTINGS_LSN = 'stng_lsg@$111';

function LoadFromJSON(key) {
    var jsonArray = {};
    if (localStorage.getItem(key) == null) {
        if (key == SETTINGS_LSN) {
            jsonArray = { maxPageSize: 5 };
        } else if (key == CATEGORY_LSN) {
            jsonArray = [{ id: 1000, val: 'Grocery' },
            { id: 1001, val: 'Meat' },
            { id: 1003, val: 'പച്ചക്കറി' },
            { id: 1006, val: 'പഴം' },
            { id: 1002, val: 'പാൽ' },
            { id: 1004, val: 'Detergents' },
            { id: 1005, val: 'ബേക്കറി' }];
        } else if (key == ITEM_LSN) {
            jsonArray = [{ id: 10000, catid: 1000, val: 'മല്ലിപൊടി', sel: 0, pur: 0 },
            { id: 10001, catid: 1000, val: 'മുളകുപൊടി', sel: 0, pur: 0 },
            { id: 10002, catid: 1000, val: 'മഞ്ഞൾപൊടി', sel: 0, pur: 0 },
            { id: 10003, catid: 1000, val: 'പുട്ടുപൊടി', sel: 0, pur: 0 },
            { id: 10004, catid: 1000, val: 'അപ്പപൊടി', sel: 0, pur: 0 },
            { id: 10005, catid: 1000, val: 'ഗോതമ്പ് പൊടി', sel: 0, pur: 0 },
            { id: 10006, catid: 1000, val: 'മസാലപൊടി', sel: 0, pur: 0 },
            { id: 10007, catid: 1000, val: 'മട്ട അരി', sel: 0, pur: 0 },
            { id: 10008, catid: 1000, val: 'പച്ചരി', sel: 0, pur: 0 },
            { id: 10009, catid: 1000, val: 'ബിരിയാണി അരി', sel: 0, pur: 0 },
            { id: 10010, catid: 1000, val: 'ഉപ്പ്', sel: 0, pur: 0 },
            { id: 10011, catid: 1000, val: 'പൊന്നി അരി', sel: 0, pur: 0 },
            { id: 10012, catid: 1000, val: 'കോഴിമുട്ട', sel: 0, pur: 0 },
            { id: 10013, catid: 1000, val: 'താറാവ് മുട്ട', sel: 0, pur: 0 },
            { id: 10014, catid: 1000, val: 'കടല', sel: 0, pur: 0 },
            { id: 10015, catid: 1000, val: 'ചെറുപയർ', sel: 0, pur: 0 },
            { id: 10016, catid: 1000, val: 'വലിയപയർ', sel: 0, pur: 0 },
            { id: 10017, catid: 1000, val: 'ഉഴുന്ന്', sel: 0, pur: 0 },
            { id: 10018, catid: 1000, val: 'തുവര പരിപ്പ്', sel: 0, pur: 0 },
            { id: 10019, catid: 1000, val: 'പീസ് പരിപ്പ്', sel: 0, pur: 0 },
            { id: 10020, catid: 1000, val: 'പഞ്ചസാര', sel: 0, pur: 0 },
            { id: 10021, catid: 1000, val: 'ചായപൊടി', sel: 0, pur: 0 },
            { id: 10022, catid: 1000, val: 'വെളിച്ചെണ്ണ', sel: 0, pur: 0 },
            { id: 10023, catid: 1000, val: 'തേങ്ങ', sel: 0, pur: 0 },
            { id: 10024, catid: 1000, val: 'അച്ചാർ', sel: 0, pur: 0 },
            { id: 10025, catid: 1000, val: 'ഉണക്കമുളക്', sel: 0, pur: 0 },
            { id: 10026, catid: 1001, val: 'കോഴി', sel: 0, pur: 0 },
            { id: 10027, catid: 1001, val: 'താറാവ്', sel: 0, pur: 0 },
            { id: 10028, catid: 1001, val: 'പന്നി', sel: 0, pur: 0 },
            { id: 10029, catid: 1001, val: 'പോത്ത്', sel: 0, pur: 0 },
            { id: 10030, catid: 1001, val: 'മീൻ', sel: 0, pur: 0 },
            { id: 10031, catid: 1002, val: 'പാൽ', sel: 0, pur: 0 },
            { id: 10032, catid: 1002, val: 'തൈര്', sel: 0, pur: 0 },
            { id: 10033, catid: 1002, val: 'ബട്ടർ', sel: 0, pur: 0 },
            { id: 10034, catid: 1002, val: 'set curd', sel: 0, pur: 0 },
            { id: 10035, catid: 1003, val: 'അച്ചിങ്ങ', sel: 0, pur: 0 },
            { id: 10036, catid: 1003, val: 'തക്കാളി', sel: 0, pur: 0 },
            { id: 10037, catid: 1003, val: 'ബീൻസ്', sel: 0, pur: 0 },
            { id: 10038, catid: 1003, val: 'വെണ്ടക്ക', sel: 0, pur: 0 },
            { id: 10039, catid: 1003, val: 'പാവക്ക', sel: 0, pur: 0 },
            { id: 10040, catid: 1003, val: 'മത്തങ്ങ', sel: 0, pur: 0 },
            { id: 10041, catid: 1003, val: 'പച്ചക്കായ', sel: 0, pur: 0 },
            { id: 10042, catid: 1003, val: 'കോവക്ക', sel: 0, pur: 0 },
            { id: 10043, catid: 1003, val: 'കുമ്പളങ്ങ', sel: 0, pur: 0 },
            { id: 10044, catid: 1003, val: 'ക്യാരറ്റ്', sel: 0, pur: 0 },
            { id: 10045, catid: 1003, val: 'നെല്ലിക്ക', sel: 0, pur: 0 },
            { id: 10046, catid: 1003, val: 'കൂർക്ക', sel: 0, pur: 0 },
            { id: 10047, catid: 1003, val: 'ചീര', sel: 0, pur: 0 },
            { id: 10048, catid: 1003, val: 'വെള്ളിരിക്ക', sel: 0, pur: 0 },
            { id: 10049, catid: 1003, val: 'പച്ച മാങ്ങ', sel: 0, pur: 0 },
            { id: 10050, catid: 1003, val: 'ഉരുളകിഴങ്ങ്', sel: 0, pur: 0 },
            { id: 10051, catid: 1003, val: 'സവാള', sel: 0, pur: 0 },
            { id: 10052, catid: 1003, val: 'ഉള്ളി', sel: 0, pur: 0 },
            { id: 10053, catid: 1003, val: 'വെളുത്തുള്ളി', sel: 0, pur: 0 },
            { id: 10054, catid: 1003, val: 'വേപ്പില', sel: 0, pur: 0 },
            { id: 10055, catid: 1003, val: 'പച്ചമുളക്', sel: 0, pur: 0 },
            { id: 10056, catid: 1003, val: 'ഇഞ്ചി', sel: 0, pur: 0 },
            { id: 10057, catid: 1004, val: 'Soap', sel: 0, pur: 0 },
            { id: 10058, catid: 1004, val: 'അലക്ക് സോപ്പ്', sel: 0, pur: 0 },
            { id: 10059, catid: 1004, val: 'Washing powder', sel: 0, pur: 0 },
            { id: 10060, catid: 1004, val: 'മെഴുകുതിരി', sel: 0, pur: 0 },
            { id: 10061, catid: 1004, val: 'തീപ്പെട്ടി', sel: 0, pur: 0 },
            { id: 10062, catid: 1004, val: 'Tooth paste', sel: 0, pur: 0 },
            { id: 10063, catid: 1004, val: 'Hand wash', sel: 0, pur: 0 },
            { id: 10064, catid: 1004, val: 'Dish wash', sel: 0, pur: 0 },
            { id: 10065, catid: 1004, val: 'Floor cleaner', sel: 0, pur: 0 },
            { id: 10066, catid: 1004, val: 'Kitchen Tissue', sel: 0, pur: 0 },
            { id: 10067, catid: 1005, val: 'Cake', sel: 0, pur: 0 },
            { id: 10068, catid: 1005, val: 'Puffs', sel: 0, pur: 0 },
            { id: 10069, catid: 1005, val: 'Samosa', sel: 0, pur: 0 },
            { id: 10070, catid: 1005, val: 'Bread', sel: 0, pur: 0 },
            { id: 10071, catid: 1005, val: 'Bun', sel: 0, pur: 0 },
            { id: 10072, catid: 1005, val: 'Biscuit', sel: 0, pur: 0 },
            { id: 10073, catid: 1006, val: 'ഓറഞ്ച്', sel: 0, pur: 0 },
            { id: 10074, catid: 1006, val: 'Apple', sel: 0, pur: 0 },
            { id: 10075, catid: 1006, val: 'ഞാലി', sel: 0, pur: 0 },
            { id: 10076, catid: 1006, val: 'കണ്ണൻ', sel: 0, pur: 0 }];
        }
        AddLocalStorage(key, JSON.stringify(jsonArray));
    }
}

var USR_ADMN_TAB = '#v_tabs'
var USR_TAB = '#usr_tabs';
var ADMN_TAB = "#tabs";

var USR_LST_ACC = '.accordion';
var USR_LST_TAB = '#usr_tabs-1';
var USL_LST_ATTR = 'sel';

var PUR_LST_ACC = '.purchase_accordion';
var PUR_LST_TAB = '#usr_tabs-2';
var PUR_LST_ATTR = 'pur';

var PEN_LST_ACC = '.pending_accordion';
var PEN_LST_TAB = '#usr_tabs-3';

var CAT_TBL = 'table_c';
var ITM_TBL = 'table_i';

$(document).ready(function () {
    $(USR_ADMN_TAB).tabs();
    $(USR_TAB).tabs();
    $(ADMN_TAB).tabs();

    //Initialize
    Initialize();

    //User-Bind-3-Tabs
    BindUserData();
    //User-Bind-Badge
    BindBadge();

    //Admin-Bind-Category-Grid
    BindTable(CAT_TBL, CATEGORY_LSN, 1);
    //Admin-Bind-Category-Dropdown
    BindSelect('categories', CATEGORY_LSN);
    //Admin-Bind-Item-Grid
    BindTable_I(ITM_TBL, CATEGORY_LSN, ITEM_LSN, 1);
    //Admin-Settings
    BindSettings();
    //Admin-Save-Click
    BindSaveButtonClick();
});

function BindSettings() {
    var settings = GetLocalStorage(SETTINGS_LSN);
    $('#sel_page').val(settings.maxPageSize);
}

function Initialize() {
    LoadFromJSON(SETTINGS_LSN);
    LoadFromJSON(CATEGORY_LSN);
    LoadFromJSON(ITEM_LSN);
}

function BindUserData() {
    var categoryData = GetLocalStorage(CATEGORY_LSN);
    var itemData = GetLocalStorage(ITEM_LSN);
    var purItemData = $.grep(itemData, function (a) { return a.sel == 1 });
    var penItemData = $.grep(itemData, function (a) { return a.sel == 1 && a.pur == 0 });

    //User-List
    BindAccordion(USR_LST_ACC, categoryData, itemData, USR_LST_TAB, USL_LST_ATTR);
    //User-Purchase List
    BindAccordion(PUR_LST_ACC, categoryData, purItemData, PUR_LST_TAB, PUR_LST_ATTR);
    //User-Pending List
    BindAccordion(PEN_LST_ACC, categoryData, penItemData, PEN_LST_TAB, PUR_LST_ATTR);
}

function BindSaveButtonClick() {
    $('.add_c').click(function () {
        if (typeof (Storage) !== "undefined") {
            AddCategory($('#cat_name').val());
            $('#cat_name').focus();
        } else {
            alert('Sorry! No Web Storage support..');
        }
    });

    $('.add_i').click(function () {
        if (typeof (Storage) !== "undefined") {
            AddItem($('#categories').val(), $('#categories option:selected').text(), $('#item_name').val());
            $('#item_name').focus();
        } else {
            alert('Sorry! No Web Storage support..');
        }
    });

    $('.reset_sl').click(function () {
        OpenModal('Reset Shopping List', 'Are you sure, you want to reset the shopping list. All the selected items in the shopping list will be removed. Please click \'Ok\' to proceed.');
    });

    $('.save_c').click(function () {
        //var jsonArray = { maxPageSize: $('#sel_page').val() };
        //var currMaxPageSize = GetLocalStorage(SETTINGS_LSN).maxPageSize;
        //AddLocalStorage(SETTINGS_LSN, JSON.stringify(jsonArray));

        //if (currMaxPageSize != $('#sel_page').val()) {
        //    BindTable(CAT_TBL, CATEGORY_LSN, 1);
        //    BindTable_I(ITM_TBL, CATEGORY_LSN, ITEM_LSN, 1);
        //}

        if ($('.reset_chk').is(':checked')) {
            Select_AllItem();
            BindUserData();
        }
        $('.reset_chk').prop("checked", false);
        AlertMessage("Success", "All the settings updated.");
    });
}

function OpenModal(header, content) {
    $('.modal-title').text(header);
    $('.modal-body').text('<p>' + content + '</p>');
    $("#myModal").modal();
}

function BindPurchase() {
    var categoryData = GetLocalStorage(CATEGORY_LSN);
    var itemData = GetLocalStorage(ITEM_LSN);
    var purItemData = $.grep(itemData, function (a) { return a.sel == 1 });
    BindAccordion(PUR_LST_ACC, categoryData, purItemData, PUR_LST_TAB, PUR_LST_ATTR);
}

function BindPending() {
    var categoryData = GetLocalStorage(CATEGORY_LSN);
    var itemData = GetLocalStorage(ITEM_LSN);
    var penItemData = $.grep(itemData, function (a) { return a.sel == 1 && a.pur == 0 });
    BindAccordion(PEN_LST_ACC, categoryData, penItemData, PEN_LST_TAB, PUR_LST_ATTR);
}

function BindBadge() {
    var listCount, purchasedCount, pendingCount;
    var itemData = GetLocalStorage(ITEM_LSN);
    listCount = $.grep(itemData, function (a) { return a.sel == 1 }).length;
    purchasedCount = $.grep(itemData, function (a) { return a.sel == 1 && a.pur == 1 }).length;
    pendingCount = $.grep(itemData, function (a) { return a.sel == 1 && a.pur == 0 }).length;
    $(USR_LST_TAB + '-badge').html(listCount);
    $(PUR_LST_TAB + '-badge').html(purchasedCount);
    $(PEN_LST_TAB + '-badge').text(pendingCount);
}

function BindCheckBoxClick(tabId, attrId) {
    $(tabId + ' input[type=checkbox]').change(function () {
        Select_Item($(this).is(':checked'), $(this).val(), "id", attrId);
        var $this = $(this);
        var $parent = $this.parent();
        var $checkboxdiv = $this.closest('div');
        var totalCount = 0;
        var checkedCount = 0;
        if ($(this).is(':checked')) {
            AlertMessage("Success", $(this).closest('label').text() + " selected successfully.");
            if (tabId == PUR_LST_TAB) {
                $checkboxdiv.prev('h3').find('span[class=badge]').html('hello');
                console.log($checkboxdiv.prev('span').length);

                $checkboxdiv.append($parent);
            }
        } else {
            AlertMessage("Info", $(this).closest('label').text() + " removed successfully.");
            if (tabId == PUR_LST_TAB) {
                $checkboxdiv.prepend($parent);
            }
        }

        if (tabId == USR_LST_TAB) {
            BindPurchase();
            BindPending();
        } else if (tabId == PUR_LST_TAB) {
            totalCount = $checkboxdiv.find('input:checkbox').length;
            checkedCount = $checkboxdiv.find('input:checkbox:checked').length;
            $checkboxdiv.prev('h3').find('span[class=badge]').html(checkedCount + '/' + totalCount);
            BindPending();
        } else if (tabId == PEN_LST_TAB) {
            $(this).parent(".checkbox").fadeOut(500, function () { $(this).remove() });
            BindPurchase();
        }
    });
}

function Select_Item(checked, id, keyColumn, attrId) {
    var sel_items;
    if (GetLocalStorage(ITEM_LSN) != null) {
        sel_items = GetLocalStorage(ITEM_LSN);
    }

    for (var i = 0; i < sel_items.length; i++) {
        if (sel_items[i][keyColumn] == id) {
            if (USL_LST_ATTR == attrId) {
                sel_items[i][PUR_LST_ATTR] = 0;
            }
            sel_items[i][attrId] = checked ? 1 : 0;
        }
    }

    AddLocalStorage(ITEM_LSN, JSON.stringify(sel_items));
    BindBadge();
}

function Select_AllItem() {
    var sel_items;
    if (GetLocalStorage(ITEM_LSN) != null) {
        sel_items = GetLocalStorage(ITEM_LSN);
    }

    for (var i = 0; i < sel_items.length; i++) {
        sel_items[i].sel = 0;
        sel_items[i].pur = 0;
    }

    AddLocalStorage(ITEM_LSN, JSON.stringify(sel_items));
    BindBadge();
}

function AddCategory(name) {
    var categories;
    if (name != null && name != '') {
        categories = GetLocalStorage(CATEGORY_LSN);
        if (CheckExists(categories, name) == false) {
            var key = GetNextID(categories);
            var item = { id: key, val: name };
            categories.push(item);
            AddLocalStorage(CATEGORY_LSN, JSON.stringify(categories));
            //AddToTable(CAT_TBL, name);
            BindTable(CAT_TBL, CATEGORY_LSN, -1);
            BindSelect('categories', CATEGORY_LSN);
            ClearControl();
            BindUserData();
        } else {
            AlertMessage("Info", "Category already exists.");
        }
    } else {
        AlertMessage("Warning", "Category cannot be empty.");
    }
}

function AddItem(categoryId, categoryName, name) {
    if (name != null && name != '') {
        var items = GetLocalStorage(ITEM_LSN);
        if (CheckExists(items, name) == false) {
            var key = GetNextID(items);
            var item = { id: key, catid: categoryId, val: name, sel: 0, pur: 0 };
            items.push(item);
            AddLocalStorage(ITEM_LSN, JSON.stringify(items));
            //AddToTable_I(ITM_TBL, categoryName, name);
            BindTable_I(ITM_TBL, CATEGORY_LSN, ITEM_LSN, -1);
            ClearControl();
            BindUserData();
        } else {
            AlertMessage("Info", "Item already exists.");
        }
    } else {
        AlertMessage("Warning", "Item cannot be empty.");
    }
}

function AlertMessage(msgType, message) {
    var msgTypes = {
        Success: "alert-success",
        Info: "alert-info",
        Warning: "alert-warning",
        Danger: "alert-danger"
    };

    $('<div class="alert ' + msgTypes[msgType] + '"><strong>' + msgType + '! </strong>' + message + '</div>').show().fadeOut(2500).appendTo('#result');
}

function ClearControl() {
    $('#cat_name,#item_name').val('');
}

function CheckExists(JSONObject, searchString) {
    var hasMatch = false;
    for (var i = 0; i < JSONObject.length; i++) {
        var value = JSONObject[i].val;
        if (value == searchString) {
            hasMatch = true;
            break;
        }
    }
    return hasMatch;
}

function GetJSONValue(JSONObject, keyColumn, keyName, returnColumn) {
    var returnValue = '-1';
    for (var i = 0; i < JSONObject.length; i++) {
        var value = JSONObject[i][keyColumn];
        if (value == keyName) {
            returnValue = JSONObject[i][returnColumn];
            break;
        }
    }
    return returnValue
}

function GetNextID(JSONObject) {
    var id = -1;
    if (JSONObject.length > 0) {
        for (var i = 0; i < JSONObject.length; i++) {
            var value = JSONObject[i].id;
            if (value > id) {
                id = value;
            }
        }
        id = id + 1;
    }
    else {
        id = 1;
    }
    return id;
}

function BindAccordion(accordionCtrl, categoryData, itemData, tabId, attrId) {
    var accordionExists = $(accordionCtrl).hasClass("ui-accordion")
    $(accordionCtrl).empty();
    $.each(categoryData, function () {
        var arr = [];
        categoryId = this.id;
        arr = $.grep(itemData, function (a) { return a.catid == categoryId });
        if (tabId == PUR_LST_TAB) {
            arr.sort(function (a, b) {
                var x = a.pur; var y = b.pur;
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }
        if (arr.length > 0) {
            var fs;
            fs = $('<div class="checkbox-div" />');
            var checked;
            var checkedCount = 0;
            $.each(arr, function () {
                if (this[attrId] == 1) {
                    checked = 'checked';
                    checkedCount += 1;
                }
                else {
                    checked = '';
                }
                //fs.append('<label class="checkbox-inline"><input type="checkbox" ' + checked + ' value="' + this.id + '">' + this.val + '</label>');
                fs.append('<label class="chk_container col-md-4 col-sm-6">' + this.val + '<input type="checkbox" ' + checked + ' value="' + this.id + '"><span class="checkmark"></span></label>');
            });
            if (tabId == PUR_LST_TAB) {
                $(accordionCtrl).append('<h3>' + this.val + ' <span class="badge">' + checkedCount + '/' + arr.length + '</span></h3>');
            } else {
                $(accordionCtrl).append('<h3>' + this.val + '</h3>');
            }

            $(accordionCtrl).append(fs);
        }
    });

    BindCheckBoxClick(tabId, attrId);
    if (accordionExists) {
        $(accordionCtrl).accordion('refresh');
    } else {
        $(accordionCtrl).accordion({ collapsible: true, heightStyle: "content" });
    }
}

function BindTable(tableName, dataList, pageNumber) {
    pageNumber = parseInt(pageNumber);
    var data = GetLocalStorage(dataList);
    var tr;
    var categoryId = -1;

    var maxRecordsPerPage = 5;
    var pg = Paging(pageNumber, data.length, maxRecordsPerPage);

    $('#' + tableName).find("tr:gt(0)").remove();
    for (var i = pg.startRecord - 1; i < pg.endRecord; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + data[i].val + "</td>");
        $('#' + tableName).append(tr);
    }

    $('.pg_cat').empty();
    for (var i = pg.startPage; i <= pg.endPage; i++) {
        $('.pg_cat').append('<li><a href="#">' + i + '</a></li>');
    }

    $('.pg_cat a').click(function () {
        BindTable(tableName, dataList, $(this).text());
    });
}

function Paging(pageNumber, totalRecords, maxRecordsPerPage) {
    var settings = GetLocalStorage(SETTINGS_LSN);
    maxRecordsPerPage = settings.maxPageSize;

    pageNumber = parseInt(pageNumber);
    var totalPages = Math.ceil((totalRecords * 1.0) / maxRecordsPerPage);

    //While Adding show latest page
    if (pageNumber == -1) {
        pageNumber = totalPages;
    }

    var maxRecordsPerPage = 5;
    var startRecord, endRecord;
    startRecord = ((pageNumber - 1) * maxRecordsPerPage) + 1;
    endRecord = pageNumber * maxRecordsPerPage;
    //total records less than end record
    endRecord = endRecord > totalRecords ? totalRecords : endRecord;


    var startPage, endPage;
    startPage = pageNumber - 2;
    endPage = pageNumber + 2;
    //console.log(pageNumber + "/startPage-" + startPage);
    //console.log(pageNumber + "/endPage-" + endPage);

    //startPage fix
    if (totalPages > 5) {
        endPage = startPage < 1 ? (endPage - startPage) + 1 : endPage;
    } else {
        endPage = totalPages;
    }

    startPage = startPage < 1 ? 1 : startPage;
    //console.log(pageNumber + "/startPage-" + startPage);
    //console.log(pageNumber + "/endPage-" + endPage);

    //endPage Fix
    if (totalPages > 5) {
        startPage = endPage > totalPages ? (totalPages - 5) + 1 : startPage;
    } else {
        startPage = 1;
    }

    endPage = endPage > totalPages ? totalPages : endPage;
    //console.log(pageNumber + "/startPage-" + startPage);
    //console.log(pageNumber + "/endPage-" + endPage);

    var result = {};
    result = { "startPage": startPage, "endPage": endPage, "startRecord": startRecord, "endRecord": endRecord };
    return result;

}

function BindTable_I(tableName, categoryDataList, dataList, pageNumber) {
    pageNumber = parseInt(pageNumber);
    var data = GetLocalStorage(dataList);
    var tr;
    var categoryName;
    var maxRecordsPerPage = 5;
    var pg = Paging(pageNumber, data.length, maxRecordsPerPage);

    $('#' + tableName).find("tr:gt(0)").remove();
    for (var i = pg.startRecord - 1; i < pg.endRecord; i++) {
        tr = $('<tr/>');
        categoryName = GetJSONValue(GetLocalStorage(categoryDataList), "id", data[i].catid, "val")
        tr.append("<td>" + categoryName + "</td><td>" + data[i].val + "</td>");
        $('#' + tableName).append(tr);
    }

    $('.pg_item').empty();
    for (var i = pg.startPage; i <= pg.endPage; i++) {
        $('.pg_item').append('<li><a href="#">' + i + '</a></li>');
    }

    $('.pg_item a').click(function () {
        BindTable_I(tableName, categoryDataList, dataList, $(this).text());
    });
}

function BindSelect(selectControlName, dataList) {
    var data = GetLocalStorage(dataList);
    $('#' + selectControlName).find('option').remove()
    $.each(data, function () {
        $('#' + selectControlName).append('<option value=' + this.id + '>' + this.val + '</option>');
    });
}

function GetLocalStorage(key) {
    var items;
    if (localStorage.getItem(key) != null) {
        items = JSON.parse(localStorage.getItem(key));
    } else {
        items = [];
    }
    return items;
}

function AddLocalStorage(key, value) {
    localStorage.setItem(key, value);
}
