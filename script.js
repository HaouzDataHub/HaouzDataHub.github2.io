// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Form Success Message
document.querySelector(".contact-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✔ تم إرسال رسالتك بنجاح! سيتم التواصل معك قريباً.");
});
