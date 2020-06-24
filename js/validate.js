function validateForm(event) {
    //Gather all HTML controls into a collection instead of creating separate variables for each.

    let controls = document.getElementsByClassName('form-control');
    console.log(controls);

    let validationMessages = document.getElementsByClassName('invalid');

    //Regular expression for Email
    let regExpEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)

    let regExpName = new RegExp(/^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/)

    //Check the length of ALL controls - if any have NOT been filled out by the user, stop the form from submitting.
    if (controls['name'].value.length == 0 || controls['email'].value.length == 0 || controls['subject'].value.length == 0 || controls['message'].value.length == 0 || !regExpEmail.test(controls['email'].value)) {

        //Stop the form from submitting.
        event.preventDefault();

        //Check individual controls and display error messages conditionally.
        if (controls['name'].value.length == 0) {
            validationMessages['rfvName'].textContent = "Name is required";
        } else {
            validationMessages['rfvName'].textContent = "";
        }

        if (!regExpName.test(controls['name'].value) && controls['name'].value.length > 0) {
            validationMessages['rfvName'].textContent = "* Please enter a valid name. *";
        }
        if (regExpEmail.test(controls['name'].value) && controls['name'].value.length > 0) {
            validationMessages['rfvName'].textContent = "";
        }

        if (controls['email'].value.length == 0) {
            validationMessages['rfvEmail'].textContent = "Email is required";
        } else {
            validationMessages['email'].textContent = "";
        }
        if (!regExpEmail.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['rfvEmail'].textContent = "* Please enter a valid email address. *";
        }
        if (regExpEmail.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['rfvEmail'].textContent = "";
        }

        if (controls['subject'].value.length == 0) {
            validationMessages['rfvSubject'].textContent = "Subject is required";
        } else {
            validationMessage['rfvSubject'].textContent = "";

        }
        if (controls['message'].value.length == 0) {
            validationMessages['rfvMessage'].textContent = "Message is required";
        } else {
            validationMessage['rfvMessage'].textContent = "";
        }

    }
}