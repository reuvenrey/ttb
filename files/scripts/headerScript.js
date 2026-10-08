const header = document.getElementById('header');
const footer = document.getElementById('footer');
const loader = document.getElementById('loader');

const pageHead = document.getElementById('pgHead');

pageHead.innerHTML += '<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">\
    <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Chelsea+Market&display=swap" rel="stylesheet">\
    <link rel="icon" type="image/icon" href="files/lowRes/favicon.ico">';

if(loader.innerHTML == ''){
    loader.innerHTML = "<div><img src='files/lowRes/LR-amaraAndLittleRay.png'></div><div><h2>Loading...</h2></div>";
}

header.innerHTML = '<div><img id="headerImg" src="files/fullRes/ttb_title.png" onclick="window.open(\'index.html\',\'_self\')"><div>\
<a href="people.html">Cast & Crew</a> <a href="contact.html">Get in Touch</a>\
<a href=""><img src=\'files/lowRes/instaIcon.png\'> \
</div></div>';

footer.innerHTML = '<img src="files/fullRes/ttb_title.png">\
    <div><a>Socials</a> | <a href="https://canva.link/uotlyu88xalgof9">Pitch Deck</a> | <a>Link 3</a></div>\
    <div style="color:dimgray"><p><b>(C) 2026 Painter Productions</b></p></div>';