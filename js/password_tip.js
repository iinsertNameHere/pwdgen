const tips = [
    "Length is crucial! Choose a password with at least 12 characters. The longer the better.",
    "Avoid common phrases! Do not use easy-to-guess phrases like “Password123” or “Admin”.",
    "No personal information! Do not use details such as names, birthdays, addresses or phone numbers.",
    "Mix characters! Your password should contain a combination of letters (uppercase and lowercase), numbers and special characters (like !, @ or #).",
    "Do not reuse passwords! Each account should have a unique password.",
    "Store passwords safely! Use a password manager to securely store complex passwords",
    "Don't use real words! Avoid dictionary words or names.",
    "Change regularly! Update your passwords, especially after security incidents.",
    "Activate two-factor authentication (2FA)! If possible, take advantage of this extra layer of security."
];

function generateTip() {
    let tip = tips[Math.floor(Math.random()*tips.length)];
    return tip;
}