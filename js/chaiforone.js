/**
 * 4 points 1 string ( Chai IME keyboard )
 * @author Daway.Cai (Cai,GuangXian)
 * @email caixnet@outlook.com
 * chai forone is reserved.
 * Application number: 2014800745031
 * International Application : PCT/CN2014/092045, 
 * International Publication : WO2016/082081
 * Apache license
 */

var chai = {
    mouseOn: false,
    keyState: function () {
        return this.mouseOn = !(this.mouseOn);
    },
    keys: "",
    docs: "",
    htmlEmbedTaget: "body",
    textID: "#chaitext",
    chaiImeBoxID: "#chaiKeyboardBox",
    chaiImeCheckPointID: "#chaiKeyButton",
    shiftKeyMark: "d",
    hasChar: function (chaicode) {
        return typeof (chai.codes[chaicode]) != "undefined";
    },
    getChar: function (chaicode) {
        return this.hasChar(chaicode) ? chai.codes[chaicode] : "";
    },
    getID: function (jqObject) {
        return $(jqObject).attr("id").charAt($(jqObject).attr("id").length - 1)
    },
    setActiveIdColor: function (jqObject, aColor = "red") {
        return $(jqObject).css("background-color", aColor);
    },
    setDeActiveIdColor: function (jqObject, aColor = "green") {
        return $(jqObject).css("background-color", aColor);
    },
    setDblStartIdColor: function (aColor = "#FFCCFF") {
        return $(this.chaiImeBoxID).css("background-color", aColor);
    },
    setStartIdColor: function (aColor = "#99CCFF") {
        return $(this.chaiImeBoxID).css("background-color", aColor);
    },
    setEndIdColor: function (aColor = "#FFFFCC") {
        return $(this.chaiImeBoxID).css("background-color", aColor);
    },
    setDeleteIdColor: function (aColor = "red") {
        return $(this.chaiImeBoxID).css("background-color", aColor);
    },
    clearKeys: function () { return this.keys = ""; },
    setCusor: function (iCursor) { this.cursor = iCursor; },
    getCusorPos: function () {
        $(this.textID).focus();
        return $(this.textID).get(0).selectionStart;
    },
    deleteKey: function () {
        //
        //var start = $("#chaitext").get(0).selectionStart;
        //var end = $("#chaitext").get(0).selectionEnd;
        //console.log(start, end);
        //
        this.docs = $(this.textID).val();
        this.setCusor(this.getCusorPos());
        if(this.cursor == 0){
            this.setCusor(0);
        }else{
            this.docs = this.docs.substring(0, this.cursor-1) + this.docs.substring(this.cursor, this.docs.length);
            this.setCusor(this.cursor-1);
        }
        $(this.textID).val(this.docs);
        $(this.textID).focus();
        $(this.textID).get(0).setSelectionRange(this.cursor, this.cursor);
        this.setEndIdColor();
        this.clearKeys();
    },
    enterKey: function () {
        this.docs = $(this.textID).val();
        this.setCusor(this.getCusorPos());
        if(this.cursor == this.docs.length){
            this.docs = this.docs.substring(0, this.cursor) + "\n" ;
            this.setCusor(this.cursor+1);
        }else{
            this.docs = this.docs.substring(0, this.cursor) + "\n" + this.docs.substring(this.cursor, this.docs.length);
            this.setCusor(this.cursor+1);
        }
        $(this.textID).val(this.docs);
        $(this.textID).get(0).setSelectionRange(this.cursor, this.cursor);
        $(this.textID).focus();
        this.clearKeys();
    },
    writeToText: function () {
        this.docs = $(this.textID).val();
        this.setCusor(this.getCusorPos());
        switch(this.getChar(this.keys)){
            case "CHAI_CURSOR_RIGHT":
                this.setCusor(this.cursor+1); 
            break;
            case "CHAI_CURSOR_LEFT":
                this.setCusor(this.cursor-1);
            break;
            default:
                this.docs = this.docs.substring(0, this.cursor) + this.getChar(this.keys) + this.docs.substring(this.cursor, this.docs.length);
                this.setCusor(this.cursor + this.getChar(this.keys).length);    
                $(this.textID).val(this.docs);
        }       
        $(this.textID).focus();
        $(this.textID).get(0).setSelectionRange(this.cursor, this.cursor);
        this.setEndIdColor();
        this.clearKeys();
    },
    setKeyboardBox: function () {
        var chaikbdbox = "<div id='chaiKeyboardBox'>";
        chaikbdbox += "<div id='chaikeyboardrow1' class='row'>";
        chaikbdbox += "<div id='chaiKeyButton1'></div>";
        chaikbdbox += "<div id='chaiKeyButton2'></div>";
        chaikbdbox += "</div>";
        chaikbdbox += "<div id='chaikeyboardrow2' class='row'>";
        chaikbdbox += "<div id='chaiKeyButton4'></div>";
        chaikbdbox += "<div id='chaiKeyButton3'></div>";
        chaikbdbox += "</div>";
        chaikbdbox += "</div>";
        return chaikbdbox;
    },
    setKeyboardBoxCSS: function () {
        $(this.chaiImeBoxID).css({
            "z-index": "99999",
            "position": "fixed",
            "bottom": "1%",
            "left": "35%",
            "border-radius": "25pt",
            "background": "#FFFFCC",
            "opacity": "0.8",
            "margin": "0pt",
            "padding": "5pt",
            "width": "110pt",
            "height": "112pt"
        });
        //
        $(this.chaiImeCheckPointID + "1").css({
            "z-index": "99999",
            "width": "44pt",
            "height": "44pt",
            "border-radius": "22pt",
            "background": "green",
            "opacity": "0.8",
            "margin-top": "0pt",
            "margin-left": "10pt",
            "padding": "10pt",
            "border": "0pt solid",
            "cursor": "pointer"
        });
        //
        $(this.chaiImeCheckPointID + "2").css({
            "z-index": "99999",
            "width": "44pt",
            "height": "44pt",
            "border-radius": "22pt",
            "background": "green",
            "opacity": "0.8",
            "margin-top": "-44pt",
            "margin-left": "68pt",
            "padding": "10pt",
            "border": "0pt solid",
            "cursor": "pointer"
        });
        //
        $(this.chaiImeCheckPointID + "4").css({
            "z-index": "99999",
            "width": "44pt",
            "height": "44pt",
            "border-radius": "22pt",
            "background": "green",
            "opacity": "0.8",
            "margin-top": "15pt",
            "margin-left": "10pt",
            "padding": "10pt",
            "border": "0pt solid",
            "cursor": "pointer"
        });
        $(this.chaiImeCheckPointID + "3").css({
            "z-index": "99999",
            "width": "44pt",
            "height": "44pt",
            "border-radius": "22pt",
            "background": "green",
            "opacity": "0.8",
            "margin-top": "-44pt",
            "margin-left": "68pt",
            "padding": "10pt",
            "border": "0pt solid",
            "cursor": "pointer"
        });
    },
    setMenuBox: function () {
        var chaiMnuBox = "<div class=>"
        chaiMnuBox += "<ul id='chaiMenu'>";
        chaiMnuBox += "<li><span id='chaiSetup'></span></li>";
        chaiMnuBox += "<li><span id='chaiChangeLangues'></span></li>";
        chaiMnuBox += "<li><span id='chaiCustomerDefineKey'></span></li>";
        chaiMnuBox += "</div>";
        return chaiMnuBox;
    },
    setMenuBoxCSS: function () {
        $("#chaiMenu").css({
            "z-index": "99999",
            "display": "block",
            "position": "fixed",
            "top": "35%",
            "right": "0",
            "padding": "0",
            "opacity": "0.8",
            "cursor": "pointer"
        });
        $("#chaiMenu").each(function () {
            $(this).css({
                "z-index": "99999",
                "display": "block",
                "padding": "12pt",
                "overflow": "hidden",
                "right": "0",
                "border-radius": "25pt",
                "background": "#FFFFCC",
                "opacity": "0.8",
                "cursor": "pointer"
            });
        });
        $("#chaiMenu").first(function () {
            $(this).css({
                "z-index": "99999",
                "display": "block",
                "padding": "12pt",
                "opacity": "0.8",
                "cursor": "pointer"
            });
        });
    }
}
// append chai keyboard on main webpage.
$(function () {
    $(chai.htmlEmbedTaget).append(chai.setKeyboardBox());
    chai.setKeyboardBoxCSS();
    $(chai.htmlEmbedTaget).append(chai.setMenuBox());
    chai.setMenuBoxCSS();
});
// mouse over on chai keybaord keys
function onMouseOver() {
    for (i = 1; i <= 4; i++) {
        $(chai.chaiImeCheckPointID + i).mouseover(function () {
            chai.setActiveIdColor(this);
            if (chai.mouseOn) {
                chai.keys += chai.getID(this);
            } else {
                //
            }
        });
    }
}
// mouse out on chai keybord keys
function onMouseOut() {
    for (i = 1; i <= 4; i++) {
        $(chai.chaiImeCheckPointID + i).mouseout(function () {
            chai.setDeActiveIdColor(this);
        });
    }
}
// mouse out on chai keybord keys
function onMouseDblClick() {

    //
    for (i = 1; i <= 4; i++) {
        switch (i) {
            case 1:
                $(chai.chaiImeCheckPointID + i).on("dblclick", function () {
                    chai.keys = chai.shiftKeyMark + chai.getID(this);
                    chai.setDeActiveIdColor(this);
                    if (chai.keyState()) {
                        chai.setDblStartIdColor();
                    } else {
                        chai.setEndIdColor();
                        chai.clearKeys();
                    }
                });
                break;
            case 2:
                $(chai.chaiImeCheckPointID + i).on("dblclick", function () {
                    chai.deleteKey();
                });
                break;
            case 3:
                $(chai.chaiImeCheckPointID + i).on("dblclick", function () {
                    chai.enterKey();
                });
                break;
            default:
            //ctrl
        }
        //11

        ///1
    }
    //
}
// mouse on click ChaiKeyboard iterms 
function onMouseClick() {
    for (i = 1; i <= 4; i++) {
        $(chai.chaiImeCheckPointID + i).on("click", function () {
            if (chai.keyState()) {
                chai.keys += chai.getID(this);
                chai.setStartIdColor();
            } else {
                chai.writeToText();
            }
        });
    }
    ///
}
function hideKeyboard() {
    document.activeElement.blur();
    $("input").blur();
    $("textarea").blur();
    $("#chaitext").blur();
};
// binding mouseEvent
function onMouseEvent() {
    onMouseDblClick();
    onMouseClick();
    onMouseOver();
    onMouseOut();
}
// hide jquery loding label
function hideLoadLabel() {
    //$(".ui-loader,.ui-loader-default").empty();
    $(".ui-loader,.ui-loader-default").hide();
}
/*Begin Test Swipe*/
/*END Swipe*/
// main ready document to check chai keyboard.
$(document).ready(function () {
    hideKeyboard();
    onMouseEvent();
    hideLoadLabel();
});
////

