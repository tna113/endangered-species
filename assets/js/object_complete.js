const xhr = new XMLHttpRequest(),
    url = "animals.json";
let output = "";

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const menuItems = JSON.parse(xhr.responseText);
        // menuItems now holds the objects parsed from the JSON file. You will need to iterate over this and build a template html
        for (let animal of menuItems) {
            output += templateTron(animal);
        }
        document.getElementById('listMenu').innerHTML = output;
    }
};
xhr.open("GET", url, true);
xhr.send();

// Good place to put that function that will generate the template html
function templateTron(animal) {
    //u r inside each animal object now
    return `
        <div class="card">
            <div class="text" onclick="details(this)">
                <h2>${animal.name}</h2>
                <img src="./assets/img/location.png" alt="" class="icon">
                <p>${animal.location}</p><br>
                <img src="./assets/img/paw.png" alt="" class="icon">
                <p>${animal.status}</p>
            </div>
        </div>`
}

//function for when the user clicks an animal card, puts animal name into local storage
function details(div) {
    if (localStorage.getItem('animal') != null) {
        localStorage.removeItem('animal');
    }
    localStorage.setItem('animal', div.getElementsByTagName('h2')[0].innerHTML);
    console.log('animal: ' + localStorage.getItem('animal'));

    //redirect to details page
    location.href = "./details.html";
}