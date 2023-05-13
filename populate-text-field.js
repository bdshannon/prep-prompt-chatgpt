/*
Author: Brian Shannon
License: GNU GPL-3.0-or-later
*/


textareaSelector = "textarea[placeholder=\"Send a message.\"]";
let form = document.querySelector("form:has(" + textareaSelector + ")");
let textField = form?.querySelector(textareaSelector);
let promptAssistText = "Correct the following French input and then provide a response in French.";

function populateTextField() {
	if(!textField.value.startsWith(promptAssistText)) {
		textField.value = promptAssistText + " " + textField.value;
	}
}

chrome.storage.sync.get(["prompt"]).then(function(data) {
	if (data.prompt) {
		promptAssistText = data.prompt;
	}
}).then(function() {
	if(textField) {
		setTimeout(populateTextField, 5000);
	}
});

textField?.addEventListener("input", populateTextField);