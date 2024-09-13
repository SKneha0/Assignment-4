
// app.ts

// Function to handle form submission and generate the editable resume
function generateResume(event: Event) {
    event.preventDefault();

    // Get form input values
    const nameInput = (document.getElementById("name") as HTMLInputElement).value;
    const educationInput = (document.getElementById("education") as HTMLInputElement).value;
    const workExperienceInput = (document.getElementById("workExperience") as HTMLInputElement).value;
    const skillsInput = (document.getElementById("skills") as HTMLInputElement).value;

    // Populate the editable resume fields with form values
    (document.getElementById("displayName") as HTMLElement).innerText = nameInput;
    (document.getElementById("displayEducation") as HTMLElement).querySelector("p")!.innerText = educationInput;
    (document.getElementById("displayWorkExperience") as HTMLElement).querySelector("p")!.innerText = workExperienceInput;
    (document.getElementById("displaySkills") as HTMLElement).querySelector("p")!.innerText = skillsInput;

    // Show the editable resume section
    (document.getElementById("editableResume") as HTMLElement).style.display = "block";
}

// Attach event listener to the form
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
resumeForm.addEventListener("submit", generateResume);
