const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');


Database.then(async db => {

    //inserir dados na tabela
    await saveOrphanage(db, {

        lat: "-27.2109325", 
        lng: "-49.6668719",
        name: "Lar de amor",
        description: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        images:[
            "./public/images/home.jpg"
        ].toString(),

        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",

        opening_hours: "Horário de visitas das 18h até 8h",

        open_on_weekends: "1"
    })

    //consultar dados da tabela

    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente um orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)
})