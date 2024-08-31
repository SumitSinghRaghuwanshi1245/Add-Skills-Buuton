var isStatus = document.querySelector("h5");

var addSkill = document.querySelector("#add");

var removeSkill = document.querySelector("#remove");

addSkill.addEventListener("click", function(){
    isStatus.innerHTML = "Software Engineer"
    isStatus.style.color = "green"
})

removeSkill.addEventListener("click", function(){
    isStatus.innerHTML = "Not a Software Engineer"
    isStatus.style.color = "red"
})