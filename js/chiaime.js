/**
 * 4 points 1 string ( Chia IME keyboard )
 * @author Daway.Cai (Cai,GuangXian)
 * @email caixnet@outlook.com
 * Application number: 2014800745031
 * International Application : PCT/CN2014/092045, 
 * International Publication : WO2016/082081
 * Apache license
 */

var chia = {
    mouseOn: false,
    keyState: function () {
        return this.mouseOn = !(this.mouseOn);
    },
    keys: "",
    docs: "",
    htmlEmbedTaget: "body",
    textID: "#chiatext",
    chiaImeBoxID: "#chiaKeyboardBox",
    chiaImeCheckPointID: "#chiaKeyButton",
    shiftKeyMark: "d",
    hasChar: function (chiacode) {
        return typeof (chia.codes[chiacode]) != "undefined";
    },
    getChar: function (chiacode) {
        return this.hasChar(chiacode) ? chia.codes[chiacode] : "";
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
        return $(this.chiaImeBoxID).css("background-color", aColor);
    },
    setStartIdColor: function (aColor = "#99CCFF") {
        return $(this.chiaImeBoxID).css("background-color", aColor);
    },
    setEndIdColor: function (aColor = "#FFFFCC") {
        return $(this.chiaImeBoxID).css("background-color", aColor);
    },
    setDeleteIdColor: function (aColor = "red") {
        return $(this.chiaImeBoxID).css("background-color", aColor);
    },
    clearKeys: function () { return this.keys = ""; },
    deleteKey: function () {
        this.docs = $(this.textID).val();
        $(this.textID).val(this.docs.substring(0, this.docs.length - 1));
        this.setEndIdColor();
        this.clearKeys();
    },
    enterKey: function () {
        this.docs = $(this.textID).val();
        $(this.textID).val(this.docs + "\n");
        this.clearKeys();
    },
    writeToText: function () {
        this.docs = $(this.textID).val();
        this.docs += this.getChar(this.keys);
        $(this.textID).val(this.docs);
        this.setEndIdColor();
        this.clearKeys();
    },
    setKeyboardBox: function () {
        var chiakbdbox = "<div id='chiaKeyboardBox'>";
        chiakbdbox += "<div id='chiakeyboardrow1' class='row'>";
        chiakbdbox += "<div id='chiaKeyButton1'></div>";
        chiakbdbox += "<div id='chiaKeyButton2'></div>";
        chiakbdbox += "</div>";
        chiakbdbox += "<div id='chiakeyboardrow2' class='row'>";
        chiakbdbox += "<div id='chiaKeyButton4'></div>";
        chiakbdbox += "<div id='chiaKeyButton3'></div>";
        chiakbdbox += "</div>";
        chiakbdbox += "</div>";
        return chiakbdbox;
    },
    setKeyboardBoxCSS: function () {
        $(this.chiaImeBoxID).css({
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
        $(this.chiaImeCheckPointID + "1").css({
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
        $(this.chiaImeCheckPointID + "2").css({
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
        $(this.chiaImeCheckPointID + "4").css({
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
        $(this.chiaImeCheckPointID + "3").css({
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
        var chiaMnuBox = "<div class=>"
        chiaMnuBox += "<ul id='chiaMenu'>";
        chiaMnuBox += "<li><span id='chiaSetup'></span></li>";
        chiaMnuBox += "<li><span id='chiaChangeLangues'></span></li>";
        chiaMnuBox += "<li><span id='chiaCustomerDefineKey'></span></li>";
        chiaMnuBox += "</div>";
        return chiaMnuBox;
    },
    setMenuBoxCSS: function () {
        $("#chiaMenu").css({
            "z-index": "99999",
            "display": "block",
            "position": "fixed",
            "top": "35%",
            "right": "0",
            "padding": "0",
            "opacity": "0.8",
            "cursor": "pointer"
        });
        $("#chiaMenu").each(function () {
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
        $("#chiaMenu").first(function () {
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
// append chia keyboard on main webpage.
$(function () {
    $(chia.htmlEmbedTaget).append(chia.setKeyboardBox());
    chia.setKeyboardBoxCSS();
    $(chia.htmlEmbedTaget).append(chia.setMenuBox());
    chia.setMenuBoxCSS();
});
// mouse over on chia keybaord keys
function onMouseOver() {
    for (i = 1; i <= 4; i++) {
        $(chia.chiaImeCheckPointID + i).mouseover(function () {
            chia.setActiveIdColor(this);
            if (chia.mouseOn) {
                chia.keys += chia.getID(this);
            } else {
            //
            }
        });
    }
}
// mouse out on chia keybord keys
function onMouseOut() {
    for (i = 1; i <= 4; i++) {
        $(chia.chiaImeCheckPointID + i).mouseout(function () {
            chia.setDeActiveIdColor(this);
        });
    }
}
// mouse out on chia keybord keys
function onMouseDblClick() {

    //
    for (i = 1; i <= 4; i++) {
        switch (i) {
            case 1:
                $(chia.chiaImeCheckPointID + i).on("dblclick", function () {
                    chia.keys = chia.shiftKeyMark + chia.getID(this);
                    chia.setDeActiveIdColor(this);
                    if (chia.keyState()) {
                        chia.setDblStartIdColor();
                    } else {
                        chia.setEndIdColor();
                        chia.clearKeys();
                    }
                });
                break;
            case 2:
                $(chia.chiaImeCheckPointID + i).on("dblclick", function () {
                    chia.deleteKey();
                });
                break;
            case 3:
                $(chia.chiaImeCheckPointID + i).on("dblclick", function () {
                    chia.enterKey();
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
// mouse on click ChiaKeyboard iterms 
function onMouseClick() {
    for (i = 1; i <= 4; i++) {
        $(chia.chiaImeCheckPointID + i).on("click", function () {
            if (chia.keyState()) {
                chia.keys += chia.getID(this);
                chia.setStartIdColor();
            } else {
                chia.writeToText();
            }
        });
    }
    ///
}
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
// main ready document to check chia keyboard.
$(document).ready(function () {
    onMouseEvent();
    hideLoadLabel();
});
////

//chia code
chia.codes = {
    /* chia Code reserve code */
    "1341": "a", "1431": "a",
    "124134": "b", "143124": "b", "134124": "b", "134214": "b", "142134": "b",
    "1234": "c", "4321": "c",
    "1241": "d", "1421": "d",
    "12342": "e", "12432": "e",
    "14324": "f", "14234": "f",
    "123": "g", /*"321": "}",*/
    "14231": "h", "13241": "h",
    "13": "i",
    "134": "j", "431": ">",
    "124": "k",
    "143": "l", "341": "|",
    "142132": "m", "132142": "m", "124132": "m",
    "1423": "n",
    "12341": "o", "14321": "o",
    "12314": "p", "13214": "p",
    "14213": "q", "12413": "q",
    "123413": "r", "132143": "r", "134123": "r", "143123": "r", "143213": "r",
    "12431": "s", "13421": "s",
    "1231": "t", "1321": "t",
    "1432": "u",
    "142": "v", /*"241": "[",*/
    "1342": "w",
    "1324": "x",
    "132": "y", /*"231": "]",*/
    "1243": "z",
    "24": "1",
    "2134": "2",
    "2143": "3", "3412": "3",
    "243": "4", /*"342": "<",*/
    "2432": "5", "2342": "5",
    "21431": "6", "21341": "6",
    "214": "7",
    "2413": "8",
    "23413": "9", "23143": "9",
    "214324": "0", "241234": "0", "243214": "0", "234124": "0", "214234": "0",
    "d1341": "A", "d1431": "A",
    "d124134": "B", "d143124": "B", "d134124": "B", "d134214": "B", "d142134": "B",
    "d1234": "C", "d4321": "C",
    "d1241": "D", "d1421": "D",
    "d12342": "E", "d12432": "E",
    "d14324": "F", "d14234": "F",
    "d123": "G", "d321": "}",
    "d14231": "H", "d13241": "H",
    "d13": "I",
    "d134": "J", /*"d431": ">",*/
    "d124": "K",
    "d143": "L", /*"d341": "|",*/
    "d142132": "M", "d132142": "M", "d124132": "M",
    "d1423": "N",
    "d12341": "O", "d14321": "O",
    "d12314": "P", "d13214": "P",
    "d14213": "Q", "d12413": "Q",
    "d123413": "R", "d132143": "R", "d134123": "R", "d143123": "R", "d143213": "R",
    "d12431": "S", "d13421": "S",
    "d1231": "T", "d1321": "T",
    "d1432": "U",
    "d142": "V", /*"d241": "[",*/
    "d1342": "W",
    "d1324": "X",
    "d132": "Y", /*"d231": "]",*/
    "d1243": "Z",
    "411341": "A", "411431": "A",
    "41124134": "B", "41143124": "B", "41134124": "B",
    "411234": "C",
    "411241": "", "411421": "",
    "4112342": "E", "4112432": "E",
    "4114324": "F", "4114234": "F",
    "41123": "G",
    "4114231": "H", "4113241": "H",
    "4113": "I",
    "41134": "J",
    "41143": "L",
    "41142132": "M", "41132142": "M", "41124132": "M",
    "411423": "N",
    "4112341": "O", "4114321": "O",
    "4112314": "P", "4113214": "P",
    "4114213": "Q", "4112413": "Q",
    "41123413": "R", "41132143": "R", "41134123": "R", "41143123": "R", "41143213": "R",
    "4112431": "S", "4113421": "S",
    "411231": "T", "411321": "T",
    "411432": "U",
    "41142": "V",
    "411342": "W",
    "411324": "X",
    "41132": "Y",
    "411243": "Z",
    /* Customerize define
        "41": "SHIFT",
        "3214": "CTRL", "4123": "CTRL",
        "314": "ALT", "413": "ALT",
        "234": "ENTER", "432": "ENTER",
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
        "423": "ELETE", "324": "ELETE",
        "34": "LEFT",
        "43": "RIGHT",
        "32": "UP",
        "23": "OWN",
        "21": "BACKSPACE",
        "12": " ",
        "213243": "ESC", "243213": "ESC", "234213": "ESC",
        "4132": "`",
        "414132": "~",
        "4213": "=",
        "414213": "+",
        "4142": "_",
        "34124": "[", "34214": "[", "42143": "[", "41243": "[",
        "32134": "]", "31234": "]", "43213": "]", "43123": "]",
        "4134124": "{", "4134214": "{", "4142143": "{", "4141243": "{",
        "4132134": "}", "4131234": "}", "4143213": "}", "4143123": "}",
        "312": "\\", "213": "\\", "31": "\\",
        "42": "/",
        "41312": "|", "41213": "|",
        "13423": ",", "13243": "", "34231": ",", "32431": ",",
        "24134": ".", "24134": ".", "41342": ".", "43142": ".",
        "32142": "?", "32412": "?", "21423": "?", "24123": ".",
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
};


