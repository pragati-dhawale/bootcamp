
// document.body.style.backgroundColor = "pink"
let div = document.body.firstElementChild;
console.log(div);

let form = document.querySelector('#form');
let fnameInput = form.querySelector('#first-name');
let lnameInput = form.querySelector('#last-name');
let fullnameInput = form.querySelector('#full-name');
let themeToggleBtn = document.getElementById('theme-toggle');
let box=document.querySelector('.box')
console.log(box)

// Function to update the full name input
function updateFullName() {
    let fname = fnameInput.value;
    let lname = lnameInput.value;
    let fullname = `${fname} ${lname}`.trim();
    fullnameInput.value = fullname;
    console.log(fullname); // Log the full name to the console
}

// Add event listeners to update the full name when first or last name changes
fnameInput.addEventListener('input', updateFullName);
lnameInput.addEventListener('input', updateFullName);
// Update the full name when the form is submitted
form.addEventListener('submit', function(event) {
    alert("Form is created")
    event.preventDefault(); // Prevent the form from submitting
    updateFullName();
});

// Function to toggle the theme
function toggleTheme() {
    box.classList.toggle('dark-theme');
    box.classList.toggle('light-theme');
    if (box.classList.contains('dark-theme')){
        themeToggleBtn.innerText="Light";
    }
    else{
        themeToggleBtn.innerText="Dark";
    }
}

// Add event listener to the theme toggle button
themeToggleBtn.addEventListener('click', toggleTheme);
