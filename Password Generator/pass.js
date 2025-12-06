
// Character sets for password generation
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// Get DOM elements
const rangeInput = document.querySelector('input[type="range"]');
const rangeValue = document.getElementById('rangevalue');
const passwordInput = document.getElementById('password');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');

// Checkboxes
const lowercaseCheck = document.getElementById('uppercase'); // Note: IDs are swapped in HTML
const uppercaseCheck = document.getElementById('lowercase');
const numbersCheck = document.getElementById('numbers');
const symbolsCheck = document.getElementById('symbols');

// Update range value display
rangeInput.addEventListener('input', (e) => {
    rangeValue.textContent = e.target.value;
});

// Generate password function
function generatePassword() {
    const length = parseInt(rangeInput.value);
    let charset = '';
    let password = '';

    // Build character set based on selected options
    if (lowercaseCheck.checked) charset += lowercase;
    if (uppercaseCheck.checked) charset += uppercase;
    if (numbersCheck.checked) charset += numbers;
    if (symbolsCheck.checked) charset += symbols;

    // Check if at least one option is selected
    if (charset === '') {
        alert('Please select at least one character type!');
        return;
    }

    // Generate random password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    passwordInput.value = password;
}

// Copy password to clipboard
function copyPassword() {
    if (passwordInput.value === '') {
        alert('Please generate a password first!');
        return;
    }

    passwordInput.select();
    document.execCommand('copy');
    
    // Visual feedback
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
        copyBtn.textContent = 'Copy Password';
    }, 2000);
}

// Event listeners
generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generatePassword();
});

copyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    copyPassword();
});

// Generate initial password on page load
window.addEventListener('load', generatePassword);