const xhr = new XMLHttpRequest(),
    url = "animals.json";
let output = "";

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const menuItems = JSON.parse(xhr.responseText);
        // menuItems now holds the objects parsed from the JSON file. You will need to iterate over this and build a template html
        for (let animal of menuItems) {
            if (animal.name == localStorage.getItem('animal')) {
                output += build(animal);
            }
        }
        document.getElementById('listDetails').innerHTML = output;
    }
};
xhr.open("GET", url, true);
xhr.send();

//build details page
function build(animal) {
    return `
        <div class="details_header">
            <h2>${animal.name}</h2>
        </div>

        <div class="details_box">
            <div class="details_card">
                <div class="box pic" style="background-image: url(./assets/img/${animal.img}.jpg)">
                    &nbsp;
                </div>
            </div>
        </div>

        <div class="details_box">
            <div class="details_card">
                <div class="pair">
                <p class="details">${animal.scientific_name}</p>
                    <p class="title">scientific name</p>
                </div>
                <br>
                <div class="pair">
                <p class="details">${animal.location}</p>
                    <p class="title">location</p>
                </div>
                <br>
                <div class="pair">
                <p class="details">${animal.population}</p>
                    <p class="title">population</p>
                </div>
                <br>
                <div class="pair">
                <p class="details">${animal.status}</p>
                    <p class="title">status</p>
                </div>
            </div>
        </div>
    `
}