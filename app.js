

let votes = {};

function initializeOptions() {
    // Initial options
    addOption('computer');
    addOption('commerce ');
    updateResult();
}

function addOption(option) {
    votes[option] = 0;
    updateResult();
    createButton(option);
}

function vote(option) {
    votes[option]++;
    updateResult();
}

function updateResult() {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = Object.entries(votes).map(([option, count]) => `${option}: ${count} votes`).join('<br>');
}

function createButton(option) {
    const optionsContainer = document.getElementById('options-container');
    const button = document.createElement('button');
    button.className = 'option';
    button.textContent = option;
    button.onclick = function () {
        vote(option);
    };
    optionsContainer.appendChild(button);
}

function addNewOption() {
    const newOptionInput = document.getElementById('newOption');
    const newOption = newOptionInput.value.trim();

    if (newOption !== '' && !votes.hasOwnProperty(newOption)) {
        addOption(newOption);
        newOptionInput.value = '';
    }
}

// Initialize options on page load
window.onload = initializeOptions;
function createButton(option) {
    const optionsContainer = document.getElementById('options-container');
    const button = document.createElement('button');
    button.className = 'option';
    button.textContent = option;
    button.onclick = function () {
        vote(option);
    };
    optionsContainer.appendChild(button);
}
