const handleMenu = () => {
  $(".main-nav__hamburger").toggleClass("active");
  $(".main-nav__items").toggleClass("active");
  $("body").toggleClass("active");
};

$(document).on("click", ".main-nav__hamburger", handleMenu);
$(document).on("click", ".main-nav__items a", handleMenu);

$(document).on("click", ".dropdown-item-custom span", function () {
  $(".dropdown-menu-custom").toggleClass("active");
  $(this).toggleClass("active");
});

$(document).on("click", function (e) {
  if (
    !$(e.target).closest(".dropdown-menu-custom, .dropdown-item-custom").length
  ) {
    $(".dropdown-menu-custom, .dropdown-item-custom span").removeClass(
      "active"
    );
  }
});
