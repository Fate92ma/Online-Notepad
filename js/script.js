// Variables
let textarea = document.getElementById("text"),

    input = document.getElementById("input"),

    btn = document.getElementById("btn");

// Events
btn.addEventListener("click", chcekTxt);

/**************************************************************************************************/

// function to create Invisible download link
function download(file, text) {

    var element = document.createElement('a');

    element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(text));

    element.setAttribute('download', file);

    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

/**************************************************************************************************/

// function to download "text in textarea" as text file
function chcekTxt() {

    // if "textarea" is empty
    if (textarea.value.trim() == "") alert("Please Type Something In Content Area")

    // if "title" is empty and "textarea" isn't
    if (input.value.trim() == "" && textarea.value.trim() !== "") {

        // set file name "title" as "today's date"
        var filename = new Date().toDateString();

        download(filename, textarea.value);

    }

    // if "title" and "textarea" aren't empty
    if (input.value.trim() !== "" && textarea.value.trim() !== "") {

        download(input.value, textarea.value);

    }

};

/**************************************************************************************************/