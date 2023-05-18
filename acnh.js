import { convertMonth } from './time-convert.js';

var uriBugInfo = 'https://acnhapi.com/v1/bugs/';
var uriBugIcon = 'http://acnhapi.com/v1/icons/bugs/';

//--- These are the HTML elements of the main card, where all info is displayed
var image = document.getElementById("image");
var name = document.getElementById("name");
var monthsHTML = document.getElementById("months");
var timeHTML = document.getElementById("time");
var location = document.getElementById("location");
var rarity = document.getElementById("rarity");
var insectInput = document.getElementById("insect").value;
var insectStr = insectInput.replaceAll(" ","_"); 


//--- Detects clicks on search button. Pulls up info card.
document.getElementById("search-button").addEventListener("click",getBug);

//--- Detects clicks on insect icons shown in search history. Pulls up corresponding info card.
document.getElementById("search-history").addEventListener('click', function ( event ) {
    let id = event.target.id;
    getBug(id);
} );


async function getBug(){
    insectInput = document.getElementById("insect").value;
    insectStr = insectInput.replaceAll(" ","_");
    //--- the variable 'insect' could be either a string e.g. "atlas_moth" or an id number e.g. 14
    const response = await fetch(uriBugInfo + insectStr + "/")
    const data = await response.json()

        //--- CSS classes are used to show the card with info, and hide the error msg when all is good
        document.getElementById("mainCard").className="show";
        document.getElementById("error").className="hide";
        
        //--- We populate each element of the card with the insect info
        console.log(data)
        image.src = data.image_uri;
        name.innerText = data.name["name-USen"];
        location.innerText = data.availability["location"];
        rarity.innerText = data.availability["rarity"];

        await getTime(monthsHTML, "month-northern", "isAllYear", "All year round");
        await getTime(timeHTML, "time", "isAllDay", "Any time of the day");
        

        //---Finally we add the insect icon to the search history :)
        getBugIcon(data.id, data.name["name-USen"]);

    }

//If it's all day or all year, display text to indicate so. Else, we need to display months/hrs in a user-friendly way
async function getTime(htmlElement, timeKey, booleanKey, displayText) {
    fetch(uriBugInfo + insectStr + "/")
    .then(result => {
        return result.json();
    }).then(data => {
        
        if (data.availability[booleanKey]){ htmlElement.innerText = displayText }
        else {
            if(timeKey==="month-northern"){
                htmlElement.innerText = convertMonth(data.availability[timeKey]);   }
            else 
            {   htmlElement.innerText = data.availability[timeKey];   }
        }
    }).catch(error=>{console.log(error);})
}

async function getBugIcon(id,name){
fetch(uriBugIcon+id+'/')
.then(result => {
    let searchHistory = document.getElementById("search-history");
    let previousHTML = searchHistory.innerHTML;
    searchHistory.innerHTML = `
        <div class="icon-card" id="${id}">
            <img src="${result.url}" alt="">
            <label for="${id}">${name}</label>
        </div>` + previousHTML;
});
} 