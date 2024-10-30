<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://www.sevillaemprendedora.org/wp-content/uploads/2024/03/The-Bridge.png" alt="Project logo"></a>
</p>

<h3 align="center">PROYECTO INDIVIDUAL FRONT-END. BIBLIOTECA NEW YORK TIMES</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="justify"> El objetivo de este proyecto ha sido el diseño y desarrollo de una web que consuma datos de la API de New York Times, así como la implementación de la posibilidad de interacción 
    <br> 
</p>

## 📝 ÍNDICE

- [Acerca de](#about)
- [Herramientas utilizadas](#built_using)
- [Detalles del procedimiento y ejemplos](#detalles)
- [Implementaciones futuras](#implementacionesf)

- [Autoría](#authors)


##  Acerca de <a name = "about"></a>
#### El proyecto diferencia 3 Fases:
<p align="justify">

- (Fase I): Peticiones asíncronas para obtener los datos de la API New York Times. Tratamiento de datos en respuesta y su representación en el DOM, mediante manipulación dinámica del mismo.

- (Fase II): Firebase Auth.

- (Fase III): Extra (Fase III - Firebase cloud Storage):




</p>



## ⛏️ Herramientas utilizadas <a name = "built_using"></a>


- Manipulación dinámica del DOM
- ES6
- Asincronía
- Gestión del proyecto en Github desde el principio. Uso de ramas. Despliegue en GitHub Pages
- Diseño responsive, mobile first, semántica HTML5 y CSS3
- Firebase

## Detalles del procedimiento <a name = "detalles"></a>
#### Paso previo: Registro en la API New York Times
Este paso ha consistido en la creación de una cuenta en la web para desarrolladores de New York Times, para obtener la clave de acceso a la API, ya que los endpoints la requieren por parámetro para poder autorizar la petición.
#### Paso 1: Uso de asincronía para obtención de los datos:

Se han realizado peticiones a la API y así recoger la información necesaria para tratar y representar los datos de la misma en el DOM de la web.

<a href="https://ibb.co/bLXMpDy"><img src="https://i.ibb.co/NpKdwbk/Captura-de-pantalla-2024-10-31-a-las-0-21-26.png" alt="Captura-de-pantalla-2024-10-31-a-las-0-21-26" border="0"></a>

Además se ha hecho un fetch adicional en otro endpoint con el id de la lista para obtener los datos de cada libro presente en los bestsellers:

<a href="https://ibb.co/6mPS8g5"><img src="https://i.ibb.co/ZV8rSWC/Captura-de-pantalla-2024-10-31-a-las-0-24-51.png" alt="Captura-de-pantalla-2024-10-31-a-las-0-24-51" border="0"></a>

#### Paso 2: Firebase Auth:
El siguiente paso ha sido crear la nueva app de firebase, linkearla al proyecto en el script.js y crear una nueva coleccion de usuarios para permitir el registro mediante email y contraseña (sign up), asi como una función de sign in y log out, con su correcto funcionamiento en Firebase, pudiendo comprobar que se almacenan los usuarios de la manera deseada:

<a href="https://ibb.co/2YYZVpn"><img src="https://i.ibb.co/JFF36SB/Captura-de-pantalla-2024-10-31-a-las-0-30-46.png" alt="Captura-de-pantalla-2024-10-31-a-las-0-30-46" border="0"></a>

<a href="https://ibb.co/8s0BPhN"><img src="https://i.ibb.co/h9yM2qL/Captura-de-pantalla-2024-10-31-a-las-0-31-01.png" alt="Captura-de-pantalla-2024-10-31-a-las-0-31-01" border="0"></a>

<a href="https://ibb.co/QK2mnP1"><img src="https://i.ibb.co/9rFY2bC/Captura-de-pantalla-2024-10-31-a-las-0-32-25.png" alt="Captura-de-pantalla-2024-10-31-a-las-0-32-25" border="0"></a>



##### Screenshots del despliegue:
<a href="https://ibb.co/Dtv4QHv"><img src="https://i.ibb.co/CzYBQ3Y/Captura-de-pantalla-2024-10-31-a-las-0-33-34.png" alt="Captura-de-pantalla-2024-10-31-a-las-0-33-34" border="0"></a><br />


<a href="https://ibb.co/G7m7mG3"><img src="https://i.ibb.co/mJpJpdF/Captura-de-pantalla-2024-10-31-a-las-0-34-28.png" alt="Captura-de-pantalla-2024-10-31-a-las-0-34-28" border="0"></a>

<a href="https://ibb.co/Z6DCNR6"><img src="https://i.ibb.co/hRzvCxR/Captura-de-pantalla-2024-10-31-a-las-0-35-16.png" alt="Captura-de-pantalla-2024-10-31-a-las-0-35-16" border="0"></a>





## Mejoras futuras: <a name = "implementacionesf"></a>

- Creación de un perfil de usuario en el que se pueda subir y almacenar una imagen de perfil, así como la lista de libros favoritos
- Archivos de variables de entorno .env y .env.example, para proteger la API key y la conexión a Firebase
- Mejora de la experiencia para el usuario
- Animación de carga de la información mediante un spinner o barra de progreso







## ✍️ Autoría <a name = "authors"></a>

- Víctor Garritano Pérez (FullStack Dev student en The Bridge)