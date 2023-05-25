function getcharacter(){
    let ep1 = 0
    let ep2 = 0
    let aux1 = document.getElementById("personaje1")
    fetch ("https://rickandmortyapi.com/api/character/"+ aux1.value)
    .then(response => response.json())

    .then(data => {
        let nom1 = data.name
        let estat1 = data.status
        let esp1 = data.species
        let loc1 = data.location.name
        let img1= data.image

        let html1 = ` 
        <img src = "${img1}"> <br>
        Nombre: ${nom1} <br>
        Estatus: ${estat1} <br>
        Especie: ${esp1} <br>
        Locacion: ${loc1} <br>
        `
        document.getElementById("p1").innerHTML = html1;
        
        ep1 = data.episode.length
        document.getElementById("e1").innerHTML= ep1
        
    })
    let aux2 = document.getElementById("personaje2")
    fetch ("https://rickandmortyapi.com/api/character/"+ aux2.value)
    .then(response => response.json())

    .then(data => {
        let nom2 = data.name
        let estat2 = data.status
        let esp2 = data.species
        let loc2 = data.location.name
        let img2= data.image

        let html2 = ` 
        <img src = "${img2}"> <br>
        Nombre: ${nom2} <br>
        Estatus: ${estat2} <br>
        Especie: ${esp2} <br>
        Locacion: ${loc2} <br>
        `
        document.getElementById("p2").innerHTML = html2;

        ep2 = data.episode.length
        document.getElementById("e2").innerHTML= ep2

        if (ep1 > ep2) {
            document.getElementById("m1").innerHTML = "Este personaje aparece en más episodios"
        } else { if (ep1 < ep2) {
            document.getElementById("m2").innerHTML = "Este personaje aparece en más episodios"
        } else { if (ep1 == ep2) {
            document.getElementById("m1").innerHTML = "Ambos personajes aparecen la misma cantidad de veces"
        }}}
    })
}