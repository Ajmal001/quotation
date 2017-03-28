(function() {
  var
  navbar = document.getElementsByClassName("k-navbar")[0],
  ctrl_hamburger = document.getElementsByClassName("k-navbar-hamburger")[0],
  ctrl_close     = document.getElementsByClassName("k-navbar-close")[0];

  ctrl_hamburger.addEventListener("click", function() {
    document.body.style.overflow = "hidden";
    navbar.className += " k-as-overlay";
  });

  ctrl_close.addEventListener("click", function() {
    document.body.style.overflow = "";
    navbar.className = navbar.className.replace(" k-as-overlay", "");
  });
})();

// Remueve la leyenda "Envíos grátis" en home.
$(function() {
  $('.close-banner').click(function() {  
        $('.shipping-banner').addClass('shipping-banner--closed');
        setTimeout(function() {   $('.shipping-banner').remove();  }, 2000);
  });
});
