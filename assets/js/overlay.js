function closeOverlay() {
    document.getElementById('body').style.overflow = "auto";
    document.getElementById('overlay').style.display = "none";
    document.getElementById('overlayContent1').style.display = "none";
    document.getElementById('overlayContent2').style.display = "none";
    document.getElementById('overlayContent3').style.display = "none";
    document.getElementById('overlayContent4').style.display = "none";
    document.getElementById('overlayContent5').style.display = "none";
}

function openOverlay(display) {
    //window.scrollTo(0,0);
    document.getElementById('body').style.overflow = "hidden";
    document.getElementById('overlay').style.display = "initial";
    document.getElementById('overlayContent1').style.display = "none";
    document.getElementById('overlayContent2').style.display = "none";
    document.getElementById('overlayContent3').style.display = "none";
    document.getElementById('overlayContent4').style.display = "none";
    document.getElementById('overlayContent5').style.display = "none";
    document.getElementById('overlay').style.paddingTop = document.getElementById('body').scrollTop;
    if (display == 1) {
        document.getElementById('overlayTitle').textContent = 'About Me';
        document.getElementById('overlayContent1').style.display = "block";
    } else if (display == 2) {
        document.getElementById('overlayTitle').textContent = 'School';
        document.getElementById('overlayContent2').style.display = "block";
    } else if (display == 3) {
        document.getElementById('overlayTitle').textContent = 'University';
        document.getElementById('overlayContent3').style.display = "block";
    } else if (display == 4) {
        document.getElementById('overlayTitle').textContent = 'Misc Projects';
        document.getElementById('overlayContent4').style.display = "block";
    } else if (display == 5) {
        document.getElementById('overlayTitle').textContent = 'Gaming';
        document.getElementById('overlayContent5').style.display = "block";
    }
}