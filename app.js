import {conmumirCanciones} from "./servicioTopCanciones.js"
import {pintarCanciones} from "./pintarCanciones.js"

let canciones = await conmumirCanciones()

pintarCanciones(canciones)


