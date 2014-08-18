document.getElementById("bio");
var moreBio = document.getElementById("more-bio");

var hiddenText = document.getElementById("more-bio-text");

 moreBio.addEventListener("click", expandBio, false);

function expandBio() {
    var hiddenText = document.getElementById("more-bio-text");
    hiddenText.style.display = "inline";
}

//new message

document.getElementById("SecondMessage");
var moreMessage = document.getElementById("message");

var hidding = document.getElementById("found");

 moreMessage.addEventListener("click", expandMessage, false);

function expandMessage() {
    var hidding = document.getElementById("found");
    hidding.style.display = "inline";
}

// these are the two buttons
var showButton = document.getElementById("modal-show-button");
var hideButton = document.getElementById("hideModal");


showButton.onclick = showModal;
hideButton.onclick = hideModal;

var modal = document.getElementById("my-modal");


function showModal() {
    modal.style.display = 'block';
}

function hideModal() {
    modal.style.display = 'none';
}

document.getElementById("law");
var chem = document.getElementById("hover");

var hiddenLaw = document.getElementById("alchemy");
 chem.addEventListener("mouseover", expandLaw, false);
 chem.addEventListener("mouseout", hideLaw, false);

function expandLaw() {
    var hiddenLaw = document.getElementById("alchemy");
    hiddenLaw.style.display = "block";
}

function hideLaw() {
     var hiddenLaw = document.getElementById("alchemy");
    hiddenLaw.style.display = 'none';
}
