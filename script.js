function generateResume(){

document.getElementById("rname").innerText =
document.getElementById("name").value;

document.getElementById("remail").innerText =
document.getElementById("email").value;

document.getElementById("rphone").innerText =
document.getElementById("phone").value;

document.getElementById("rabout").innerText =
document.getElementById("about").value;

document.getElementById("rskills").innerText =
document.getElementById("skills").value;

document.getElementById("reducation").innerText =
document.getElementById("education").value;

document.getElementById("rprojects").innerText =
document.getElementById("projects").value;

document.getElementById("rexperience").innerText =
document.getElementById("experience").value;


const file =
document.getElementById("image").files[0];

if(file){

const reader = new FileReader();

reader.onload = function(e){

document.getElementById("profilePic").src = e.target.result;

}

reader.readAsDataURL(file);

}

}