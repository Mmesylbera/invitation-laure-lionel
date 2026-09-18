document.addEventListener("DOMContentLoaded", function () {
      const invitationButton = document.getElementById("invitationButton");
      const invitation = document.getElementById("invitation");
      const openingScreen = document.querySelector(".opening-screen");

      if (invitationButton) {
        invitationButton.addEventListener("click", function () {

          if (openingScreen) {
              openingScreen.style.display = "none";
          }
        if (invitation) {
            invitation.style.display = "flex";
        }
    });

}


const confirmationButton = document.getElementById("confirmationButton");

if (confirmationButton) {
    confirmationButton.addEventListener("click", function () {
        window.location.href = "confirmation.html";
    });
}
});