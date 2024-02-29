var actionBtn = document.querySelector("#btn_action");
var modeBtn = document.querySelector("#btn_mode");

document.querySelector("#txt_tip").innerHTML = generateTip();
const interval = setInterval(function() {
    document.querySelector("#txt_tip").innerHTML = generateTip();
    }, 10000);

var MODE = 1;

function action() {
    if (MODE == 1) {
        let password = generatePassword();
        let crackTime = getCrackTime(password);

        let passwordText = document.querySelector("#in_password");
        let crackTimeText = document.querySelector('#txt_crack_timer');

        passwordText.value = password;
        crackTimeText.innerHTML = crackTime;
    } else {
        let password = document.querySelector("#in_password").value;
        let crackTime = getCrackTime(password);

        let crackTimeText = document.querySelector('#txt_crack_timer');
        crackTimeText.innerHTML = crackTime;
    }
}

// Add event listeners
modeBtn.addEventListener("click", () => {
    if (MODE == 1) {
        MODE = 2;
        document.querySelector("#generator_ui").style.visibility = "hidden";
        document.querySelector("#in_password").disabled = false;
        document.querySelector("#in_password").value = "";
        document.querySelector("#in_password").placeholder = "Dein Password...";
        document.querySelector("#in_password").style.borderColor = "#2196F3";
        document.querySelector('#txt_crack_timer').innerHTML = "????";
        document.querySelector("#txt_crack_timer").style.color = "#2196F3";
        actionBtn.querySelector("span").innerHTML = "Check";
        document.querySelector("#ico_mode").style.color = "#2196F3";
        document.querySelector("#txt_mode").style.color = "rgba(150, 93, 233, 1)";
        document.querySelector("#txt_mode").innerHTML = "Generator-Mode";

        document.querySelector("#in_password").focus();
    } else {
        MODE = 1;
        document.querySelector("#generator_ui").style.visibility = "visible";
        document.querySelector("#in_password").disabled = true;
        document.querySelector("#in_password").value = "";
        document.querySelector("#in_password").placeholder = "";
        document.querySelector("#in_password").style.borderColor = "rgba(150, 93, 233, 1)";
        document.querySelector('#txt_crack_timer').innerHTML = "????";
        document.querySelector("#txt_crack_timer").style.color = "rgba(150, 93, 233, 1)";
        actionBtn.querySelector("span").innerHTML = "Generate";
        document.querySelector("#ico_mode").style.color = "rgba(150, 93, 233, 1)";
        document.querySelector("#txt_mode").style.color = "#2196F3";
        document.querySelector("#txt_mode").innerHTML = "Check-Mode";
    }
});

actionBtn.addEventListener("click", action);
document.querySelector("#slider").addEventListener("change",  (event) => {
    if (event.target.value < 4) event.target.value = 4;
    document.querySelector('#txt_length').dataset.length = event.target.value;

    action();
});
document.querySelector("#cb_special").addEventListener("change", (event) => {
    element = document.querySelector('#cb_unreadable');
    element.disabled = !event.target.checked;
    element.parentElement.style.webkitFilter = (event.target.checked) ? "brightness(100%)" : "brightness(50%)";
    
});