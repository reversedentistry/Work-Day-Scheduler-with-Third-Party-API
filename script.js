var currentDay = document.querySelector("#currentDay"); 
var currentTime = moment().format()
var startHour = moment("9AM, h:mm");

const scheduleContainer = $(".container");
const workDayHours = 9; 

currentDay.textContent = moment().format("dddd, MMMM Do, YYYY"); 

function currentSchedule () {
    for (let i = 0; i < workDayHours; i++) {
    
    let timeBlock = $("<div>");
    timeBlock.addClass("time-block", "row"); 

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
}
}


// <i class="fa-solid fa-floppy-disk"></i>

