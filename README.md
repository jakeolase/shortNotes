# shortNotes
#### Video Demo:
#### Description: shortNotes is a simple yet powerful note application that allows notes to be kept through a browser extension
___
##### Introduction: shortNotes Extension

This application sparked in my mind as I was in the middle of an online meeting with my groupmates in school, where I kept on switching tabs to take note of what was said. I wondered, "*How great it would be if there are extension that allows me to take notes without switching tabs*" and so shortNotes was came to fruition, a smiple yet powerful note application that allows notes to be kept through a browser extension.

With shortNotes, users can take notes without switching tabs, as shortNotes is accessible through Google Chrome Extension. Users can  *add*, *edit* or *update*, and *delete* notes in an instant. shortNotes is also simple, minimalist if you may. It does not include several hundred buttons just to end up writing a 10-word note you need to remind yourself later. Notes are stored in a *stack-like* structure, wherein new note will be added at the very top and old notes are being pushed to buttom. However, users are free to delete notes regardless of their position in the stack.

The user can
- write a note directly through the extension
- save the note they have written and come back to it anytime they like
- update the note they have written
- delete the note they wish to delete
- switch to DayMode and NightMode, whichever fits their preference

##### The Learning Curve: Being Equipped with CS50 Knowledge
CS50 is the first time I was challenged to create a full-blown application that runs not just through a terminal but through the finger-tips of the users. It took me several weeks (even during CS50x Lecture weeks) to come up with this simple idea

Being a beginner, I am thinking of an application that is simple and easy for me to digest and create, while still being useful for me and the people who wanted to use my application. Being knowledgeable enough with HTML/CSS, I chose to create an application through that.

However, for HTML and CSS to be functional, there is one more language I need to master— JavaScript. Even though JavaScript has been tackled in the CS50x course, I am not confident with it as compared to C and Python. Thus, I looked for more materials outside CS50 such as freecodecamp, W3Schools, and several other youtube channels and blogs that helped me deeply understand JavaScript more.

I also had to study briefly the Google Chrome API, in order for me to efficiently run my extension in a Google Chrome browser. Thanks to the knowledge I've gained through the CS50 course, I was able to easily grasp the concepts of JS and Chrome API.

##### The Project: Its Process and Its Functions
For this project, I first thought about the features I want to add in my extension. I want a note extension that would allow me to save notes in one go, in a few clicks, with an auto-save feature. I don't want it to bombard with several hundred buttons that I wouldn't end up using anyways. 

So, I was able to come up with the necessary functions I need to create. This includes a function to add, save, delete, update the note. As a night mode enthusiast, I also included a night mode feature, just for a finishing touch.

But first, I have to make sure I comply with the requirements for a Google Chrome extension to run. This includes the **manifest.json** file and the **background.js** file, which includes the metadata of the extension.

***manifest.json***
This file includes the metadata of the extension, and the permission it asks the user from. This is one of the file that Google Chrome Extension requires, in order to give the users an information on what the extension is all about. This includes the name, description, version, manifest_version, actions, icons, and permission needed by the extension I've created.

***background.js***
This file is also one of the necessary (only required when using CHROME API) to run the extension. The function inside will be further discussed later, but for now, this javascript file incldes an addListener to change the background color of the extension pop up and then save the settings set to the chrome.storage.sync

***index.html***
The frame of the extension, index.html holds the entire html structure of the extension. It uses a UTF+8 for the character sets as well as imports the google font api link for "Raleway" font family. This also includes the containers for the header, the night mode toggle, the content, and the add button feature.

***main.css***
The css file referenced in index.html, main.css is responsible for the overall design choices for the extension. It also includes the hovering animation for each note created, as well as the redesign of the scroll bar to aesthetically fit with the extension. It also handles the css for the nightmode button toggles

***main.js***
The very heart of the project, main.js holds the entire logical functions needed for the notes to be added, updated, and deleted. It also hosts the function for the night mode toggle. 

The shortNotes Functions
- *getShortNotes()*
    gets the note stored in the localStorage of the user.

- *saveShortNotes()*
    function that automatically saves the short notes to the local storage

- *createShortNotes()*
    creates the shortnote and its corressponding HTML component with the css styling (.note). It also includes event listeners to correctly update that specific note when clicked, and to correctly delete that specific note when double clicked.

- *addNote()*
    creates a shortnote and gives it a corressponding ID number with the help of Math.random() function, and assigning that ID to the corressponding content, and pushing that content to the corresponding HTML component created during the createShortNote().

- *updateNote()*
    when called during the createShortNote() function, this will look through the localStorage until it found its corressponding ID and correctly updates the desired note. 

- *deleteNote()*
    correctly deletes the note by checking the corressponding note in the local storage compared to the selected note in HTML by the user.

The night mode functions
*This utilizes the chrome storage of Chrome API instead of LocalStorage

- *handleButtonClick()*
    removes the current background color and replaces it with the newly selected color
- *constructOptions()*
    For loop that creates buttons per color selected. This is the design choice instead of just adding a black and a white so that I can easily adjust the button toggles to different colors if I want to add more such as blue, green, yellow modes. But for now, only white and black are the given options.








