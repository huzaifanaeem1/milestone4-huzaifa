document.getElementById('resumeform')?.addEventListener("submit", function (event){
    event.preventDefault();


//get refference to form elements using threir Ids
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

    const fullNameElement = document.getElementById('fullName') as HTMLInputElement;

    const emailElement = document.getElementById('email') as HTMLInputElement;

    const ageElement = document.getElementById('age') as HTMLInputElement;

    const addressElement = document.getElementById('address') as HTMLInputElement;

    const phoneNumberElement = document.getElementById('phoneNumber') as HTMLInputElement;

    const educationElement = document.getElementById('education') as HTMLInputElement;

    const experienceElement = document.getElementById('experience') as HTMLInputElement;

    const skillsElement = document.getElementById('skills') as HTMLInputElement;

//check if all form element are present

if (profilePictureInput &&
    fullNameElement && 
    emailElement && 
    ageElement && 
    addressElement && 
    phoneNumberElement && 
    educationElement && 
    experienceElement && 
    skillsElement){

    const fullName = fullNameElement.value;
    const email = emailElement.value;
    const age = ageElement.value;
    const address = addressElement.value;
    const phoneNumber = phoneNumberElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    
//profile picture elements
const profilePictureFile =  profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';



//resume object
    const resumeOutput = `
    <h2>Resume</h2>
${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
    <p><strong>FullName:</strong> <span id="edit-fullName" class="editable"> ${fullName} </span> </p>
    <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span> </p>
    <p><strong>Age:</strong> <span id="edit-age" class="editable"> ${age} </span> </p>
    <p><strong>Address:</strong> <span id="edit-address" class="editable"> ${address} </span> </p>
    <p><strong>Phone Number:</strong> <span id="edit-phoneNumber" class="editable"> ${phoneNumber} </span> </p>

    <h3>Education:</h3>
    <p id="edit-education" class="editable">${education}</p>

    <h3>Experience:</h3>
    <p id="edit-experience" class="editable">${experience}</p>

    <h3>Skills:</h3>
    <p id="edit-skills" class="editable">${skills}</p>
    `;
// resume output
const resumeOutputElement = document.getElementById('resumeOutput')
 if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
    makeEditable();
 } 

 }else{
    console.error('One or more element are missing')
 };

});

function makeEditable() {
    const editableElements = document.querySelectorAll<HTMLElement>('.editable');
    
    editableElements.forEach(element => {
        element.addEventListener('click', function() {
            const currentElement = element;
            const currentValue = currentElement.textContent || "";

            // Replace content
            if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing-input');

                input.addEventListener('blur', function() {
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline';
                    input.remove();
                });

                currentElement.style.display = 'none';
                currentElement.parentNode?.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}
