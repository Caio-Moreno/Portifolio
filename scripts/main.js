// Add your javascript here

// Don't forget to add it into respective layouts where this js file is needed



$(document).ready(function() {


    var dataNascimento = "12/18/1998";
    var today = new Date();
    var birthDate = new Date(dataNascimento);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById('idade').innerHTML = age;

  AOS.init( {

    // uncomment below for on-scroll animations to played only once

    // once: true  

  }); // initialize animate on scroll library


  $('#desabilitarBotao').click(function(){

    alert('Curso em andamento');

  })

});



// Smooth scroll for links with hashes

$('a.smooth-scroll')

.click(function(event) {

  // On-page links

  if (

    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 

    && 

    location.hostname == this.hostname

  ) {

    // Figure out element to scroll to

    var target = $(this.hash);

    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

    // Does a scroll target exist?

    if (target.length) {

      // Only prevent default if animation is actually gonna happen

      event.preventDefault();

      $('html, body').animate({

        scrollTop: target.offset().top

      }, 1000, function() {

        // Callback after animation

        // Must change focus!

        var $target = $(target);

        $target.focus();

        if ($target.is(":focus")) { // Checking if the target was focused

          return false;

        } else {

          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable

          $target.focus(); // Set focus again

        };

      });

    }

  }

});

