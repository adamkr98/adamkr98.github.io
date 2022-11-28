










//----------------------------------------------------------------------




var message = "Acces Denied";

function rtclickcheck(keyp){ if (navigator.appName == "Netscape" && keyp.which == 3){ alert(message); return false; }

if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) { alert(message); return false; } }

document.onmousedown = rtclickcheck;









let main = document.getElementById("main");
let forum = document.getElementById("forum");
let education = document.getElementById("education");


let greenbackground = document.getElementById("green-background-container");
let logodef = document.getElementById("logodef");
let greenbck = document.getElementById("green-background-container");



document.getElementById("green-background-container").style.position = "right:300px";


window.addEventListener("scroll", function() {showFunction()});

    function showFunction() {
        if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 550) {
            
            document.getElementById("green-background-container").style.transform = "translateX(-1200px)";
            document.getElementById("green-background-container").style.display = "block";
            

            setTimeout(show, 3000);

        } else {
            document.getElementById("green-background-container").style.transition = "2s";
            document.getElementById("green-background").style.transform = "translateX(900px)";
            document.getElementById("green-background-container").style.display = "none";
            document.getElementByClass("image").style.display = "none";
            

            

        }
    }


main.style.opacity = "0";
forum.style.opacity = "0";
education.style.opacity = "0";





setTimeout(show, 3000);



function show () {


    main.style.opacity = "1";
    main.textContent = "Main";
    
    forum.style.opacity = "1";
    forum.textContent = "Forum";

    education.style.opacity = "1";
    education.textContent = "Education";

    
};




let btnwhat = document.getElementById("button");
let page1 = document.getElementById("gr ");

btnwhat.addEventListener("click", function () {
    page1.style.translateY = ("1000px");
 })









// let btndef = document.getElementById("button-definition");
// let page1 = document.getElementByClass("");


// btndef.addEventListener("click", function ()  {
//     page1.style.textContent = "none";
// })



//--------------------------------------------------------------------


// main.innerHtml = "<style>transition:1s; transitionDuration:2s; transitionDelay:0,5s;</style>"
//      forum.innerHtml = "<style>transition:1s; transitionDuration:2s; transitionDelay:0,5s;</style>"
//      education.innerHtml = "<style>transition:1s; transitionDuration:2s; transitionDelay:0,5s;</style>"
     






















// let forum = document.getElementById("forum");
// let education = document.getElementById("education");

// document.main.innerHTML = "<style>display:none;</style>"


// main.style.display = "none"

// document.getElementById("main:hover").onclick = function () {
//     main:hover.style.display = "none";
// }


// window.onload = () => {
//     window.document.getElementById("main").style.display = "none"
// }



// window.main.onload = () => {
//     window.document.getElementById("main").style.display = "none"
// }