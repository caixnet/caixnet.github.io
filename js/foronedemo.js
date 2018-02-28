/*!
 * Chai forone keybaord Demo v1.0
 * https://caixnet.github.io
 * Copyright (c) Cai guangxian
 * Author: Daway.Cai guangxian
 * Email: caixnet@outlook.com
 * Application number: 2014800745031
 * International Application : PCT/CN2014/092045, 
 * International Publication : WO2016/082081
 * Date: 2018-01-02
 */

//----------------------------------------------------------------------------
/* add below element on HTML file to demo Chai ForOne code help.
<head>
<script src="JavaScriptPathName/foronedemo.js"></script>
</head>
<body>
<!-- begin chai forone demo -->
   <div id="chai41Demo" play="true" cols="4"> </div>
   <!-- end chai forone demo -->
</body>
*/
//----------------------------------------------------------------------------

// chai forone keyboard geature demo list
var chiaCodeDemoList = [
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
    ['Copy', 'u220133', 'kopi'],
    ['Past', 'u2201300', 'past'],
    ['Back', 'u11211', 'nemta2'],
    ['"', 'u00100', 'muta1'],
    ['0', 'u1102311', 'ro1'],
    ['6', 'u1102300', 'fi1'],
    ['< >', 'u3321233', 'jv'],
    ['( )', 'u3320233', 'gl'],
    ['[ ]', 'u332010233', 'cu'],
    ['{ }', 'u2210233', 'pf'],
    ['<=', 'u0021233', 'jaw'],
    ['>=', 'u1130322', 'vew'],
    ['ESC', '213011', 'qieta'],
    ['hide41kbd', '2203122', 'hideforone'],  
];
//
//----------------------------------------------------------------------------
// forone demo class
demo41 = {
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
    chai41Demo: "chai41Demo",
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
        css = "<style>";
        // define globale variable of forone demo size
        css += ':root{--caiforonesize: 100px;}';
        // define style forone DemoApp
        css += '.foroneDemoApp{position: relative; height:var(--caiforonesize); ';
        css += 'width:var(--caiforonesize);border: 0px; border-radius:calc(var(--caiforonesize)*.25); ';
        css += 'margin: calc(var(--caiforonesize)*.2); padding: 0;';
        css += 'display:inline-block; animation-delay:0s; z-index: 1;}';
        // define style display keyCode to matrixed forone gesture code
        css += '.foroneDemoKey{position: static; height: calc(var(--caiforonesize)*.35);';
        css += ' width: var(--caiforonesize); margin-left: 0px;';
        css += 'margin-top: calc(var(--caiforonesize)*1.05); border:0px;';
        css += 'font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;';
        css += 'font-size: 1.5em; text-align: center; vertical-align: middle;';
        css += 'justify-content: center; display:block;';
        css += 'background-color: rgba(141, 250, 199, 0.8);z-index: 4;}';
        // define style a base of eache forone
        css += '.foroneDemoBase{ --foroneBaseSize: var(--caiforonesize); position: absolute;';
        css += 'height: var(--caiforonesize); width: var(--caiforonesize);';
        css += 'left: 0px; top: 0; border:0px; border-radius:25px; ';
        css += 'margin: 0; padding: 0; display:inline-block;';
        css += 'background-color: rgba(250, 243, 141, 0.8); z-index: 1;}';
        // define style a animation chai forone help
        css += '.forOneCai{position: absolute; height:calc(var(--caiforonesize)*0.2);width:calc(var(--caiforonesize)*0.2);';
        css += 'border:1px;border-radius:calc(var(--caiforonesize)*0.2);';
        css += 'margin-left: calc(var(--caiforonesize)*0.15);margin-top: calc(var(--caiforonesize)*0.15);';
        css += 'background-color: rgba(243, 21, 21, 0.9);z-index: 50;';
        css += 'animation-timing-function:linear;animation-delay:0s;animation-iteration-count:infinite;';
        css += 'animation-direction:normal;animation-play-state:running;display: none;}';
        // define left-top one of forone touch zone
        css += '.forOne0{ position: absolute; height:calc(var(--caiforonesize)*0.4);width:calc(var(--caiforonesize)*0.4);';
        css += 'border:1px;border-radius:calc(var(--caiforonesize)*0.2);z-index: 2;';
        css += 'margin-left: calc(var(--caiforonesize)*0.05);margin-top: calc(var(--caiforonesize)*0.05);';
        css += 'background-color: rgba(11, 83, 29, 0.8); background-color: rgba(5, 136, 11, 0.8);}';
        // define right-top one of forone touch zone
        css += '.forOne1{ position: absolute; height:calc(var(--caiforonesize)*0.4); width:calc(var(--caiforonesize)*0.4);';
        css += 'border:1px; border-radius:calc(var(--caiforonesize)*0.2);z-index: 2;';
        css += 'margin-left: calc(var(--caiforonesize)*0.55);margin-top: calc(var(--caiforonesize)*0.05);';
        css += 'background-color: rgba(5, 136, 11, 0.8);}';
        // define left-bottom one of forone touch zone
        css += '.forOne2{position: absolute;height:calc(var(--caiforonesize)*0.4);width:calc(var(--caiforonesize)*0.4);';
        css += 'border:1px;border-radius:calc(var(--caiforonesize)*0.2);z-index: 2;';
        css += 'margin-left: calc(var(--caiforonesize)*0.05);margin-top: calc(var(--caiforonesize)*0.55);';
        css += 'background-color: rgba(5, 136, 11, 0.8);}';
        // define right-bottom one of forone touch zone
        css += '.forOne3{position: absolute;height:calc(var(--caiforonesize)*0.4);width:calc(var(--caiforonesize)*0.4);';
        css += 'border:1px;border-radius:calc(var(--caiforonesize)*0.2);z-index: 2;';
        css += 'margin-left: calc(var(--caiforonesize)*0.55);margin-top: calc(var(--caiforonesize)*0.55);';
        css += 'background-color: rgba(5, 136, 11, 0.8);}';
        // define display chai character zone
        css += '.forOneChai{ position: absolute;height:100px;width:100px;';
        css += 'left: 0px;top: 0;border:0px;border-radius:25px;';
        css += 'margin: 0;padding: 0;display:inline-block;z-index: 5; }';
        css += "</style>"
        return css;
    },
    // define a zone template to display chai forone demo  
    foroneDemoTemplate: function () {
        var html = '<!-- begin chai forone41 demo template -->';
        // html = '<div style="display: none">';
        html = '<div style="display: block">';
        html += '<div id="forone41Demonstrate" class="foroneDemonstrate">';
        html += '<div id="forone41DemoApp" class="foroneDemoApp">';
        html += '<div id="forone41Base" class="foroneDemoBase">';
        html += '<div id="forone41One0" class="forOne0"></div>';
        html += '<div id="forone41One1" class="forOne1"></div>';
        html += '<div id="forone41One2" class="forOne2"></div>';
        html += '<div id="forone41One3" class="forOne3"></div> ';
        html += '<canvas id="forone41Canvas" calss="forOneCanvas"></canvas>';
        html += '<div id="forone41Cai" class="forOneCai"> </div>';
        html += '<svg id="forone41Chai" class="forOneChai" version="1.1" \
            xmlns="http://www.w3.org/2000/svg" \
            xmlns:xlink="http://www.w3.org/1999/xlink" fill="none"  >';
        html += '<g id="forone41G" stroke="blue" stroke-width="8px" stroke-linecap="round" \
            stroke-linejoin="round" stroke-miterlimit="1" stroke-opacity=".5">';
        html += '<path id="forone41Path"></path>/>';
        html += '</g> </svg> </div> ';
        html += '<div id="forone41Key" class="foroneDemoKey"></div> </div> </div>';
        html += '<!-- end chai forone41 demo template -->';
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
    getIdAttr: function (idName, attrName) { return demo41.getId(idName).getAttribute(attrName); },
    // set selected element attribute
    setIdAttr: function (idName, attrName, attrVal) { return demo41.getId(idName).setAttribute(attrName, attrVal); },
    // set html in a id of element
    setHTML: function (idName, htmlVal) { demo41.getId(idName).innerHTML = htmlVal; },
    // get element by name
    getName: function (name) { return document.getElementsByName(name); },
    // get css variable
    getCSSvalue: function (cssVal) { return getComputedStyle(document.documentElement).getPropertyValue(cssVal).trim(); },
    // set css variable
    setCSSvalue: function (cssVar, cssVal) { document.documentElement.style.setProperty(cssVar, cssVal) },
    // set css value on element
    setCssText: function (idName, cssVal) { demo41.getId(idName).style.cssText = cssVal; },
    // set css background color
    setCssBgColor: function (idName, color) { demo41.getId(idName).style.backgroundColor = color; },
    // add Chai forone Demo list
    addItemList: function () {
        var htmlBegin = '<div style="display: table-row;">';
        var htmlEnd = '</div>';
        var htmlContent = htmlBegin;
        for (i = 0; i < demo41.mCode.length; i++) {
            //['z', '00123', 'zy'],
            var caiName = demo41.mCode[i][2];
            var caiCode = demo41.mCode[i][1];
            htmlContent += '<div id=' + caiName + ' name="' + caiCode + '" style="display: table-cell;"></div>';
            if ((i + 1) % demo41.mColumns == 0) {
                htmlContent += htmlEnd;
                htmlContent += htmlBegin;
            }
        }
        htmlContent += htmlEnd;
        demo41.setHTML(demo41.chai41Demo, htmlContent);
        return;
    },
    // get value from html cols attribute
    setForoneCell: function () {
        var colNumber = demo41.getIdAttr(demo41.chai41Demo, demo41.foroneCell);
        console.log("col:" + (colNumber == null) ? demo41.mCode.length : parseInt(colNumber));
        demo41.mColumns = (colNumber == null) ? demo41.mCode.length : parseInt(colNumber);
    },
    // clone from add Chai forone template to implement items
    clone: function (fromId, toId, fromTag, toTag) {
        //var htmlBuffer = getId(fromId).innerHTML;
        var htmlBuffer = demo41.foroneDemoTemplate();
        var re = new RegExp(fromTag, "g");
        htmlBuffer = htmlBuffer.replace(re, toTag);
        demo41.setHTML(toId, htmlBuffer);
        return demo41.getId(toId);
    },
    // set Chai forone Demo list
    setItemList: function () {
        for (index = 0; index < demo41.mCode.length; index++) {
            //['z', '00123', 'zy'],
            var caiName = demo41.mCode[index][2];
            var caiCode = demo41.mCode[index][1];
            var caiKey = demo41.mCode[index][0];
            demo41.clone(demo41.chaiDemoTemplate, caiName, demo41.chaiDemoTag, caiName);
            demo41.setProperty(caiName, caiCode, caiKey);
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
        demo41.mPath = [];
        var mKeyframes = "@keyframes " + demo41.mKeyPrex + code + "{";
        if (code.charAt(0) == demo41.mCapslockTag) {
            demo41.capslook = true;
            code = code.substring(1, code.length);
        }
        if (code.charAt(0) == demo41.mCommandTag) {
            demo41.command = true;
            code = code.substring(1, code.length);
        }
        if (code.charAt(0) == demo41.mCustomizeTag) {
            demo41.customize = true;
            code = code.substring(1, code.length);
        }
        for (i in code) {
            var left = demo41.one[code[i]][0] - 25;
            var top = demo41.one[code[i]][1] - 25;
            var percent = parseInt(100 * i / (code.length - 1));
            if (i == 0) {
                mKeyframes += percent + "% { left:" + left + "px; top:" + top + "px;" + demo41.startColor;
            } else {
                mKeyframes += percent + "% { left:" + left + "px; top:" + top + "px;" + demo41.swipeColor;
                //webkitKeyframes += percent + "% { left:" + left + "px; top:" + top + "px}";
            }
            demo41.mPath.push(demo41.one[code[i]]);
        }
        mKeyframes += "} ";
        //webkitKeyframes += "} ";
        //"One0
        demo41.headOnCss(mKeyframes);
        return demo41.mPath;
    },
    // get Chai forone character svg path
    getArrayLine: function (code) {
        return demo41.getPoints(code).join(" ");
    },
    // set attribute from added Chai forone items
    setProperty: function (tagName, code, key) {
        var path = demo41.mSvgTag + demo41.getArrayLine(code);
        //canvase
        //var path = getPoints(code, tagName);
        var keyframesname = demo41.mKeyPrex + code;
        var animation = demo41.aniName + keyframesname + demo41.aniDisplay + demo41.aniDuration + code.length + "s;";
        demo41.setCssText(tagName + demo41.foroneCai, animation);
        demo41.setHTML(tagName + demo41.foroneKey, key);
        //svg
        demo41.setIdAttr(tagName + demo41.foronePath, demo41.mPathTag, path);
        if (true == demo41.capslook) {
            demo41.setCssBgColor(tagName + demo41.foroneBase, demo41.capsLockOnColor);
            demo41.capslook = false;
        } else if (true == demo41.command) {
            demo41.setCssBgColor(tagName + demo41.foroneBase, demo41.commandOnColor);
            demo41.command = false;
        } else if (true == demo41.customize) {
            demo41.setCssBgColor(tagName + demo41.foroneBase, demo41.customizeOnColor);
            demo41.customize = false;
        } else {
            demo41.setCssBgColor(tagName + demo41.foroneBase, demo41.defaultColor);
        }
        if (code.charAt(0) == demo41.mCapslockTag || 
            code.charAt(0) == demo41.mCommandTag || 
            code.charAt(0) == demo41.mCustomizeTag) {
            code = code.substring(1, code.length);
            demo41.capslook = false;
        }
        demo41.setCssBgColor(tagName + demo41.oneTag + code.charAt(0), demo41.startOneColor);
        return;
    },
    // get code
    getCode: function(keyCode){
        if(keyCode){
            console.log("------");
        }else{
            demo41.mCode = chiaCodeDemoList.slice();
        }
    },
    // set each one zone of forone
    setOneSize: function () {
        demo41.oneSize = parseInt(demo41.getCSSvalue(demo41.foroneSize));
        demo41.one = {
            0: [demo41.oneSize * 0.25, demo41.oneSize * 0.25],
            1: [demo41.oneSize * 0.75, demo41.oneSize * 0.25],
            2: [demo41.oneSize * 0.25, demo41.oneSize * 0.75],
            3: [demo41.oneSize * 0.75, demo41.oneSize * 0.75]
        }
    },
    // demo one 
    demoOne: function (oneDemo = ['z', '001233', 'zy']) {
        demo41.mCode = demo41.setCode(codeKey);
        demo41.addCSS(demo41.foroneDemoCSS());
        demo41.setForoneCell();
        demo41.setOneSize();
        demo41.addItemList();
        demo41.setItemList();
    },
    // to check display if attribute play is true
    demo: function () {
        // return "true" == demo41.getIdAttr(demo41.chai41Demo, "play") ? true : false;
        return true;
    },
    // init forone demo
    demoInit: function () {
        if (demo41.demo()) {
            demo41.getCode();
            demo41.addCSS(demo41.foroneDemoCSS());
            demo41.setForoneCell();
            demo41.setOneSize();
            demo41.addItemList();
            demo41.setItemList();
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
}
// initialize forone demo
demo41.ready(demo41.demoInit);
//----------------------------------------------------------------------------
// end of chai forone demo 
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
