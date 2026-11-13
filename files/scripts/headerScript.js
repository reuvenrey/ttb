const header = document.getElementById('header');
const footer = document.getElementById('footer');
const loader = document.getElementById('loader');

const pageHead = document.getElementById('pgHead');

const headLinks = [
    "<a href=\"people\">Creative Team</a>"
    //"<a href=\"contribute\">How to Support</a>"
    //"<a href=\"\"><img src=\'files/lowRes/instaIcon.png\'>"
];

pageHead.innerHTML += '<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">\
    <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Chelsea+Market&family=Playwrite+FR+Trad:wght@100..400&display=swap" rel="stylesheet">\
    <link rel="icon" type="image/icon" href="files/lowRes/favicon.ico">';

if(loader.innerHTML == ''){
    loader.innerHTML = "<div><img src='files/lowRes/LR-amaraAndLittleRay.png'></div><div><h2>Loading...</h2></div>";
}

header.innerHTML = '<div><img id="headerImg" src="files/fullRes/ttb_title.png" onclick="window.open(\'index\',\'_self\')">\
<div id=\'headerLinks\'></div></div>';

footer.innerHTML = '<img src="files/fullRes/ttb_title.png">\
    <div><a href="mailto:tiesthatbindfeature@gmail.com">tiesthatbindfeature@gmail.com</a></div>\
    <div style="color:dimgray"><p><b>&copy; 2026 Jacob Painter Productions</b></p></div>';

// POPULATE HEADER LINKS
for(i=0;i<headLinks.length;i++){
    document.getElementById('headerLinks').innerHTML += headLinks[i];
}

// TEMPORARY DISCLAIMER
if(localStorage.getItem('allowViewing') == 'true'){
    console.log('Webpage disclaimer bypassed');
    localStorage.setItem('allowViewing', 'false');
}else if(localStorage.getItem('allowViewing') == 'alwaysTrue'){
    console.log('Webpage disclaimer bypassed');
    document.body.innerHTML += "<p style='text-align:center'><button onclick='lockWebsite()'>Lock Website</button></p>";
}else{
    document.body.innerHTML = "<div id='siteDisclaimer'>\
    <div id='loader'><div><img src='files/lowRes/LR-amaraAndLittleRay.png'></div><div><h2>Loading...</h2></div></div>\
    <section class='fV'><div style='text-align:center'><img class='titleImg smol' src='files/fullRes/ttb_title.png'><h3>Please enter password to continue</h3><input id='pEnter' placeholder='Password...' style='font-size:22px' onchange='bypassDisclaimer()'><button onclick='bypassDisclaimer()' style='font-size:22px'>Enter</button></div></div></section>\
    </div>";
    console.log("Sorry - this site is for exclusive members only!");
}

function bypassDisclaimer(){
    if(document.getElementById('pEnter').value == 'amara'){
        localStorage.setItem('allowViewing', 'true');
        window.location.reload();
    }else if(document.getElementById('pEnter').value == 'jacob'){
        localStorage.setItem('allowViewing', 'alwaysTrue');
        window.location.reload();
    }
}

function lockWebsite(){
    localStorage.setItem('allowViewing', 'false');
    window.location.reload();
}