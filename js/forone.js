/*!
 * Chai ForOne keybaord v1.0
 * https://caixnet.github.io
 * Copyright (c) Cai guangxian
 * Author: Daway.Cai guangxian
 * Email: caixnet@outlook.com
 * Application number: 2014800745031
 * International Application : PCT/CN2014/092045, 
 * International Publication : WO2016/082081
 * Date: 2018-01-02
 */
/*! *****************************************************************************
Copyright (c) Daway.Cai . All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
//
// chai forone web-keyboard
//
//'use strict';
var forone = {
    // forone resource name
    oneforIdName: "oneforNavMini",
    textIdName: "chaiText",
    appIdName: "foroneApp",
    baseIdName: "foroneBase",
    lineIdName: "foroneCanvas",
    oneIdName: { 0: "forone0", 1: "forone1", 2: "forone2", 3: "forone3" },
    chai41keyboard: "chai41keyboard",
    runningTag: "running",
    isRunForone: false,
    mHideForOne: false,
    writeBeginLeft: true,
    isRender: true,
    // constant values
    foroneSize: 155,
    oneRadius: 30,
    oneGap: 5,
    lineStrokeStyle: "rgba(17, 13, 240, 0.8)",
    oneActiveColor: "rgba(228, 27, 27, 0.8)",
    oneDefalutColor: "rgba(5, 136, 11, 0.3)",
    defaultColor: "rgba(250, 243, 141, 0.3)",
    capsLockOnColor: "rgba(175, 246, 248, 0.3)",
    commandOnColor: "rgba(240, 192, 250, 0.3)",
    enterOnColor: "rgba(206, 170, 252, 0.3)",
    deleteOnColor: "rgba(248, 151, 151, 0.3)",
    customOnColor: "rgba(243, 63, 147, 0.3)",
    lineWidth: 10,
    lineCap: "round",
    lineJoin: "round",
    screenSize: window.screen.width,
    bottomSize: "10px",
    cusorTag: "Î",
    // cusorTag: String.fromCharCode(9014),
    // forone resource variable
    idApp: null,
    idBase: null,
    idRect: null,
    id4one: null,
    idOne: null,
    idOnefor: null,
    idText: null,
    idLine: null,
    // forone member variable
    mInOne: 0,
    mCode: "",
    mPath: "",
    mPoint: "",
    mIndex: null,
    mKeyCode: "",
    mTextContent: "",
    mCursor: [0, 0],
    keyShift: false,
    keyEnter: false,
    keyOption: false,
    keyDelete: false,
    debug: false,
    rectLeft: 0,
    rectTop: 0,
    // add CSS style text on head  
    addCSS: function (css) {
        document.head.insertAdjacentHTML('beforeend', css);
    },
    // add forone CSS
    addForoneCSS: function () {
        // var mForoneCss = `
        // <style type="text/css"> 
        // :root{--caiforonesize: 100px;}.foroneDemoApp{position: relative; height:var(--caiforonesize); width:var(--caiforonesize);border: 0px; border-radius:calc(var(--caiforonesize)*.25); margin: calc(var(--caiforonesize)*.2); padding: 0;display:inline-block; animation-delay:0s; z-index: 1;}.foroneDemoKey{position: static; height: calc(var(--caiforonesize)*.35); width: var(--caiforonesize); margin-left: 0px;margin-top: calc(var(--caiforonesize)*1.05); border:0px;font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;font-size: 1.5em; text-align: center; vertical-align: middle;justify-content: center; display:block;background-color: rgba(141, 250, 199, 0.8);z-index: 4;}.foroneDemoBase{ --foroneBaseSize: var(--caiforonesize); position: absolute;height: var(--caiforonesize); width: var(--caiforonesize);left: 0px; top: 0; border:0px; border-radius:25px; margin: 0; padding: 0; display:inline-block;background-color: rgba(250, 243, 141, 0.8); z-index: 1;}.forOneCai{position: absolute; height:calc(var(--caiforonesize)*0.2);width:calc(var(--caiforonesize)*0.2);border:1px;border-radius:calc(var(--caiforonesize)*0.2);margin-left: calc(var(--caiforonesize)*0.15);margin-top: calc(var(--caiforonesize)*0.15);background-color: rgba(243, 21, 21, 0.9);z-index: 50;animation-timing-function:linear;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal;animation-play-state:running;display: none;}.forOne0{ position: absolute; height:calc(var(--caiforonesize)*0.4);width:calc(var(--caiforonesize)*0.4);border:1px;border-radius:calc(var(--caiforonesize)*0.2);z-index: 2;margin-left: calc(var(--caiforonesize)*0.05);margin-top: calc(var(--caiforonesize)*0.05);background-color: rgba(11, 83, 29, 0.8); background-color: rgba(5, 136, 11, 0.8);}.forOne1{ position: absolute; height:calc(var(--caiforonesize)*0.4); width:calc(var(--caiforonesize)*0.4);border:1px; border-radius:calc(var(--caiforonesize)*0.2);z-index: 2;margin-left: calc(var(--caiforonesize)*0.55);margin-top: calc(var(--caiforonesize)*0.05);background-color: rgba(5, 136, 11, 0.8);}.forOne2{position: absolute;height:calc(var(--caiforonesize)*0.4);width:calc(var(--caiforonesize)*0.4);border:1px;border-radius:calc(var(--caiforonesize)*0.2);z-index: 2;margin-left: calc(var(--caiforonesize)*0.05);margin-top: calc(var(--caiforonesize)*0.55);background-color: rgba(5, 136, 11, 0.8);}.forOne3{position: absolute;height:calc(var(--caiforonesize)*0.4);width:calc(var(--caiforonesize)*0.4);border:1px;border-radius:calc(var(--caiforonesize)*0.2);z-index: 2;margin-left: calc(var(--caiforonesize)*0.55);margin-top: calc(var(--caiforonesize)*0.55);background-color: rgba(5, 136, 11, 0.8);}.forOneChai{ position: absolute;height:100px;width:100px;left: 0px;top: 0;border:0px;border-radius:25px;margin: 0;padding: 0;display:inline-block;z-index: 5; }
        // </style> 
        // `;

        var mForoneCss = '<!--  begin chai forone Web-Keyboard CSS-->' +
            '<style type="text/css"> :root {--foronesize: ' + forone.foroneSize + 'px;}' +
            ' #foroneApp {position: fixed;left: calc(var(--foronesize)*.67);display:block;z-index: 720203;' +
            'bottom: calc(var(--foronesize)*1.13);border:0px;margin: 0;padding: 0;border : 0;}' +
            '#foroneBase {position: absolute;height:var(--foronesize);width:var(--foronesize);' +
            'left: 0;top: 0;border:0px;border-radius: calc(var(--foronesize)*.193); margin: 0;' +
            'padding: 0;display:block;background-color: rgba(250, 243, 141, 0.3);z-index: 1;}' +
            '#forone0 {position: absolute; height: calc(var(--foronesize)*.387); ' +
            'width: calc(var(--foronesize)*.387);border: 0px; border-radius: calc(var(--foronesize)*.194);' +
            'margin-left: calc(var(--foronesize)*.0323);margin-top: calc(var(--foronesize)*.0323);' +
            'background-color: rgba(5, 136, 11, 0.3); z-index: 2;}' +
            '#forone1 {position: absolute; height: calc(var(--foronesize)*.387); width: calc(var(--foronesize)*.387);' +
            'margin-left: calc(var(--foronesize)*.599); margin-top: calc(var(--foronesize)*.0323);z-index: 2;' +
            'border:0px; border-radius: calc(var(--foronesize)*.194);  background-color: rgba(5, 136, 11, 0.3);}' +
            '#forone2 {position: absolute;height: calc(var(--foronesize)*.387);width: calc(var(--foronesize)*.387);' +
            'margin-left: calc(var(--foronesize)*.0323);margin-top: calc(var(--foronesize)*.599);z-index: 2;' +
            'border:0px;border-radius: calc(var(--foronesize)*.194); background-color:rgba(5, 136, 11, 0.3);}' +
            '#forone3 {position: absolute; height: calc(var(--foronesize)*.387); width: calc(var(--foronesize)*.387);' +
            'margin-left: calc(var(--foronesize)*.599); margin-top: calc(var(--foronesize)*.599);z-index: 1;' +
            'border: 0px; border-radius: calc(var(--foronesize)*.194); background-color: rgba(5, 136, 11, 0.3);}' +
            '#foroneCanvas {height:var(--foronesize); width:var(--foronesize); position: absolute; left: 0px; top: 0px;' +
            'margin: 0px; border:0px; border-radius: calc(var(--foronesize)*.193); display:block; z-index: 3; }' +
            '.oneforBase {bottom: 5px;left: 1px;height:calc(var(--foronesize)*.4);width:calc(var(--foronesize)*.4);' +
            'border:0px; border-radius:10px; background-color:rgba(94, 88, 95, 0.3); position: fixed; z-index: 711229;display:none}' +
            '.oneforIn { top: 8px; left: 8px; height:calc(var(--foronesize)*.3); width:calc(var(--foronesize)*.3);' +
            'position: absolute;border:0px; border-radius:22px;  background-color: rgba(245, 16, 16, 0.5);z-index: 2; }' +
            '.oneforOn {position: fixed; height:10px; width: 300px; bottom: 5px; left: 100px;' +
            'margin-left: 2px; margin-bottom: 5px; border:1px; border-radius:10px; z-index: 3;}' +
            '</style> <!--  end chai forone Web-Keyboard CSS-->';


        forone.addCSS(mForoneCss);
    },
    getCSSvalue: function (cssVal) { return getComputedStyle(document.documentElement).getPropertyValue(cssVal).trim(); },
    // add forone app in body
    addForoneHTML: function () {


        var mForoneHtml = "<!-- begin chai forone Web-Keyboard HTML-->" +
            '<div id="foroneApp">' +
            '<div id="foroneBase">' +
            '<div id="forone0"></div> <div id="forone1"></div>' +
            '<div id="forone2"></div><div id="forone3"></div> </div>' +
            '<canvas id="foroneCanvas"></canvas> </div>' +
            '<!-- end chai forone Web-Keyboard HTML -->' +
            '<!-- begin chai forone Web-Keyboard Mini HTML -->' +
            '<nav id="oneforNavMini" class="oneforBase">' +
            '<div id="oneforNavIn" class="oneforIn"></div>' +
            '<div id="onforNavOn" class="oneforOn"></div></nav>' +
            '<!-- end chai forone Web-Keyboard Mini HTML -->';
        forone.addHTML(mForoneHtml);
        forone.logc(mForoneHtml, "addhtml");

        //

    },
    //  add HTML on body
    addHTML: function (html) {
        // beforebegin <p> afterbegin | foo | beforeend </p> afterend
        document.body.insertAdjacentHTML('beforeend', html);
    },
    // add forone mini onefor event listener 
    onClickOneforEvent: function () {
        forone.idOnefor.addEventListener('click', forone.hideForoneApp, false);
    },
    // get element resource
    getId: function (name, isById = true) {
        if (isById) {
            return document.getElementById(name);
        } else {
            return document.querySelector(name);
        }
    },
    // get forone app ID
    getApp: function () { return forone.getId(forone.appIdName); },
    // get forone base layer ID
    getBase: function () { return forone.getId(forone.baseIdName); },
    // get forone canvas layer ID
    get4one: function () { return forone.getId(forone.lineIdName); },
    // get input textarea layer ID
    getText: function () { return forone.getId(forone.textIdName); },
    // get active element ID
    getActiveId: function () { return document.activeElement.id; },
    // get onefor element ID
    getOnefor: function () { return forone.getId(forone.oneforIdName) },
    // get IDs for four each one of touch keybaord 
    getOne: function () {
        return [forone.getId(forone.oneIdName[0]),
        forone.getId(forone.oneIdName[1]),
        forone.getId(forone.oneIdName[2]),
        forone.getId(forone.oneIdName[3])]
    },
    // print log message
    logd: function (message, tagName = "forone") {
        if (forone.debug) {
            document.write("logID:" + new Date().getTime() + ":Tag:" + tagName + ":Msg:" + message);
        }
    },
    // print log message
    logc: function (message, tagName = "forone") {
        if (forone.debug) {
            console.log("logID:", new Date().getTime(), ":Tag:", tagName, ":Msg:", message);
        }
    },
    // get device size
    deviceSize: function () {
        var deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var deviceHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return [deviceWidth, deviceHeight]
    },
    // set forone size 
    setSize: function () {
        forone.idBase.width = forone.foroneSize;
        forone.idBase.height = forone.foroneSize;
        forone.id4one.width = forone.foroneSize;
        forone.id4one.height = forone.foroneSize;
    },
    // measure forone position on center
    get41Position: function () {
        return (forone.screenSize - forone.foroneSize) / 2;
    },
    // get forone size
    getBaseRect: function () {
        return forone.idBase.getBoundingClientRect();
    },
    // set forone posiztion 
    set41Position: function () {
        forone.idApp.style.left = forone.get41Position() + "px";
        forone.left = forone.idBase.getBoundingClientRect().left;
        forone.top = forone.idBase.getBoundingClientRect().top;
    },
    // set forone background color
    setBaseColor: function (color) {
        forone.idBase.style.backgroundColor = color
    },
    // clear forone canvas rect zone
    clearForone: function () {
        //forone.logc(forone.idLine, "clearFoeone");
        if (forone.idLine) {
            forone.idLine.clearRect(0, 0, forone.idRect.width, forone.idRect.height);
        }
    },
    // get forone touch xy
    getXY: function (ev) {
        var e = ev.changedTouches[0];
        return [parseInt(e.clientX - forone.left), parseInt(e.clientY - forone.top)];
        // return [parseInt(e.clientX - offsetx), parseInt(e.clientY - offsety)];
    },
    // get one center size on forone zone
    getOneCenter: function (size, gap) { return size + gap },
    // get one position on forone zone
    getCenter: function () {
        return forone.getOneCenter(forone.oneRadius, forone.oneGap);
    },
    // get each one position on forone zone
    getOneXY: function (forOnesize, center) {
        var width = forOnesize;
        var height = forOnesize;
        var oneCenter = {
            0: [center, center],
            1: [width - center, center],
            2: [center, height - center],
            3: [width - center, height - center]
        }
        return oneCenter;
    },
    // get each one position
    ones: function () {
        return forone.getOneXY(forone.foroneSize, forone.getCenter())
    },
    // check touch in each one of forone zone
    checkInOne: function (xy) {
        //forone.logc("xy::" + xy, "checkInOne");
        for (var i in [0, 1, 2, 3]) {
            forone.mInOne = Math.sqrt((xy[0] - forone.ones()[i][0]) * (xy[0] - forone.ones()[i][0]) +
                (xy[1] - forone.ones()[i][1]) * (xy[1] - forone.ones()[i][1]));
            if (forone.mInOne <= forone.oneRadius) {
                return i;
            }
        }
        return "";
    },
    // set one zone background color on forone
    setOneColor: function (index) {
        //

        if (index == '') {
            return;
        }
        var idx = Number(index);

        if (forone.mIndex == idx) {
            forone.logc("return", "touchMove-eq");
            forone.logc(forone.mIndex, "touchMove");
            return;
        } else {
            forone.mIndex = idx;
            forone.logc(forone.mIndex, "touchMove-nq");
        }

        for (var i = 0; i <= 3; i++) {
            if (i == idx) {
                forone.getOne()[i].style.backgroundColor = forone.oneActiveColor;
            } else {
                forone.getOne()[i].style.backgroundColor = forone.oneDefalutColor;
            }
        }


    },
    // remove cusor tag
    removeCusorTag(txt) {
        return txt.replace(forone.re.cursorI, '');
    },
    // make forone chai code
    makeCode: function (str) {
        if (str == null) return "";
        if (str.length < 2) { return str; }
        var strBufer = "";
        strBufer = str.charAt(0);
        for (var i = 1; i < str.length - 1; i++) {
            if (str.charAt(i - 1) != str.charAt(i)) {
                strBufer += str.charAt(i);
            }
        }
        return strBufer;
    },
    // hide system keyboard when active element 
    hideKeyboard: function () {
        document.activeElement.blur();
    },
    // on touch start forone zone
    oneTouchStart: function (ev) {
        ev.preventDefault();
        forone.hideKeyboard();
        forone.clearForone();
        forone.mPoint = forone.checkInOne(forone.getXY(ev));
        forone.setOneColor(forone.mPoint);
        forone.mPath += forone.mPoint;
        forone.mCode = forone.makeCode(forone.mPath);

        var bodyRect = document.body.getBoundingClientRect(),
            elemRect = forone.getId(forone.baseIdName).getBoundingClientRect();
        forone.left = parseInt(elemRect.left - bodyRect.left),
            forone.top = parseInt(elemRect.top - bodyRect.top);

    },
    // init forone canvas zone
    initLine: function () {
        forone.idLine = forone.id4one.getContext('2d');
        forone.idLine.width = forone.foroneSize;
        forone.idLine.height = forone.foroneSize;
        forone.idLine.beginPath();
        forone.idLine.lineWidth = forone.lineWidth;
        forone.idLine.lineCap = forone.lineCap;
        forone.idLine.lineJoin = forone.lineJoin;
        forone.idLine.strokeStyle = forone.lineStrokeStyle;
    },
    // draw forone canvas zone     
    drawLine: function (code) {
        if (code.length >= 2) {

            var from = code.charAt(code.length - 2);
            var to = code.charAt(code.length - 1);
            forone.initLine()
            forone.idLine.moveTo(forone.ones()[from][0], forone.ones()[from][1])
            forone.idLine.lineTo(forone.ones()[to][0], forone.ones()[to][1])
            forone.idLine.stroke();
        }
    },
    // on touch move forone zone
    oneTouchMove: function (ev) {
        ev.preventDefault();
        forone.mPoint = forone.checkInOne(forone.getXY(ev));
        forone.logc(forone.mPoint + ",type:" + typeof forone.mPoint, "oneTouchMove");
        forone.setOneColor(forone.mPoint);
        forone.mPath += forone.mPoint;
        forone.mCode = forone.makeCode(forone.mPath);
        forone.drawLine(forone.mCode);
        //
        var bodyRect = document.body.getBoundingClientRect(),
            elemRect = forone.getId(forone.baseIdName).getBoundingClientRect(),
            offset = elemRect.left - bodyRect.left;
        var e = ev.changedTouches[0];
        //
        var ex = e.clientX;
        var mx = forone.idRect.x;
    },
    // get chai code key
    getCode: function (code) {
        var cai = "";
        try {
            if (forone.chaicodes[code] != undefined)
                cai = forone.chaicodes[code];
        } catch (e) {
            forone.logc("CHAI", "no code mapping");
            cai = "";
        }
        return cai;
    },
    // hide textarea system softkeyboard
    hideNormalKeyboard: function () {
        if (forone.idText) {
            forone.idText.blur();
        }
    },
    // set cusor position
    setCusor: function (iCursor) {
        forone.mCursor[0] = forone.mCursor[1] = iCursor;
    },
    // get cusor position
    getCusor: function () {
        if (forone.idText) {
            forone.mCursor[0] = forone.idText.selectionStart;
            forone.mCursor[1] = forone.idText.selectionEnd;
        }
        return forone.mCursor;
    },
    // move Cursor right to textarea 
    cursorRight: function () {
        forone.getCusor();
        forone.setCusor(forone.mCursor[0] + 1);
        forone.mTextContent = forone.idText.value;
        forone.mTextContent = forone.mTextContent.replace(forone.re.cursorI, '');
        var cursorBefore = forone.mTextContent.substring(0, forone.mCursor[0]);
        var cursorAfter = forone.mTextContent.substring(forone.mCursor[1], forone.mTextContent.length);
        forone.mTextContent = cursorBefore + forone.cusorTag + cursorAfter;
        forone.idText.value = forone.mTextContent;
        forone.idText.setSelectionRange(forone.mCursor[0], forone.mCursor[0]);
        //forone.idText.focus();
        forone.hideNormalKeyboard();
    },
    // move Cursor left to textarea 
    cursorLeft: function () {
        forone.getCusor();
        forone.setCusor(forone.mCursor[0] == 0 ? 0 : forone.mCursor[0] - 1);
        forone.mTextContent = forone.idText.value;
        forone.mTextContent = forone.mTextContent.replace(forone.re.cursorI, '');
        // forone.mTextContent = forone.mTextContent.replace(/Î/g, '');
        var cursorBefore = forone.mTextContent.substring(0, forone.mCursor[0]);
        var cursorAfter = forone.mTextContent.substring(forone.mCursor[1], forone.mTextContent.length);
        forone.mTextContent = cursorBefore + forone.cusorTag + cursorAfter;
        forone.idText.value = forone.mTextContent;
        forone.idText.setSelectionRange(forone.mCursor[0], forone.mCursor[0]);
        //forone.idText.focus();

        forone.hideNormalKeyboard();
    },
    // move Cursor up to textarea
    cursorUp: function (isUpDown=true) {
        forone.getCusor();
        forone.setCusor(forone.mCursor[0] == 0 ? 0 : forone.mCursor[0] - 1);
        forone.mTextContent = forone.idText.value;
        var strArray = forone.mTextContent.split("\n");
        var mCol = -1, mRow = -1;
        for (i in strArray) {
            if (strArray[i].indexOf(forone.cusorTag) != -1) {
                mCol = strArray[i].indexOf(forone.cusorTag);
                mRow = i;
                break;
            }
        }
        var myRow = isUpDown?parseInt(mRow) - 1:parseInt(mRow) + 1;

        if (myRow >= 0 && myRow < strArray.length) {
            strArray[mRow]= strArray[mRow].replace(forone.cusorTag,'');
            strArray[myRow] = strArray[myRow].substring(0, mCol) + forone.cusorTag 
            + strArray[myRow].substring(mCol);
        }
        forone.mTextContent = strArray.join('\n');
        forone.mCursor[0] = forone.mTextContent.indexOf(forone.cusorTag);

        forone.idText.value = forone.mTextContent;
        forone.idText.setSelectionRange(forone.mCursor[0], forone.mCursor[0]);
        forone.hideNormalKeyboard();
        forone.logc("cursorUp", "ongoing")
    },
    // move Cursor down to textarea
    cursorDown: function () {
       forone.cursorUp(false);
    },
    // duplicate line in Cursor to textarea
    duplicateLine: function () {
        forone.getCusor();
        forone.setCusor(forone.mCursor[0] == 0 ? 0 : forone.mCursor[0] - 1);
        forone.mTextContent = forone.idText.value;
        var strArray = forone.mTextContent.split("\n");
        var mCol = -1, mRow = -1;
        for (i in strArray) {
            if (strArray[i].indexOf(forone.cusorTag) != -1) {           
                strArray.splice(i, 0, strArray[i]);  
                 strArray[i]= strArray[i].replace(forone.cusorTag,'');
                break;
            }
        }
        
        forone.mTextContent = strArray.join('\n');
        forone.mCursor[0] = forone.mTextContent.indexOf(forone.cusorTag);
        forone.idText.value = forone.mTextContent;
        forone.idText.setSelectionRange(forone.mCursor[0], forone.mCursor[0]);
        forone.hideNormalKeyboard();
        forone.logc("duplicateline", "DUP")
    },

    // forone Input Process
    InputProcess: function (txt) {
        forone.getCusor();
        if (forone.idText) {
            forone.mTextContent = forone.idText.value;
            forone.mTextContent = forone.mTextContent.replace(forone.re.cursorI, '');
            // forone.mTextContent = forone.mTextContent.replace(/Î/g, '');
            var cursorBefore = "";
            if (forone.mCursor[1] == forone.mTextContent.length) {
                forone.mTextContent = forone.mTextContent.substring(0, forone.mCursor[1]) + txt + forone.cusorTag;
                // forone.mTextContent = forone.mTextContent.substring(0, forone.mCursor[1]) + txt.replace(/Î/g,'') + forone.cusorTag;
            } else {
                var cursorBefore = forone.mTextContent.substring(0, forone.mCursor[0]);
                var cursorAfter = forone.mTextContent.substring(forone.mCursor[1], forone.mTextContent.length);
                forone.mTextContent = cursorBefore + txt + forone.cusorTag + cursorAfter;
                // forone.mTextContent = cursorBefore + txt.replace(/Î/g,'') + forone.cusorTag + cursorAfter;
            }
            forone.setCusor(forone.mCursor[1] + txt.length);
            forone.idText.value = forone.mTextContent;
            forone.idText.setSelectionRange(forone.mCursor[0], forone.mCursor[0]);
        }

        //forone.idText.focus();
        forone.hideNormalKeyboard();
    },
    // on shift key
    onKeyShift: function () {
        return forone.keyShift = !forone.keyShift;
    },
    // clear keys buffer
    clearKeys: function () { return forone.keys = ""; },
    // process enter key
    enterProcess: function () {
        forone.getCusor();
        if (forone.idText) {
            forone.mTextContent = forone.idText.value;
            var cursorBefore = "";
            if (forone.mCursor[1] == forone.mTextContent.length) {
                forone.mTextContent = forone.mTextContent.substring(0, forone.mCursor[1]) + "\n";
            } else {
                var cursorBefore = forone.mTextContent.substring(0, forone.mCursor[0]);
                var cursorAfter = forone.mTextContent.substring(forone.mCursor[1], forone.mTextContent.length);
                forone.mTextContent = cursorBefore + "\n" + cursorAfter;
            }
            forone.setCusor(forone.mCursor[1] + 1);
            forone.idText.value = forone.mTextContent;

            forone.idText.setSelectionRange(forone.mCursor[0], forone.mCursor[0]);
        }
        //forone.idText.focus();
        forone.hideNormalKeyboard();
        //this.clearKeys();
    },
    // on enter key
    onKeyEnter: function () {
        forone.enterProcess();
        return forone.keyEnter = !forone.keyEnter;
    },
    // process delete
    deleteProcess: function () {
        forone.getCusor();
        if (forone.idText) {
            forone.mTextContent = forone.idText.value;
            forone.mTextContent = forone.mTextContent.replace(forone.re.cursorI, '');
            // forone.mTextContent = forone.mTextContent.replace(/Î/g, '');
            var cursorBefore = "";
            if (forone.mCursor[0] == forone.mCursor[1]) {
                var cursorBefore = forone.mTextContent.substring(0, forone.mCursor[0]);
            } else {
                var cursorBefore = forone.mTextContent.substring(0, forone.mCursor[0] + 1);
            }
            var cursorAfter = forone.mTextContent.substring(forone.mCursor[1] + 1, forone.mTextContent.length);
            forone.mTextContent = cursorBefore + cursorAfter;
            forone.setCusor(forone.mCursor[0] == 0 ? 0 : forone.mCursor[0]);
            //

            var cursorBefore = forone.mTextContent.substring(0, forone.mCursor[0]);
            var cursorAfter = forone.mTextContent.substring(forone.mCursor[1], forone.mTextContent.length);
            forone.mTextContent = cursorBefore + forone.cusorTag + cursorAfter;
            //
            forone.idText.value = forone.mTextContent;
            forone.idText.setSelectionRange(forone.mCursor[0], forone.mCursor[0]);
        }
        //forone.idText.focus();
        forone.hideNormalKeyboard();
    },
    // on delete key
    onKeyDelete: function () {
        //forone.setBaseColor(forone.deleteOnColor);
        forone.deleteProcess();
        //forone.setBaseColor(forone.defaultColor);
        return forone.keyDelete = !forone.keyDelete;
    },
    // process backspace
    backSpaceProcess: function () {
        forone.getCusor();
        if (forone.idText) {
            forone.mTextContent = forone.idText.value;
            var cursorBefore = "";
            if (forone.mCursor[0] == forone.mCursor[1]) {
                var cursorBefore = forone.mTextContent.substring(0, forone.mCursor[0] - 1);
            } else {
                var cursorBefore = forone.mTextContent.substring(0, forone.mCursor[0]);
            }

            var cursorAfter = forone.mTextContent.substring(forone.mCursor[1], forone.mTextContent.length);
            forone.mTextContent = cursorBefore + cursorAfter;
            forone.setCusor(forone.mCursor[0] == 0 ? 0 : forone.mCursor[0] - 1);
            //
            forone.mTextContent = forone.mTextContent.replace(forone.re.cursorI, '');
            // forone.mTextContent = forone.mTextContent.replace(/Î/g, '');
            var cursorBefore = forone.mTextContent.substring(0, forone.mCursor[0]);
            var cursorAfter = forone.mTextContent.substring(forone.mCursor[1], forone.mTextContent.length);
            forone.mTextContent = cursorBefore + forone.cusorTag + cursorAfter;
            //
            forone.idText.value = forone.mTextContent;
            forone.idText.setSelectionRange(forone.mCursor[0], forone.mCursor[0]);
        }

        //forone.idText.focus();
        forone.hideNormalKeyboard();
    },
    // on backspace key
    onKeyBackSpace: function () {
        //forone.setBaseColor(forone.deleteOnColor);
        forone.backSpaceProcess();
        //forone.setBaseColor(forone.defaultColor);
        return forone.keyDelete = !forone.keyDelete;
    },
    // process command option key
    opetionKeyProcess: function () {
        if (forone.keyOption) {
            forone.setBaseColor(forone.commandOnColor);
        } else {
            forone.setBaseColor(forone.defaultColor);
        }
    },
    // on command option key
    onKeyOption: function () {
        return forone.keyOption = !forone.keyOption;
    },
    // trigger forone show & hide 
    hideForone: function () {
        forone.mHideForOne = !forone.mHideForOne;
        forone.onKeyOption();
        return forone.mHideForOne;
    },
    // trigger forone App and onefor Mini show & hide
    hideForoneApp: function () {
        if (forone.hideForone()) {
            forone.idApp.style.display = "none";
            forone.idOnefor.style.display = "block";
        } else {
            forone.idApp.style.display = "block";
            forone.idOnefor.style.display = "none";
        }
    },
    //*
    // on touch end forone zone 
    oneTouchEnd: function (ev) {
        ev.preventDefault();
        // ev.stopPropagation();
        forone.mPoint = forone.checkInOne(forone.getXY(ev));
        forone.setOneColor(forone.mPoint);
        forone.mPath += forone.mPoint;
        forone.mCode = forone.makeCode(forone.mPath);
        forone.drawLine(forone.mCode);
        forone.setOneColor(-1);
        forone.mKeyCode = forone.getCode(forone.mCode);
        if (forone.mKeyCode == "KEY_SHIFT") {
            forone.onKeyShift();
            if (forone.keyShift) {
                forone.setBaseColor(forone.capsLockOnColor);
            } else {
                forone.setBaseColor(forone.defaultColor);
            }
        } else if (forone.mKeyCode == "KEY_ENTER") {
            forone.onKeyEnter();
        } else if (forone.mKeyCode == "KEY_BACKSPACE") {
            forone.onKeyBackSpace();
        } else if (forone.mKeyCode == "KEY_DELETE") {
            forone.onKeyDelete();
        }
        else if (forone.mKeyCode == "KEY_CTRL") {
            forone.onKeyOption();

        } else {
            if (forone.keyShift) {
                forone.mCode = "c" + forone.mCode;
                switch (forone.getCode(forone.mCode)) {
                    case "CHAI_CURSOR_RIGHT":
                        forone.cursorRight();
                        break;
                    case "CHAI_CURSOR_LEFT":
                        forone.cursorLeft();
                        break;
                    case "CHAI_CURSOR_UP":
                        forone.cursorLeft();
                        break;
                    case "CHAI_CURSOR_DOWN":
                        forone.cursorLeft();
                        break;
                    default:
                        forone.InputProcess(forone.getCode(forone.mCode));
                }
            } else if ("CHAI_CURSOR_RIGHT" == forone.getCode(forone.mCode)) {
                forone.cursorRight();
            } else if ("CHAI_CURSOR_LEFT" == forone.getCode(forone.mCode)) {
                forone.cursorLeft();
            } else if ("CHAI_CURSOR_UP" == forone.getCode(forone.mCode)) {
                forone.cursorUp();
            } else if ("CHAI_CURSOR_DOWN" == forone.getCode(forone.mCode)) {
                forone.cursorDown();
            } else if ("HIDE_FORONE_APP" == forone.getCode(forone.mCode)) {
                forone.hideForoneApp();
            } else if ("EDIT_DUPLICATELINE" == forone.getCode(forone.mCode)) {
                //    "2121": "EDITOR_HTML","2102": "EDITOR_CSS","2132": "EDITOR_JS", "201321": "EDITOR_RENDER",
                forone.triaMD.markDown();
                forone.duplicateLine();
            } else {
                forone.InputProcess(forone.getCode(forone.mCode));
            }
            //forone.hideNormalKeyboard();
            //
        }
        forone.logc("KEY:( " + forone.mKeyCode + " ), Path:" + forone.mCode, "foroneCode:");
        forone.mCode = "";
        forone.mPath = "";
        forone.mPoint = "";
        forone.mKeyCode = "";
    },
    // add forone touch listener
    addListener: function (ev) {
        forone.id4one.addEventListener('touchstart', forone.oneTouchStart, false);
        forone.id4one.addEventListener('touchmove', forone.oneTouchMove, false);
        forone.id4one.addEventListener('touchend', forone.oneTouchEnd, false);
    },
    // remove forone touch listener
    removeWindowTouch: function () {
        window.removeEventListener("touchstart", forone.detectInputType, false);
    },
    // remove forone mouse listener
    removeWindowTouch: function () {
        window.removeEventListener("mousedown", forone.detectInputType, false);
    },
    // check forone touch listener
    checkTouch: function () {
        window.addEventListener("touchstart", forone.detectInputType, false);
    },
    // check forone mouse listener
    checkMouse: function () {
        window.addEventListener("mousedown", forone.detectInputType, false);
    },
    // check input and add listener
    checkInput: function () {
        window.addEventListener("click", forone.getTextId, false);
        forone.addListener();
    },
    //iframes[0].ownerDocument
    getTextId: function () {
        if (forone.idText) { return; }
        var mType = document.activeElement.getAttribute("type");
        forone.logc(document.activeElement.id, "=====");
        mType = String(mType).toUpperCase();
        if ("TEXTAREA" == document.activeElement.tagName) {
            forone.textIdName = document.activeElement.id;
        } else if ("TEXT" == mType) {
            forone.textIdName = document.activeElement.id;
        } else if ("PASSWORD" == mType) {
            forone.textIdName = document.activeElement.id;
        } else if ("SEARCH" == mType) {
            forone.textIdName = document.activeElement.id;
        } else {

        }
        if (forone.textIdName) {
            forone.idText = forone.getId(forone.textIdName);
            forone.logc(forone.idText, "----getTextId");
        }
        forone.logc(forone.idText, "getTextId");
    },
    // set default textarea id
    setDefaultTextId: function () {
        try {
            var aTextArea = document.querySelector("textarea,search,text,password");
            if (aTextArea.id) {
                forone.textIdName = aTextArea.id;
            }
            forone.logc(forone.textIdName, "setDefaultTextId");
        } catch (error) {
            forone.logc(error, "no found Text Input!");
        }
    },
    /* begin webSQL */
    DB: {
        canDB: false,
        initDB: function (dbName, dbSize = 65536, ver = '1.0', ) {
            var mDB = null;
            try {
                if (!window.openDatabase) {
                    forone.DB.canDB = false;
                } else {
                    var shortName = dbName;
                    var version = '1.0';
                    var displayName = dbName;
                    var maxSize = dbSize;
                    mDB = openDatabase(shortName, version, displayName, maxSize);
                }
            } catch (e) {
                if (e == INVALID_STATE_ERR) {
                    alert("Invalid database version.");
                } else {
                    alert("Unknown error " + e + ".");
                }
            }
            return mDB;
        },

        // txtSQL = 'CREATE TABLE IF NOT EXISTS User(name TEXT, age INTEGER);'
        //txtSQL='INSERT INTO User values(?,?)', [“Mark”, 60],
        //txtSQL='SELECT * FROM User WHERE name=?', [name],
        //txtSQL='DELETE FROM User where name=?',[name],
        execSQL: function (db, txtSQL, value = []) {
            db.transaction(
                function (transaction) {
                    transaction.executeSql(txtSQL, value,
                        function (result) { }, function (tx, error) { });
                });
        },
        //
        getSQL: function (db) {
            db.transaction(function (db) {
                db.executeSql('SELECT * FROM testTable', [], function (db, results) {
                    var len = results.rows.length, i;
                    console.log('Got ' + len + ' rows.');
                    for (i = 0; i < len; i++) {
                        console.log('id: ' + results.rows.item(i).id);
                        console.log('name: ' + results.rows.item(i).name);
                    }
                });
            });
        }


    },
    /* end webSQL */
    /* begin indexDB */
    IDB: {
        request: null,
        init: {
            request: indexedDB.open("DataModel"),
            onupgradeneeded: function () {
                db = request.result;
                var store = db.createObjectStore("meters", { keyPath: "id" });
                store.createIndex("by_tag", "tag", { unique: true });
                store.createIndex("by_name", "name");
            },
            onsuccess: function () {
                db = request.result;
            }
        },


        save: function (dataModel) {
            var tx = db.transaction("meters", "readwrite");
            var store = tx.objectStore("meters");
            dataModel.each(function (data) {
                store.put({
                    id: data.getId(),
                    tag: data.getTag(),
                    name: data.getName(),
                    meterValue: data.a('meter.value'),
                    meterAngle: data.a('meter.angle'),
                    p3: data.p3(),
                    r3: data.r3(),
                    s3: data.s3()
                });
            }),
                tx.oncomplete = function () {
                    console.log(dataModel.size() + ' datas are saved');
                };
            return dataModel.serialize();
        },
        restore: function (dataModel) {
            var tx = db.transaction("meters", "readonly");
            var store = tx.objectStore("meters");
            var req = store.openCursor();
            var nodes = [];
            req.onsuccess = function () {
                var res = req.result;
                if (res) {
                    var value = res.value;
                    var node = createNode();
                    node.setId(value.id);
                    node.setTag(value.tag);
                    node.setName(value.name);
                    node.a({
                        'meter.value': value.meterValue,
                        'meter.angle': value.meterAngle
                    });
                    node.p3(value.p3);
                    node.r3(value.r3);
                    node.s3(value.s3);
                    nodes.push(node);
                    res.continue();
                } else {
                    if (nodes.length) {
                        dataModel.clear();
                        nodes.forEach(function (node) {
                            dataModel.add(node);
                        });
                        console.log(dataModel.size() + ' datas are restored');
                    }
                }
            };
            return '';
        },
        clear: function () {
            var tx = db.transaction("meters", "readwrite");
            var store = tx.objectStore("meters");
            var req = store.openCursor();
            var count = 0;
            req.onsuccess = function (event) {
                var res = event.target.result;
                if (res) {
                    store.delete(res.value.id);
                    res.continue();
                    count++;
                } else {
                    console.log(count + ' datas are cleared');
                }
            };

        }
    },
    /* end indexDB */

    /* begin localStore */
    LS: {
        can: window.localStorage ? true : false,
        set: function (name, value) { return localStorage.setItem(name, value); },
        get: function (name) { return localStorage.getItem(name); },
        del: function (name) { return localStorage.removeItem(name); },
        nil: function (name) { return localStorage.clear(); },
        key: function (item) { return localStorage.key(item); },
        setJSON: function (name, jsonData = {}) { return this.set(name, JSON.stringify(jsonData)); },
        getJSON: function (name) { return JSON.parse(this.get(name)); }

    },
    /* end localStore */
    /* begin file/
    FS: {
        a: navigator.webkitPersistentStorage.queryUsageAndQuota(function (usage, quota) {
            console.log('PERSISTENT: ' + usage + '/' + quota + ' - ' + usage / quota + '%');
        }
        ),
        b: navigator.webkitPersistentStorage.requestQuota(2 * 1024 * 1024,
            function (grantedBytes) {
                window.webkitRequestFileSystem(window.PERSISTENT, grantedBytes,
                    function (fs) {
                        window.fs = fs;
                    });
            }
        ),
        save: function (dataModel) {
            var value = dataModel.serialize();
            fs.root.getFile('meters.txt', { create: true }, function (fileEntry) {
                console.log(fileEntry.toURL());
                fileEntry.createWriter(function (fileWriter) {
                    fileWriter.onwriteend = function () {
                        console.log(dataModel.size() + ' datas are saved');
                    };
                    var blob = new Blob([value], { type: 'text/plain' });
                    fileWriter.write(blob);
                });
            });
            return value;
        },
        restore: function (dataModel) {
            fs.root.getFile('meters.txt', {}, function (fileEntry) {
                fileEntry.file(function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function (e) {
                        dataModel.clear();
                        dataModel.deserialize(reader.result);
                        console.log(dataModel.size() + ' datas are restored');
                    };
                    reader.readAsText(file);
                });
            });
            return '';
        },
        clear: function () {
            fs.root.getFile('meters.txt', { create: false }, function (fileEntry) {
                fileEntry.remove(function () {
                    console.log(fileEntry.toURL() + ' is removed');
                });
            });
        }
    },
    / end file */
    /* begin cokie */
    CK: {
        getCookieValue: function (name) {
            if (document.cookie.length > 0) {
                var start = document.cookie.indexOf(name + "=");
                if (start !== -1) {
                    start = start + name.length + 1;
                    var end = document.cookie.indexOf(";", start);
                    if (end === -1) {
                        end = document.cookie.length;
                    }
                    return unescape(document.cookie.substring(start, end));
                }
            }
            return '';
        },
        save: function (dataModel) {
            var value = dataModel.serialize();
            document.cookie = 'DataModel=' + escape(value);
            document.cookie = 'DataCount=' + dataModel.size();
            console.log(dataModel.size() + ' datas are saved');
            return value;
        },
        restore: function (dataModel) {
            var value = getCookieValue('DataModel');
            if (value) {
                dataModel.deserialize(value);
                console.log(getCookieValue('DataCount') + ' datas are restored');
                return value;
            }
            return '';
        },
        clear: function () {
            if (getCookieValue('DataModel')) {
                console.log(getCookieValue('DataCount') + ' datas are cleared');
                document.cookie = "DataModel=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                document.cookie = "DataCount=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            }
        }
    },
    /* end cokie */

    /* begin sessionStorage */
    SS: {
        can: window.sessionStorage ? true : false,
        set: function (name, value) { return sessionStorage.setItem(name, value); },
        get: function (name) { return sessionStorage.getItem(name); },
        del: function (name) { return sessionStorage.removeItem(name); },
        nil: function (name) { return sessionStorage.clear(); },
        key: function (item) { return sessionStorage.key(item); },
        setJSON: function (name, jsonData = {}) { return this.set(name, JSON.stringify(jsonData)); },
        getJSON: function (name) { return JSON.parse(this.get(name)); }
    },
    /* end localStore */
    /* begin server-sent event */
    SSE: {
        can: false,
        // <output id="result"></output>
        //"demo_sse.php"
        // <?php 
        // header('Content-Type: text/event-stream'); 
        // header('Cache-Control: no-cache'); 
        // $time = date('r'); 
        // echo "data: The server time is: {$time}\n\n"; 
        // flush(); 
        // ?>
        function(src) {
            if (typeof (EventSource) !== "undefined") {
                var source = new EventSource(src);
                source.onmessage = function (event) {
                    document.getElementById("result").innerHTML += event.data + "<br>";
                };
            }
            else {
                forone.SSE.can = false;
            }
        }
    },
    /* end server-sent event */
    /* begin webworker */
    WK: {
        doing: undefined,
        can: false,
        // <output id="result"></output>
        // fileName = "demo_workers.js"
        start: function (fileName) {
            if (typeof (Worker) !== "undefined") {
                if (typeof (doing) == "undefined") {
                    doing = new Worker(fileName);
                }
                doing.onmessage = function (event) {
                    document.getElementById("result").innerHTML = event.data;
                    return event.data;
                };
            } else {
                forone.WK.can = false;
            }
        },
        stop: function () {
            doing.terminate();
            doing = undefined;
        }
    },
    /* begin webworker */
    /* begin web socket */
    WS: {
        // client
        // GET /webfin/websocket/ HTTP/1.1
        // Host: localhost
        // Upgrade: websocket
        // Connection: Upgrade
        // Sec-WebSocket-Key: xqBt3ImNzJbYqRINxEFlkg==
        // Origin: <a href="http://localhost/"><code>http://localhost</code></a>:8080
        // Sec-WebSocket-Version: 13
        // server
        // HTTP/1.1 101 Switching Protocols
        // Upgrade: websocket
        // Connection: Upgrade
        // Sec-WebSocket-Accept: K7DJLdLooIwIG/MOpvWFB3y3FE8=
        // var ws = new WebSocket(“ws://echo.websocket.org”); 
        //  ws.onopen = function(){ws.send(“Test!”); }; 
        //  ws.onmessage = function(evt){console.log(evt.data);ws.close();}; 
        //  ws.onclose = function(evt){console.log(“WebSocketClosed!”);}; 
        //  ws.onerror = function(evt){console.log(“WebSocketError!”);};
        can: "WebSocket" in window,
        WebSocketTest: function () {
            if ("WebSocket" in window) {
                var ws = new WebSocket("ws://localhost:9998/echo");
                ws.onopen = function () {
                    // Web Socket 已连接上，使用 send() 方法发送数据
                    ws.send("发送数据");
                    //  alert("数据发送中...");
                };

                ws.onmessage = function (evt) {
                    var received_msg = evt.data;
                    //  alert("数据已接收...");
                };

                ws.onclose = function () {
                    // 关闭 websocket
                    //  alert("连接已关闭..."); 
                };
            } else {
                // 浏览器不支持 WebSocket
                alert("您的浏览器不支持 WebSocket!");
            }
        }
    },
    /* end web socket */
    /// TOX
    /* begin Tox webIM */
    TOX: {

    },
    /* end Tox webIM */

    /* begin Geolocation */
    GL: {
        // coords.latitude。 估算的纬度
        // coords.longitude。 估算的经度
        // coords.altitude。 估算的高度 (以米为单位的海拔值)
        // coords.accuracy。 所得经度和纬度的估算精度，以米为单位
        // coords.altitudeAccuracy。 所得高度的估算精度，以米为单位
        // coords.heading. 宿主设备的当前移动方向，以度为单位，相对于正北方向顺时针方向计算
        // coords.speed. 设备的当前对地速度，以米/秒为单位
        // navigator.geolocation
        // getCurrentPosition()
        // watchPosition()
        // clearWatch()
        // Geolocation
        // https://www.ibm.com/developerworks/cn/web/1208_wangjian_html5geo/
    },
    /* end Geolocation */

    /* begin CSS+HTTP+JS render */
    triaCHS: {
        // forone render
        chaiHTMLzone: "chaiHTMLzone",
        chaiHTMLtext: "chaiHTMLtext",
        chaiCSSzone: "chaiCSSzone",
        chaiCSStext: "chaiCSStext",
        chaiJSzone: "chaiJSzone",
        chaiJStext: "chaiJStext",
        chaiRDzone: "chaiFRMzone",
        chaiFRMtext: "chaiFRMtext",
        idHTMLzone: null,
        idHTMLtext: null,
        idCSSzone: null,
        idCSStext: null,
        idJSzone: null,
        idJStext: null,
        idRDzone: null,
        idRDtext: null,
        idRDdoc: null,
        newHTML: "",
        newCSS: "",
        newJS: "",

        idRenders: [],
        htmlFRMInit: function () {
            forone.htmlBase = '<!DOCTYPE>\n<html>\n<head><meta charset="UTF-8">\n' +
                '<style>\n</style>\n</head>\n <script>\n</script>\n<body>\n' +
                '</body>\n</html>';
        },
        //
        textHTML: function () {
            return forone.triaCHS.idHTMLtext.value;
        },
        textCSS: function () {
            return forone.triaCHS.idCSStext.value;
        },
        textJS: function () {
            return forone.triaCHS.idJStext.value;
        },
        selectRD: function (src) {
            forone.triaCHS.initRender();
            if (src == forone.triaCHS.chaiFRMtext) {
                forone.triaCHS.render();
                return;
            }
            forone.idText = forone.getId(src);
            var strSlected = forone.idText.value;
            var cursor = strSlected.indexOf(forone.cusorTag) || 0;
            if (cursor == -1) {
                cursor = strSlected.length;
            }
            forone.getId(src).setSelectionRange(cursor, cursor);
            forone.idText.blur();
        },
        renderFile: function (src) {
            try {
                //var source = forone.triaCHS.idRDdoc.documentElement.outerHTML;
                forone.logc(src, "renderfile");
                //forone.triaCHS.idRDdoc = source.replace(forone.re.cursorI, '');
                forone.triaCHS.idRDdoc.open();

                forone.triaCHS.idRDdoc.write('Hello World!');
                // forone.triaCHS.idRDdoc.write(src.replace(forone.re.cursorI, ''));
                forone.triaCHS.idRDdoc.close();
            } catch (error) {
                forone.logc(error, "renderFile");
            }
        },
        //
        render: function () {
            try {
                forone.triaCHS.newHTML = forone.triaCHS.textHTML() || ' ';
                forone.triaCHS.newCSS = forone.triaCHS.textCSS() || ' ';
                forone.triaCHS.newJS = forone.triaCHS.textJS() || ' ';
                var chaicss = '\n<link rel="stylesheet" href="css/chaiforone.css"\n>',
                    bootstrap4css = '\n<link rel="stylesheet" href="css/bootstrap.min.css">\n',
                    jquery321 = '\n<script src="js/jquery-3.2.1.slim.min.js"></script>\n',
                    popper1129 = '\n<script src="js/popper-1.12.9.min.js"></script>\n',
                    bootstrap4js = '\n<script src="js/bootstrap.min.js"></script>\n';
                // var bootstrap4css = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">';
                // var jquery321 ='<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>';
                // var popper1129 ='<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>';
                // var bootstrap4js= '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>';
                var htmlSRC = '<!doctype html><html lang="en"> <head> <meta charset="UTF-8">';
                htmlSRC += chaicss + bootstrap4css + jquery321 + popper1129 + bootstrap4js,
                    htmlSRC += '\n<style>\n' + forone.triaCHS.newCSS + '\n</style>\n',
                    htmlSRC += '\n<script>\n' + forone.triaCHS.newJS + '\n</script>\n</head>\n',
                    htmlSRC += '\n<body>\n' + forone.triaCHS.newHTML + '\n</body>\n</html>\n';

                forone.triaCHS.idRDdoc.open();
                forone.triaCHS.idRDdoc.write(htmlSRC.replace(forone.re.cursorI, ''));
                forone.triaCHS.idRDdoc.close();

            } catch (error) {
                forone.findResource();
                forone.logc(error, "try");
            }
        },
        //
        initRender: function () {
            try {

                //forone.isRender = forone.getId(forone.triaCHS.chaiHTMLtext) ? true : false;
                // if (forone.isRender) {
                forone.triaCHS.idHTMLzone = forone.getId(forone.triaCHS.chaiHTMLzone);
                forone.triaCHS.idHTMLtext = forone.getId(forone.triaCHS.chaiHTMLtext);
                forone.triaCHS.idCSSzone = forone.getId(forone.triaCHS.chaiCSSzone);
                forone.triaCHS.idCSStext = forone.getId(forone.triaCHS.chaiCSStext);
                forone.triaCHS.idJSzone = forone.getId(forone.triaCHS.chaiJSzone);
                forone.triaCHS.idJStext = forone.getId(forone.triaCHS.chaiJStext);
                forone.triaCHS.idRDzone = forone.getId(forone.triaCHS.chaiRDzone);
                forone.triaCHS.idRDtext = forone.getId(forone.triaCHS.chaiFRMtext);
                forone.triaCHS.idRDdoc = forone.triaCHS.idRDtext.contentDocument ||
                    forone.triaCHS.idRDtext.contentDocument.document ||
                    forone.triaCHS.idRDtext.contentWindow;
                forone.idRenders = [forone.triaCHS.idHTMLtext, forone.triaCHS.idCSStext, forone.triaCHS.idJStext];
                /*
                forone.idRenders.forEach(function (mRender, index, array) {
                    mRender.addEventListener('oninput', function () {
                        // mRender.addEventListener('onchange', function () {
                        forone.triaCHS.render();
                    }, false);
                });
                
                //forone.htmlFRMInit();
                // }
                */
            } catch (error) { forone.logc(error); }
        }
    },
    /* end CSS+HTTP+JS render */

    /* begin demo script */
    demo: {
        // set forone ID tag
        foroneBase: "Base",
        foroneCai: "Cai",
        foroneKey: "Key",
        foronePath: "Path",
        foroneCanvas: "Canvas",
        oneTag: "One",
        startOneColor: "rgba(12, 75, 28, 0.8)",
        defaultColor: "rgba(250, 243, 141, 0.8)",
        capsLockOnColor: "rgba(175, 246, 248, 0.8)",
        commandOnColor: "rgba(240, 192, 250, 0.8)",
        customizeOnColor: "rgba(171, 169, 182, 0.8)",
        startColor: "background-color: rgba(241, 13, 192, 0.8);}",
        swipeColor: "background-color: rgba(243, 21, 21, 0.8);}",
        // key state
        capslook: false,
        command: false,
        customize: false,
        // set forone ID tag
        foroneBase: "Base",
        foroneCai: "Cai",
        foroneKey: "Key",
        foronePath: "Path",
        foroneCanvas: "Canvas",
        oneTag: "One",
        // anmation Tag
        aniName: "animation-name:",
        aniDuration: "animation-duration:",
        aniDisplay: ";display:block;",
        // token Tag for chaicode 
        mCode: [],
        mPath: [],
        mPathTag: 'd',
        mCapslockTag: 'c',
        mCommandTag: 'f',
        mCustomizeTag: 'u',
        mSvgTag: "M",
        mKeyPrex: "keycode_",
        mColumns: 2,
        // Tag of forone demo ID
        chai41Demo: "chai41demo",
        chaiDemoTemplate: "forone41Demonstrate",
        chaiDemoTag: "forone41",
        foroneCell: "cols",
        // set forone CSS value
        foroneSize: "--caiforonesize",
        oneSize: "100px",
        // declare one position array
        one: {},
        // CSS demo temaplate of Chai forone
        foroneDemoCSS: function () {
            var css = "<style>" +
                ':root{--caiforonesize: 100px;}' +
                '.foroneDemoApp{position: relative; height:var(--caiforonesize); ' +
                'width:var(--caiforonesize);border: 0px; border-radius:calc(var(--caiforonesize)*.25); ' +
                'margin: calc(var(--caiforonesize)*.2); padding: 0;' +
                'display:inline-block; animation-delay:0s; z-index: 1;}' +
                '.foroneDemoKey{position: static; height: calc(var(--caiforonesize)*.35);' +
                ' width: var(--caiforonesize); margin-left: 0px;' +
                'margin-top: calc(var(--caiforonesize)*1.05); border:0px;' +
                'font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;' +
                'font-size: 1.5em; text-align: center; vertical-align: middle;' +
                'justify-content: center; display:block;' +
                'background-color: rgba(141, 250, 199, 0.8);z-index: 4;}' +
                '.foroneDemoBase{ --foroneBaseSize: var(--caiforonesize); position: absolute;' +
                'height: var(--caiforonesize); width: var(--caiforonesize);' +
                'left: 0px; top: 0; border:0px; border-radius:25px; ' +
                'margin: 0; padding: 0; display:inline-block;' +
                'background-color: rgba(250, 243, 141, 0.8); z-index: 1;}' +
                '.forOneCai{position: absolute; height:calc(var(--caiforonesize)*0.2);width:calc(var(--caiforonesize)*0.2);' +
                'border:1px;border-radius:calc(var(--caiforonesize)*0.2);' +
                'margin-left: calc(var(--caiforonesize)*0.15);margin-top: calc(var(--caiforonesize)*0.15);' +
                'background-color: rgba(243, 21, 21, 0.9);z-index: 50;' +
                'animation-timing-function:linear;animation-delay:0s;animation-iteration-count:infinite;' +
                'animation-direction:normal;animation-play-state:running;display: none;}' +
                '.forOne0{ position: absolute; height:calc(var(--caiforonesize)*0.4);width:calc(var(--caiforonesize)*0.4);' +
                'border:1px;border-radius:calc(var(--caiforonesize)*0.2);z-index: 2;' +
                'margin-left: calc(var(--caiforonesize)*0.05);margin-top: calc(var(--caiforonesize)*0.05);' +
                'background-color: rgba(11, 83, 29, 0.8); background-color: rgba(5, 136, 11, 0.8);}' +
                '.forOne1{ position: absolute; height:calc(var(--caiforonesize)*0.4); width:calc(var(--caiforonesize)*0.4);' +
                'border:1px; border-radius:calc(var(--caiforonesize)*0.2);z-index: 2;' +
                'margin-left: calc(var(--caiforonesize)*0.55);margin-top: calc(var(--caiforonesize)*0.05);' +
                'background-color: rgba(5, 136, 11, 0.8);}' +
                '.forOne2{position: absolute;height:calc(var(--caiforonesize)*0.4);width:calc(var(--caiforonesize)*0.4);' +
                'border:1px;border-radius:calc(var(--caiforonesize)*0.2);z-index: 2;' +
                'margin-left: calc(var(--caiforonesize)*0.05);margin-top: calc(var(--caiforonesize)*0.55);' +
                'background-color: rgba(5, 136, 11, 0.8);}' +
                '.forOne3{position: absolute;height:calc(var(--caiforonesize)*0.4);width:calc(var(--caiforonesize)*0.4);' +
                'border:1px;border-radius:calc(var(--caiforonesize)*0.2);z-index: 2;' +
                'margin-left: calc(var(--caiforonesize)*0.55);margin-top: calc(var(--caiforonesize)*0.55);' +
                'background-color: rgba(5, 136, 11, 0.8);}' +
                '.forOneChai{ position: absolute;height:100px;width:100px;' +
                'left: 0px;top: 0;border:0px;border-radius:25px;' +
                'margin: 0;padding: 0;display:inline-block;z-index: 5; }' +
                "</style>";
            return css
        },
        // define a zone template to display chai forone demo  
        foroneDemoTemplate: function () {
            // html = '<div style="display: none">' +
            var html = '<!-- begin chai forone41 demo template -->' +
                '<div style="display: block">' +
                '<div id="forone41Demonstrate" class="foroneDemonstrate">' +
                '<div id="forone41DemoApp" class="foroneDemoApp">' +
                '<div id="forone41Base" class="foroneDemoBase">' +
                '<div id="forone41One0" class="forOne0"></div>' +
                '<div id="forone41One1" class="forOne1"></div>' +
                '<div id="forone41One2" class="forOne2"></div>' +
                '<div id="forone41One3" class="forOne3"></div> ' +
                '<canvas id="forone41Canvas" calss="forOneCanvas"></canvas>' +
                '<div id="forone41Cai" class="forOneCai"> </div>' +
                '<svg id="forone41Chai" class="forOneChai" version="1.1" ' +
                'xmlns="http://www.w3.org/2000/svg" ' +
                'xmlns:xlink="http://www.w3.org/1999/xlink" fill="none"> ' +
                '<g id="forone41G" stroke="blue" stroke-width="8px" stroke-linecap="round" ' +
                'stroke-linejoin="round" stroke-miterlimit="1" stroke-opacity=".5">' +
                '<path id="forone41Path"></path>/>' +
                '</g> </svg> </div> ' +
                '<div id="forone41Key" class="foroneDemoKey"></div> </div> </div>' +
                '<!-- end chai forone41 demo template -->'
            return html;
            //console.log(html);
        },
        // add CSS style text on head  
        addCSS: function (css) {
            document.head.insertAdjacentHTML('afterbegin', css);
        },
        //  add HTML on body
        addHTML: function (html) {
            // beforebegin <p> afterbegin | foo | beforeend </p> afterend
            document.body.insertAdjacentHTML('afterbegin', html);
        },
        // bind html function    
        getId: function (idName) { return document.getElementById(idName); },
        // get selected element attribute value
        getIdAttr: function (idName, attrName) { return forone.demo.getId(idName).getAttribute(attrName); },
        // set selected element attribute
        setIdAttr: function (idName, attrName, attrVal) { return forone.demo.getId(idName).setAttribute(attrName, attrVal); },
        // set html in a id of element
        setHTML: function (idName, htmlVal) { forone.demo.getId(idName).innerHTML = htmlVal; },
        // get element by name
        getName: function (name) { return document.getElementsByName(name); },
        // get css variable
        getCSSvalue: function (cssVal) { return getComputedStyle(document.documentElement).getPropertyValue(cssVal).trim(); },
        // set css variable
        setCSSvalue: function (cssVar, cssVal) { document.documentElement.style.setProperty(cssVar, cssVal) },
        // set css value on element
        setCssText: function (idName, cssVal) { forone.demo.getId(idName).style.cssText = cssVal; },
        // set css background color
        setCssBgColor: function (idName, color) { forone.demo.getId(idName).style.backgroundColor = color; },
        // add Chai forone Demo list
        addItemList: function () {
            var htmlBegin = '<div style="display: table-row;">';
            var htmlEnd = '</div>';
            var htmlContent = htmlBegin;
            for (var i = 0; i < forone.demo.mCode.length; i++) {
                //['z', '00123', 'zy'],
                var caiName = forone.demo.mCode[i][2];
                var caiCode = forone.demo.mCode[i][1];
                htmlContent += '<div id=' + caiName + ' name="' + caiCode + '" style="display: table-cell;"></div>';
                if ((i + 1) % forone.demo.mColumns == 0) {
                    htmlContent += htmlEnd;
                    htmlContent += htmlBegin;
                }
            }
            htmlContent += htmlEnd;
            forone.demo.setHTML(forone.demo.chai41Demo, htmlContent);
            return;
        },
        // get value from html cols attribute
        setForoneCell: function () {
            var colNumber = forone.demo.getIdAttr(forone.demo.chai41Demo, forone.demo.foroneCell);
            console.log("col:" + (colNumber == null) ? forone.demo.mCode.length : parseInt(colNumber));
            forone.demo.mColumns = (colNumber == null) ? forone.demo.mCode.length : parseInt(colNumber);
        },
        // clone from add Chai forone template to implement items
        clone: function (fromId, toId, fromTag, toTag) {
            //var htmlBuffer = getId(fromId).innerHTML;
            var htmlBuffer = forone.demo.foroneDemoTemplate();
            var re = new RegExp(fromTag, "g");
            htmlBuffer = htmlBuffer.replace(re, toTag);
            forone.demo.setHTML(toId, htmlBuffer);
            return forone.demo.getId(toId);
        },
        // set Chai forone Demo list
        setItemList: function () {
            for (var index = 0; index < forone.demo.mCode.length; index++) {
                //['z', '00123', 'zy'],
                var caiName = forone.demo.mCode[index][2];
                var caiCode = forone.demo.mCode[index][1];
                var caiKey = forone.demo.mCode[index][0];
                forone.demo.clone(forone.demo.chaiDemoTemplate, caiName, forone.demo.chaiDemoTag, caiName);
                forone.demo.setProperty(caiName, caiCode, caiKey);
            }
        },
        // add Css on head of html 
        headOnCss: function (styleValue) {
            var style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = styleValue;
            document.getElementsByTagName('head')[0].appendChild(style);
        },
        // get Chai forone image key points
        getPoints: function (code, tagName = "forone41") {
            forone.demo.mPath = [];
            var mKeyframes = "@keyframes " + forone.demo.mKeyPrex + code + "{";
            if (code.charAt(0) == forone.demo.mCapslockTag) {
                forone.demo.capslook = true;
                code = code.substring(1, code.length);
            }
            if (code.charAt(0) == forone.demo.mCommandTag) {
                forone.demo.command = true;
                code = code.substring(1, code.length);
            }
            if (code.charAt(0) == forone.demo.mCustomizeTag) {
                forone.demo.customize = true;
                code = code.substring(1, code.length);
            }
            for (var i in code) {
                var left = forone.demo.one[code[i]][0] - 25;
                var top = forone.demo.one[code[i]][1] - 25;
                var percent = parseInt(100 * i / (code.length - 1));
                if (i == 0) {
                    mKeyframes += percent + "% { left:" + left + "px; top:" + top + "px;" + forone.demo.startColor;
                } else {
                    mKeyframes += percent + "% { left:" + left + "px; top:" + top + "px;" + forone.demo.swipeColor;
                    //webkitKeyframes += percent + "% { left:" + left + "px; top:" + top + "px}";
                }
                forone.demo.mPath.push(forone.demo.one[code[i]]);
            }
            mKeyframes += "} ";
            //webkitKeyframes += "} ";
            //"One0
            forone.demo.headOnCss(mKeyframes);
            return forone.demo.mPath;
        },
        // get Chai forone character svg path
        getArrayLine: function (code) {
            return forone.demo.getPoints(code).join(" ");
        },
        // set attribute from added Chai forone items
        setProperty: function (tagName, code, key) {
            var path = forone.demo.mSvgTag + forone.demo.getArrayLine(code);
            //canvase
            //var path = getPoints(code, tagName);
            var keyframesname = forone.demo.mKeyPrex + code;
            var animation = forone.demo.aniName + keyframesname + forone.demo.aniDisplay + forone.demo.aniDuration + code.length + "s;";
            forone.demo.setCssText(tagName + forone.demo.foroneCai, animation);
            forone.demo.setHTML(tagName + forone.demo.foroneKey, key);
            //svg
            forone.demo.setIdAttr(tagName + forone.demo.foronePath, forone.demo.mPathTag, path);
            if (true == forone.demo.capslook) {
                forone.demo.setCssBgColor(tagName + forone.demo.foroneBase, forone.demo.capsLockOnColor);
                forone.demo.capslook = false;
            } else if (true == forone.demo.command) {
                forone.demo.setCssBgColor(tagName + forone.demo.foroneBase, forone.demo.commandOnColor);
                forone.demo.command = false;
            } else if (true == forone.demo.customize) {
                forone.demo.setCssBgColor(tagName + forone.demo.foroneBase, forone.demo.customizeOnColor);
                forone.demo.customize = false;
            } else {
                forone.demo.setCssBgColor(tagName + forone.demo.foroneBase, forone.demo.defaultColor);
            }
            if (code.charAt(0) == forone.demo.mCapslockTag ||
                code.charAt(0) == forone.demo.mCommandTag ||
                code.charAt(0) == forone.demo.mCustomizeTag) {
                code = code.substring(1, code.length);
                forone.demo.capslook = false;
            }
            forone.demo.setCssBgColor(tagName + forone.demo.oneTag + code.charAt(0), forone.demo.startOneColor);
            return;
        },
        // get code
        getCode: function (keyCode) {
            forone.demo.mCode = keyCode || forone.triacode.demoList.slice();
        },
        // set each one zone of forone
        setOneSize: function () {
            forone.demo.oneSize = parseInt(forone.demo.getCSSvalue(forone.demo.foroneSize));
            forone.demo.one = {
                0: [forone.demo.oneSize * 0.25, forone.demo.oneSize * 0.25],
                1: [forone.demo.oneSize * 0.75, forone.demo.oneSize * 0.25],
                2: [forone.demo.oneSize * 0.25, forone.demo.oneSize * 0.75],
                3: [forone.demo.oneSize * 0.75, forone.demo.oneSize * 0.75]
            }
        },
        // demo one 
        demoOne: function (oneDemo = ['z', '001233', 'zy']) {
            forone.demo.mCode = forone.demo.setCode(codeKey);
            forone.demo.addCSS(forone.demo.foroneDemoCSS());
            forone.demo.setForoneCell();
            forone.demo.setOneSize();
            forone.demo.addItemList();
            forone.demo.setItemList();
        },
        // to check display if attribute play is true
        demo: function () {
            var isPaly = false;
            try {
                isPaly = "true" == forone.demo.getIdAttr(forone.demo.chai41Demo, "play") ? true : false;
            } catch (error) {
                forone.logc(error, " no found demo play tag!");
            }
            return isPaly;
        },
        // init forone demo
        demoInit: function () {
            if (forone.demo.demo()) {
                forone.demo.getCode();
                forone.demo.addCSS(forone.demo.foroneDemoCSS());
                forone.demo.setForoneCell();
                forone.demo.setOneSize();
                forone.demo.addItemList();
                forone.demo.setItemList();
            }
        },
        // ready loading html
        ready: function (func) {
            if (document.readyState != 'loading') {
                func();
            } else if (document.addEventListener) {
                document.addEventListener('DOMContentLoaded', func);
            } else {
                document.attachEvent('onreadystatechange', function () {
                    if (document.readyState != 'loading')
                        func();
                });
            }
        }
    },
    /* end demo script */

    findResource: function () {
        forone.idApp = forone.getApp();
        forone.idBase = forone.getBase();
        forone.id4one = forone.get4one();
        forone.idRect = forone.getBaseRect();
        forone.idText = forone.getText();
        forone.idOne = forone.getOne();
        forone.idOnefor = forone.getOnefor();
        //forone.triaCHS.initRender();
        forone.triaMD.initMarkDown();

    },
    re: {
        cursorI: /Î/g,
        line: /\r\n|\r|\n/,
        newline: / {2,}[\n]{1,}/gmi,
        blockquote: /[\s]\>[^\>](.*)/g,
        sup: /(?:([\\]{1,3}))([^\\\n\.]*[^\\\s])\1/g,
        sub: /(?:([\/]{1,3}))([^\/\n\.]*[^\/\s])\1/g,
        sub1: /({  )([^}]+)(  })/m,
        insert: /(?:([_]{1,3}))([^_\n]+[^_\s])\1/gm,
        delete: /(?:([~]{1,3}))([^~\n]+[^~\s])\1/gm,
        fontsize: /(?:([@]{1,5}))([^@\n]+[^@\s])\1/gm,
        strong: /(?:([\*]{1,3}))([^\*\n]+[^\*\s])\1/gm,
        tria: /%\(([^%]+)\)([^%]+)%/m,
        triacode: /``(\(([a-z])*\))\n?([^``]+)``/g,
        chai: /%%\n?([^%%]+)%%/m,
        cai: /``([^\(]\n?([^``]+))``/m,
        triakr: /([bcdfghijklmnopqrstvwxz][yeaoui]{1,3})/g,
        uuid: /[xyz]/g,
        headline: /^(\#{1,6})([^\#\n]+)$/m,
        codeline: /`\n?([^`]+)`/m,
        code: /\s\`\`\`\n?([^`]+)\`\`\`/g,
        decode: /(\{begin1CodeBlock\}(.*)\{end2CodeBlock})/gm,
        hr: /^(?:([\*\-_] ?)+)\1\1$/gm,
        lists: /^((\s*((\+|\*|\-)|\d(\.|\))) [^\n]+)\n)+/gm,
        listinline: /^((\s*)((\+|\*|\-|[0-9]*)|\d(\.|\))) ([^\n]+))/,
        todolist: /(-\s?\[([xX\s]?)\]\s*)(.*)\n/gm,
        bolditalic: /^[\s\t\n\f]*(([>]{1,3}))(.*)/gm,
        bolditalic1: /({  )([^}]+)(  })/m,
        bolditalic2: /(?:([\*_~]{1,3}))([^\*_~\n]+[^\*_~\s])\1/g,
        links: /!?\[([^\]<>]+)\]\(([^ \)<>]+)( "[^\(\)\"]+")?\)/g,
        reflinks: /\[([^\]]+)\]\[([^\]]+)\]/g,
        smlinks: /\@([a-z0-9]{3,})\@(t|gh|fb|gp|adn)/gi,
        mail: /<(([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,7}))>/gmi,
        tables: /\n(([^|\n]+ *\| *)+([^|\n]+\n))((:?\-+:?\|)+(:?\-+:?)*\n)((([^|\n]+ *\| *)+([^|\n]+)\n)+)/g,
        tables2: /(\|(?:[^\r\n\|]+\|)+)(?:\r?\n|\r)\|(?:[-—]+\|)+((?:(?:\r?\n|\r)(?:\|(?:[^\n\r\|]+\|)+))+)/gu,
        include: /[\[<]include (\S+) from (https?:\/\/[a-z0-9\.\-]+\.[a-z]{2,9}[a-z0-9\.\-\?\&\/]+)[\]>]/gi,
        url: /<([a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[\-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?)>/g,
        url2: /(https:\/\/|http:\/\/|mailto:|ftp:\/\/)/gmi,
        escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
        autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
        tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
        link: /^!?\[(inside)\]\(href\)/,
        reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
        nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
        strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
        em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
        // code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, br: /^ {2,}\n(?!\s*$)/,
        del: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/

    },
    chaiDefaultCodeList: [],
    include: function (url) {
        var _doc = document.getElementsByTagName('head')[0];
        var js = document.createElement('script');
        js.setAttribute('type', 'text/javascript');
        js.setAttribute('src', url);
        _doc.appendChild(js);
        if (document.all) {
            js.onreadystatechange = function () {
                if (js.readyState == 'loaded' || js.readyState == 'complete') {
                    // return true;

                    forone.logc('IE6、IE7 support js.onreadystatechange', "include");
                    demo();
                }
            }
        }
        else {
            js.onload = function () {
                //return true;
                forone.logc('Firefox、chrome and others support js.onload', "include");
                demo();
            }
        }
    },
    clone: function (obj) {
        if (null == obj || "object" != typeof obj) return obj;
        var copy = obj.constructor();
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
        }
        return copy;
    },
    setCode: function () {
        // forone.chaicodes = forone.clone(forone.triacode.japanese);
        // forone.chaicodes = forone.clone(forone.triacode.Korean);
        forone.chaicodes = forone.clone(forone.triacode.english);
        var keys = Object(forone.chaicodes);
        for (var x in keys) {
            forone.logc(x, forone.chaicodes[x]);
            forone.chaiDefaultCodeList.push([forone.chaicodes[x], x, "_" + forone.chaicodes[x]]);

        }
        forone.logc(forone.chaiDefaultCodeList);
        //forone.demo.mCode = forone.listme;

        //demo();

    },
    checkForone: function () {

        try {
            forone.isRunForone = "true" == forone.demo.getIdAttr(forone.chai41keyboard, forone.runningTag) ? true : false;
            // return "true" == forone.demo.getIdAttr(forone.demo.chai41Demo, "play") ? true : false;
        } catch (error) {
            forone.logc(error, "no found forone running tag!");
        }
        return forone.isRunForone;

    },
    ///****** */


    //------------------------------------------------------------------------------------
    /* begin MarkDown script */
    isMarkDown: true,
    triaMD: {
        // forone render
        chaiHTMLzone: "chaiHTMLzone",
        chaiHTMLlabel: "chaiHTMLlabel",
        chaiHTMLtext: "chaiHTMLtext",
        chaiMDzone: "chaiMDzone",
        chaiMDlabel: "chaiMDlabel",
        chaiMDtext: "chaiMDtext",
        md: null,
        idHTMLzone: null,
        idHTMLtext: null,
        idMDzone: null,
        idMDtext: null,
        idMDdoc: null,
        newHTML: "",
        // get line
        getLine: function (str) {
            return str.split(forone.re.line).length
        },
        //
        reverse: function (str) {
            return str.split("").reverse().join("");
        },
        //
        textHTML: function () {
            return forone.triaMD.idHTMLtext.value;
        },
        //
        htmlDiv: function (str) {
            'use strict';
            logc(str, "htmlEncode");
            var div = document.createElement('div');
            div.appendChild(document.createTextNode(str));
            str = div.innerHTML;
            div = undefined;
            return str;
        },
        codeBlocks: {},
        //
        editClear: function () {
            forone.triaMD.idHTMLtext.innerHTML = '';
        },
        //
        editSelectAll: function () {
            forone.triaMD.idHTMLtext.setSelectionRange(0, -1);
        },
        // #h1 ##h2 ###h3 ####h4 #####h5 ######h6
        mdHeadLine: function (str) {

            var count = 0;
            var cai = null;
            //forone.re.headline = /^(\#{1,6})([^\#\n]+)$/m;
            while ((forone.triaMD.md = forone.re.headline.exec(str)) !== null) {
                count = forone.triaMD.md[1].length;
                cai = forone.triaMD.md[2].trim();
                str = str.replace(forone.triaMD.md[0],
                    '<h' + count + '>' + cai + '</h' + count + '>').trim();
            }
            return str;
        },

        // %abc%
        // ``abc``
        mdChai: function (str) {
            var cai;

            //forone.re.chai = /%%\n?([^%%]+)%%/m;
            while ((forone.triaMD.md = forone.re.chai.exec(str)) !== null) {
                cai = forone.triaMD.md[1];
                str = str.replace(forone.triaMD.md[0],
                    '<span class="chai">' + cai + '</span>').trim();
            }

            //forone.re.chai = /``([^\(]\n?([^``]+))``/m;
            while ((forone.triaMD.md = forone.re.cai.exec(str)) !== null) {
                cai = forone.triaMD.md[1];
                str = str.replace(forone.triaMD.md[0],
                    '<span class="chai">' + cai + '</span>').trim();
            }
            return str;
        },
        // ``abc``
        mdCodeLine: function (str) {
            var cai;

            //forone.re.chai = /`\n?([^`]+)`/m;
            while ((forone.triaMD.md = forone.re.codeline.exec(str)) !== null) {
                cai = forone.triaMD.md[1];
                str = str.replace(forone.triaMD.md[0],
                    '<code>' + cai + '</code>').trim();
            }
            return str;
        },
        // 
        // > abc
        mdBlockquote: function (str) {
            var repStr = [];
            var repTag = '####';
            var resTag = '>';

            var reservedTag = '####';

            //forone.re.bolditalic = /(([>]{1,3}))(.*)/g;
            //forone.re.bolditalic = /^[\s\t\n\f]*(([>]{1,3}))(.*)/gm;

            while ((forone.triaMD.md = forone.re.bolditalic.exec(str)) !== null) {
                repStr = [];

                switch (forone.triaMD.md[1].length) {
                    case 1:
                        repStr = ['<blockquote class="blockquote"><em> ', ' </em></blockquote>'];
                        break;
                    case 2:
                        repStr = ['<blockquote class="blockquote"><strong> ', ' </strong></blockquote>'];
                        break;
                    case 3:
                        repStr = ['<blockquote class="blockquote"> ', ' </blockquote>'];

                        break;
                }
                str = str.replace(forone.triaMD.md[0],
                    '{  ' + encodeURIComponent(repStr[0] + forone.triaMD.md[3] + repStr[1]) + '  }');

            }


            //forone.re.bolditalic = /({  )([^}]+)(  })/m;
            while ((forone.triaMD.md = forone.re.bolditalic1.exec(str)) !== null) {
                str = str.replace(forone.triaMD.md[0], decodeURIComponent(forone.triaMD.md[2]));

            }
            //str = forone.triaMD.mdMark(str, repTag, resTag);
            return str;
        },

        // A/x/
        mdSub: function (str) {
            var repStr = [];
            var repTag = '####';
            var resTag = '</';

            //forone.re.bolditalic = /(?:([\/]{1,3}))([^\/\n\.]*[^\/\s])\1/g;
            while ((forone.triaMD.md = forone.re.sub.exec(str)) !== null) {
                repeatStr = [];

                switch (forone.triaMD.md[1].length) {
                    case 1:
                        repStr = ['<sub><em>', '</em></sub>'];
                        break;
                    case 2:
                        repStr = ['<sub><strong>', '</strong></sub>'];

                        break;
                    case 3:
                        repStr = ['<sub>', '</sub>'];
                        break;
                }
                str = str.replace(forone.triaMD.md[0],

                    '{  ' + encodeURIComponent(repStr[0] + forone.triaMD.md[2] + repStr[1]) + '  }');
            }

            forone.logc(str);
            //forone.re.bolditalic = /({  )([^}]+)(  })/m;
            while ((forone.triaMD.md = forone.re.sub1.exec(str)) !== null) {
                str = str.replace(forone.triaMD.md[0], decodeURIComponent(forone.triaMD.md[2]));
                forone.logc(str);

            }

            return str;
        },

        // A\y\
        mdSup: function (str) {
            var repStr = [];
            //forone.re.bolditalic = /(?:([\\]{1,3}))([^\\\n\.]*[^\\\s])\1/g;
            while ((forone.triaMD.md = forone.re.sup.exec(str)) !== null) {
                repeatStr = [];

                switch (forone.triaMD.md[1].length) {
                    case 1:
                        repStr = ['<sup><em>', '</em></sup>'];
                        break;
                    case 2:
                        repStr = ['<sup><strong>', '</strong></sup>'];
                        break;
                    case 3:
                        repStr = ['<sup>', '/sup>'];
                        break;
                }
                str = str.replace(forone.triaMD.md[0],
                    repStr[0] + forone.triaMD.md[2] + repStr[1]);

            }
            return str;
        },


        //
        // A\y\
        /// _abc_ __abc__ ___abc___
        mdInsert: function (str) {
            var repStr = [];
            //forone.re.bolditalic = /(?:([_]{1,3}))([^_\n]+[^_\s])\1/gm;
            while ((forone.triaMD.md = forone.re.insert.exec(str)) !== null) {
                repeatStr = [];
                switch (forone.triaMD.md[1].length) {
                    case 1:
                        repStr = ['<ins><em>', '</em></ins>'];
                        break;
                    case 2:
                        repStr = ['<ins><strong>', '</strong></ins>'];
                        break;
                    case 3:
                        repStr = ['<ins>', '</ins>'];
                        break;
                }
                str = str.replace(forone.triaMD.md[0],
                    repStr[0] + forone.triaMD.md[2] + repStr[1]);

            }

            return str;
        },
        /// ~abc~ ~~abc~~ ~~~abc~~~
        mdDelete: function (str) {
            var repStr = [];
            //forone.re.bolditalic = /(?:([~]{1,3}))([^~\n]+[^~\s])\1/gm;
            while ((forone.triaMD.md = forone.re.delete.exec(str)) !== null) {
                repeatStr = [];
                switch (forone.triaMD.md[1].length) {
                    case 1:
                        repStr = ['<del><em>', '</em></del>'];
                        break;
                    case 2:
                        repStr = ['<del><strong>', '</strong></del>'];
                        break;
                    case 3:
                        repStr = ['<del>', '</del>'];
                        break;
                }
                str = str.replace(forone.triaMD.md[0],
                    repStr[0] + forone.triaMD.md[2] + repStr[1]);
            }
            return str;
        },
        /// @abc@ @@abc@@ @@@abc@@@
        mdFontSize: function (str) {
            var repStr = [];
            //forone.re.bolditalic = /(?:([@]{1,5}))([^@\n]+[^@\s])\1/gm;
            var mFontSize = 3;
            while ((forone.triaMD.md = forone.re.fontsize.exec(str)) !== null) {
                repeatStr = [];
                mFontSize = 3 + forone.triaMD.md[1].length;
                repStr = ['<font="' + mFontSize + '">', '</font>'];
                str = str.replace(forone.triaMD.md[0],
                    repStr[0] + forone.triaMD.md[2] + repStr[1]);

            }
            return str;
        },
        /// *abc* **abc** ***abc***
        mdStrong: function (str) {
            var repStr = [];

            //forone.re.bolditalic = /(?:([\*]{1,3}))([^\*\n]+[^\*\s])\1/gm;
            while ((forone.triaMD.md = forone.re.strong.exec(str)) !== null) {
                repeatStr = [];

                switch (forone.triaMD.md[1].length) {
                    case 1:
                        repStr = ['<em>', '</em>'];
                        break;
                    case 2:
                        repStr = ['<strong>', '</strong>'];
                        break;
                    case 3:
                        repStr = ['<em><strong>', '</strong></em>'];
                        break;
                }
                str = str.replace(forone.triaMD.md[0],
                    repStr[0] + forone.triaMD.md[2] + repStr[1]);

            }

            return str;
        },

        //
        // * list1  
        // * list2
        mdList: function (str) {
            /* lists */
            var deepCount, regexInline, deepStatus = 0,
                status, repstr = "", items, indentItems, indent = false;
            //forone.re.lists = /^((\s*((\+|\*|\-)|\d(\.|\))) [^\n]+)\n)+/gm;
            while ((forone.triaMD.md = forone.re.lists.exec(str)) !== null) {
                //logc(forone.triaMD.md, "lists");
                deepCount = 0;
                if ((forone.triaMD.md[0].trim().substr(0, 1) === '*') ||
                    (forone.triaMD.md[0].trim().substr(0, 1) === '-') ||
                    (forone.triaMD.md[0].trim().substr(0, 1) === '+')) {
                    repstr = '<ul class="border border-success text-left">';
                } else {
                    repstr = '<ol class="border border-success text-left">';
                }
                items = forone.triaMD.md[0].split('\n');
                indentItems = [];
                status = 0;
                indent = false;
                // listinline= /^((\s*)((\+|\*|\-|[0-9]*)|\d(\.|\))) ([^\n]+))/
                for (i = 0; i < items.length; i++) {
                    if ((regexInline = forone.re.listinline.exec(items[i])) !== null) {

                        if ((regexInline[2] === undefined) ||
                            (regexInline[2].length === 0)) {
                            deepStatus = 0;
                        } else {
                            if (indent === false) {
                                indent = regexInline[2].replace(/\t/, '    ').length;
                            }
                            deepStatus = Math.round(regexInline[2].replace(/\t/, '    ').length / indent);
                        }
                        while (status > deepStatus) {
                            repstr += indentItems.pop();
                            status--;
                            deepCount--;
                        }
                        while (status < deepStatus) {
                            if ((regexInline[0].trim().substr(0, 1) === '*') ||
                                (regexInline[0].trim().substr(0, 1) === '-') ||
                                (regexInline[0].trim().substr(0, 1) === '+')) {
                                repstr += '<ul>';
                                indentItems.push('</ul>');
                            } else {
                                repstr += '<ol>';
                                indentItems.push('</ol>');
                            }
                            status++;
                            deepCount++;
                        }
                        repstr += '<li>' + regexInline[6] + '</li>' + '\n';
                    }
                }
                while (deepCount > 0) {
                    repstr += '</ul>';
                    deepCount--;
                }
                if ((forone.triaMD.md[0].trim().substr(0, 1) === '*') ||
                    (forone.triaMD.md[0].trim().substr(0, 1) === '-') ||
                    (forone.triaMD.md[0].trim().substr(0, 1) === '+')) {
                    repstr += '</ul>';
                } else {
                    repstr += '</ol>';
                }
                str = str.replace(forone.triaMD.md[0], repstr + '\n');
            }
            return str;
        },
        // /- \[[x|X]?\].*/gm
        // - [ ] 
        // todo-list
        mdTodoList: function (str) {
            var deepCount, regexInline, deepStatus = 0,
                status, repstr = "", items, indentItems, indent = false;

            //forone.re.lists = /(-\s?\[([xX\s]?)\]\s*)(.*)\n/gm;
            // forone.re.lists = /^\s+((\+\-\s?\[([x|X]?)\]\s*)(.*\n$))/gm;
            while ((forone.triaMD.md = forone.re.todolist.exec(str)) !== null) {
                //logc(forone.triaMD.md, "lists");
                deepCount = 0;
                if (forone.triaMD.md[2].toUpperCase() === 'X') {
                    repstr = '<input type="checkbox" name="ToDoName" value="1" checked >' + forone.triaMD.md[3] + '<br />';
                } else {
                    repstr = '<input type="checkbox" name="ToDoName" value="1" >' + forone.triaMD.md[3] + '<br />';
                }

                str = str.replace(forone.triaMD.md[0], repstr + '\n');
            }
            return str;
        },
        //
        // this | *left* | center   | right
        // -----|:-------|:--------:|------:
        // col1 | col2 | col3  | col4
        // col1 | col2 | col3  | col4

        mdTable: function (str) {
            /* tables */
            var deepCount, regexInline, deepStatus = 0, calign, cel,
                status, repstr = "", items, indentItems, indent = false, strict = false;
            //forone.re.tables = /\n(([^|\n]+ *\| *)+([^|\n]+\n))((:?\-+:?\|)+(:?\-+:?)*\n)((([^|\n]+ *\| *)+([^|\n]+)\n)+)/g;
            while ((forone.triaMD.md = forone.re.tables.exec(str)) !== null) {

                repstr = '<table class="table table-bordered table-striped table-dark"><tr>';
                helper = forone.triaMD.md[1].split('|');
                calign = forone.triaMD.md[4].split('|');
                for (i = 0; i < helper.length; i++) {
                    if (calign.length <= i) {
                        calign.push(0);
                    } else if ((calign[i].trimRight().slice(-1) === ':') && (strict !== true)) {
                        if (calign[i][0] === ':') {
                            calign[i] = 3;
                        } else {
                            calign[i] = 2;
                        }
                    } else if (strict !== true) {
                        if (calign[i][0] === ':') {
                            calign[i] = 1;
                        } else {
                            calign[i] = 0;
                        }
                    } else {
                        calign[i] = 0;
                    }
                }
                cel = ['<th>', '<th align="left">', '<th align="right">', '<th align="center">'];
                for (i = 0; i < helper.length; i++) {
                    repstr += cel[calign[i]] + helper[i].trim() + '</th>';
                }
                repstr += '</tr>';
                cel = ['<td>', '<td align="left">', '<td align="right">', '<td align="center">'];
                helper1 = forone.triaMD.md[7].split('\n');
                for (i = 0; i < helper1.length; i++) {
                    helper2 = helper1[i].split('|');
                    if (helper2[0].length !== 0) {
                        while (calign.length < helper2.length) {
                            calign.push(0);
                        }
                        repstr += '<tr>';
                        for (j = 0; j < helper2.length; j++) {
                            repstr += cel[calign[j]] + helper2[j].trim() + '</td>';
                        }
                        repstr += '</tr>' + '\n';
                    }
                }
                repstr += '</table>';
                str = str.replace(forone.triaMD.md[0], repstr);
            }
            return str;

        },

        mdTables: function mdTables(str) {
            //tables2: /(\|(?:[^\r\n\|]+\|)+)(?:\r?\n|\r)\|(?:[-—]+\|)+((?:(?:\r?\n|\r)(?:\|(?:[^\n\r\|]+\|)+))+)/gu,
            var curT = 1;
            while (curT !== null) {
                curT = forone.re.tables2.exec(str);
                if (curT !== null) {
                    console.log(curT[2].split(/\r?\n|\r/));
                    var rows = curT[2].split(/\r?\n|\r/).filter(function (a) { return a.length === 0 ? false : true; }), rowtrs = '<table><thead><tr><td>' + curT[1].split('|').slice(1, -1).join('</td><td>') + '</td></tr></thead><tbody>';
                    console.log(rows);
                    for (var i in rows) {
                        rowtrs += '<tr><td>' + rows[i].split('|').slice(1, -1).join("</td><td>") + '</td></tr>';
                    }
                    rowtrs += '</tbody></table>';
                    str = str.replace(curT[0], rowtrs);
                }
            };
        },
        // [caixnet](http://caixnet.githug.io/)
        mdLink: function (str) {
            // links:/!?\[([^\]<>]+)\]\(([^ \)<>]+)( "[^\(\)\"]+")?\)/g,
            /* links */
            while ((stra = forone.re.links.exec(str)) !== null) {
                if (stra[0].substr(0, 1) === '!') {
                    str = str.replace(stra[0], '<img src="' + stra[2] + '" alt="' + stra[1] + '" title="' + stra[1] + '" />');
                } else {
                    str = str.replace(stra[0], '<a ' + 'href="' + stra[2] + '">' + stra[1] + '</a>');
                }
            }
            return str;
        },
        //
        mdRefLink: function (str) {
            // /\[([^\]]+)\]\[([^\]]+)\]/g,
            while ((stra = forone.re.reflinks.exec(str)) !== null) {
            }
        },
        ///
        mdTriaCode: function (str) {
            var kor, korcon;
            //forone.re.hr = /^(?:([\*\-_] ?)+)\1\1$/gm;
            //forone.re.chai = /``(\(([a-z])*\))\n?([^``]+)``/g;
            while ((forone.triaMD.md = forone.re.triacode.exec(str)) !== null) {
                kor = forone.triaMD.md[2];
                korcon = forone.triaMD.md[3];
            }
            forone.logc("lang:" + kor + " ，content: " + korcon, "Chia");
            return str;
        },
        // mail: /<(([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,7}))>/gmi,
        // <caixnet@eoutlook.com>
        mdMail: function (str) {
            var stra;
            while ((stra = forone.re.mail.exec(str)) !== null) {

                str = str.replace(stra[0], '<a href="mailto:' + stra[1] + '">' + stra[1] + '</a>');
            }
            return str;
        },
        // <http://chaiforone.github.io>
        mdURL: function (str) {
            while ((stra = forone.re.url.exec(str)) !== null) {
                repstr = stra[1];
                if (repstr.indexOf('://') === -1) {
                    repstr = 'http://' + repstr;
                }
                str = str.replace(stra[0],
                    '<a ' + 'href="' + repstr + '">' + repstr.replace(forone.re.url2, '') + '</a>');
            }
            return str;
        },
        //
        mdHr: function (str) {
            /* horizontal line */
            //forone.re.hr = /^(?:([\*\-_] ?)+)\1\1$/gm;
            while ((stra = forone.re.hr.exec(str)) !== null) {

                str = str.replace(stra[0], '\n<hr />\n');
            }
            return str;
        },
        // code: /\s\`\`\`\n?([^`]+)\`\`\`/g,
        mdEnCodeBlock: function (str) {
            /* code */
            var mCode;
            //forone.re.code = /\s\`\`\`\n?([^`]+)\`\`\`/g;
            while ((forone.triaMD.md = forone.re.code.exec(str)) !== null) {
                str = str.replace(forone.triaMD.md[0], '{begin1CodeBlock} ' +
                    encodeURIComponent(forone.triaMD.md[1]) +
                    ' {end2CodeBlock}').trim();

            }
            return str;
        },
        mdDeCodeBlock: function (str) {
            //forone.re.code = /(\{begin1CodeBlock\}(.*)\{end2CodeBlock})/gm;
            while ((forone.triaMD.md = forone.re.decode.exec(str)) !== null) {
                str = str.replace(forone.triaMD.md[0], '<pre class="border border-info table-warning"><code>' +
                    decodeURIComponent(forone.triaMD.md[2]) +
                    '</code></pre>').trim();

            }
            return str;
        },
        mdNewLine: function (str) {
            //forone.re.code = / {2,}[\n]{1,}/gmi;
            while ((forone.triaMD.md = forone.re.newline.exec(str)) !== null) {
                str = str.replace(forone.triaMD.md[0], ' <br /> ').trim();

            }


            return str;
        },
        mdEscapeHTML: function (str) {
            forone.re.code = /&/g;
            while ((forone.triaMD.md = forone.re.code.exec(str)) !== null) {
                str.replace(forone.triaMD.md[0], "&amp;");
            }
            forone.re.code = /</g;
            while ((forone.triaMD.md = forone.re.code.exec(str)) !== null) {
                str.replace(forone.triaMD.md[0], "&lt;");
            }
            forone.re.code = />/g;
            while ((forone.triaMD.md = forone.re.code.exec(str)) !== null) {
                str.replace(forone.triaMD.md[0], "&gt;");
            }
            forone.re.code = /"/g;
            while ((forone.triaMD.md = forone.re.code.exec(str)) !== null) {
                str.replace(forone.triaMD.md[0], "&quot;");
            }
            forone.re.code = /'/g;
            while ((forone.triaMD.md = forone.re.code.exec(str)) !== null) {
                str.replace(forone.triaMD.md[0], "&#39;");
            }
            return str;
        },
        //
        processMarkDown: function () {


            var str = forone.triaMD.newHTML;
            //  'use strict';
            forone.logc(str, "parse");
            var line, nstatus = 0,
                status, cel, calign, indent, helper, helper1, helper2,
                count, repstr;
            var md = null; // md = stra
            var stra = null;
            var trashgc = [],
                deepCount = 0,
                i = 0,
                j = 0,
                crc32str = '';
            str = '\n' + str + '\n';

            str = forone.triaMD.mdEnCodeBlock(str);
            str = forone.triaMD.mdSub(str);
            str = forone.triaMD.mdBlockquote(str);
            str = forone.triaMD.mdTodoList(str);
            str = forone.triaMD.mdList(str);
            str = forone.triaMD.mdHeadLine(str);
            str = forone.triaMD.mdSup(str);
            str = forone.triaMD.mdInsert(str);
            str = forone.triaMD.mdDelete(str);
            str = forone.triaMD.mdStrong(str);
            str = forone.triaMD.mdFontSize(str);
            str = forone.triaMD.mdTable(str);
            str = forone.triaMD.mdLink(str);
            str = forone.triaMD.mdMail(str);
            str = forone.triaMD.mdURL(str);
            str = forone.triaMD.mdChai(str);
            str = forone.triaMD.mdTriaCode(str);
            str = forone.triaMD.mdCodeLine(str);
            str = forone.triaMD.mdNewLine(str);
            str = forone.triaMD.mdHr(str);
            str = forone.triaMD.mdDeCodeBlock(str);

            forone.triaMD.newHTML = str;
            forone.logc(str, 'MDprocess');
            return str;

        },
        //<blockquote>
        // forone.triaMD.markDown();
        markDown: function () {
            try {
                forone.triaMD.newHTML = forone.triaMD.textHTML();
                forone.triaMD.processMarkDown();
                forone.triaMD.idMDtext.innerHTML = forone.removeCusorTag(forone.triaMD.newHTML);
                forone.logc('Markdown', 'Markdown');

            } catch (error) {
                //               forone.findResource();
                forone.logc(error, "try");
            }
        },
        //
        initMarkDown: function () {
            //forone.include("demo2.js");
            try {
                forone.isMarkDown = forone.getId(forone.triaMD.chaiHTMLtext) ? true : false;
                if (forone.isMarkDown) {
                    forone.triaMD.idHTMLzone = forone.getId(forone.triaMD.chaiHTMLzone);
                    forone.triaMD.idHTMLtext = forone.getId(forone.triaMD.chaiHTMLtext);
                    forone.triaMD.idMDzone = forone.getId(forone.triaMD.chaiMDzone);
                    forone.triaMD.idMDtext = forone.getId(forone.triaMD.chaiMDtext);

                }
            } catch (error) { forone.logc(error); }
        },
        //

        initRender: function () {

            //forone.myRequire("demo2.js");
            try {
                //forone.include("demo2.js");
                forone.isRender = forone.getId(forone.triaCHS.chaiHTMLtext) ? true : false;
                if (forone.isRender) {
                    forone.triaCHS.idHTMLzone = forone.getId(forone.triaCHS.chaiHTMLzone);
                    forone.triaCHS.idHTMLtext = forone.getId(forone.triaCHS.chaiHTMLtext);
                    forone.triaCHS.idCSSzone = forone.getId(forone.triaCHS.chaiCSSzone);
                    forone.triaCHS.idCSStext = forone.getId(forone.triaCHS.chaiCSStext);
                    forone.triaCHS.idJSzone = forone.getId(forone.triaCHS.chaiJSzone);
                    forone.triaCHS.idJStext = forone.getId(forone.triaCHS.chaiJStext);
                    forone.triaCHS.idRDzone = forone.getId(forone.triaCHS.chaiRDzone);
                    forone.triaCHS.idRDtext = forone.getId(forone.triaCHS.chaiFRMtext);
                    forone.triaCHS.idRDdoc = forone.triaCHS.idRDtext.contentDocument ||
                        forone.triaCHS.idRDtext.contentDocument.document ||
                        forone.triaCHS.idRDtext.contentWindow;
                    forone.idRenders = [forone.triaCHS.idHTMLtext, forone.triaCHS.idCSStext, forone.triaCHS.idJStext];
                    forone.idRenders.forEach(function (mRender, index, array) {
                        mRender.addEventListener('oninput', function () {
                            forone.triaCHS.render();
                        }, false);
                    });
                    //forone.htmlFRMInit();
                }
            } catch (error) { forone.logc(error); }
        }
    },

    str2json: function (str) {
        var json = str;
        // var json = '{"result":true, "count":42}';
        obj = JSON.parse(json);

        console.log(obj.count);
        // expected output: 42

        console.log(obj.result);
        // expected output: true
    },
    json2str: function (obj) {
        console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
    },
    /* end MD script */
    //
    foroneInit: function () {
        if (forone.checkForone()) {
            forone.setCode();
            forone.setDefaultTextId();
            forone.addForoneCSS();
            forone.addForoneHTML();
            forone.findResource();
            forone.onClickOneforEvent();
            forone.setSize();
            forone.set41Position();
            forone.checkInput();
            forone.get4one();
        }

    },

    //forone.triacode.demoList

    /* end demo script */
    /* begin native language */
    IME: {
        CHN: {

        },
        JPN: {

            hiragana: {
                'i': 'ぃ 12355', 'u': 'ぅ 12357', 'ie': 'ぇ 12359', 'o': 'ぉ 12361',
                'a': 'あ 12354', 'i': 'い 12356', 'u': 'う 12358', 'ie': 'え 12360', 'o': 'お 12362',
                'ka': 'か 12363', 'ki': 'き 12365', 'ku': 'く 12367', 'kie': 'け 12369', 'ko': 'こ 12371',
                'ga': 'が 12364', 'gi': 'ぎ 12366', 'gu': 'ぐ 12368', 'gie': 'げ 12370', 'go': 'ご 12372',
                'sa': 'さ 12373', 'si': 'し 12375', 'su': 'す 12377', 'sie': 'せ 12379', 'so': 'そ 12381',
                'za': 'ざ 12374', 'zi': 'じ 12376', 'zu': 'ず 12378', 'zie': 'ぜ 12380', 'zo': 'ぞ 12382',
                'cu': 'っ 12387',
                'ta': 'た 12383', 'ci': 'ち 12385', 'cu': 'つ 12388', 'tie': 'て 12390', 'to': 'と 12392',
                'da': 'だ 12384', 'di': 'ぢ 12386', 'du': 'づ 12389', 'die': 'で 12391', 'do': 'ど 12393',
                'da': 'な 12394', 'di': 'に 12395', 'du': 'ぬ 12396', 'die': 'ね 12397', 'do': 'の 12398',
                'ha': 'は 12399', 'hi': 'ひ 12402', 'du': 'ふ 12405', 'die': 'へ 12408', 'do': 'ほ 12411',
                'ba': 'ば 12400', 'bi': 'び 12403', 'bu': 'ぶ 12406', 'bie': 'べ 12409', 'bo': 'ぼ 12412',
                'pa': 'ぱ 12401', 'pi': 'ぴ 12404', 'pu': 'ぷ 12407', 'pie': 'ぺ 12410', 'po': 'ぽ 12413',
                'ma': 'ま 12414', 'mi': 'み 12415', 'mu': 'む 12416', 'mie': 'め 12417', 'mo': 'も 12418',
                'ya': 'ゃ 12419', 'yu': 'ゅ 12421', 'yo': 'ょ 12423',
                'ya': 'や 12420', 'yu': 'ゆ 12422', 'mo': 'よ 12424',
                'ra': 'ら 12425', 'ri': 'り 12426', 'ru': 'る 12427', 'rie': 'れ 12428', 'ro': 'ろ 12429',
                'oda': 'ゎ 12430', 'ru': 'ゐ 12432', 'rie': 'れ 12428', 'ro': 'ろ 12429',
                'ra': 'わ 12431', 'ri': 'ゑ 12426', 'ru': 'る 12427', 'rie': 'れ 12428', 'ro': 'ろ 12429',

            }
        },
        KOR: {
            tria2zalym: {
                'g': 0, 'q': 1, n: 2, 'd': 3, 'w': 4, 'r': 5,
                'm': 6, 'v': 7, 'b': 8, 's': 9,
                'x': 10, 'l': 11, 'z': 12, 'j': 13, 'c': 14,
                'k': 15, 't': 16, 'p': 17, 'h': 18,
            },
            tria2molym: {
                'a': 0, 'ia': 1, 'ya': 2, 'yia': 3, 'e': 4,
                'ie': 5, 'ye': 6, 'yie': 7, 'o': 8, 'oa': 9, 'oia': 10,
                'io': 11, 'yo': 12, 'u': 13, 'ue': 14, 'uie': 15,
                'iu': 16, 'yu': 17, 'y': 18, 'yi': 19, 'i': 20,
            },
            tria2vacim: {
                'g': 0, 'q': 1, 'gs': 2, 'n': 3, 'nz': 4, 'nh': 5, 'd': 6, 'r': 7, 'rg': 8,
                'rm': 9, 'rv': 10, 'rs': 11, 'rt': 12, 'rp': 13, 'rh': 14, 'm': 15, 'v': 16, 'vs': 17,
                's': 18, 'x': 19, 'l': 20, 'z': 21, 'c': 22, 'k': 23, 't': 24, 'p': 25, 'h': 26,
            },
            getHangyr: function getHangyr(zalym, molym, vacim) {
                var za = (tria2zalym[zalym]) * 588;
                var mo = (tria2molym[molym] ? ((tria2molym[molym]) * 28) : 0);
                var va = (tria2vacim[vacim] === undefined ? tria2vacim[vacim] + 1 : 0);
                console.log(za, mo, va);
                var han = 44032 + za + mo + va;

                return String.fromCharCode(han)

            }
        },



    },
    /* end native language */

    //////////////////////////////////////////////////////////
    ///// define forone init
    init: function () {
        forone.demo.ready(forone.demo.demoInit);
        forone.logc("message", "start");
        //forone.addWindowClickListener();
        forone.foroneInit();
        //forone.initRender();
        //window.addEventListener('drag', testdrag, false);
    },
    // define ready load html 
    forone: function (func) {
        if (document.readyState != 'loading') {
            func();
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', func);
        } else {
            document.attachEvent('onreadystatechange', function () {
                if (document.readyState != 'loading')
                    func();
            });
        }
    }

}
// chai forone init ready
forone.forone(forone.init);


