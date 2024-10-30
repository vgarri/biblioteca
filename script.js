// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSPmJHBGNkRvRltzeq9vQ80HutfApRQwc",
  authDomain: "biblioteca-ef890.firebaseapp.com",
  projectId: "biblioteca-ef890",
  storageBucket: "biblioteca-ef890.appspot.com",
  messagingSenderId: "1039123226964",
  appId: "1:1039123226964:web:7ec68b9ea1ef3bcd7aa8c1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const apiKey = "6NXaahrsbBQTQ7wlGBAOKlrNMnYoacxd";


//Create
const createUser = (user) => {
    db.collection("users")
      .add(user)
      .then((docRef) => {
        console.log("User written with ID: ", docRef.id)
        readAll();
      })
      .catch((error) => console.error("Error adding user: ", error));
  };

  
  const signUpUser = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        console.log(`se ha registrado ${user.email} ID:${user.uid}`)
        alert(`User ${user.email} successfully registered`)
        // ...
        // Saves user in firestore
        createUser({
          id: user.uid,
          email: user.email,
          message: "hola!"
        });
  
      })
      .catch((error) => {
        console.log("Error en el sistema" + error.message, "Error: " + error.code);
      });
  };
  
  if(document.getElementById("form1")){

  
  document.getElementById("form1").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = event.target.elements.email.value;
    let pass = event.target.elements.pass.value;
    let pass2 = event.target.elements.pass2.value;
  
    pass === pass2 ? signUpUser(email, pass) : alert("error password");
  })
}
  
  
  const signInUser = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        console.log(`se ha logado ${user.email} ID:${user.uid}`)
        alert(`User ${user.email} successfully logged in.`)
        console.log("USER", user);
        
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
      });
  }
  
  const signOut = () => {
    let user = firebase.auth().currentUser;
  
    firebase.auth().signOut().then(() => {
      document.body.querySelector("#infoUser").innerHTML=""
      document.getElementById("botonera").style.display = "none";
      console.log("Sale del sistema: " + user.email)
      alert(`User: ${user.email} logged out successfully!`)
      location.replace('index.html')
    }).catch((error) => {
      console.log("hubo un error: " + error);
    });
  }
  
  if(document.getElementById("form2")){
  document.getElementById("form2").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = event.target.elements.email2.value;
    let pass = event.target.elements.pass3.value;
    let infoUser = document.body.querySelector("#infoUser")
    infoUser.innerHTML=`
        <h5>Logged in as:${email}</h5>
        `
        document.getElementById("botonera").style.display = "flex";
    signInUser(email, pass)
  })
}
    if(document.getElementById("salir")){
  document.getElementById("salir").addEventListener("click", signOut);
    signOut()}
  // Listener de usuario en el sistema
  // Controlar usuario logado
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(`Está en el sistema:${user.email} ${user.uid}`);
      document.getElementById("message").innerText = `Está en el sistema: ${user.uid}`;
    } else {
      console.log("no hay usuarios en el sistema");
      document.getElementById("message").innerText = `No hay usuarios en el sistema`;
    }
  });


//*******************************FETCH Y MANIPULACION DEL DOM*******************************
async function obtainData() {
    let response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${apiKey}`);
    let data = await response.json();

    return data.results;
}
obtainData()
// Función para cargar todas las listas en el DOM
async function createCardsDom() {
    document.getElementById("registerButtonContainer").style.display = "flex";
    let datos = await obtainData();
    let section = document.body.querySelector("#listsContainer")
    let header = document.body.querySelector("#buttonBackContainer")
    let titleContainer = document.body.querySelector("#titleContainer")

    datos.forEach(list => {

        section.innerHTML += `
        <article>
        <div class='tarjetalista'>
        <h3>${list.list_name}</h3>
        <p>Oldest: ${list.oldest_published_date}</p>
        <p>Newest: ${list.newest_published_date}</p>
        <p>Updated: ${list.updated.toLowerCase()}</p>
        <button class ='cargarLista' id="${list.list_name}">
        <span> READ MORE </span>
        </div>
        
        </button>
        </article>`
            ;

    })
    document.querySelectorAll(".cargarLista").forEach(button => {
        button.addEventListener("click", async function () {
            document.getElementById("registerButtonContainer").style.display = "none";
            let id = this.getAttribute("id");
            let datosLista = await fetch(`https://api.nytimes.com/svc/books/v3/lists/${id}.json?api-key=${apiKey}`)
            let data = await datosLista.json();

            titleContainer.innerHTML ="";
            section.innerHTML = ""//para limpiar el dom
            header.innerHTML = `
                <button class ='backButton' onclick="window.location.reload()">⬅️BACK TO LISTS</button>
                `

            //mismo procedimiento anterior:
            data.results.books.forEach(book => {
                
                
                section.innerHTML += `
                
                <div class='tarjetalibro'>
                <h3>#${book.rank} ${book.title}</h3>
                <div class="caratula">
                <img src=${book.book_image}></img>
                </div>
                <p>Weeks on the list: ${book.weeks_on_list}</p>
                <p>Description: ${book.description}</p>
                
                <button class ='comprarAmazon' onclick=window.open("${book.amazon_product_url}")>
                BUY NOW
                
                </button>
                `
                
            })
        

        })
    })
}
createCardsDom();
//