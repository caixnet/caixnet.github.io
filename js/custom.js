
function loadXMLDoc(url, option = false) { var xmlhttp; if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest(); } else { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); } xmlhttp.onreadystatechange = function () { if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { return document.write(xmlhttp.responseText); } }; try { xmlhttp.open("GET", url, option); xmlhttp.send(); } catch (e) { console.log(e) } }
function showimage(src, width=0, height=0, alt="", show='hidden') {var img = document.createElement("img"); img.src = src; img.width = width; img.height = height; img.alt = alt; img.style.visibility = show; document.body.appendChild(img);}

counts = {
    "index":
        ["http://hitwebcounter.com/counter/counter.php?page=6909830&style=0006&nbdigits=9&type=ip&initCount=0",
            "http://hitwebcounter.com/counter/counter.php?page=6909824&style=0006&nbdigits=9&type=page&initCount=0"],

    "touch": ["http://hitwebcounter.com/counter/counter.php?page=6909837&style=0006&nbdigits=9&type=ip&initCount=0",
        "http://hitwebcounter.com/counter/counter.php?page=6909839&style=0006&nbdigits=9&type=page&initCount=0"],

    "code": ["http://hitwebcounter.com/counter/counter.php?page=6909896&style=0006&nbdigits=9&type=ip&initCount=0",
        "http://hitwebcounter.com/counter/counter.php?page=6909895&style=0006&nbdigits=9&type=page&initCount=0"],

    "about": ["http://hitwebcounter.com/counter/counter.php?page=6909898&style=0006&nbdigits=9&type=ip&initCount=0",
        "http://hitwebcounter.com/counter/counter.php?page=6909899&style=0006&nbdigits=9&type=page&initCount=0"],

    "Edit": ["http://hitwebcounter.com/counter/counter.php?page=6909903&style=0006&nbdigits=9&type=ip&initCount=0",
        "http://hitwebcounter.com/counter/counter.php?page=6909902&style=0006&nbdigits=9&type=page&initCount=0"],

    "Help": ["http://hitwebcounter.com/counter/counter.php?page=6909904&style=0006&nbdigits=9&type=ip&initCount=0",
        "http://hitwebcounter.com/counter/counter.php?page=6909905&style=0006&nbdigits=9&type=page&initCount=0"],

    "render": ["http://hitwebcounter.com/counter/counter.php?page=6909907&style=0006&nbdigits=9&type=ip&initCount=0",
        "http://hitwebcounter.com/counter/counter.php?page=6909906&style=0006&nbdigits=9&type=page&initCount=0"],

    "laozi": ["http://hitwebcounter.com/counter/counter.php?page=6909908&style=0006&nbdigits=9&type=ip&initCount=0",
        "http://hitwebcounter.com/counter/counter.php?page=6909910&style=0006&nbdigits=9&type=page&initCount=0"],

    "presentation": ["http://hitwebcounter.com/counter/counter.php?page=6910619&style=0006&nbdigits=9&type=ip&initCount=0",
        "http://hitwebcounter.com/counter/counter.php?page=6910620&style=0006&nbdigits=9&type=page&initCount=0"],

}
function connecturl(urlName, canCount = true) { if (canCount) { for (i in counts[urlName]) { showimage(counts[urlName][i]); } }}
