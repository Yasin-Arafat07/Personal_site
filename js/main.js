// ---- Pre Loader Section-----/
var loader = document.getElementById("pre-loader");
          window.addEventListener("load",function(){
    loader.style.display = "none";
})


// ----- Navbar Section Activate------ //
$(document).ready(function(){
    $('.nav-item a.nav-link').click(function(){
        $('a.nav-link').removeClass('active');
        $(this).addClass('active');
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 0
        }, 50);
        e.preventDefault();
    })
}) 

// ----- Isotope Section Activate------ //
$(document).ready(function(){
    $('.item-menu ul li').click(function(){
        $('item-menu ul li').removeClass('active');
        $(this).addClass('active')
    })
}) 

//----- Init Isotope-----//
var $grid = $('.isotope_content_area').isotope({
    // options
  });
  // filter items on button click
  $('.isotope_menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  // filter items on button click remove
  $('.isotope_menu').on( 'click', 'li', function() {
      $(this).addClass('active').siblings().removeClass('active')
  });


//   About Section tilt.js
VanillaTilt.init(document.querySelector(".card"), {
    // max: 10,
    speed: 400
});
/*It also supports NodeList*/
VanillaTilt.init(document.querySelectorAll(".card"));

// ----- Scroll Navbar-----//
$(document).ready(function(){
    window.onscroll = function(){
        scrollFunction()
    }
    
        function scrollFunction(){
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                
                document.getElementById("header-section").style.backgroundColor = "	rgba(255,255,255,.6)";
                document.getElementById("header-section").style.padding = "0px 0";
                document.getElementById("header-section").style.transition = ".9s ease";
                document.getElementById("header-section").style.boxShadow = "0 0px 10px rgba(0,0,.7)";
                document.getElementById("navbar-menu").style.marginRight= "15px";
                // document.getElementById("menu-p").style.margin = "0 0";
                document.getElementById("logo-dark");
            }
            else{
                document.getElementById("header-section").style.backgroundColor = "transparent";
                document.getElementById("header-section").style.padding = "5px 0";
                document.getElementById("header-section").style.boxShadow = "0 0 0 rgba(0,0,0)";
                document.getElementById("navbar-menu").style.marginRight= "30px";
                document.getElementById("menu-p").style.margin = "0 5px";
                document.getElementById("logo-light");
            }
        }  
})