//----------------------------------------------------------------------------
// begin forone triacode codes define
//----------------------------------------------------------------------------
//triacode
forone.triacode = {}

// chai forone keyboard geature demo list
forone.triacode.demoList = [
    ['0', '11023122', 'ro'],
    ['1', '1122', 'gi'],
    ['2', '110322', 'ze'],
    ['3', '110233', 'ca'],
    ['4', '11233', 'jo'],
    ['5', '113211', 'tu'],
    ['6', '1132033', 'fi'],
    ['7', '11022', 've'],
    ['8', '112033', 'xa'],
    ['9', '1102133', 'qo'],
    ['/', '2211', 'ieita'],
    ['\\', '3300', 'iaita'],
    ['-', '1100', 'xieta'],
    ['+', '0011', 'xiata'],
    ['_', '33233', 'wuta'],
    ['=', '22322', 'wota'],
    ['a', '003200', 'a'],
    ['à', '0032133', 'ia'],
    ['b', '00120322', 'by'],
    ['c', '001322', 'cy'],
    ['d', '001200', 'dy'],
    ['e', '0013211', 'e'],
    ['è', '0023011', 'ie'],
    ['f', '0023122', 'fy'],
    ['g', '00133', 'gy'],
    ['h', '0021300', 'hy'],
    ['i', '0033', 'i'],
    ['j', '00322', 'jy'],
    ['k', '00122', 'ky'],
    ['l', '00233', 'ly'],
    ['m', '00210311', 'my'],
    ['n', '002133', 'ny'],
    ['o', '0013200', 'o'],
    ['p', '0013022', 'py'],
    ['q', '0021033', 'qy'],
    ['r', '00132033', 'ry'],
    ['s', '0012300', 'sy'],
    ['t', '001300', 'ty'],
    ['u', '002311', 'u'],
    ['v', '00211', 'vy'],
    ['w', '003211', 'wy'],
    ['x', '003122', 'xy'],
    ['y', '00311', 'y'],
    ['z', '001233', 'zy'],
    ['xyz', '111', 'zamo'],
    ['ABC', 'c000', 'alphabet'],
    ['UserDefine', 'u333', 'customize'],
    ['Combine', 'f222', 'Option'],
    ['Left', '3322', 'reta'],
    ['Right', '2233', 'rata'],
    ['Up', '3311', 'rota'],
    ['Down', '1133', 'ruta'],
    ['Back', '11200', 'nemta1'],
    ['Del', '11300', 'nemta'],
    ['Space', '111', 'namta'],
    ['Enter', '333', 'zeta'],
    ['<', '33211', 'jiveta'],
    ['>', '22300', 'jivata'],
    ['(', '33200', 'gileta'],
    [')', '22311', 'gilata'],
    ['[', '332011', 'ciueta'],
    [']', '223100', 'ciuata'],
    ['{', '3320122', 'fipeta'],
    ['}', '2231033', 'fipata'],
    [',', '00200', 'mieta'],
    [';', '002022', 'bieta'],
    ['.', '11311', 'miata'],
    [':', '113133', 'biata'],
    ['|', '2200', 'vuta'],
    ['!', '22022', 'hiata'],
    ["'", '0022', 'mota'],
    ['"', '22033', 'muta'],
    ['^', '33022', 'yota'],
    ['~', '331200', 'yuta'],
    ['`', '33122', 'vota'],
    ['Tab', '22133', 'kamta'],
    ['?', '33100', 'hieta'],
    ['$', '332100', 'suita'],
    ['&', '3321033', 'soita'],
    ['#', '3320133', 'ueita'],
    ['@', '332033', 'oaita'],
    ['%', '332133', 'duta'],
    ['*', '330211', 'xota'],
    ['Capslock', 'c000', 'monta'],
    ['A', 'c003200', 'liei'],
    ['À', 'c0032133', 'lia'],
    ['B', 'c00120322', 'bi'],
    ['C', 'c001322', 'si'],
    ['D', 'c001200', 'di'],
    ['E', 'c0013211', 'yi'],
    ['È', 'c0023011', 'lie'],
    ['F', 'c0023122', 'iefy'],
    ['G', 'c00133', 'ziu'],
    ['H', 'c0021300', 'lieciu'],
    ['I', 'c0033', 'lai'],
    ['J', 'c00322', 'jiei'],
    ['K', 'c00122', 'kiei'],
    ['L', 'c00233', 'lier'],
    ['M', 'c00210311', 'liem'],
    ['N', 'c002133', 'lien'],
    ['O', 'c0013200', 'leu'],
    ['P', 'c0013022', 'pi'],
    ['Q', 'c0021033', 'kyu'],
    ['R', 'c00132033', 'lar'],
    ['S', 'c0012300', 'liesy'],
    ['T', 'c001300', 'ti'],
    ['U', 'c002311', 'lyu'],
    ['V', 'c00211', 'vyi'],
    ['W', 'c003211', 'wavryu'],
    ['X', 'c003122', 'lieks'],
    ['Y', 'c00311', 'luai'],
    ['Z', 'c001233', 'zied'],
    ['Combine', 'f222', 'bonta'],
    ['Arabic', 'f003200', 'Arabic'],
    ['Chinese', 'f001322', 'Chinese'],
    ['English', 'f0013211', 'English'],
    ['French', 'f0023122', 'French'],
    ['German', 'f00133', 'German'],
    ['Japanese', 'f00322', 'Japanese'],
    ['korean', 'f00122', 'korean'],
    ['Russian', 'f00132033', 'Russian'],
    ['Spainish', 'f0012300', 'Spainish'],
    ['Portuguese', 'f0013022', 'Portuguese'],
    ['Chai', 'f220133', 'Chai'],
    ['ESC', '213011', 'qieta'],
    ['hide41kbd', '2203122', 'hideforone'],
    ['Copy', 'u220133', 'kopi'],
    ['Past', 'u2201300', 'past'],
    ['Back', 'u11211', 'nemta2'],
    ['"', 'u00100', 'muta1'],
    ['0', 'u1102311', 'ro1'],
    ['6', 'u1102300', 'fi1'],
    ['b', 'u22122', 'by1'],
    ['B', 'u33033', 'bi1'],
    ['m', 'u33033', 'my1'],
    ['M', 'u22122', 'liem1'],
    ['r', 'u00300', 'ry1'],
    ['R', 'u0300', 'lar1'],
    ['function', 'u22312022', 'hamsu'],
    ['for', 'u22023122', 'for'],
    ['false', 'u2231200', 'ron'],
    ['true', 'u330133', 'ryi'],
    ['try', 'u331033', 'try'],
    ['typeof', 'u3310311', 'typeof'],
    ['var', 'u220211', 'hesu'],
    ['let', 'u220233', 'sisu'],
    ['new', 'u220311', 'new'],
    ['return', 'u33201300', 'hue'],
    ['break', 'u22102300', 'break'],
    ['switch', 'u2230122', 'switch'],
    ['class', 'u223100', 'riei'],
    ['case', 'u2231011', 'case'],
    ['continue', 'u223101322', 'continue'],
    ['while', 'u221033', 'while'],
    ['with', 'u112300', 'with'],
    ['else', 'u1123100', 'else'],
    ['< >', 'u3321233', 'jv'],
    ['( )', 'u3320233', 'gl'],
    ['[ ]', 'u332010233', 'cu'],
    ['{ }', 'u2210233', 'pf'],
    ['<=', 'u0021233', 'jaw'],
    ['>=', 'u1130322', 'vew'],
    ['<=', 'u0012133', 'jow'],
    ['<=', 'u1103022', 'juw'],
    ['<=', 'u1103022', 'ju1'],
];


