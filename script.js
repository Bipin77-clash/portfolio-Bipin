/* ==============================
   CONTACT FORM VALIDATION
   (Works with your exact HTML)
================================ */

const contactForm = document.querySelector("form"); 
const messageDiv = document.createElement("div");

contactForm.appendChild(messageDiv);

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        messageDiv.textContent = "❌ Please fill all required fields.";
        messageDiv.style.color = "red";
        messageDiv.style.marginTop = "10px";
    } else {
        messageDiv.textContent = "✅ Thank you! Your message has been sent.";
        messageDiv.style.color = "green";
        messageDiv.style.marginTop = "10px";
        contactForm.reset();
    }
});
