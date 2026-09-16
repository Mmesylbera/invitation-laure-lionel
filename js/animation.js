const openingScreen =
    document.querySelector(".opening-screen");

const sealButton =
    document.getElementById("sealButton");
const invitationButton =
    document.getElementById("invitationButton");
const invitation = document.getElementById("invitation");
    
function openInvitation() {
    openingScreen.classList.add("is-opening");

    setTimeout(() => {
        invitation.style.display = "block";
        document.body.classList.add("invitation-open");
        openingScreen.style.display = "none";
        window.scrollTo(0, 0);
    }, 1000);
}   
   
sealButton.addEventListener(
    "click",
    openInvitation
);
invitationButton.addEventListener("click", openInvitation);
