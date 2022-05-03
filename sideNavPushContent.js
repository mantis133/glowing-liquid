/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */

let pageColor = getComputedStyle(document.getElementById("body")).backgroundColor;

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mainContent").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba("+0+","+0+","+0+",0.4)";
    document.getElementById("menu-container").style.opacity = "0";
  
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mainContent").style.marginLeft = "0";
    document.body.style.backgroundColor = pageColor;
    document.getElementById("menu-container").style.opacity = "1";

}
