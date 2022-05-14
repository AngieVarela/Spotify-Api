//PASOS PARA CONSUMIR UN API

//1.¿Para donde voy? (conocer URI del servicio o API a consumir)
const URI ='https://api.spotify.com/v1/artists/790FomKkXshlbRYZFtlgla/top-tracks?market=US' //pegamos el enlace de GET del rayito

//2. Armo la petición, ¿que voy a hacer?
const TOKEN="Bearer BQDY_ChO3yDdczfr91LCP5FfCCLswCxPxqzbV-Q28jb6cTcV7ZAlqrKfl8Pw4EoKJT9i6HaGwaO8GL9whZK5cxtpmZbqRRL6XXiXN6-XHJaYTtlbRDnvFmwQHIpeGwHZaN2YKSm2lrwKhOMGCGJIzJiV5AzAnCY" 
const PETICION={
    metodo: "GET",
    headers: {Authorization:TOKEN}
}

//3. CONSUMNIR EL API - IR AL SERVIDOR A PEDIR LA RESPUESTA)
fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json()) //garantizo formato json
})
.then(function(respuesta){
    pintarCanciones(respuesta) //hago lo que quiera con la respuesta
})
.catch(function(respuesta){
    console.log(respuesta) //muestro el fallo si no se pudo consumir el API 
})


//Peticion para pintar la info que llega del API 
function pintarCanciones(canciones){
    
    let fila = document.getElementById("fila")

    //Recorro el arreglo de canciones
    canciones.tracks.forEach(function(cancion){
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //Crear una columna para cada canción
        let columna=document.createElement("div")
        columna.classList.add("col")

        //Creo la tarjeta
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100")

        //Creo la foto
        let foto=document.createElement("img")
        foto.src=cancion.album.images[0].url
        foto.classList.add("card-img-top")

        //Creo el audio
        let audio=document.createElement("audio")
        audio.src=cancion.preview_url
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")

        //Padres e hijos}
        tarjeta.appendChild(foto)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)


    })
}

