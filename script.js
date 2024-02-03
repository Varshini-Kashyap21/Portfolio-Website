// Sticky Navigation Menu Js

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}
document.getElementById('hireMeButton').addEventListener('click', function() {
  // Replace 'https://www.linkedin.com/in/your-linkedin-profile' with the actual URL of your LinkedIn profile
  var linkedinProfileUrl = "https://www.linkedin.com/in/varshini-s-kashyap-3175aa227/";

  // Open the LinkedIn profile in a new tab or window
  window.open(linkedinProfileUrl, '_blank');
});
 // JavaScript to handle the button click event
 document.getElementById('downloadButton').addEventListener('click', function() {
  // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
  var resumePath = 'https://drive.google.com/file/d/1SCGuzoyWu3YiGssrB_ifHLJV_Nv64je9/view?usp=sharing';

  // Create a link element
  var link = document.createElement('a');

  // Set the download attribute with the filename for the user
  link.download = 'your_resume.pdf';

  // Set the href attribute with the path to your resume file
  link.href = resumePath;

  // Append the link to the body
  document.body.appendChild(link);

  // Trigger a click on the link to start the download
  link.click();

  // Remove the link from the document
  document.body.removeChild(link);
});
// Side Navigation Menu Js
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflowX = "hidden";
  scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function() {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflowX = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

document.getElementById('letsChatButton').addEventListener('click', function() {
  // Replace 'your.email@example.com' with your actual email address
  var emailAddress = 'varshinis.kashyap@gmail.com';

  // Subject of the email (you can customize this)
  var subject = 'Let\'s Chat';

  // Body of the email (you can customize this)
  var body = 'Hi,\n\nLet\'s chat!';

  // Construct the mailto link
  var mailtoLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

  // Open the default email client with the mailto link
  window.location.href = mailtoLink;
});

 
// Side Navigation Bar Close While We click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}



