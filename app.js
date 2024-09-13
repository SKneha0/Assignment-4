// app.ts
// Function to handle form submission and generate the editable resume
function generateResume(event) {
    event.preventDefault();
    // Get form input values
    var nameInput = document.getElementById("name").value;
    var educationInput = document.getElementById("education").value;
    var workExperienceInput = document.getElementById("workExperience").value;
    var skillsInput = document.getElementById("skills").value;
    // Populate the editable resume fields with form values
    document.getElementById("displayName").innerText = nameInput;
    document.getElementById("displayEducation").querySelector("p").innerText = educationInput;
    document.getElementById("displayWorkExperience").querySelector("p").innerText = workExperienceInput;
    document.getElementById("displaySkills").querySelector("p").innerText = skillsInput;
    // Show the editable resume section
    document.getElementById("editableResume").style.display = "block";
}
// Attach event listener to the form
var resumeForm = document.getElementById("resumeForm");
resumeForm.addEventListener("submit", generateResume);