forone.triacode.english = {
    // Command Key
    "0": "KEY_SHIFT",
    "1": " ",
    "120": "KEY_BACKSPACE",
    "121": "KEY_BACKSPACE",
    "130": "KEY_DELETE",
    "2": "KEY_CTRL",
    "3": "KEY_ENTER",
    "21301": "ESCAPE",
    "23": "CHAI_CURSOR_RIGHT",
    "c23": "CHAI_CURSOR_RIGHT",
    "32": "CHAI_CURSOR_LEFT",
    "c32": "CHAI_CURSOR_LEFT",
    "31": "CHAI_CURSOR_UP",
    "c31": "CHAI_CURSOR_UP",
    "13": "CHAI_CURSOR_DOWN",
    "c13": "CHAI_CURSOR_DOWN",
    "212": "EDIT_DUPLICATELINE",
  
    // Number Key
    "12": "1",
    "1032": "2",
    "1023": "3",
    "123": "4",
    "1231": "5",
    "1321": "5",
    "10230": "6", "10320": "6", "13203": "6", "13023": "6",
    "102": "7", "103": "7",
    "1203": "8",
    "10213": "9", "12013": "9",
    //"31021": "9", "31201": "9",
    "102312": "0", "120132": "0", "123102": "0", "132012": "0", "102132": "0",
    "10231": "0", "13201": "0",
    // Punctuation Mark Key
    "10": "-",
    "01": "+",
    "323": "_",
    "232": "=",
    "213": "\t",
    "21": "/",
    "30": "\\",
    "20": "|",
    "202": "!",
    //"2023": "!=",
    "3203": "@", "3023": "@",
    "32013": "#", "31023": "#",
    "2301": "$", "3210": "$",
    "3213": "%", "3123": "%",
    "302": "^",
    "32103": "&", "30123": "&", "3012": "&",
    "3021": "*", "30212": "**",
    "3120": "~",
    //"2031": "~", 
    "312": "`",
    //"1302": "`", "301": "`", 
    "02": "'",
    "203": '"',
    "010": '"',
    "0202": ";", "1313": ":",
    "020": ",", "131": ".",
    "230": ">", "321": "<",
    "32123": "<>",
    //"2303": "<>", "3212": "<>",
    "320": "(", "231": ")",
    "32023": "()",
    //"3202": "()", "2313": "()",
    "3201": "[", "2310": "]",
    "3201023": "[]",
    //"32010": "[]", "23101": "[]",
    "32012": "{", "32102": "{", "21023": "{", "20123": "{",
    "30132": "}", "31032": "}", "23103": "}", "23013": "}",
    "320121023": "{}",
    //"320121": "{}", "321020": "{}", "210232": "{}", "201232": "{}", "301323": "{}", "310323": "{}", "231030": "{}", "230131": "{}",
    "310": "?", "3101": "? ,",
    // zamo Key
    "0320": "a", "0230": "a",
    //"03202": " and ", "02303": " and ",
    "03213": "à", "03123": "à",
    "012032": "b", "023012": "b", "032012": "b", "032102": "b", "021032": "b", "012302": "b",
    "0132": "c",
    //"01323": "class ", 
    //"013231": " continue ",
    "0120": "d", "0210": "d",
    //"01202": "def (),", "02101": "def (),", "012021": "del ", "021012": "del ",
    "01321": "e", "01231": "e",
    "013212": "else,", "012313": "else,", "0132123": "except ,", "0123132": "except ,",
    "02301": "è", "03201": "è",
    "02312": "f", "02132": "f",
    //"023121": "if ,", "021323": "if ,", "0231212": "elif ,", "0213232": "elif ,", 
    //"0231213": "for in ,", "0213231": "for in ,", "02312132": "finally ", "02132312": "finally ",
    "013": "g",
    //"0131": "global ",
    "02130": "h", "03120": "h",
    "03": "i",
    "032": "j",
    "012": "k",
    "023": "l",
    //"0232": "lambda ",
    "021031": "m", "031021": "m", "012031": "m", "013021": "m", "021301": "m", "031201": "m", "303": "m",
    //"3030": "import ",
    "0213": "n",
    //"02131": "not", "021312": "in",
    "01320": "o", "02310": "o", "0132030": " or ", "0231030": " or ",
    "01302": "p", "03102": "p",
    "013020": "print()", "031020": "print()", "0130203": "pass\n",
    "0130201": "pass\n", "0310201": "pass\n", "0310203": "pass\n",
    "02103": "q", "01203": "q",
    "013203": "r", "031023": "r", "032013": "r", "023013": "r", "023103": "r", "013023": "r",
    "030": "r",
    "0303": "raise", "03030": "return ",
    "01230": "s", "03210": "s",
    "012303": "is", "032101": "is", "0123032": "self", "0321012": "self",
    "0130": "t", "0310": "t",
    "01303": "try ,", "03101": "try ,",
    "0231": "u",
    "021": "v",
    "0321": "w", "03212": "while ,", "032123": " with ",
    "0312": "x",
    "031": "y", "0313": "yield ",
    "0123": "z",
    // CapsLock Alphabet
    "c0320": "A", "c0230": "A",
    "c03213": "À", "c03123": "À",
    "c012032": "B", "c023012": "B", "c032012": "B", "c032102": "B", "c021032": "B", "c012302": "B",
    "c212": "B",
    "c0132": "C", "c2310": "",
    "c0120": "D", "c0210": "D",
    "c01321": "E", "c01231": "E",
    "c02301": "È", "c03201": "È",
    "c02312": "F", "c02132": "F",
    "c013": "G",
    "c02130": "H", "c03120": "H",
    "c03": "I",
    "c032": "J",
    "c012": "K",
    "c023": "L",
    "c021031": "M", "c031021": "M", "c012031": "M", "c013021": "M", "c021301": "M", "c031201": "M",
    "c303": "M",
    "c0213": "N",
    "c01320": "O", "c02310": "O",
    "c01302": "P", "c03102": "P",
    "c02103": "Q", "c01203": "Q",
    "c013203": "R", "c031023": "R", "c032013": "R", "c023013": "R", "c023103": "R", "c013023": "R", "c030": "R",
    "c01230": "S", "c03210": "S",
    "c0130": "T", "c0310": "T",
    "c0231": "U",
    "c021": "V",
    "c0321": "W",
    "c0312": "X",
    "c031": "Y",
    "c0123": "Z"
}
// arabic
forone.triacode.arabic = {
    "0": "KEY_SHIFT",
    "1": " ",
    "120": "KEY_BACKSPACE",
    "121": "KEY_BACKSPACE",
    "130": "KEY_DELETE",
    "2": "KEY_CTRL",
    "3": "KEY_ENTER",
    "21301": "ESCAPE",
    "23": "CHAI_CURSOR_RIGHT",
    "c23": "CHAI_CURSOR_RIGHT",
    "32": "CHAI_CURSOR_LEFT",
    "c32": "CHAI_CURSOR_LEFT",
    "31": "CHAI_CURSOR_UP",
    "c31": "CHAI_CURSOR_UP",
    "13": "CHAI_CURSOR_DOWN",
    "c13": "CHAI_CURSOR_DOWN",
    "212": "EDIT_DUPLICATELINE",
    "2102": "EDITOR_CSS",
    "2132": "EDITOR_JS",
    "2121": "EDITOR_RENDER",
    "20312": "HIDE_FORONE_APP",
    "203213": "MARK_DOWN",
    "213203": "SEND_MAIL",
    "12": "1",
    "1032": "2",
    "1023": "3",
    "123": "4",
    "1231": "5",
    "1321": "5",
    "10230": "6", "10320": "6", "13203": "6", "13023": "6",
    "102": "7", "103": "7",
    "1203": "8",
    "10213": "9", "12013": "9", "31021": "9", "31201": "9",
    "102312": "0", "120132": "0", "123102": "0", "132012": "0", "102132": "0", "10231": "0", "13201": "0",
    "10": "-",
    "01": "+",
    "323": "_",
    "232": "=",
    "213": "\t",
    "21": "/", "30": "\\",
    "20": "|",
    "202": "!", "2023": "!=",
    "3203": "@", "3023": "@",
    "32013": "#", "31023": "#",
    "2301": "$", "3210": "$",
    "3213": "%", "3123": "%",
    "302": "^",
    "32103": "&", "30123": "&", "3012": "&",
    "3021": "*", "30212": "**",
    "2031": "~", "3120": "~", "1302": "`", "301": "`", "312": "`",
    "02": "'",
    "203": '"',
    "010": '"',
    "0202": ";", "1313": ":",
    "020": ",", "131": ".",
    "320": "(", "231": ")", "3202": "()", "2313": "()",
    "3201": "[", "2310": "]", "32010": "[]", "23101": "[]",
    "230": ">", "321": "<", "2303": "<>", "3212": "<>",
    "32012": "{", "32102": "{", "21023": "{", "20123": "{", "30132": "}", "31032": "}", "23103": "}", "23013": "}",
    "320121": "{}", "321020": "{}", "210232": "{}", "201232": "{}", "301323": "{}", "310323": "{}", "231030": "{}", "230131": "{}",
    "310": "?", "3101": "? ,",
    //
}
// tibetan
//(Unicode) 的编码空间由 0F40 至 0F69
// 藏文字母共有30个辅音字母，4个元音符号
forone.triacode.tibetan = {
    "0": "KEY_SHIFT",
    "1": " ",
    "120": "KEY_BACKSPACE",
    "121": "KEY_BACKSPACE",
    "130": "KEY_DELETE",
    "2": "KEY_CTRL",
    "3": "KEY_ENTER",
    "21301": "ESCAPE",
    "23": "CHAI_CURSOR_RIGHT",
    "c23": "CHAI_CURSOR_RIGHT",
    "32": "CHAI_CURSOR_LEFT",
    "c32": "CHAI_CURSOR_LEFT",
    "31": "CHAI_CURSOR_UP",
    "c31": "CHAI_CURSOR_UP",
    "13": "CHAI_CURSOR_DOWN",
    "c13": "CHAI_CURSOR_DOWN",
    "212": "EDIT_DUPLICATELINE",
    "2102": "EDITOR_CSS",
    "2132": "EDITOR_JS",
    "2121": "EDITOR_RENDER",
    "20312": "HIDE_FORONE_APP",
    "203213": "MARK_DOWN",
    "213203": "SEND_MAIL",
    "12": "1",
    "1032": "2",
    "1023": "3",
    "123": "4",
    "1231": "5",
    "1321": "5",
    "10230": "6", "10320": "6", "13203": "6", "13023": "6",
    "102": "7", "103": "7",
    "1203": "8",
    "10213": "9", "12013": "9", "31021": "9", "31201": "9",
    "102312": "0", "120132": "0", "123102": "0", "132012": "0", "102132": "0", "10231": "0", "13201": "0",
    "10": "-",
    "01": "+",
    "323": "_",
    "232": "=",
    "213": "\t",
    "21": "/", "30": "\\",
    "20": "|",
    "202": "!", "2023": "!=",
    "3203": "@", "3023": "@",
    "32013": "#", "31023": "#",
    "2301": "$", "3210": "$",
    "3213": "%", "3123": "%",
    "302": "^",
    "32103": "&", "30123": "&", "3012": "&",
    "3021": "*", "30212": "**",
    "2031": "~", "3120": "~", "1302": "`", "301": "`", "312": "`",
    "02": "'",
    "203": '"',
    "010": '"',
    "0202": ";", "1313": ":",
    "020": ",", "131": ".",
    "320": "(", "231": ")", "3202": "()", "2313": "()",
    "3201": "[", "2310": "]", "32010": "[]", "23101": "[]",
    "230": ">", "321": "<", "2303": "<>", "3212": "<>",
    "32012": "{", "32102": "{", "21023": "{", "20123": "{", "30132": "}", "31032": "}", "23103": "}", "23013": "}",
    "320121": "{}", "321020": "{}", "210232": "{}", "201232": "{}", "301323": "{}", "310323": "{}", "231030": "{}", "230131": "{}",
    "310": "?", "3101": "? ,",
    //
    'ka': 'ཀ',
    'kha': 'ཁ',
    'ga': 'ག',
    'gha': 'གྷ',
    'nga': 'ང',
    'ca': 'ཅ',
    'cha': 'ཆ',
    'ja': 'ཇ',
    'nya': 'ཉ',
    'tta': 'ཊ',
    'ttha': 'ཋ',
    'dda': 'ཌ',
    'ddha': 'ཌྷ',
    'nna': 'ཎ',
    'ta': 'ཏ',
    'tha': 'ཐ',
    'da': 'ད',
    'dha': 'དྷ',
    'na': 'ན',
    'pa': 'པ',
    'pha': ' ཕ',
    'ba': ' བ',
    'bha': 'བྷ',
    'ma': 'མ',
    'tsa': 'ཙ',
    'tsha': 'ཚ',
    'dza': 'ཛ',
    'dzha': 'ཛྷ',
    'wa': 'ཝ',
    'zha': 'ཞ',
    'za': 'ཟ',
    '-a': 'འ',
    'ya': 'ཡ',
    'ra': 'ར',
    'la': 'ལ',
    'sha': 'ཤ',
    'ssa': 'ཥ',
    'sa': 'ས',
    'ha': 'ཧ',
    'a': 'ཨ',
    'kssa': 'ཀྵ'
}
// japanese
forone.triacode.japanese = {
    "0": "KEY_SHIFT",
    "1": " ",
    "120": "KEY_BACKSPACE",
    "121": "KEY_BACKSPACE",
    "130": "KEY_DELETE",
    "2": "KEY_CTRL",
    "3": "KEY_ENTER",
    "21301": "ESCAPE",
    "23": "CHAI_CURSOR_RIGHT",
    "c23": "CHAI_CURSOR_RIGHT",
    "32": "CHAI_CURSOR_LEFT",
    "c32": "CHAI_CURSOR_LEFT",
    "31": "CHAI_CURSOR_UP",
    "c31": "CHAI_CURSOR_UP",
    "13": "CHAI_CURSOR_DOWN",
    "c13": "CHAI_CURSOR_DOWN",
    "12": "1",
    "1032": "2",
    "1023": "3",
    "123": "4",
    "1231": "5",
    "1321": "5",
    "10230": "6", "10320": "6", "13203": "6", "13023": "6",
    "102": "7", "103": "7",
    "1203": "8",
    "10213": "9", "12013": "9", "31021": "9", "31201": "9",
    "102312": "0", "120132": "0", "123102": "0", "132012": "0", "102132": "0", "10231": "0", "13201": "0",
    "10": "-",
    "01": "+",
    "323": "_",
    "232": "=",
    "213": "\t",
    "21": "/", "30": "\\",
    "20": "|",
    "202": "!", "2023": "!=",
    "3203": "@", "3023": "@",
    "32013": "#", "31023": "#",
    "2301": "$", "3210": "$",
    "3213": "%", "3123": "%",
    "302": "^",
    "32103": "&", "30123": "&", "3012": "&",
    "3021": "*", "30212": "**",
    "2031": "~", "3120": "~", "1302": "`", "301": "`", "312": "`",
    "02": "'",
    "203": '"',
    "010": '"',
    "0202": ";", "1313": ":",
    "020": ",", "131": ".",
    "320": "(", "231": ")", "3202": "()", "2313": "()",
    "3201": "[", "2310": "]", "32010": "[]", "23101": "[]",
    "230": ">", "321": "<", "2303": "<>", "3212": "<>",
    "32012": "{", "32102": "{", "21023": "{", "20123": "{", "30132": "}", "31032": "}", "23103": "}", "23013": "}",
    "320121": "{}", "321020": "{}", "210232": "{}", "201232": "{}", "301323": "{}", "310323": "{}", "231030": "{}", "230131": "{}",
    "310": "?", "3101": "? ,",
    //
    "0230": "あ",
    "c0230": "ア",
    "03": "い",
    "c03": "イ",
    "0231": "う",
    "c0231": "ウ",
    "02301": "え",
    "c02301": "エ",
    "02310": "お",
    "c02310": "オ",
    "01320": "お",
    "c01320": "オ",
    "0120230": "か",
    "c0120230": "カ",
    "01203": "き",
    "c01203": "キ",
    "0120231": "く",
    "c0120231": "ク",
    "01202301": "け",
    "c01202301": "ケ",
    "01202310": "こ",
    "c01202310": "コ",
    "01230230": "さ",
    "c01230230": "サ",
    "012303": "し",
    "c012303": "シ",
    "01230231": "す",
    "c01230231": "ス",
    "012302301": "せ",
    "c012302301": "セ",
    "012302310": "そ",
    "c012302310": "ソ",
    "0130230": "た",
    "c0130230": "タ",
    "013203": "ち",
    "c013203": "チ",
    "01320231": "つ",
    "c01320231": "ツ",
    "03102301": "て",
    "c03102301": "テ",
    "01302310": "と",
    "c01302310": "ト",
    "02130230": "な",
    "c02130230": "ナ",
    "021303": "に",
    "c021303": "ニ",
    "02130231": "ぬ",
    "c02130231": "ヌ",
    "021302301": "ね",
    "c021302301": "ネ",
    "021302310": "の",
    "c021302310": "ノ",
    "03120": "は",
    "03120230": "は",
    "c03120230": "ハ",
    "031203": "ひ",
    "c031203": "ヒ",
    "03120231": "ふ",
    "c03120231": "フ",
    "031202301": "へ",
    "031202301": "ヘ",
    "031202310": "ほ",
    "c031202310": "ホ",
    "0210310230": "ま",
    "c0210310230": "マ",
    "02103103": "み",
    "c02103103": "ミ",
    "0210310231": "む",
    "c0210310231": "ム",
    "02103102301": "め",
    "c02103102301": "メ",
    "02103102310": "も",
    "c02103102310": " モ",
    "0310230": "や",
    "c0310230": "ヤ",
    "0310231": "ゆ",
    "c0310231": "ユ",
    "03102310": "よ",
    "c03102310": "ヨ",
    "0130230230": "ら",
    "c0130230230": "ラ",
    "030230": "ら",
    "c030230": "ラ",
    "01302303": "り",
    "c01302303": "リ",
    "0130230231": "る",
    "c0130230231": "ル",
    "01302302301": "れ",
    "c01302302301": "レ",
    "01302302310": "ろ",
    "c01302302310": "ロ",
    "02310230": "わ",
    "c02310230": "ワ",
    "030231": "ゐ",
    "c030231": "ヰ",
    "023102301": "ゑ",
    "c023102301": "ヱ",
    "023102310": "を",
    "c023102310": "ヲ",
    "023": "ん",
    "c023": "ン",
    "0213": "ん",
    "c0213": "ン",
    "0130230": "が",
    "c0130230": "ガ",
    "01303": "ぎ ",
    "c01303": "ギ",
    "0130231": "ぐ",
    "c0130231": "グ",
    "01302301": "げ",
    "c01302301": "ゲ",
    "01302310": "ご",
    "c01302310": "ゴ",
    "01230230": "ざ",
    "c01230230": "ザ",
    "03203": "じ",
    "c03203": "ジ",
    "01230231": "ず",
    "c01230231": "ズ",
    "012302301": "ぜ",
    "c012302301": "ゼ",
    "012302310": "ぞ",
    "c012302310": "ゾ",
    "0210230": "だ",
    "c0210230": "ダ",
    "02103": "ぢ",
    "c02103": "ヂ",
    "0210231": "づ",
    "c0210231": "ゾ",
    "02102301": "で",
    "c02102301": "デ",
    "01202310": "ど",
    "c01202310": "ド",
    "0120320230": "ば",
    "c0120320230": "バ",
    "01203203": "び",
    "c01203203": "ビ",
    "0120320231": " ぶ",
    "c0120320231": "ブ",
    "01203202301": "べ",
    "c01203202301": "ベ",
    "01203202310": "ぼ",
    "c01203202310": "ボ",
    "031020230": "ぱ",
    "c031020230": "パ",
    "0310203": "ぴ",
    "c0310203": "ピ",
    "0310231": "ぷ",
    "c0310231": "プ",
    "03102301": "ぺ",
    "c03102301": "ペ",
    "0310202310": "ぽ",
    "c0310202310": "ポ",
    "0120310230": "きゃ",
    "c0120310230": "キャ",
    "0120310231": "きゅ",
    "c0120310231": "キュ",
    "01203102310": "きょ",
    "c01203102310": "キョ",
    "01230310230": "しゃ",
    "c01230310230": "シャ",
    "01230231": "しゅ",
    "c01230231": "シュ",
    "012302310": "しょ",
    "c012302310": "ショ",
    "01320310230": "ちゃ",
    "c01320310230": "チャ",
    "01320310231": "ちゅ",
    "c01320310231": "チュ",
    "013203102310": "ちょ",
    "c013203102310": "チョ",
    "02130310230": "にゃ",
    "c02130310230": "ニャ",
    "02130310231": "にゅ",
    "c02130310231": "ニュ",
    "021303102310": "にょ",
    "c021303102310": "ニョ",
    "02130310230": "ひゃ",
    "c02130310230": "ヒャ",
    "02130310231": "ひゅ",
    "c02130310231": "ヒュ",
    "021303102310": "ひょ",
    "c021303102310": "ヒョ",
    "0210310310230": "みゃ",
    "c0210310310230": "ミャ",
    "0210310310231": "みゅ",
    "c0210310310231": "ミュ",
    "02103103102310": "みょ",
    "c02103103102310": "ミョ",
    "0130230310230": "りゃ",
    "c0130230310230": "リャ",
    "0130230310231": "りゅ",
    "c0130230310231": "リュ",
    "01302303102310": "りょ",
    "c01302303102310O": "リョ",

}

