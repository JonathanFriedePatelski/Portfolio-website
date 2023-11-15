document.addEventListener("DOMContentLoaded", function () {
    let menuToggle = document.getElementById("menu-toggle");
    let mobileMenu = document.getElementById("mobile-menu");
    let closeButton = document.getElementById("close-button");
    let itemLinks = document.getElementById("item-links");

    menuToggle.addEventListener("click", function () {
      // Toggle the visibility of the mobile menu
      mobileMenu.classList.toggle("hidden");
    });

    closeButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
    itemLinks.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  });

  function createEmailLink() {
    let container = document.getElementById("emailLinkContainer");

    let user = "jonathanpatelski";
    let domain = "gmail.com";

    let emailLink = document.createElement("a");

    emailLink.href =
      "mailto:" +
      user.split("").reverse().join("") +
      "@" +
      domain.split("").reverse().join("");
    emailLink.target = "_blank";
    emailLink.textContent = "Contact Me";

    container.appendChild(emailLink);
  }

  createEmailLink();