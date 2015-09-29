if ( typeof jQuery != 'undefined' ) {
    console.log("jQuery library is loaded!");
} else {
    console.log("jQuery library is not found!");
}

$(document).ready( function() {
    console.log("Document is ready.")

    // This opens the menu
    var menuflag = 0;
    $('.menu-open-button').on('click', function() {
        $('.menu-container').stop().animate({ right: '0px'}, 200);
        menuflag++      // Increment menuflag to enable backwards capability
        if (menuflag == 2) {
          $('.menu-container').stop().animate({ right: '-222px'}, 200);
          menuflag = menuflag - 2;
        }
    });

    $('.menu-close-button').on('click', function() {
        // This closes menu
        if (menuflag == 1) {
        $('.menu-container').stop().animate({ right: '-222px'}, 200);
        menuflag--;
      }
    });

    // Check value of ghostbar
    $('.ghostbar').on('keyup', function() {
      var bar = $(this).val();
      if (bar.length == 1) {
        $('.search-icon').css({
          "color": "#444"     // This sets the icon to become darker.
        });
      } else if (bar.length == 0) {
        $('.clear-button').css({
          "display": "block"    // The clear button is not added. No function.
        });
        $('.search-icon').css({
          "color": "rgba(1,1,1,.6)"
        });  // Removes the style attribute (Warning): This also removes the style when themes are in use.
      }
    });
});
