// Function to update the resume output
function updateResume(): void {
    const name = (document.getElementById('Name') as HTMLInputElement).value;
    const contact = (document.getElementById('Contact Details') as HTMLInputElement).value;
    const email = (document.getElementById('Emails') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const qualification = (document.getElementById('Qualification') as HTMLInputElement).value;
    const fieldOfStudy = (document.getElementById('field-of-study') as HTMLInputElement).value;
    const startDate = (document.getElementById('start-date') as HTMLInputElement).value;
    const endDate = (document.getElementById('end-date') as HTMLInputElement).value;
    const description = (document.getElementById('text') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('Skills') as HTMLSelectElement).value;
    const experience = (document.getElementById('type') as HTMLTextAreaElement).value;

    // Update the resume output
    const resumeOutput = document.getElementById('resume-output') as HTMLElement;
    resumeOutput.innerHTML = `
        <h2> Milestone 4: Editable Resume </h2>
    <h1>My PROFILE</h1>
        <section>
        <img id="resume-photo" src="changephoto.jpg" alt="Profile Photo" style="display: block;margin: 0 auto 20px; width: 150px;
    height: 150px;border-radius: 50%;object-fit: cover; border: 3px solid #295263;">
            <h3>Personal Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <p><strong>Email:</strong> ${email}</p>
            
        </section>
        <section>
            <h3>Education</h3>
            <p><strong>Institution:</strong> ${institution}</p>
            <p><strong>Qualification:</strong> ${qualification}</p>
            <p><strong>Field of Study:</strong> ${fieldOfStudy}</p>
            <p><strong>Start Date:</strong> ${startDate}</p>
            <p><strong>End Date:</strong> ${endDate}</p>
            <p><strong>Description:</strong> ${description}</p>
        </section>
        <section>
            <h3>Skills</h3>
            <p><strong>Skills:</strong> ${skills}</p>
             </section>
              <section>
            <h3>Work Experience</h3>
            <p><strong>Experience:</strong> ${experience}</p>
        </section>
    `;
}

// Function to handle photo upload
function changePhoto(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    const photo = document.getElementById('resume-photo') as HTMLImageElement;

    if (file && photo) {
        const reader = new FileReader();
        reader.onload = function (e) {
            if (e.target?.result) {
                photo.src = e.target.result as string;
            }
        };
        reader.readAsDataURL(file);
    }
}

// Add event listeners
window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;

    // Update resume on form input
    form.addEventListener('input', updateResume);

    // Handle photo upload
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.addEventListener('change', changePhoto);
});
