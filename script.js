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
    // Define starting variables such as what chosen time the work day starts, how long the day is
    let startHour = moment().set("hour", "9");
    const workDayHours = 9; 

    for (let i = 0; i < workDayHours; i++) {
    
    // Define div that holds each individual row 
    let timeBlock = $("<div>");
    timeBlock.addClass("row time-block"); 

    
    let hour = $("<label>"); 
    hour.text(startHour.format("h a")); 
    hour.attr("for", "block-desc"); 
    hour.addClass("hour col-2 col-md-1"); 

    let textArea = $("<textarea>"); 
    textArea.attr("id", "block-desc"); 
    textArea.attr("name", "block-desc"); 
    textArea.attr("data-time", startHour.format("H A dddd, MMMM Do, YYYY")); 
    textArea.addClass("col-12 col-md-10 col-lg-9 description")
    
    let eventInput = localStorage.getItem(startHour.format("H A dddd, MMMM Do, YYYY")); 
    if (eventInput != null) {
        textArea.text(eventInput); 
    }

    let saveButton = $("<button>"); 
    saveButton.addClass("saveBtn col-2 col-md-1")
    let saveBtnIcon = $("<i>"); 
    saveBtnIcon.addClass("fa-solid fa-floppy-disk"); 

    
    saveButton.append(saveBtnIcon)

    timeBlock.append(hour, textArea, saveButton); 
    scheduleContainer.append(timeBlock); 
    
    if (currentHour.isAfter(startHour, "hour")) {
         textArea.addClass("past");
    } else if (currentHour.isBefore(startHour, "hour")) {
         textArea.addClass("future"); 
    } else {
         textArea.addClass("present"); 
    }
    
    startHour.add(1, "h"); 

    console.log(startHour.format("h"));
}
$(".saveBtn").on("click", function (event) {
    event.preventDefault(); 
    let btnClicked = $(event.target); 
    let eventInput = btnClicked.siblings("textarea");  
    localStorage.setItem(eventInput.attr("data-time"), eventInput.val().trim()); 
    
})
}



init(); 

