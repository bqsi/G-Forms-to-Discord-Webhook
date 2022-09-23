// Replace these two constants with your own ID / link.
const webHookURL = "YOUR_WEBHOOK_URL"
const Form = FormApp.openById('YOUR_FORM_ID')

let messageTemplate = {
	"content": null,
	"embeds": [{
    "title": Form.getTitle(),
		"color": 4775241,
		"fields": [],
	}]
}

function onFormSubmission(e) {
  let FormResponse = e.response;
  let QuestionResponses = FormResponse.getItemResponses();

  for (var i = 0; i < QuestionResponses.length; i++) {
    let QuestionResponse = QuestionResponses[i];
    let fieldName = QuestionResponse.getItem().getTitle();
    let fieldValue = QuestionResponse.getResponse().toString();

    messageTemplate.embeds[0].fields[i] =  { "name": fieldName, "value": fieldValue }
  }

  let requestPayload = JSON.stringify(messageTemplate)

  var requestOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    payload: requestPayload,
    muteHttpExceptions: true,
  }

  let response = UrlFetchApp.fetch(webHookURL, requestOptions)

  Logger.log(response.getContentText())
}

function bindToSubmit() {
  ScriptApp.newTrigger('onFormSubmission')
  .forForm(Form)
  .onFormSubmit()
  .create();
}
