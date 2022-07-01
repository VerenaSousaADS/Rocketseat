const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

// mudei o const map : 
// const map = L.map('mapid',options).setView([-27.209325,-49.6448719], 15)

const map = L.map('mapid',options).setView([-27.209325,-49.6448719], 15);

// const map = L.map('mapid').setView([-27.2109325,-49.6448719], 15);

// const map = L.map('mapid', options).setView([-27.2109325,-49.6448719], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map)


//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popAnchor: [170, 2]
})

//create and add marker
L
.marker([-27.2109325,-49.6448719], { icon })
.addTo(map)


/* image gallery */

function selectImage(event) {
    const button = event.currentTarget
    
    //remover tadas as classes .active 
    // forEach : para cada botão remover a classe ativa
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    // função para remover a classe ativa
    function removeActiveClass(button) {
        button.classList.remove('active');
    }

    // Selecionar a imagen clicada

    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')

    // atualizar o container de image

    imageContainer.src = image.src

    // adicionar a classe .active (botão da linha 40 e não a da 48 e 49)
    button.classList.add('active')
}

