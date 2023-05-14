function saveData(item){
			
    if (!document.getElementById("nameInput").value == " ") sessionStorage.setItem('name',document.getElementById("nameInput").value);
    
    if(!(document.getElementById("disabilitySelection").value == "Select")) sessionStorage.setItem('isDisabled',document.getElementById("disabilitySelection").value);
    
    if(!(document.getElementById("testingSelection").value == "Select")) sessionStorage.setItem('prefersTesting',document.getElementById("testingSelection").value);
    
    if(!(document.getElementById("attendanceSelection").value == "Select")) sessionStorage.setItem('prefersFlexibleAttendance',document.getElementById("attendanceSelection").value);
}

function clearData (){
    sessionStorage.clear();
    location.reload();
}