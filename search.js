function loadPreferences (){
 
    if(sessionStorage.getItem('isDisabled')=='Yes') document.getElementById("Accessible").checked = true;
    if(sessionStorage.getItem('prefersTesting')=='Yes') document.getElementById("Test-Based").checked = true;
        else if (sessionStorage.getItem('prefersTesting')=='No')document.getElementById("Project-Based").checked = true;
    if(sessionStorage.getItem('prefersFlexibleAttendance')=='Yes') document.getElementById("Lenient-Attendance").checked = true;

filterUpdate();
}

function filterUpdate(){

//Get array of active filters
let filterListPanelTemp = document.getElementById("filterListPanel");
let checkBoxes = document.getElementsByClassName("checkBox");
let filterArray = [];
for(let i = 0; i < checkBoxes.length; i++){
    if(checkBoxes[i].checked == true) filterArray.push(checkBoxes[i].name);
}

//Hide/Show Qualifying Professors
let qualifiedProfessors = [];
const profArray = getCurrentProfessors();

for(let i = 0; i < profArray.length; i++){
    let profTagList = profArray[i].getAttribute("data-tagList");
    let qualified = true;
    
    for(let j = 0; j < filterArray.length; j++){
        if(!(profTagList.includes(filterArray[j]))) qualified = false;
    }
    
    if(qualified) profArray[i].style.display = "block";
    else profArray[i].style.display = "none";

}
}

function expand(){
let filterList = document.getElementById("filterListPanel");

if(filterList.style.maxHeight=="100px"){

    filterList.style.maxHeight = "0px";
    
} else {
    filterList.style.maxHeight = "100px";
}
}


function renderTags(){

let professorList = document.getElementById("professorList");
let numberOfProfessors = professorList.getAttribute("data-numberOfProfessors");
let tagArea = document.getElementsByClassName("tagArea");

for(let i = 0; i < numberOfProfessors; i++){
    

    let tagArray = professorList.children[i].getAttribute("data-tagList").split(" ");
    
    for(j = 0; j < tagArray.length; j++){
        let tag = document.createElement("div");
        tag.setAttribute("class","tag");
        
        tag.innerText = tagArray[j];
        tagArea[i].append(tag);
        
    }
}
}

function sortList(){
const profArray = getCurrentProfessors();
let professorList = document.getElementById("professorList");
let numberOfProfessors = professorList.getAttribute("data-numberOfProfessors");
let input = document.getElementById("sortBy");

switch(input.value){

    case "FirstName":
        for(let i = 0; i < numberOfProfessors; i++){
            for(let j = 0; j < numberOfProfessors; j++){
                if(profArray[i].children[0].children[0].innerText.split(" ")[0] < profArray[j].children[0].children[0].innerText.split(" ")[0]){
                    let temp = profArray[i]
                    profArray[i] = profArray[j];
                    profArray[j] = temp;
                }
            }
        }
        break;
    case "LastName":
        for(let i = 0; i < numberOfProfessors; i++){
            for(let j = 0; j < numberOfProfessors; j++){
                if(profArray[i].children[0].children[0].innerText.split(" ")[1] < profArray[j].children[0].children[0].innerText.split(" ")[1]){
                    let temp = profArray[i]
                    profArray[i] = profArray[j];
                    profArray[j] = temp;
                }
            }
        }
        break;
        
}

professorList.innerHTML = "";

for(let i = 0; i < numberOfProfessors; i++) {
    professorList.append(profArray[i]);
}
}

function getCurrentProfessors(){
const profArray = [];
let professorList = document.getElementById("professorList");
let numberOfProfessors = professorList.getAttribute("data-numberOfProfessors");

for(let i = 0; i < numberOfProfessors; i++){
    profArray.push(professorList.children[i]);
}
return profArray;
}