const passwordBox = document.getElementById('password');
const lettersLowercase = ["q", "w", "e", "r", "t", "a", "s", "d", "f", "g", "z", "x", "c", "v"]; //14
const lettersUppercase = ["Q", "W", "E", "R", "T", "A", "S", "D", "F", "G", "Z", "X", "C", "V"]; //14
const numbers = ["1", "2", "3", "4", "5"]; //5
const symbols = ["!", "@", "#", "$", "%", "?", "/"]; //7
const passwordChars = [
    ["q", "w", "e", "r", "t", "a", "s", "d", "f", "g", "z", "x", "c", "v"],
    ["Q", "W", "E", "R", "T", "A", "S", "D", "F", "G", "Z", "X", "C", "V"],
    ["1", "2", "3", "4", "5"],
    ["!", "@", "#", "$", "%", "?", "/"]
]

let passwordChunkAmount = 5;
let passwordChunkSize = 3;
let delimiter = '-';

function updatePage()
{
    passwordPreviewGenerator();
    delimiter = document.getElementById('delimiter-input').value;
    passwordChunkSize = document.getElementById('chunk-size-input').value;
    passwordChunkAmount = document.getElementById('number-chunks-input').value;
}

function rand(max)
{
    return Math.floor(Math.random() * (max + 1));
}

function generatePassword ()
{
    let password = "";
    let charType;

    for (let i = 0; i < passwordChunkAmount; i++)
    {
        charType = 0;

        // Select a row within the passwordCharacters array
        charType = rand(passwordChars.length - 1);

        for (let j = 0; j < passwordChunkSize; j++) {
            // Select a character from that row
            // Add that character to the password
            password += passwordChars[charType][rand(passwordChars[charType].length - 1)];
        }
        // This prevents putting a period at the end of the password
        if (i < passwordChunkAmount - 1) password += delimiter;
    }

    passwordBox.innerText = password;
    passwordBox.select();
}




function uppercaseToggle()
{
    const uppercaseToggleBtn = document.getElementById('uppercase-toggle');
    const uppercaseToggleBtnIcon = document.getElementById('uppercase-toggle-icon');

    if (uppercaseToggleBtn.classList.contains('active')) {
        uppercaseToggleBtnText.innerText = 'Uppercase Disallowed';
        uppercaseToggleBtn.classList.remove('active');
        uppercaseToggleBtnIcon.classList = 'fas fa-times';
    } else {
        uppercaseToggleBtnText.innerText = 'Uppercase Allowed';
        uppercaseToggleBtn.classList += ' active';
        uppercaseToggleBtnIcon.classList = 'fas fa-check';
    }
}

window.setInterval(function() {
  updatePage();
}, 100);


// Generate a preview of how the password will look
function passwordPreviewGenerator()
{
    let passwordPreview = "";

    for (let i = 0; i < passwordChunkAmount; i++)
    {
        for (let j = 0; j < passwordChunkSize; j++)
        {
            passwordPreview += 'X';
        }
        if (i < passwordChunkAmount - 1) passwordPreview += delimiter;
    }

    document.getElementById('password-preview').innerText = passwordPreview;
}
