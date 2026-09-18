const confirmPresenceButton = document.getElementById("confirmPresenceButton");
const guestForm = document.getElementById("guestForm");
const sendConfirmation = document.getElementById("sendConfirmation");
const guestName = document.getElementById("guestName");
const confirmationMessage = document.getElementById("confirmationMessage");

if (confirmPresenceButton) {
    confirmPresenceButton.addEventListener("click", function () {
        guestForm.style.display = "block";
        confirmPresenceButton.style.display = "none";
        guestName.focus();
    });
}

const supabaseUrl = "https://obgqexygzpddwtvwtczl.supabase.co";
const supabaseKey = "sb_publishable_3ovM5TIOwmz-eG3CM2_vhQ_3vGwTuRY";
const supabaseClient = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);

if (sendConfirmation) {
    sendConfirmation.addEventListener("click", async function () {
        const nom = guestName.value.trim();
        if (nom === "") {
            confirmationMessage.textContent = "Veuillez entrer votre nom et prenom.";
            guestName.focus();
            return;
        }
        confirmationMessage.textContent = "Enregistrement en cours...";

        sendConfirmation.disabled = true;
        const { error } = await supabaseClient
            .from("confirmations")
            .insert([
                {
                    nom: nom,
                    presence: true
                }
            ]);

        if (error) {
            console.error("Erreur Supabase :", error);
            confirmationMessage.textContent = 
            "Une erreur est servenue. Veuillez réessayer.";
            sendConfirmation.disabled = false;
            return;
        }    
        confirmationMessage.textContent =
        "Merci ! Votre présence est bien confirmée.";

        guestName.value = "";
        sendConfirmation.disabled = false;
    });
}