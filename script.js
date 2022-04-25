const mainCourses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"];
const techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"];
const sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"];
const seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"];

const getRandom = (data) => data[Math.floor(Math.random() * data.length)];

const menu = `<yellow>-</yellow> ${getRandom(mainCourses)} ${getRandom(techniques)}<yellow>.<br>-</yellow> ${getRandom(sides)} ${getRandom(seasonings)}`

const principale = '<div class="inner-body"><div class="layer"></div><div class="navbar nav-landing"><a id="ai" onclick="clickedOnAi();"><h3>AI Menu</h3></a><a id="pictures" onclick="clickedOnPictures();"><h3>Pictures</h3></a><a id="chef" onclick="clickedOnChef();"><h3>Chef\'s Menu</h3></a></div><div class="middle-circle"><h1>Restaurant<yellow>.</yellow></h1></div><div class="cursor" id="cursor"></div></div>'
const aiMenu = `<div class="inner-body"><div class="second-layer"></div><div class="navbar"><a id="ai" onclick="clickedOnAi();"><h3>AI Menu</h3></a><a id="pictures" onclick="clickedOnPictures();"><h3>Pictures</h3></a><a id="chef" onclick="clickedOnChef();"><h3>Chef's Menu</h3></a></div><div class="middle-square"><h3>Here's the AI Menu<yellow>.</yellow></h3><p class="small-text">Completed Just for <yellow class="underline">you</yellow> by our AI and cooked with love by the <yellow class="underline">Chef</yellow>.</p><p class="menu">${menu}<yellow>.</yellow></p></div><div class="cursor" id="cursor"></div></div>`
const chefMenu = `<div class="inner-body"><div class="third-layer"></div><div class="navbar"><a id="ai" onclick="clickedOnAi();"><h3>AI Menu</h3></a><a id="pictures" onclick="clickedOnPictures();"><h3>Pictures</h3></a><a id="chef" onclick="clickedOnChef();"><h3>Chef's menu</h3></a></div><div class="middle-square"><h3>The Chef's Menu<yellow>.</yellow></h3><p class="small-text">The Chef looked just for <yellow class="underline">you</yellow> inside his old grandma reciepe book and cook something new each week <yellow>!</yellow></p><p class="menu">${menu}</p></div><div class="cursor" id="cursor"></div>`
const pictures = `<div class="inner-body"><div class="navbar"><a id="ai" onclick="clickedOnAi();"><h3>AI Menu</h3></a><a id="pictures" onclick="clickedOnPictures();"><h3>Pictures</h3></a><a id="chef" onclick="clickedOnChef();"><h3>Chef's Menu</h3></a></div><div class="middle-triangle"><svg height="500" width="500"><polygon points="250,60 100,400 400,400" class="triangle" />Sorry, your browser does not support inline SVG.</svg></div><div class="picture-list"><img id="img1" draggable="true" ondragover="dragElem(event, 'img1');" src="./images/black_and_yellow_plate.jpg"><img id="img2" draggable="true" ondragover="dragElem(event, 'img2');" src="./images/bread_and_tomatoe.jpg"><img id="img3" draggable="true" ondragover="dragElem(event, 'img3');" src="./images/bread_and_avocado.jpg"><img id="img4" ondragover="dragElem(event, 'img4');" draggable="true" src="./images/eggs.jpg"></div><div class="cursor" id="cursor"></div></div>`
const popup = `<div class="popup"><div class="popup-message"><h1>Please Stay !!! :) we <blue class="underline">love</blue> you and want you to <blue class="underline">Enjoy</blue> our Food !! :D<br><a onclick="closePopup();">Close</a></h1></div></div>`

function activeElements() {
        let cursor = document.getElementById('cursor')
        if (cursor) { window.addEventListener("mousemove", function(e){
                cursor.style.top = `${e.clientY - 40}px`
                cursor.style.left = `${e.clientX - 40}px`
        })}

        let circle = document.getElementsByClassName('middle-circle')[0]
        if (circle) {window.addEventListener("mousemove", function(e){
                circle.style.transform = `translate(${2 - e.x / 100}%,${2 - e.y / 100}%)`
        })}

        document.getElementsByTagName('body')[0].addEventListener("mouseleave", function(e){
                if (!document.getElementsByClassName('popup')[0]) {
                        document.getElementsByTagName('body')[0].insertAdjacentHTML('afterbegin', popup)
                }
        })
}

const putPrincipal = () => {
        let innerBody = document.getElementsByClassName('inner-body')[0]
        if (innerBody) {
                innerBody.remove()
        }
        document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', principale)
        activeElements()
}

const putAi = () => {
        let innerBody = document.getElementsByClassName('inner-body')[0]
        if (innerBody) {
                innerBody.remove()
        }
        document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', aiMenu)
        activeElements()
}

const putChef = () => {
        let innerBody = document.getElementsByClassName('inner-body')[0]
        if (innerBody) {
                innerBody.remove()
        }
        document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', chefMenu)
        activeElements()
}

const putPictures = () => {
        let innerBody = document.getElementsByClassName('inner-body')[0]
        if (innerBody) {
                innerBody.remove()
        }
        document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', pictures)
        activeElements()
}

const closePopup = () => {
        document.getElementsByClassName('popup')[0].remove()
        activeElements()
}

const dragElem = (e, img) => {
        e.target.insertAdjacentHTML('beforeend', document.getElementById('img'))
}

const clickedOnAi = () => {
        putAi()
}

const clickedOnChef = () => {
        putChef()
}

const clickedOnPictures = () => {
        putPictures()
}

putPrincipal()