//listing element 
var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    var profilePictureInput = document.getElementById('profilePicture');
    var fullNameElement = document.getElementById('fullName');
    var emailElement = document.getElementById('email');
    var ageElement = document.getElementById('age');
    var addressElement = document.getElementById('address');
    var phoneNumberElement = document.getElementById('phoneNumber');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    //put out condition
    if (profilePictureInput && fullNameElement && emailElement && ageElement && addressElement && phoneNumberElement && educationElement && experienceElement && skillsElement) {
        var fullName = fullNameElement.value;
        var email = emailElement.value;
        var age = ageElement.value;
        var address = addressElement.value;
        var phoneNumber = phoneNumberElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //profile picture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        //resume object
        var resumeOutput = "\n    <h2>Resume</h2>\n".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n    <p><strong>FullName:</strong> <span id=\"edit-fullName\" class=\"editable\"> ").concat(fullName, " </span> </p>\n    <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n    <p><strong>Age:</strong> <span id=\"edit-age\" class=\"editable\"> ").concat(age, " </span> </p>\n    <p><strong>Address:</strong> <span id=\"edit-address\" class=\"editable\"> ").concat(address, " </span> </p>\n    <p><strong>Phone Number:</strong> <span id=\"edit-phoneNumber\" class=\"editable\"> ").concat(phoneNumber, " </span> </p>\n\n    <h3>Education:</h3>\n    <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n    <h3>Experience:</h3>\n    <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n\n    <h3>Skills:</h3>\n    <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error('One or more element are missing');
    }
    ;
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // Replace content
            if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
