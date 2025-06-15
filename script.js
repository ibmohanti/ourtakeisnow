function showMessage() {
    alert("Hello ! This website is interactive.");
}

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Thank you, " + document.getElementById("name").value + "!");
}) ;

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
document.querySelectorAll ( 'a[href^="#"]' ).forEach(anchor => {
anchor.addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({behavior: "smooth"});
});
});
