const apiKey = "6NXaahrsbBQTQ7wlGBAOKlrNMnYoacxd";

//https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=6NXaahrsbBQTQ7wlGBAOKlrNMnYoacxd
//https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=6NXaahrsbBQTQ7wlGBAOKlrNMnYoacxd



async function obtainData() {
    let response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${apiKey}`);
    let data = await response.json();

    return data.results;
}
obtainData()
// Función para cargar todas las listas en el DOM
async function createCardsDom() {
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
            let id = this.getAttribute("id");
            let datosLista = await fetch(`https://api.nytimes.com/svc/books/v3/lists/${id}.json?api-key=${apiKey}`)
            let data = await datosLista.json();

            titleContainer.innerHTML ="";
            section.innerHTML = ""//para limpiar el dom
            header.innerHTML = `
                <button class ='backButton' onclick="window.location.reload()">Back to lists</button>
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









