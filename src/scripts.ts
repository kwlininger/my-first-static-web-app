const isLocal = 
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "localhost";

const apiBase = isLocal ?
    "http://localhost:7071/api" :
    "/api";   // Static Web Apps automatically routes this to Azure Functions

async function getData(url:string, destinationdiv: string) {
    var el = document.getElementById(destinationdiv);
    if (el !== null) {
        fetch(`${apiBase}/${url}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                //return response.json();
                return response.text();
            })
            .then(data => {
                el!.innerHTML = data;
            })
            .catch(error => {
                el!.innerHTML = `Failed to load data. ${error}`;
            });
    }
}