// Function to update the resume output
function updateResume() {
    var name = document.getElementById('Name').value;
    var contact = document.getElementById('Contact Details').value;
    var email = document.getElementById('Emails').value;
    var institution = document.getElementById('institution').value;
    var qualification = document.getElementById('Qualification').value;
    var fieldOfStudy = document.getElementById('field-of-study').value;
    var startDate = document.getElementById('start-date').value;
    var endDate = document.getElementById('end-date').value;
    var description = document.getElementById('text').value;
    var skills = document.getElementById('Skills').value;
    var experience = document.getElementById('type').value;
    // Update the resume output
    var resumeOutput = document.getElementById('resume-output');
    resumeOutput.innerHTML = "\n        <h2> Milestone 4: Editable Resume </h2>\n    <h1>My PROFILE</h1>\n        <section>\n        <img id=\"resume-photo\" src=\"changephoto.jpg\" alt=\"Profile Photo\" style=\"display: block;margin: 0 auto 20px; width: 150px;\n    height: 150px;border-radius: 50%;object-fit: cover; border: 3px solid #295263;\">\n            <h3>Personal Information</h3>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Contact:</strong> ").concat(contact, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            \n        </section>\n        <section>\n            <h3>Education</h3>\n            <p><strong>Institution:</strong> ").concat(institution, "</p>\n            <p><strong>Qualification:</strong> ").concat(qualification, "</p>\n            <p><strong>Field of Study:</strong> ").concat(fieldOfStudy, "</p>\n            <p><strong>Start Date:</strong> ").concat(startDate, "</p>\n            <p><strong>End Date:</strong> ").concat(endDate, "</p>\n            <p><strong>Description:</strong> ").concat(description, "</p>\n        </section>\n        <section>\n            <h3>Skills</h3>\n            <p><strong>Skills:</strong> ").concat(skills, "</p>\n             </section>\n              <section>\n            <h3>Work Experience</h3>\n            <p><strong>Experience:</strong> ").concat(experience, "</p>\n        </section>\n    ");
}
// Function to handle photo upload
function changePhoto(event) {
    var _a;
    var input = event.target;
    var file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
    var photo = document.getElementById('resume-photo');
    if (file && photo) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                photo.src = e.target.result;
            }
        };
        reader.readAsDataURL(file);
    }
}
// Add event listeners
window.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    // Update resume on form input
    form.addEventListener('input', updateResume);
    // Handle photo upload
    var fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', changePhoto);
});
