(function ($, Drupal, window, document) {

  Drupal.behaviors.acluClickToCallFormAction = {
    attach: function (context, settings) {

      $('.mobile-commons-CallSignupForm', context).once('aclu-click-to-call').submit(function(ev) {
        var widgetForm = $(this);

        // prevent double submit
        $('button[type=submit]', this).attr('disabled', 'disabled');
        if (!widgetForm.data('submitting')) {
          ev.preventDefault();
          widgetForm.data('submitting', 1);

          var posting = Drupal.acluUpdatesSignupClickToCallSpringboardSignup(widgetForm);
          posting.always(function() {
            widgetForm.submit();
          });
        }
      });
    }
  }
})(jQuery, Drupal, this, this.document);
;
/**
 * @file
 * Make the promotional lightbox responsive.
 */

(function ($) {

  Drupal.settings.acluPromotionsGetCorrectColorboxWidth = function () {
    if ($(window).width() <= 925) {
      return "95%";
    }
    return "926px";
  }

  Drupal.settings.acluPromotionsResizeColorbox = function () {
    if (typeof $.colorbox !== 'undefined') {
      $.colorbox.resize({
        width: Drupal.settings.acluPromotionsGetCorrectColorboxWidth()
      });
    }
  }

  Drupal.behaviors.aclu_promotions = {
    attach: function (context, settings) {

      $('iframe.cboxIframe', context).once("aclu_promotions", function() {
        $(this).attr('scrolling', 'no');
        $(this).load(function() {
          window.scrollTo(0,0);
        });
      });

      // Resize the colorbox on pageload using the correct, dynamic
      // width
      Drupal.settings.acluPromotionsResizeColorbox();

      // When the window is resized, we need to resize the colorbox to
      // account for the new width
      $(window, context).resize(function() {
        Drupal.settings.acluPromotionsResizeColorbox();
      });
    }
  };

})(jQuery);
;
(function ($) {
    Drupal.acluUpdatesSignupClickToCallSpringboardSignup = function (widgetForm) {
        var queryStrings = Drupal.behaviors.acluUpdatesSignupClickToCallGetQueryParams(document.location.search);
        return $.post('/click-to-call-sb-signup',
            {
                // Keys are those used in Springboard.
                sbp_first_name: widgetForm.find('.first-name').val(),
                mobile_phone_number: widgetForm.find('.phone').val(),
                mail: widgetForm.find('.email').val(),
                sbp_zip: widgetForm.find('.zip').val(),
                ms_aff: queryStrings.hasOwnProperty('ms_aff') ? queryStrings['ms_aff'] : '',
                ms_chan: queryStrings.hasOwnProperty('ms_chan') ? queryStrings['ms_chan'] : '',
                ms: queryStrings.hasOwnProperty('ms') ? queryStrings['ms'] : '',
                initms_aff: queryStrings.hasOwnProperty('initms_aff') ? queryStrings['initms_aff'] : '',
                initms_chan: queryStrings.hasOwnProperty('initms_chan') ? queryStrings['initms_chan'] : '',
                initms: queryStrings.hasOwnProperty('initms') ? queryStrings['initms'] : '',
                source_node_id: Drupal.settings.aclu_updates_signup.node_id,
                source_title: Drupal.settings.aclu_updates_signup.node_title,
                utm_campaign: queryStrings.hasOwnProperty('utm_campaign') ? queryStrings['utm_campaign'] : '',
                utm_content: queryStrings.hasOwnProperty('utm_content') ? queryStrings['utm_content'] : '',
                utm_medium: queryStrings.hasOwnProperty('utm_medium') ? queryStrings['utm_medium'] : '',
                utm_source: queryStrings.hasOwnProperty('utm_source') ? queryStrings['utm_source'] : ''
            }
        );
    };

    // returns an object with the query strings as key:value
    Drupal.behaviors.acluUpdatesSignupClickToCallGetQueryParams = function(qs) {
        qs = qs.split("+").join(' ');
        var params = {};
        var tokens;
        var regex = /[?&]?([^=]+)=([^&]*)/g;
        while (tokens = regex.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }
        return params;
    };
})(jQuery);
;
(function ($) {
    'use strict';
    Drupal.behaviors.ACChangeEnterBehavior = {
        attach: function (context, settings) {
            $('input.form-autocomplete', context).once('ac-change-enter-behavior', function() {
                $(this).keypress(function(e) {
                    var ac = $('#autocomplete');
                    if (e.keyCode == 13 && typeof ac[0] != 'undefined') {
                        e.preventDefault();
                        ac.each(function () {
                            if(this.owner.selected == false){
                                this.owner.selectDown();
                            }
                            this.owner.hidePopup();
                        });
                        $(this).trigger('change');
                    }
                });
            });
        }
    };
}(jQuery));
;
(function ($) {
  Drupal.behaviors.fitvids = {
    attach: function (context, settings) {
      try
      {
        // Check that fitvids exists
        if (typeof $.fn.fitVids !== 'undefined') {
        
          // Check that the settings object exists
          if (typeof settings.fitvids !== 'undefined') {
            
            // Default settings values
            var selectors = ['body'];
            var simplifymarkup = true;
            var custom_domains = null;
            
            // Get settings for this behaviour
            if (typeof settings.fitvids.selectors !== 'undefined') {
              selectors = settings.fitvids.selectors;
            }
            if (typeof settings.fitvids.simplifymarkup !== 'undefined') {
              simplifymarkup = settings.fitvids.simplifymarkup;
            }
            if (settings.fitvids.custom_domains.length > 0) {
              custom_domains = settings.fitvids.custom_domains;
            }
                
            // Remove media wrappers
            if (simplifymarkup) {
              if ($(".media-youtube-outer-wrapper").length) {
                $(".media-youtube-outer-wrapper").removeAttr("style");
                $(".media-youtube-preview-wrapper").removeAttr("style");
                $(".media-youtube-outer-wrapper").removeClass("media-youtube-outer-wrapper");
                $(".media-youtube-preview-wrapper").removeClass("media-youtube-preview-wrapper");
              }
              if ($(".media-vimeo-outer-wrapper").length) {
                $(".media-vimeo-outer-wrapper").removeAttr("style");
                $(".media-vimeo-preview-wrapper").removeAttr("style");
                $(".media-vimeo-outer-wrapper").removeClass("media-vimeo-outer-wrapper");
                $(".media-vimeo-preview-wrapper").removeClass("media-vimeo-preview-wrapper");
              }
            }
            
            // Fitvids!
            for (var x = 0; x < selectors.length; x ++) {
              $(selectors[x]).fitVids({customSelector: custom_domains});
            }
          }
        }
      }
      catch (e) {
        // catch any fitvids errors
        window.console && console.warn('Fitvids stopped with the following exception');
        window.console && console.error(e);
      }
    }
  };
}(jQuery));
;
(function ($) {

Drupal.behaviors.mytube = {
  attach: function (context, settings) {
    $('.mytubetrigger', context).once('mytubetrigger').click(function () {
      $(this).hide();
      $(this).after(unescape($('.mytubeembedcode', this).html()));
      Drupal.attachBehaviors(this);

      // If API usage is enabled, instantiate the API.
      if ($(this).hasClass('mytube-js-api')) {
        Drupal.behaviors.mytube.InitiateYouTubeAPI();
      }

    });

    // Start the video when pressing the Enter button
    $('.mytubetrigger', context).keypress(function (e) {
      if (e.which == 13) { // Enter key pressed
        $(this).click(); // Trigger search button click event
      }
    });

  }
};

/**
 * If API usage is enabled, initalize the player once the API is ready.
 */
Drupal.behaviors.mytube.InitiateYouTubeAPI = function (context) {
  if (typeof this.initialized === 'undefined') {
    // Load the iFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    this.initialized = true;
  }
};

})(jQuery);
;
