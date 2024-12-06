const phoneInput = document.querySelector("#phone");
const iti = window.intlTelInput(phoneInput, {
    initialCountry: "in", // Default to India, change as needed
    preferredCountries: ["in", "us", "gb", "fr", "de"],
    separateDialCode: true, // Shows only dial code, not full phone number
});