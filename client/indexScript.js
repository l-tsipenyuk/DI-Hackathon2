const newsBtn = document.getElementById("newsBtn");
const emailInput = document.getElementById("emailInput")

newsBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const email = emailInput.value;

    try {

        const regResponse = await fetch(`http://localhost:3000/email/subscribe`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        if (regResponse.ok) {
            console.log("User subscribed.", regResponse);
            newsBtn.textContent = "Now you subscribed.";
            emailInput.type = "hidden";
        } else {
            console.error("User registration failed.");
        }
    } catch (err) {
        console.error("An error occurred:", err);
    }
});