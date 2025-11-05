// loadHeaderFooter.js

document.addEventListener("DOMContentLoaded", function () {
  fetch("common-footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("common-footer").innerHTML = data;
    });

  fetch("common-header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("common-header").innerHTML = data;
      SetNavBarActive();

      $(".sidebar-button").on("click", function () {
        $(this).toggleClass("active");
      });

      const sidebarButton = document.querySelector(".sidebar-button");

      if (sidebarButton) {
        sidebarButton.addEventListener("click", () => {
          document.querySelector(".main-menu").classList.toggle("show-menu");
        });
      }

      $(".menu-close-btn").on("click", function () {
        $(".main-menu").removeClass("show-menu");
      });

      // sidebar
      $(".right-sidebar-button").on("click", function () {
        $(".right-sidebar-menu").addClass("show-right-menu");
      });
      $(".right-sidebar-close-btn").on("click", function () {
        $(".right-sidebar-menu").removeClass("show-right-menu");
      });

      $(".menu-btn").on("click", function () {
        $(".sidebar-menu").addClass("active");
      });

      $(".sidebar-menu-close").on("click", function () {
        $(".sidebar-menu").removeClass("active");
      });

      //   jQuery(".dropdown-icon").on("click", function () {
      //     jQuery(this).toggleClass("active").next("ul, .mega-menu").slideToggle();
      //     jQuery(this).parent().siblings().children("ul, .mega-menu").slideUp();
      //     jQuery(this)
      //       .parent()
      //       .siblings()
      //       .children(".active")
      //       .removeClass("active");
      //   });
      //   jQuery(".dropdown-icon2").on("click", function () {
      //     jQuery(this).toggleClass("active").next(".submenu-list").slideToggle();
      //     jQuery(this).parent().siblings().children(".submenu-list").slideUp();
      //     jQuery(this)
      //       .parent()
      //       .siblings()
      //       .children(".active")
      //       .removeClass("active");
      //   });
    });
});
