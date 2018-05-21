$(document).ready(function(){

  // flexslider
  $('.flexslider').flexslider({

    // Customize flexslider properties
    animation: "slide",
    slideshowSpeed: 5000,
    animationSpeed: 1000,
    slideshow: false,
    directionNav: false,
    controlNav: false,
    start: function (slider) {

      // Click on the left arrow
      $('#flex-left').on('click', function(event){

        // prevent default action
        event.preventDefault();

        // Move to previous slide
        $('.flexslider').flexslider('prev');

      });

      // Click on the right arrow
      $('#flex-right').on('click', function(event){

        // prevent default action
        event.preventDefault();

        // Move to next slide
        $('.flexslider').flexslider('next');

      });

    }

  });

  // form helper
  $(document).ready(function() {
  	// Test for placeholder support
      $.support.placeholder = (function(){
          var i = document.createElement('input');
          return 'placeholder' in i;
      })();

      // Hide labels by default if placeholders are supported
      if($.support.placeholder) {
          $('.form-label').each(function(){
              $(this).addClass('js-hide-label');
          });

          // Code for adding/removing classes here
          $('.form-group').find('input, textarea').on('keyup blur focus', function(e){

              // Cache our selectors
              var $this = $(this),
                  $parent = $this.parent().find("label");

  						switch(e.type) {
  							case 'keyup': {
  								 $parent.toggleClass('js-hide-label', $this.val() == '');
  							} break;
  							case 'blur': {
  								if( $this.val() == '' ) {
                      $parent.addClass('js-hide-label');
                  } else {
                      $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                  }
  							} break;
  							case 'focus': {
  								if( $this.val() !== '' ) {
                      $parent.removeClass('js-unhighlight-label');
                  }
  							} break;
  							default: break;
  						}
  						// previous implementation with ifs
              /*if (e.type == 'keyup') {
                  if( $this.val() == '' ) {
                      $parent.addClass('js-hide-label');
                  } else {
                      $parent.removeClass('js-hide-label');
                  }
              }
              else if (e.type == 'blur') {
                  if( $this.val() == '' ) {
                      $parent.addClass('js-hide-label');
                  }
                  else {
                      $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                  }
              }
              else if (e.type == 'focus') {
                  if( $this.val() !== '' ) {
                      $parent.removeClass('js-unhighlight-label');
                  }
              }*/
          });
      }
  });

  // smooth scrolling
  $("a[href^='#']").click(function () {
    var link = this.hash.substr(1);
    var section = $('*[id=' + link + ']');

    $('html,body').animate({
      scrollTop: section.offset().top
    }, 800);
    return false;
  });

});
