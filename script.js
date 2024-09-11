function generateResume() {
    // provide type assertion all input
    var _a;
    // profile pic 1
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var interestElement = document.getElementById('interest');
    // element condition profile pic 2
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && interestElement) {
        // nameelement me jo value hogi name assign ho gi
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var interest = interestElement.value;
        // profile pic 3
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // create resume output profile pic 4
        var resumeOutput = "\n<h2><u><center>Resume </center></u></h2>\n\n".concat(profilePictureUrl ? "<img src=\"".concat(profilePictureUrl, "\" alt=\"profile pic\" class=\"profilePicture\">") : "", "\n\n<p> <u><strong>Full Name:</u></strong> &nbsp; ").concat(name_1, " </p>\n<p> <u><strong>Email:</u></strong> &nbsp; ").concat(email, " </p>\n<p> <u><strong>Phone No:</u></strong> &nbsp; ").concat(phone, " </p>\n\n<h3><u>Education: </u></h3>\n<p>").concat(education, "</p>\n\n<h3><u>Experience: </u></h3>\n<p>").concat(experience, "</p>\n\n<h3><u>Skills: </u></h3>\n<p>").concat(skills, "</p>\n\n<h3><u>Interest: </u></h3>\n<p>").concat(interest, "</p>\n");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output elements are missing');
        }
    }
    else {
        console.error('one or more elements are missing');
    }
}
;
