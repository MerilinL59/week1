const profileImage = document.querySelector("#profileImage");
const firstNameSpan = document.querySelector("#firstName");
const ageSpan = document.querySelector("#age");
const statusSpan = document.querySelector("#status");
const btnUpdateProfile = document.querySelector("#updateBtn");

const isWizard = confirm("Are you a Wizard?");

if(isWizard === true){
    console.log("Welcome to Hogwarts!");
}
else {
    profileImage.src = "images/image2.jpg";
    firstNameSpan.innerHTML = "Dudley Dusley";
    ageSpan.innerHTML = "15";
    statusSpan.innerHTML = "Person";
}

btnUpdateProfile.addEventListener("click", () => {
    profileImage.src = "images/image3.jpg";
    firstNameSpan.innerHTML = "Lara Croft";
    ageSpan.innerHTML = "25";
    statusSpan.innerHTML = "Adventurer";
});