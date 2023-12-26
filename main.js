//Java Script for shortNotes Function

const shortNote = document.getElementById("content")
const addShortNote = shortNote.querySelector(".new-shortnote")

//For each loop to iterate through notes in the array, creating an HTML elements for each
getShortNotes().forEach(note => {
    const noteElement = createShortNote(note.id, note.content);
    shortNote.insertBefore(noteElement, addShortNote.nextSibling);
})

//Event Listener to call addNote() function when addnote button is clicked.
addShortNote.addEventListener("click", () => addNote());

//function that parses notes retrieved from the local storage
function getShortNotes(){
    return JSON.parse(localStorage.getItem("shortnote") || "[]");
}

//function that automatically saves short notesto local storage
function saveShortNotes(notes){
    localStorage.setItem("shortnote", JSON.stringify(notes));
}

//Function that creates short note AND its HTML component to the front-end
function createShortNote(id, content){
    const element = document.createElement("textarea");

    element.classList.add("note");
    element.value = content;
    element.placeholder = "Write your shortNote here...";

    element.addEventListener("change", () => {
        updateNote(id, element.value);
    })
    
    element.addEventListener("dblclick", () => {
        const doDelete = confirm("Are you sure you want to delete this note?");

        if (doDelete){
            deleteNote(id, element)
        }
    })

    return element;
}

//Function that creates short note by giving it a specific ID and its corressponding content
function addNote(){
    const notes = getShortNotes();
    const noteObject = {
        id: Math.floor(Math.random() * 100000),
        content: ""
    };

    const noteElement = createShortNote(noteObject.id, noteObject.content)
    shortNote.insertBefore(noteElement, addShortNote.nextSibling);

    notes.push(noteObject);
    saveShortNotes(notes);
}

//function that checks the new update on the current note html
function updateNote(id, newContent){
    const notes = getShortNotes();
    const targetNote = notes.filter(note => note.id == id)[0];

    targetNote.content = newContent;

    saveShortNotes(notes);
}

//function that handles deletion of notes 
function deleteNote(id, element){
    const notes = getShortNotes().filter(note => note.id != id);

    saveShortNotes(notes);
    shortNote.removeChild(element);
}


//JavaScript for Night Mode Function

const colorChange = document.getElementById("colorChange");
const buttonOptions = document.getElementById("nightMode");
const selectedClassName = "current";
const buttonColors = ["#f4f4f4", "#242424"];


chrome.storage.sync.get("color", ({color}) => {
    colorChange.style.backgroundColor = color;
});


//function that deals with the change of background color as a button is selected
function handleButtonClick(e){
    const current = e.target.parentElement.querySelector(`.${selectedClassName}`);
    if (current && current !== e.target){
        current.classList.remove(selectedClassName);
    }

    const color = e.target.dataset.color;
    e.target.classList.add(selectedClassName);
    chrome.storage.sync.set({ color });
    colorChange.style.backgroundColor = color;
}

//function that creates button options (white, and black) to select color change from.
function constructOptions(buttonColors) {
    chrome.storage.sync.get("color", (data) => {
        const currentColor = data.color;

        for (let buttonColor of buttonColors){
            const button = document.createElement("button");
            button.dataset.color = buttonColor;
            button.style.backgroundColor = buttonColor;

            if (buttonColor === currentColor){
                button.classList.add(selectedClassName);
            }

            button.addEventListener("click", handleButtonClick);
            buttonOptions.appendChild(button);
        }
    })
}

constructOptions(buttonColors);
