const handleMenu = () => {
  $(".main-nav__hamburger").toggleClass("active");
  $(".main-nav__items").toggleClass("active");
  $("body").toggleClass("active");
};

$(document).on("click", ".main-nav__hamburger", handleMenu);
$(document).on("click", ".main-nav__items a", handleMenu);
