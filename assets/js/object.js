const xhr = new XMLHttpRequest();
const url = "data.json";
let output = "";

//load data with XHTMLRequest
xhr.addEventListener("load", function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(this.response);
        const Spots = JSON.parse(xhr.response);
        console.log(Spots);
        //this sets entire response into local Storage
        localStorage.setItem("Spot Objects", JSON.stringify(Spots));

        for (let spot of Spots) {
            output += surfTemplate(spot);
        }
        addEement(output);
    }

    function addEement(data_input) {
        //create new div element, append it to main
        const newDiv = document.createElement('div');
        newDiv.id = "display";
        newDiv.insertAdjacentHTML('afterbegin', data_input);
    }
})

// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         const menuItems = JSON.parse(xhr.responseText);
//         // menuItems now holds the objects parsed from the JSON file. You will need to iterate over this and build a template html
//     }
// };
xhr.open("GET", url, true);
xhr.send();

// Good place to put that function that will generate the template html