async function getData(url:string, destinationdiv: string) {
    var el = document.getElementById(destinationdiv);
    if (el !== null) {
        fetch(url)
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