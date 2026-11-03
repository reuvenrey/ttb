const header = document.getElementById('header');
const footer = document.getElementById('footer');
const loader = document.getElementById('loader');

const pageHead = document.getElementById('pgHead');

const headLinks = [
    "<a href=\"people\">Cast & Crew</a>",
    "<a href=\"contribute\">How to Support</a>",
    "<a href=\"\"><img src=\'files/lowRes/instaIcon.png\'>"
]

pageHead.innerHTML += '<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">\
    <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Chelsea+Market&display=swap" rel="stylesheet">\
    <link rel="icon" type="image/icon" href="files/lowRes/favicon.ico">';

if(loader.innerHTML == ''){
    loader.innerHTML = "<div><img src='files/lowRes/LR-amaraAndLittleRay.png'></div><div><h2>Loading...</h2></div>";
}

header.innerHTML = '<div><img id="headerImg" src="files/fullRes/ttb_title.png" onclick="window.open(\'index.html\',\'_self\')">\
<div id=\'headerLinks\'></div></div>';

footer.innerHTML = '<img src="files/fullRes/ttb_title.png">\
    <div><a href="mailto:tiesthatbindfeature@gmail.com">tiesthatbindfeature@gmail.com</a> | <a href="https://canva.link/uotlyu88xalgof9">Pitch Deck</a> | <a>Instagram</a></div>\
    <div style="color:dimgray"><p><b>&copy; 2026 Jacob Painter Productions</b></p></div>';

// POPULATE HEADER LINKS
for(i=0;i<headLinks.length;i++){
    document.getElementById('headerLinks').innerHTML += headLinks[i];
}

// TEMPORARY DISCLAIMER
if(localStorage.getItem('allowViewing') == 'true'){
    console.log('Webpage disclaimer bypassed');
}else{
    document.body.innerHTML = "<div id='siteDisclaimer'>\
    <div id='loader'><div><img src='files/lowRes/LR-amaraAndLittleRay.png'></div><div><h2>Loading...</h2></div></div>\
    <section class='fV'><div style='text-align:center'><img class='titleImg smol' src='files/fullRes/ttb_title.png'><h1>This site is still in production...</h1><h3>Please check back soon!</h3><u style='cursor:pointer' onclick='bypassDisclaimer()'>Owner Login</u></div></section>\
    </div>";
    console.log("This website isn't ready for viewing!");
}

function bypassDisclaimer(){
    if(prompt('Please enter bypass password') == 'jacob'){
        localStorage.setItem('allowViewing', 'true');
        window.location.reload();
    }
}