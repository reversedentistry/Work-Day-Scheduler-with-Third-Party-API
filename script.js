var currentDay = document.querySelector("#currentDay"); 
var currentHour = moment();
console.log(currentHour.format("h"));

const scheduleContainer = $(".container");


currentDay.textContent = moment().format("dddd, MMMM Do, YYYY");

function init() {
    createSchedule(); 
        
    
};

function createSchedule () {
    let startHour = moment().set("hour", "9");
    const workDayHours = 9; 
    for (let i = 0; i < workDayHours; i++) {
    
    let timeBlock = $("<div>");
    timeBlock.addClass("row"); 

    let hour = $("<label>"); 
    hour.text(startHour.format("h a")); 
    hour.attr("for", "block-desc"); 
    hour.addClass("hour col-2 col-md-1"); 

    let textArea = $("<textarea>"); 
    textArea.attr("id", "block-desc"); 
    textArea.attr("name", "block-desc"); 
    textArea.addClass("col-8 col-md-10 col-lg-9")

    let saveButton = $("<button>"); 
    saveButton.addClass("saveBtn col-2 col-md-1")
    saveButton.attr("id", "eventSave");
 // can I add a fontawesome attribute/class the same way???    
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
}

init(); 

$("button").on("click", function (event) {
    event.preventDefault(); 
    let btnClicked = $(event.target); 
    let eventInput = $("textarea").val(); 
    localStorage.setItem("plans", eventInput); 
    
})



