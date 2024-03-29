//create map

// const { orphanage } = require("../../src/pages");

//tipos de dados
//String "
//Number 01
//Boolean true or false
//Array []

const map = L.map("mapid").setView([-27.2109325, -49.6448719], 15);

//create and add tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', )
    .addTo(map);

//create icon 

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popAnchor: [170, 2]
})

function addMaker({id, name, lat, lng} = orphanage) {
    //create popup overlay

    const popup = L.popup({
        closeButton: false,
        className: "map-popup",
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}" <img src="/images/arrow-white.svg"></a>`)

    //create and add marker

    L.marker([lat,lng], {icon})
        .addTo(map)
        .bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span') 
orphanagesSpan.forEach((span) => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMaker(orphanage)
})