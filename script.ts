

function generateResume(): void {

// provide type assertion all input

// profile pic 1
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

const nameElement = document.getElementById('name') as HTMLInputElement;
const emailElement = document.getElementById('email') as HTMLInputElement;
const phoneElement = document.getElementById('phone') as HTMLInputElement;
const educationElement = document.getElementById('education') as HTMLInputElement;
const experienceElement = document.getElementById('experience') as HTMLInputElement;
const skillsElement = document.getElementById('skills') as HTMLInputElement;
const interestElement = document.getElementById('interest') as HTMLInputElement;

// element condition profile pic 2
if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && interestElement){
    // nameelement me jo value hogi name assign ho gi
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;
    const interest = interestElement.value;

// profile pic 3
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";


// create resume output profile pic 4
const resumeOutput = `
<h2><u><center>Resume </center></u></h2>

${profilePictureUrl ? `<img src="${profilePictureUrl}" alt="profile pic" class="profilePicture">` : ""}

<p> <u><strong>Full Name:</u></strong> &nbsp; ${name} </p>
<p> <u><strong>Email:</u></strong> &nbsp; ${email} </p>
<p> <u><strong>Phone No:</u></strong> &nbsp; ${phone} </p>

<h3><u>Education: </u></h3>
<p>${education}</p>

<h3><u>Experience: </u></h3>
<p>${experience}</p>

<h3><u>Skills: </u></h3>
<p>${skills}</p>

<h3><u>Interest: </u></h3>
<p>${interest}</p>
`;

const resumeOutputElement = document.getElementById('resumeOutput')
if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
}else{
    console.error('the resume output elements are missing')
}
}else{
    console.error('one or more elements are missing')
}
};