//chai code
chai.codes = {
    /* chai Code reserve code */
    "1341": "a", "1431": "a", "13414": " and ", "14313": " and ",
    "124134": "b", "143124": "b", "134124": "b", "134214": "b", "142134": "b", "124314":"b", 
    "424": "b", "4242": " break\n",
    "1234": "c",
    "12343":"class ", "123432":" continue ",
    "1241": "d", "1421": "d",
    "12414": "def ():", "14212": "def ():","124142": "del ", "142124": "del ",
    "12342": "e", "12432": "e", 
    "123424": "else:", "124323": "else:", "1234243": "except :", "1243234": "except :",
    "14324": "f", "14234": "f", 
    "143242": "if :", "142343": "if :","1432424": "elif :", "1423434": "elif :",
    "1432423": "for in :", "1423432": "for in :","14324234": "finally ", "14234324": "finally ",
    "123": "g","1232": "global ",
    "14231": "h", "13241": "h",
    "13": "i",
    "134": "j",
    "124": "k",
    "143": "l", "1434": "lambda ",
    "142132": "m", "132142": "m", "124132": "m","123142": "m","142312":"m","132412":"m", 
    "313": "m","3131": "import ",
    "1423": "n","14232": "not","142324": "in",
    "12341": "o", "14321": "o", "1234131": " or ", "1432131": " or ",
    "12314": "p", "13214": "p",
    "123141": "print()", "132141": "print()",
    "1231413": "pass\n","1231412": "pass\n", "1321412": "pass\n","1321413": "pass\n",
    "14213": "q", "12413": "q",
    "123413": "r", "132143": "r", "134123": "r", "143123": "r", "143213": "r", "123143":"r",
    "131": "r", "1313": "raise","13131": "return ",
    "12431": "s", "13421": "s",
    "124313": "is", "134212": "is","1243134": "self", "1342124": "self",
    "1231": "t", "1321": "t", "12313": "try :", "13212": "try :",
    "1432": "u",
    "142": "v",
    "1342": "w", "13424": "while :", "134243": " with ",
    "1324": "x",
    "132": "y", "1323": "yield ",
    "1243": "z",
    "24": "1",
    "2134": "2",
    "2143": "3", 
    "243": "4",
    "2432": "5", "2342": "5",
    "21431": "6", "21341": "6",
    "23413": "6", "23143": "6",
    "214": "7",  "213": "7",
    "2413": "8",
    "21423": "9", "24123": "9",
    "214324": "0", "241234": "0", "243214": "0", "234124": "0", "214234": "0", "21432": "0", "23412": "0",
    "d1341": "A", "d1431": "A",
    "d124134": "B", "d143124": "B", "d134124": "B", "d134214": "B", "d142134": "B", "d124314":"B", 
    "d1234": "C", "d4321": "",
    "d1241": "D", "d1421": "D",
    "d12342": "E", "d12432": "E",
    "d14324": "F", "d14234": "F",
    "d123": "G", 
    "d14231": "H", "d13241": "H",
    "d13": "I",
    "d134": "J",
    "d124": "K",
    "d143": "L",
    "d142132": "M", "d132142": "M", "d124132": "M","d123142": "M","d142312":"M","d132412":"M",
    "d1423": "N",
    "d12341": "O", "d14321": "O",
    "d12314": "P", "d13214": "P",
    "d14213": "Q", "d12413": "Q",
    "d123413": "R", "d132143": "R", "d134123": "R", "d143123": "R", "d143213": "R", "d123143":"R", "d131": "R",
    "d12431": "S", "d13421": "S",
    "d1231": "T", "d1321": "T",
    "d1432": "U",
    "d142": "V",
    "d1342": "W",
    "d1324": "X",
    "d132": "Y",
    "d1243": "Z",

    "43": "CHAI_CURSOR_RIGHT",
    "121": "CHAI_CURSOR_LEFT", 
    "434": "<",
    "21": "-","212": "+",
    "34": "_","343": "=","3434": "__","34343": "==",
    "242": "+","2121": "+",
    "4231": "","4213": "",
    "12": " ",
    "423": "\t",
    "23": "|","42": "/", "31": "\\",
    "32": "!","32343": "!=",
    "3413": "@", "3143": "@",
    "34123": "#", "32143": "#",
    "4312": "$", "3421": "$", 
    "3423": "%", "3243": "%",
    "314": "^", "413": "^",
    "34213": "&", "31243": "&", "3124": "&",
    "3142": "*", "31424": "**", 
    "4132": "~", 
    "2314": "`", "312": "`", "324": "`",
    "14": "'", "41": '"', 
    "414": ";", "323": ":",
    "141": ",", "232": ".",
    "341": "(", "432": ")",
    "3414": "()", "4323": "()",
    "3412": "[", "4321": "]",
    "34121": "[]", "43212": "[]", 
    "431": ">","342": "<",
    "4313": "<>","3424": "<>",
    "34124": "{", "34214": "{", "42143": "{", "41243": "{",
    "31234": "}", "32134": "}", "43213": "}", "43123": "}",
    "341242": "{}", "342141": "{}", "421434": "{}", "412434": "{}",
    "312343": "{}", "321343": "{}", "432131": "{}", "431232": "{}",
    "321": "?","3212": "? :",
    "41324":"Hello, World!"
    // define customerize keys
    /*"d231": "]","d241": "[",
    "d341": "|","d431": ">",
    "231": "]","241": "[",
     Customerize define
        "41": "SHIFT",
        "3214": "CTRL", "4123": "CTRL",
        "314": "ALT", "413": "ALT",
        "234": "ENTER",
        "14": "FN",
        "1441": "CAPSLOCK",
        "1412": "TAB",
        "1424": "F1",
        "142134": "F2",
        "142143": "F3",
        "14243": "F4",
        "142432": "F5", "142342": "F5",
        "1421432": "F6", "1421341": "F6",
        "14214": "F7",
        "142413": "F8",
        "1423413": "F9", "1423143": "F9",
        "14214324": "F10", "14241234": "F10", "14243214": "F10", "14234124": "F10", "14214234": "F10",
        "14142": "F11",
        "1421324": "F12", "1423124": "F12",
        "14213243": "F13", "14243213": "F13", "14234213": "F13",  
        "213243": "ESC", "243213": "ESC", "234213": "ESC",
        "414132": "~",
        "414213": "+",
        "4142": "_", 
        "32134": "]", "31234": "]", "43213": "}", "43123": "}",
        "4134124": "{", "4134214": "{", "4142143": "{", "4141243": "{",
        "4132134": "}", "4131234": "}", "4143213": "}", "4143123": "}",
        "41312": "|", "41213": "|",
        "13423": ",", "13243": "", "34231": ",", "32431": ",",
        "24134": ".", "24134": ".", "41342": ".", "43142": ".",
        "32142": "?", "32412": "?",
        "312342": ";", "342132": ";", "321342": ";", "324312": ";", "312432": ";", "234213": ";", "213243": ";", "243123": ";",
        "413423": "'", "423413": "'", "431423": "'", "432413": "'", "431423": "'", "234213": "'", "213243": "'", "243123": "'",
        "4124": "!",
        "412134": "@",
        "412143": "#",
        "41243": "$",
        "412432": "%", "412342": "%",
        "4121432": "^", "21341": "^",
        "41214": "&",
        "412413": "*",
        "4123413": "(", "4123143": "(",
        "41214324": ")", "41241234": ")", "41243214": ")", "41234124": ")", "41214234": ")"
        */



    //
};


