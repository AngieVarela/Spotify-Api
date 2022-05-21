
//DEFINIR CONSTANTES
import { generarToken } from "./servicioGenerarToken.js";

//2. Armo la petición, ¿que voy a hacer?
export const URI_TOP_CANCIONES ='https://api.spotify.com/v1/artists/28gNT5KBp7IjEOQoevXf9N/top-tracks?market=US'

//1.1 uri del servicio que genera tokens
export const URI_GENERAR_TOKEN='https://accounts.spotify.com/api/token'

//NOTA: DATOS DE ENVIO (POST)
const DATO1="client_id=ca73dd69551e488aa81e484470f5bc46"
const DATO2="client_secret=f2fd8c3050fa4ad6a91b08b759875bc0"
const DATO3="grant_type=client_credentials"

const DATOS_PETICION=`${DATO1}&${DATO2}&${DATO3}`

export const PETICION_GENERAR_TOKEN={
    method:"POST",
    headers:{"Content-type":"application/x-www-form-urlencoded"},
    body:DATOS_PETICION
}

//GENERAR TOKEN DINAMICAMENTE

let token=await generarToken()
const TOKEN=token.token_type+" "+token.access_token;

export const PETICION_TOP_CANCIONES={
    metodo: "GET",
    headers: {Authorization:TOKEN}
    
}


