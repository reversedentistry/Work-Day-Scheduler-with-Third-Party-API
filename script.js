var currentDay = document.querySelector("#currentDay"); 
var currentHour = moment("", "h");

// may need to move this to limit scope later^^^^
const scheduleContainer = $(".container");
const workDayHours = 9; 

currentDay.textContent = moment().format("dddd, MMMM Do, YYYY");

function init() {
    createSchedule(); 
    // display correct styling for past, current, and future hours
     
    
};

function createSchedule () {
    let startHour = moment("9", "h");
    for (let i = 0; i < workDayHours; i++) {
    
    let timeBlock = $("<div>");
    timeBlock.addClass("time-block row"); 

    let hour = $("<label>"); 
    hour.text(startHour.format("h a")); 
    hour.attr("for", "block-desc"); 
    hour.addClass("hour"); 

    let textArea = $("<textarea>"); 
    textArea.attr("id", "block-desc"); 
    textArea.attr("name", "block-desc"); 

    let saveButton = $("<button>"); 
    saveButton.addClass("saveBtn");
 // can I add a fontawesome attribute/class the same way???    
    let saveBtnIcon = $("<i>"); 
    saveBtnIcon.addClass("fa-solid fa-floppy-disk"); 

    
    saveBtnIcon.appendTo("saveButton");

    timeBlock.append(hour, textArea, saveButton); 
    scheduleContainer.append(timeBlock); 

    startHour.add(1, "h"); 

    if (currentHour.isAfter(startHour)) {
        textArea.addClass("past"); 
    } else if (currentHour.isBefore(startHour)) {
        textArea.addClass("future"); 
    } else if (currentHour.isSame(startHour)) {
        textArea.addClass("present") 
    }
    console.log(startHour.format("h"));
}
}


init(); 



// <i class="fa-solid fa-floppy-disk"></i>

