let aux= document.getElementById("personaje")

function getcharacter(){
    fetch ("https://rickandmortyapi.com/api/character/"+ aux.value)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.name)
        console.log(data.status)
        console.log(data.species)
        console.log(data.location)
        console.log(data.image)

        let imagen=
        `<img src= "${data.image}">
        `
        let foto = document.getElementById("foto")
        foto.innerHTML=imagen

        let nombre=data.name
        let nom = document.getElementById("nomb")
        nom.innerHTML=nombre

        let estatus=data.status
        let sta = document.getElementById("stat")
        sta.innerHTML=estatus

        let especie=data.species
        let sp = document.getElementById("spe")
        sp.innerHTML=especie

        let locacion=data.location.name
        let ltn = document.getElementById("loc")
        ltn.innerHTML=locacion
       


    })
}



