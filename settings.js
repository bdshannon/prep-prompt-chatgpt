/*
Author: Brian Shannon
License: GNU GPL-3.0-or-later
*/

var textField = document.getElementById("text-field");

chrome.storage.sync.get(["prompt"]).then(function(data) {
  if (data.prompt) {
    textField.value = data.prompt;
  }
});

document.getElementById("settings-form").addEventListener("submit", function(event) {
  event.preventDefault();
  chrome.storage.sync.set({ "prompt": textField.value }).then(function() {
    console.log("prompt saved.");
	document.querySelector("p[data-new-prompt]").setAttribute("data-new-prompt", textField.value);
  });
});
