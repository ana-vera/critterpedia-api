/* 
async function searchId(id){

    fetch(uriBugInfo + id + "/")
    .then(function(result){
        return result.json();
    }).then(function(data){
        document.getElementById("error").className="hide";
        document.getElementById("mainCard").className="show";

        var image = document.getElementById("image");
        var name = document.getElementById("name");
        var months = document.getElementById("months");
        var time = document.getElementById("time");
        var location = document.getElementById("location");
        var rarity = document.getElementById("rarity");

        image.src = data.image_uri;
        name.innerText = data.name["name-USen"];

        

        if (data.availability["isAllYear"]){ months.innerText = "All year round" }
        else {months.innerText = convertMonths(data.availability["month-northern"]);}

        if (data.availability["isAllDay"]){time.innerText = "Any time of the day"}
        else {time.innerText = convertHours(data.availability["time"]);}
        
        location.innerText = data.availability["location"];
        rarity.innerText = data.availability["rarity"];
        
        var elem = document.getElementById(id);
        elem.parentNode.removeChild(elem);
        getBugIcon(data.id, data.name["name-USen"]);

    }).catch((error)=>{
      document.getElementById("error").className="show";
      document.getElementById("mainCard").className="hide";
    })
}

async function searchCritter(){
    var inputName = document.getElementById("inputName").value;
    inputName = inputName.replace(' ','_');
    var image = document.getElementById("image");
    var name = document.getElementById("name");
    var months = document.getElementById("months");
    var time = document.getElementById("time");
    var location = document.getElementById("location");
    var rarity = document.getElementById("rarity");

    fetch(uriBugInfo + inputName + "/")
    .then(function(result){
        return result.json();
    }).then(function(data){
        document.getElementById("error").className="hide";
        document.getElementById("mainCard").className="show";

        image.src = data.image_uri;
        name.innerText = data.name["name-USen"];

        if (data.availability["isAllYear"]){ months.innerText = "All year round" }
        else {months.innerText = convertMonths(data.availability["month-northern"]);}

        if (data.availability["isAllDay"]){time.innerText = "Any time of the day"}
        else {time.innerText = convertHours(data.availability["time"]);}
        
        location.innerText = data.availability["location"];
        rarity.innerText = data.availability["rarity"];
        
        getBugIcon(data.id, data.name["name-USen"]);

    }).catch((error)=>{
      document.getElementById("error").className="show";
      document.getElementById("mainCard").className="hide";
    })
} */
