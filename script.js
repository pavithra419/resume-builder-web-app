function generateResume(){

document.getElementById("rname").innerText =
document.getElementById("name").value;

document.getElementById("rphone").innerText =
document.getElementById("phone").value;

document.getElementById("remail").innerText =
document.getElementById("email").value;

document.getElementById("raddress").innerText =
document.getElementById("address").value;

document.getElementById("reducation").innerText =
document.getElementById("education").value;

document.getElementById("rabout").innerText =
document.getElementById("about").value;

document.getElementById("rskills").innerText =
document.getElementById("skills").value;

document.getElementById("rexperience").innerText =
document.getElementById("experience").value;

document.getElementById("rprojects").innerText =
document.getElementById("projects").value;

document.getElementById("rlinkedin").innerText =
document.getElementById("linkedin").value;

document.getElementById("rlinkedin").href =
document.getElementById("linkedin").value;

document.getElementById("rgithub").innerText =
document.getElementById("github").value;

document.getElementById("rgithub").href =
document.getElementById("github").value;


// profile image
const file = document.getElementById("image").files[0];

if(file){

const reader = new FileReader();

reader.onload = function(e){
document.getElementById("profilePic").src = e.target.result;
}

reader.readAsDataURL(file);

}

}


function downloadPDF(){

const element = document.getElementById("resume");

html2pdf()
.from(element)
.save("resume.pdf");

}