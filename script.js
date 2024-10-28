const apiKey = "6NXaahrsbBQTQ7wlGBAOKlrNMnYoacxd";

//https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=6NXaahrsbBQTQ7wlGBAOKlrNMnYoacxd
//https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=6NXaahrsbBQTQ7wlGBAOKlrNMnYoacxd


async function obtainData() {
    let response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${apiKey}`);
    let data = await response.json();
    let resultados = data.results;
    let name;
    let dateOld;
    let dateLast;
    let dateUpdate;
    let link;
    resultados.forEach((resultado) => {
        name = resultado.list_name;
        dateOld = resultado.oldest_published_date;
        dateLast = resultado.newest_published_date;
        


    });


    

}

// const spinner = async () => {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve;
//     });
//   });   
// }

obtainData();

async function createCards(){
    



}
