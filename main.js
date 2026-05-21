(function () {
  var menuToggle = document.querySelector(".menu-toggle");
  var siteNav = document.querySelector(".site-nav");

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", function () {
      siteNav.classList.toggle("site-nav--open");
      var open = siteNav.classList.contains("site-nav--open");
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      menuToggle.textContent = open ? "Close" : "Menu";
    });
  }

  var path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("is-active");
    }
  });

  document.querySelectorAll("form[data-contact]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thanks — we'll be in touch soon.");
      form.reset();
    });
  });

  document.querySelectorAll("[data-donate]").forEach(function (button) {
    button.addEventListener("click", function () {
      alert("Thank you for your support! Donation flow coming soon.");
    });
  });
})();
