// Import the functions you need from the SDKs you need

//initialeApp inicia la conexion con firebase.
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//importamos getFirestore que es para acceder al store. Es el servicio de almacenamiento que tiene dentro de la aplicacion de google. Aqui generaremos nuestra base de datos dinamica para consultar y subir las ordenes.


//la de firestore se utiliza para obtener una instancia del servicio de firestore.

import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration. Trabajamos con un objeto con toda la informacion de la cuenta. Aca se incluye la key personal de acceso a la base de datos.

const firebaseConfig = {
  apiKey: "AIzaSyBaBPyA3QBZcV73XwsgI0e97VGybdp16Zk",
  authDomain: "proyecto-coder-eec7f.firebaseapp.com",
  projectId: "proyecto-coder-eec7f",
  storageBucket: "proyecto-coder-eec7f.appspot.com",
  messagingSenderId: "1006220488853",
  appId: "1:1006220488853:web:62e1550696d4efe213ab9c"
};

// Initialize Firebase. Se pasa el objeto con la configuracion con nuestros datos personales, lo pasamos como argumento a esta funcion que inicializa la conexion. Esto devuelve una instancia de firebase.

const app = initializeApp(firebaseConfig);


//Creamos una referencia a nuestra base de datos por medio de getfirestore. Y la dejamos con la palabra reservada export para utilizarla en toda nuestra app. Para usarlo solo exportaremos esa referencia y ya lo tenemos disponible en toda nuestra app.


export const baseDeDatos = getFirestore(app);


