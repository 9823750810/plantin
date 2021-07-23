//sticky navigational bar

// window.addEventListener("scroll", function(){
//     var nav = document.querySelector("nav");
//     nav.classList.toggle("sticky", window.scrollY > 0);
// });

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
           
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });
});





// toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu .menu-list').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});



    //owl corausel scrpit
    $('.carousel').owlCarousel({
        margin:20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 500,
        autoplayHoverPause:true,

        responsive:{
            0:{
                 items: 1,
                 nav: false
            },

             600:{
                items: 2,
                nav: false
            },

            1000:{
                items: 3,
                nav: false
            },   //till this code can make the looping carousel display
        }
    });




// star rating

const allStarLabels = document.querySelectorAll('.rating label');

allStarLabels.forEach(thisLabel =>
    thisLabel.addEventListener('click', e => {
        e.preventDefault();
        let radioElement = e.target.previousElementSibling;
        radioElement.checked = !radioElement.checked;
    })
)

$("label").click(function(){
    $(this).parent().find("label").css({"color": "#D8D8D8"});
    $(this).css({"color": "#3A6351", "font-weight" : 600});
    $(this).nextAll().css({"color": "#3A6351", "font-weight" : 600});
  });


  /*=======================
 counter
  ===================  */
$('.count').counterUp({
    delay: 10,
    time: 1000,
});

$(".count").waypoint(function() {
    $(".count").count();
  }, {offset:"100%", triggerOnce:true});

  
//   $(".count").waypoint(function() {
//     $(".count").count();
//     $(this).waypoint('destroy');
//   }, {offset:"100%"});


  
