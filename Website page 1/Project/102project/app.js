// alert('our Javascript is working!');
// console.log('Our JavaScript is working!');
// console.warn('A dire warning!');
// console.error('ERMAGERD AN ERROR!');


// $( "#more-bio" ).click(function() {
//   $( "#more-bio-text" ).toggle("slow", function() {

//   });
// });

function loadScript()
{
var script = document.createElement("script");
script.src = "http://maps.googleapis.com/maps/api/js?v=3key=AIzaSyCzypoymJvZWZGR-FNzh-H5hXE17uPJcmQ&sensor=false&callback=initialize"; document.body.appendChild(script);
}

window.onload = loadScript;
