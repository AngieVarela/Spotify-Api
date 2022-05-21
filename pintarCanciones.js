 //PASOS PARA CONSUMIR UN API

 //Peticion para pintar la info que llega del API 
export function pintarCanciones(canciones){
    
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

