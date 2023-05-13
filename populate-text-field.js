
let form = document.getElementsByTagName("form")?.[0];
let textField = form?.getElementsByTagName("textarea")?.[0];
const promptAssistText = "Correct the following French input and then provide a response in French. ";

function populateTextField() {
	if(!textField.value.startsWith(promptAssistText)) {
		textField.value = promptAssistText + textField.value;
	}
}

populateTextField();
textField.addEventListener("input", populateTextField);