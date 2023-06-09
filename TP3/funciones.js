function miFuncion(){
    fetch ("https://randomuser.me/api/")
    .then (response => response.json())
    .then (data => {
        var usuario = data.results[0];
        var nombreu = usuario.name.first;
        var apellidou = usuario.name.last;
        var fnacu = usuario.dob.date;
        var locu = usuario.location.city;
        var generou = usuario.gender;
        var ltu = usuario.location.coordinates.latitude;
        var lnu = usuario.location.coordinates.longitude;
        let fotou=
        `<img src= "${usuario.picture.large}">
        `
        document.getElementById("fotou").innerHTML = fotou;
        document.getElementById("nombreu").innerHTML= "Nombre: " + nombreu;
        document.getElementById("apellidou").innerHTML= "Apellido: " + apellidou;
        document.getElementById("fnacu").innerHTML= "Fecha de nacimiento: " + fnacu;
        document.getElementById("locu").innerHTML= "Localidad: " + locu;
        document.getElementById("generou").innerHTML= "Genero: " + generou;
        document.getElementById("ltu").innerHTML= "Latitud: " + ltu;
        document.getElementById("lnu").innerHTML= "Longitud: " + lnu;
        
    

    

    var numrandom = Math.floor(Math.random() * 826) + 1;
    console.log(numrandom);
    fetch ("https://rickandmortyapi.com/api/character/" + numrandom)
    .then (response => response.json())
    .then (data => {
        var nombrer = data.name;
        var estatusr = data.status;
        var especier = data.species;
        var locr = data.location.name;
        var generor= data.gender.toLowerCase();
        let fotor=
        `<img src= "${data.image}">
        `

        document.getElementById("fotor").innerHTML = fotor;
        document.getElementById("nombrer").innerHTML = "Nombre: " + nombrer;
        document.getElementById("estatusr").innerHTML = "Estatus: " + estatusr;
        document.getElementById("especier").innerHTML = "Especie: " + especier;
        document.getElementById("locr").innerHTML = "Localidad: " + locr;
        document.getElementById("generor").innerHTML= "Genero: " + generor;

        
        console.log(generou)
        console.log(generor)

        if (generor == generou){
            document.getElementById("match").innerHTML= "Match"
            document.getElementById("match").style.backgroundColor= "green"
        }
        else{
            document.getElementById("match").innerHTML= "No match"
            document.getElementById("match").style.backgroundColor= "red"
        }

    })
})
}
  
  