var currentDay = document.querySelector("#currentDay"); 
var currentHour = moment();
console.log(currentHour.format("h"));

const scheduleContainer = $(".container");

// Display the current day at the top of page
currentDay.textContent = moment().format("dddd, MMMM Do, YYYY");

// Define initialization function
function init() {
    createSchedule(); 
};

function createSchedule () {
    let startHour = moment().set("hour", "9");
    const workDayHours = 9; 

    // Create loop to self-generate rows 
    for (let i = 0; i < workDayHours; i++) {
    
    // Define div, hour/time slot, and text area for each individual row 
    let timeBlock = $("<div>");
    timeBlock.addClass("row time-block"); 

    let hour = $("<label>"); 
    hour.text(startHour.format("h a")); 
    hour.attr("for", "block-desc"); 
    hour.addClass("hour col-2 col-md-1"); 

    let textArea = $("<textarea>"); 
    textArea.attr("id", "block-desc"); 
    textArea.attr("name", "block-desc"); 

    // Assign data attribute specifying the date and its respective hour slot for each text area for local storage identification later 
    textArea.attr("data-time", startHour.format("H A, MMMM Do, YYYY")); 
    textArea.addClass("col-12 col-md-10 col-lg-9 description")
    
    // When starting/restarting page, checks if there are any corresponding events in local storage by using assigned data attribute as a key. 
    let eventInput = localStorage.getItem(startHour.format("H A, MMMM Do, YYYY")); 
    
    // If the corresponding key has a string attached to it, then populate the text area with it.
    if (eventInput != null) {
        textArea.text(eventInput); 
    }

    // Define a button element and respective icon element for creation
    let saveButton = $("<button>"); 
    saveButton.addClass("saveBtn col-2 col-md-1")
    
    let saveBtnIcon = $("<i>"); 
    saveBtnIcon.addClass("fa-solid fa-floppy-disk"); 

    saveButton.append(saveBtnIcon)

    // Append the hour name, text area, and save button into their respective divs, then append those to overall page container
    timeBlock.append(hour, textArea, saveButton); 
 
    scheduleContainer.append(timeBlock); 
    
    // Specify color for each row to indicate whether it is a past hour, a future hour, or the present hour. Uses Moment.js functions
    if (currentHour.isAfter(startHour, "hour")) {
         textArea.addClass("past");
    } else if (currentHour.isBefore(startHour, "hour")) {
         textArea.addClass("future"); 
    } else {
         textArea.addClass("present"); 
    }
    
    // With each loop, increase the hour by 1
    startHour.add(1, "h"); 

    console.log(startHour.format("h"));
}

// Creates a click event for each save button 
$(".saveBtn").on("click", function (event) {
    event.preventDefault(); 
    let btnClicked = $(event.target); 

    // Searches for the sibling textarea element within the parent div element
    let eventInput = btnClicked.siblings("textarea");  

    // When save button is clicked, locally stores the textarea's data attribute as the key and its text content as the corresponding string 
    localStorage.setItem(eventInput.attr("data-time"), eventInput.val().trim()); 
    
})
}

// Call initialization button 
init(); 

