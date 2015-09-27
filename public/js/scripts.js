if ( typeof jQuery != 'undefined' ) {
    console.log("jQuery library is loaded!");
} else {
    console.log("jQuery library is not found!");
}

$(document).ready( function() {
    console.log("Document is ready.")
    // jQuery goes here.

    var menuflag = 0;
    $('.menu-open-button').on('click', function() {
        console.log('Opened menu');
        $('.menu-container').stop().animate({ left: '0px'}, 500);
        menuflag++
        if (menuflag === 2) {
          $('.menu-container').stop().animate({ left: '-222px'}, 400);
          menuflag = menuflag - 2;
        }
    });

    $('.menu-close-button').on('click', function() {
        // This closes menu
        if (menuflag === 1) {
        $('.menu-container').stop().animate({ left: '-222px'}, 500);
        menuflag--;
      }
    });

    /* Check to see if user uses a power-word.
    var btnFlag = 0;

    $('.ghostbar').on('keypress', function() {
      if ($(this).val() == "torrents:" || $(this).val() == "torrent:") {
          $('.mode-search-btn').show().append('torrents');
          console.log("Torrents")
          btnFlag++;
      } else if ($(this).val() == "internet:") {
          $('.mode-search-btn').show().css({ "background": "#777"}).append('internet');
          btnFlag++;
      } else {
        $('.mode-search-btn').hide().empty();
        $('.mode-search-btn').removeAttr('style');
        btnFlag--;
      }
    });

    */
    // Trying to make the ghostbar know when there is a letter in the input field.
    $('.ghostbar').on('keyup', function() {
      var bar = $(this).val();
      if (bar.length === 1) {
        $('.search-icon').css({
          "color": "#444"
        });
      } else if (bar.length === 0) {
        $('.clear-button').css({
          "display": "block"
        });
        $('.search-icon').removeAttr('style');
      }
    });

    /*
    ===================
    Here go the theme codes.
    ===================
    */

    // Dark theme for the browser.
    $('.dark-theme').click( function() {
      console.log('Changing theme to a darker one.');
      $('body').css({
        "background": "#444"
      });
      $('h1').css({
        "color": "white"
      });
      $('.search').css({
        "color": "white",
        "background": "#333"
      });
      $('.ghostbar').css({
        "background": "transparent",
        "color": "white"
      });
      $('.search-icon').css({
        "color": "whitesmoke"
      });
      $('.menu-container').css({
        "background": "#222",
        "color": "white"
      });
      $('.menu-container h2').css({
        "color": "whitesmoke"
      });
      $('.menu-container ul li a').css({
        "color": "whitesmoke"
      });
      $('.menu-container ul li h4').css({
        "color": "rgba(255,255,255,.5)"
      })
      $('p.information-text').css({
        "color": "rgba(255,255,255,.7)"
      })
    });

    // Changes to normal theme.
    $('.regular-theme').click( function() {
      console.log('Change to regular theme.');
      $('body').removeAttr('style');
      $('h1').removeAttr('style');
      $('.search').removeAttr('style');
      $('.ghostbar').removeAttr('style');
      $('.search-icon').removeAttr('style');
      $('.menu-container').css({ "background": "white" });
      $('.menu-container h2').removeAttr('style');
      $('.menu-open-button').removeAttr('style');
      $('p.information-text').removeAttr('style');
      $('.menu-container ul li a').removeAttr('style');
      $('.menu-container ul li h4').removeAttr('style')
    });
    // Document ready
});
