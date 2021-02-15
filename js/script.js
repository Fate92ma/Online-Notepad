// Variables
let textarea = document.getElementById("textarea"),

    title = document.getElementById("title"),

    btn = document.getElementById("btn"),

    // check if there is "title" saved in localStorage
    titleInStorage = localStorage.getItem("title") ? JSON.parse(localStorage.getItem("title")) : [],

    // check if there is "content" saved in localStorage
    contentInStorage = localStorage.getItem("content") ? JSON.parse(localStorage.getItem("content")) : [],

    empty = document.getElementById("empty");

// Events
btn.addEventListener("click", chcekTxt);

title.addEventListener("keyup", callTitle);

textarea.addEventListener("keyup", callContent);

empty.addEventListener("click", clearBoxes);

/**************************************************************************************************/

// auto saving functions

// function to trigger "setStorage" to set "title"
function callTitle(name) {

    setStorage("title", title.value.trim())

}

// function to trigger "setStorage" to set "content"
function callContent(name) {

    setStorage("content", textarea.value.trim())

}

/**************************************************************************************************/

// function to save text in localStorage
function setStorage(name, value) {
    localStorage.setItem(name, JSON.stringify(value))
}

/**************************************************************************************************/

// function to check if there is "valueFound" saved localStorage
function checkStorage(valueFound, whereToWrite) {

    // if true      // display it as "whereToWrite" value
    if (valueFound) whereToWrite.value = valueFound

}

checkStorage(titleInStorage, title);

checkStorage(contentInStorage, textarea);

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
    if (title.value.trim() == "" && textarea.value.trim() !== "") {

        // set file name "title" as "today's date"
        var filename = new Date().toDateString();

        download(filename, textarea.value);

    }

    // if "title" and "textarea" aren't empty
    if (title.value.trim() !== "" && textarea.value.trim() !== "") {

        download(title.value, textarea.value);

    }

};

/**************************************************************************************************/

// function to remove item from localStorage and empty its value
function removeStorage(name, whereToEmpty) {

    localStorage.removeItem(name)

    whereToEmpty.value = ""

}

/**************************************************************************************************/

// function to trigger "removeStorage" to remove all items from localStorage
function clearBoxes() {

    removeStorage("title", title)

    removeStorage("content", textarea)

}

/**************************************************************************************************/