// korean
forone.triacode.Korean = {
    "0": "KEY_SHIFT",
    "1": " ",
    "120": "KEY_BACKSPACE",
    "121": "KEY_BACKSPACE",
    "130": "KEY_DELETE",
    "2": "KEY_CTRL",
    "3": "KEY_ENTER",
    "21301": "ESCAPE",
    "23": "CHAI_CURSOR_RIGHT",
    "c23": "CHAI_CURSOR_RIGHT",
    "32": "CHAI_CURSOR_LEFT",
    "c32": "CHAI_CURSOR_LEFT",
    "31": "CHAI_CURSOR_UP",
    "c31": "CHAI_CURSOR_UP",
    "13": "CHAI_CURSOR_DOWN",
    "c13": "CHAI_CURSOR_DOWN",
    "212": "EDITOR_HTML",
    "12": "1",
    "1032": "2",
    "1023": "3",
    "123": "4",
    "1231": "5",
    "1321": "5",
    "10230": "6", "10320": "6", "13203": "6", "13023": "6",
    "102": "7", "103": "7",
    "1203": "8",
    "10213": "9", "12013": "9", "31021": "9", "31201": "9",
    "102312": "0", "120132": "0", "123102": "0", "132012": "0", "102132": "0", "10231": "0", "13201": "0",
    "10": "-",
    "01": "+",
    "323": "_",
    "232": "=",
    "213": "\t",
    "21": "/", "30": "\\",
    "20": "|",
    "202": "!", "2023": "!=",
    "3203": "@", "3023": "@",
    "32013": "#", "31023": "#",
    "2301": "$", "3210": "$",
    "3213": "%", "3123": "%",
    "302": "^",
    "32103": "&", "30123": "&", "3012": "&",
    "3021": "*", "30212": "**",
    "2031": "~", "3120": "~", "1302": "`", "301": "`", "312": "`",
    "02": "'",
    "203": '"',
    "010": '"',
    "0202": ";", "1313": ":",
    "020": ",", "131": ".",
    "320": "(", "231": ")", "3202": "()", "2313": "()",
    "3201": "[", "2310": "]", "32010": "[]", "23101": "[]",
    "230": ">", "321": "<", "2303": "<>", "3212": "<>",
    "32012": "{", "32102": "{", "21023": "{", "20123": "{", "30132": "}", "31032": "}", "23103": "}", "23013": "}",
    "320121": "{}", "321020": "{}", "210232": "{}", "201232": "{}", "301323": "{}", "310323": "{}", "231030": "{}", "230131": "{}",
    "310": "?", "3101": "? ,",
    //
    "013": "ㄱ",
    "02103": "ㄲ",
    "01301230": "ㄳ",
    "0213": "ㄴ",
    "02130123": "ㄵ",
    "021302130": "ㄶ",
    "0210": "ㄷ",
    "0321": "ㄸ",
    "013023": "ㄹ",
    "030": "ㄹ",
    "023103013": "ㄺ",
    "03013": "ㄺ",
    "023103021031": "ㄻ",
    "03021031": "ㄻ",
    "023103021": "ㄼ",
    "03021": "ㄼ",
    "02310301230": "ㄽ",
    "0301230": "ㄽ",
    "0231030130": "ㄾ",
    "030130": "ㄾ",
    "02310301302": "ㄿ",
    "0301302": "ㄿ",
    "02310302130": "ㅀ",
    "0302130": "ㅀ",
    "021031": "ㅁ",
    "021": "ㅂ",
    "012032": "ㅃ",
    "02101230": "ㅄ",
    "01230": "ㅅ",
    "0312": "ㅆ",
    "023": "ㅇ",
    "0123": "ㅈ",
    "032": "ㅉ",
    "0132": "ㅊ",
    "012": "ㅋ",
    "0130": "ㅌ",
    "01302": "ㅍ",
    "02130": "ㅎ",
    "0230": "ㅏ",
    "0320": "ㅏ",
    "03213": "ㅐ",
    "0310230": "ㅑ",
    "03103213": "ㅒ",
    "01321": "ㅓ",
    "02301": "ㅔ",
    "03101321": "ㅕ",
    "031010230": "ㅖ",
    "02310": "ㅗ",
    "01320": "ㅗ",
    "02310230": "ㅘ",
    "023103213": "ㅙ",
    "013203": "ㅚ",
    "03102310": "ㅛ",
    "0231": "ㅜ",
    "023101321": "ㅝ",
    "023102301": "ㅞ",
    "023103": "ㅟ",
    "0310231": "ㅠ",
    "031": "ㅡ",
    "03103": "ㅢ",
    "03": "ㅣ",
    "0130230": "가",
    "013023013": "각",
    "0130230213": "간",
    "0130230210": "갇",
    "013023030": "갈",
    "0130230130230": "갈",
    "013023013023013": "갉",
    "01302303013": "갉",
    "013023013023021031": "갊",
    "01302303021031": "갊",
    "013023021031": "감",
    "013023021": "갑",
    "01302302101230": "값",
    "01302301230": "갓",
    "0130230312": "갔",
    "013023023": "강",
    "0130230123": "갖",
    "0130230132": "갗",
    "0130230130": "같",
    "01302301302": "갚",
    "01302302130": "갛",
    "01303213": "개",
    "01303213013": "객",
    "0130230213": "갠",
    "01303213030": "갤",
    "013032130130230": "갤",
    "01303213021031": "갬",
    "01303213021": "갭",
    "0130321301230": "갯",
    "013032130312": "갰",
    "01303213023": "갱",
    "0130310230": "갸",
    "013031023013": "갹",
    "0130310230213": "갼",
    "0130310230130230": "걀",
    "013031023030": "걀",
    "01303102301230": "걋",
    "013031023023": "걍",
    "01303103213": "걔",
    "0130310213": "걘",
    "01303103213030": "걜",
    "01303103213030": "걜",
    "013031032130130230": "거",
    "01301321013": "걱",
    "013013210213": "건",
    "013013210210": "걷",
    "013013210130230": "걸",
    "01301321030": "걸",
    "01301321013023021031": "걺",
    "0130132103021031": "걺",
    "01301321021031": "검",
    "01301321021": "겁",
    "0130132101230": "것",
    "013013210312": "겄",
    "01301321023": "겅",
    "013013210123": "겆",
    "013013210130": "겉",
    "0130132101302": "겊",
    "0130132102130": "겋",
    "01302301": "게",
    "013023010213": "겐",
    "013023010130230": "겔",
    "013023010130230": "겔",
    "01302301021031": "겜",
    "01302301021": "겝",
    "0130230101230": "겟",
    "013023010312": "겠",
    "01302301023": "겡",
    "01303101321": "겨",
    "01303101321013": "격",
    "0130310132102103": "겪",
    "013031013210213": "견",
    "013031013210210": "겯",
    "013031013210210": "겯",
    "013031013210120": "결",
    "01303101321021031": "겸",
    "01303101321021": "겹",
    "0130310132101230": "겻",
    "013031013210312": "겼",
    "01303101321023": "경",
    "013013210130": "곁",
    "01303102301": "계",
    "013031023010213": "곈",
    "013031023010130230": "곌",
    "01303102301030": "곌",
    "01303101321021": "곕",
    "0130310132101230": "곗",
    "01302310": "고",
    "0130231013": "곡",
    "01302310213": "곤",
    "01302310210": "곧",
    "0130231030": "골",
}
//----------------------------------------------------------------------------
// end forone triacode define
//----------------------------------------------------------------------------
