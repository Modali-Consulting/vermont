/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

  // How fast should filter panels open and close.
  var ACLU_MENU_SPEED_OPEN = 300;

  // Add classes to HTML element describing browser/OS.
  Drupal.behaviors.targetBrowsersOS = {
    attach: function (context, settings) {
      // Check to see which operating system we're using.
      if (navigator.appVersion.indexOf("Mac")!=-1) {
        $('html').addClass('mac');
      }
      else {
        $('html').addClass('pc');
      }
      // Check to see if the browser is Safari and doublecheck that it is not Chrome.
      if (navigator.userAgent.indexOf('Chrome') > -1) {
        $('html').addClass('chrome');
      }
      if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        $('html').addClass('safari');
      }
      if (navigator.userAgent.indexOf('Firefox') > -1) {
        $('html').addClass('firefox');
      }
      if (navigator.userAgent.indexOf('MSIE') > -1 || navigator.appVersion.indexOf('Trident/') > 0) {
        $('html').addClass('ie');
      }
    }
  };

  // Replace form elements w/ Uniform.
  Drupal.behaviors.uniformElements = {
    attach: function(context, settings) {
      $('select, input[type="checkbox"]', context).uniform();
    }
  };

  // Make skip nav link actually move focus to element after nav.
  Drupal.behaviors.skipNavLink = {
    attach: function(context, settings) {
      // Bind a click event to the 'skip' link
      $(".skip-nav", context).click(function(event){

        // Strip the leading hash and declare
        // the content we're skipping to
        var skipTo="#"+this.href.split('#')[1];

        // Setting 'tabindex' to -1 takes an element out of normal
        // tab flow but allows it to be focused via javascript
        $(skipTo).attr('tabindex', -1).on('blur focusout', function () {

            // When focus leaves this element,
            // remove the tabindex attribute
            $(this).removeAttr('tabindex');

        }).focus(); // Focus on the content container

      });
    }
  };


  // Check for featured image on pages
  Drupal.behaviors.withFeaturedImage = {
    attach: function(context, settings) {
      if( $('.panel-main-2 .pane-node-field-image').length ) {
        $('body').addClass('with-featured-image');
      }
    }
  };

  // Adding alt text to default logos
  Drupal.behaviors.logoAltText = {
    attach: function(context, settings) {
      var alt="ACLU logo";
      $('.field-site-logo img').each(function() {
        // Check to make sure there isn't already alt text
        if ($(this).attr('alt') == typeof undefined || $(this).attr('alt') == false) {
          $(this).attr('alt', alt);
        }
      });
    }
  };

  // Search Results Title
  Drupal.behaviors.searchResultsTitle = {
    attach: function(context, settings) {
      // Add an ID to the Your Search Results pane title.
      $('div[class*="pane-current-search-"]', context).find('.pane-title').attr('id', 'your_search_results');
      // Set focus on Search Results section on page load and make it tabbable.
      //$('div[class*="pane-current-search-"] .pane-title', context).focus().attr('tabindex', 0);
    }
  };

  // MENU STUFF

  // Add the active trail class to the menu on pages that provide this via field_menu_listing_parent.
  Drupal.behaviors.addActiveTrail = {
    attach: function(context, settings) {
      if (settings.affiliates !== undefined && settings.affiliates.menu_parent !== undefined) {
        var menu_parent_mlid = Drupal.settings.affiliates.menu_parent;
        if (menu_parent_mlid) {
          $('li#menu-' + menu_parent_mlid + '-1, li#menu-' + menu_parent_mlid + '-2').addClass('active-trail');
        }
      }
    }
  };

  // Show hover styles on first touch event for feature member tiles
  Drupal.behaviors.touchHover = {
    attach: function (context, settings) {
      $('.node-member.featured-action').on("touchstart", function (e) {
          var link = $(this);
          // Add .hover class to duplicate hover style at touch
          if (link.hasClass('hover')) {
              return true;
          } else {
              link.addClass("hover");
              $('.node-member.featured-action').not(this).removeClass("hover");
              e.preventDefault();
              return false;
          }
      });
    }
  };

  // Expand Listing Page Filters
  Drupal.behaviors.listingFilters = {
    attach: function(context, settings) {

      $(".listing-page-filter-view").once('aclu-listing-view-filters', function() {
        var $view = $(this);

        // Wrap the header and filters.
        $view.find('.view-filters').each(function() {
          var $filters = $(this);
          var $header = $filters.siblings('.view-header');

          $filters.add($header).wrapAll('<div class="listing-page--header-filter" />');
        });

        var $wrap = $view.find('.listing-page--header-filter');
        var $control = $wrap.find('.view-header .more');
        var $form = $wrap.find('.view-filters form');

        // Expand the filters when the filter header is clicked.
        $control.on('click keypress', function(e) {
          // On click or Enter keypress...
          if (e.which === 13 || e.type === 'click') {
            $form.slideToggle(ACLU_MENU_SPEED_OPEN, 'swing');
          }
        });
      });

    }
  };

})(jQuery, Drupal, this, this.document);
;
/**
 * @file
 * Contains custom functionality related to positioning and moving elements
 * based on the browser size. All mobile/responsive JS should go here.
 */

(function($, Drupal, window, document, R) {
  var acluAffiliateResponsive = {};

  // A list of breakpoints we are using. This variable is not actually used
  // anywhere important. Rather, it can be used as constants so you don't have
  // to hard-code your breakpoints everywhere. For example, you can use
  // "Breakpoints.TABLET" instead of "768".
  Breakpoints = {
    SMALL_MIN: 0,
    SMALL_MAX: 767,
    MEDIUM_MIN: 768,
    MEDIUM_MAX: 959,
    LARGE_MIN: 960,
    LARGE_MAX: 1199,
    WIDE: 1200
  };

  // Set up our responsive breakpoints.
  Response.create({
    prop: "width" // "width" "device-width" "height" "device-height" or "device-pixel-ratio"
    ,
    prefix: "min-width- r src" // the prefix(es) for your data attributes (aliases are optional)
    ,
    breakpoints: [1200, 960, 768, 320, 0] // min breakpoints (defaults for width/device-width)
    ,
    lazy: true // optional param - data attr contents lazyload rather than whole page at once
  });


  // Run this code only ONCE when DOM is ready.
  // Place any code here that absolutely should not run again,
  // which can happen with Drupal.behaviors.NAME.attach().
  // For example, code that attaches events to $(window)
  // should go here so that you don't inadvertently reattach
  // the events multiple times.
  $(document).ready(function() {
    var $win = $(window);
    var $body = $('body');

    // Run this first, so body classes are set, and
    // other javascript code can make use of those classes.
    responsive_set_classes($body);
  });

  /**
   * Sets  body classes based on breakpoint.
   * This can be used by other javascript functions (and CSS)
   * to make decisions -- for example, test if
   * $body.hasClass('layout-large') before hiding mobile nav.
   */
  var responsive_set_classes = function($body) {
    if (Response.band(Breakpoints.SMALL_MIN, Breakpoints.SMALL_MAX)) {
      $body.addClass('layout-small').removeClass('layout-medium layout-large layout-wide');
    }
    if (Response.band(Breakpoints.MEDIUM_MIN, Breakpoints.MEDIUM_MAX)) {
      $body.addClass('layout-medium').removeClass('layout-small layout-large layout-wide');
    }
    if (Response.band(Breakpoints.LARGE_MIN, Breakpoints.LARGE_MAX)) {
      $body.addClass('layout-large').removeClass('layout-small layout-medium layout-wide');
    }
    if (Response.band(Breakpoints.WIDE)) {
      $body.addClass('layout-wide').removeClass('layout-small layout-medium layout-large');
    }
  }


  // When the Responsive.js plugin is loaded, trigger
  // an event so we can react as needed.
  Response.ready(function() {
    $(window).trigger('responsive:ready');
  });


  // When a breakpoint is crossed, set some body classes
  // and trigger an event, so other functions can act.
  // You shouldn't add too much code in here directly.
  // You can listen for the event in your own functions,
  // or in the $(document).ready(function()) on DOM load,
  // using this code: $(window).on('responsive:crossed');
  Response.crossover('width', function() {
    var $body = $('body');

    // Update body classes.
    responsive_set_classes($body);

    // Whenever a breakpoint is crossed, trigger an event that
    // other javascript components can listen for and act on.
    // Run this last, so other adjustments above are already applied.
    $(window).trigger('responsive:crossed');
  });


  //
  // Set up Drupal.behaviors.NAME objects.
  // The main function in these objects is attach(),
  // which Drupal will re-run after every successful
  // AJAX command. This allows code to re-attach
  // behaviors to HTML that may have been re-written
  // or newly created. BUT, this can also cause events
  // to be reattached inadvertently, so be careful.
  //

  //////
  // Page element shuffling behaviors
  //////

  // Right Sidebar Shuffle
  Drupal.behaviors.rightSidebarShuffle = {
    attach: function(context, settings) {

      var panel_full_width = $('.interior-page .panel-full-width-2');
      var sidebar_right = $('.interior-page .sidebar-right');

      Response.ready(function() {
        if (R.band(Breakpoints.SMALL_MIN, Breakpoints.MEDIUM_MAX)) {
          sidebar_right.insertAfter(panel_full_width);
        }
        if (R.band(Breakpoints.LARGE_MIN)) {
          sidebar_right.insertAfter('.interior-page .panel-main-2.content-column');
        }
      });

      Response.crossover('width', function() {
        if (R.band(Breakpoints.SMALL_MIN, Breakpoints.MEDIUM_MAX)) {
          sidebar_right.insertAfter(panel_full_width);
        }
        if (R.band(Breakpoints.LARGE_MIN)) {
          sidebar_right.insertAfter('.interior-page .panel-main-2.content-column');
        }
      });

    }
  };

  // Related Stories Shuffle - Event page
  Drupal.behaviors.rightSidebarEventShuffle = {
    attach: function(context, settings) {

      var panel_full_width = $('.node-type-event .panel-full-width-2');
      var sidebar_right = $('.node-type-event .panel-right-2.sidebar-right');

      Response.crossover('width', function() {
        if (Response.band(Breakpoints.SMALL_MIN, Breakpoints.SMALL_MAX)) {
          sidebar_right.insertAfter(panel_full_width);
        }
        if (R.band(Breakpoints.MEDIUM_MIN, Breakpoints.MEDIUM_MAX)) {
          sidebar_right.insertAfter('.panel-main-2.content-column');
        }
        if (R.band(Breakpoints.LARGE_MIN)) {
          sidebar_right.insertAfter('.panel-main-2.content-column');
        }
      });
    }
  };

  //////
  // Misc. behaviors
  //////

  // Scrollbar Swiper
  // Duplicate any changes in the styleguide's custom.js
  Drupal.behaviors.scrollbarSwiper = {
    attach: function(context, settings) {
      
      // Check to see if touch device or not 
      if ($('html').hasClass('touch')) {
        var mouseEnabled = true;
      } 
      else {
        var mouseEnabled = false;
      }

      Response.ready(function() {
        if ($.mCustomScrollbar) {
          // Some reusable js used each time the scrollbar is rebuilt
          $.fn.prepScrollbar = function(index, element) {
            var totalWidth = 0;
            $(this).find('article').each(function() {
              totalWidth += $(this).outerWidth(true);
            });
            $(this).find('.window').css("width", totalWidth);
            $(this).mCustomScrollbar("destroy");
          }

          // Build initial scrollbar
          $(".scrollbar-swiper", context).each(function() {
            $(this).prepScrollbar();
            $(".scrollbar-swiper", context).each(function() {
              $(this).prepScrollbar();
              $(this).mCustomScrollbar({
                axis: "x", // horizontal scrollbar
                scrollbarPosition: "outside",
                autoDraggerLength: false,
                mouseWheel: {
                  enable: mouseEnabled
                }
              });
            });
          });
        }
      });

      Response.crossover('width', function() {
        if ($.mCustomScrollbar) {
          // Small layouts
          if (Response.band(Breakpoints.SMALL_MIN, Breakpoints.SMALL_MAX)) {
            // Rebuild scrollbar with mousewheel
            $(".scrollbar-swiper", context).each(function() {
              $(this).prepScrollbar();
              $(this).mCustomScrollbar({
                axis: "x", // horizontal scrollbar
                scrollbarPosition: "outside",
                autoDraggerLength: false,
                mouseWheel: {
                  enable: mouseEnabled
                }
              });
            });
          }
          // Medium layouts
          if (Response.band(Breakpoints.MEDIUM_MIN, Breakpoints.MEDIUM_MAX)) {
            // Rebuild scrollbar with mousewheel
            $(".scrollbar-swiper", context).each(function() {
              $(this).prepScrollbar();
              $(this).mCustomScrollbar({
                axis: "x", // horizontal scrollbar
                scrollbarPosition: "outside",
                autoDraggerLength: false,
                mouseWheel: {
                  enable: mouseEnabled
                }
              });
            });
          }
          // Large layouts
          if (Response.band(Breakpoints.LARGE_MIN, Breakpoints.LARGE_MAX)) {
            // Rebuild scrollbar without mousewheel
            $(".scrollbar-swiper", context).each(function() {
              $(this).prepScrollbar();
              $(this).mCustomScrollbar({
                axis: "x", // horizontal scrollbar
                scrollbarPosition: "outside",
                autoDraggerLength: false,
                mouseWheel: {
                  enable: mouseEnabled
                }
              });
            });
          }
          // Wide layouts
          if (Response.band(Breakpoints.WIDE)) {
            // Rebuild scrollbar without mousewheel
            $(".scrollbar-swiper", context).each(function() {
              $(this).prepScrollbar();
              $(this).mCustomScrollbar({
                axis: "x", // horizontal scrollbar
                scrollbarPosition: "outside",
                autoDraggerLength: false,
                mouseWheel: {
                  enable: mouseEnabled
                }
              });
            });
          }
        }
      });

    }
  };

  // Search Filters / Facets
  Drupal.behaviors.searchFilters = {
    attach: function(context, settings) {
      var getFacetText = function(filter) {
        var prefix = '<span class="element-invisible">' + Drupal.t('Show') + ' </span> ';
        var suffix = '<span class="element-invisible">' + filter + ' ' + Drupal.t('filters') + '</span>';

        return {
          more:  prefix + Drupal.t('More') + ' + ' + suffix,
          less: prefix + Drupal.t('Less') + ' - ' + suffix,
        };
      };

      // Specify areas to affect with search section styling.
      var search_section_parent = $('.section-search');

      // Specify filter list items.
      var filter_list_item = $('.section-search .sidebar-left div[class*="pane-facetapi-"] > .item-list > ul > li');

      // Wrap sidebar stuff in an inner wrapper.
      $(search_section_parent, context).find('.sidebar-left').once().wrapInner('<div class="inner"></div>');
      // Add a title that can get clicked to open the accordion.
      //      $(search_section_parent, context).find('.sidebar-left').children().once().prepend('<h2 class="sidebar-left--region-title">Search Options</h2>');
      // Wrap all sidebar panes in an inner wrapper so we can show/collapse them as accordion content.
      $(search_section_parent, context).find('.sidebar-left').find('.panel-pane').wrapAll('<div class="sidebar-left--region-content"></div>');
      // Replace all sidebar H2s with H3s to be more semantic/accessibility friendly.
      $(search_section_parent, context).find('.sidebar-left').find('.panel-pane h2').replaceWith(function() {
        return $("<h3 />").append($(this).contents()).addClass('pane-title');
      });
      // Make all replaced selectors tabbable.
      $(search_section_parent, context).find('.sidebar-left').find('div.selector').attr('tabindex', 0);

      Response.ready(function() {
        // Small
        //        if (R.band(Breakpoints.SMALL_MIN, Breakpoints.SMALL_MAX)) {
        //          $(search_section_parent, context).find('.sidebar-left--region-title').show();
        //        }
        // Small & Medium
        if (R.band(Breakpoints.SMALL_MIN, Breakpoints.MEDIUM_MAX)) {

          // On search results pages, scroll to search results.
          // $('#your_search_results', context).each(function() {
          //   $('html, body').once('search-results-scroll-processed').animate({
          //     scrollTop: $('#your_search_results').offset().top
          //   }, 1000);
          // });

          // Set focus on Search Results section on page load and make it tabbable.
          $('div[class*="pane-current-search-"] .pane-title', context).focus().attr('tabindex', 0);

          // Hide everything after the sixth line item.
          $(filter_list_item, context).filter(':nth-child(n+7)').hide();

          // For each facet pane, add a more link if there are more than 6 items.
          $(filter_list_item, context).closest('div[class*="pane-facetapi-"]').each(function() {
            if ($(this).closest('div[class*="pane-facetapi-"]').find('> .item-list > ul > li').length > 6) {
              $(this).closest('div[class*="pane-facetapi-"]').find('> .item-list').append('<span class="more search-filters--show-button">' + getFacetText($('h3.pane-title', this).text()).more + '</span>');
            }
          });

          $('.search-filters--show-button', context).click(function() {
            if ($(this).closest('div[class*="pane-facetapi-"]').find('> .item-list > ul > li').length > 6) {
              $(this).closest('div[class*="pane-facetapi-"]').find('> .item-list > ul > li').filter(':nth-child(n+7)').slideToggle('slow');
            }

            var facet_links = getFacetText($('h3.pane-title',  $(this).closest('div[class*="pane-facetapi-"]')).text());
            $(this).html(function(i, html) {
              return html === facet_links.more ? facet_links.less : facet_links.more;
            });
          });
        }
        // Large +
        if (R.band(Breakpoints.LARGE_MIN)) {
          // Hide Search Options title.
          //          $(search_section_parent, context).find('.sidebar-left--region-title').html('&nbsp;');
          // Hide everything after the 6th line item
          $(filter_list_item, context).filter(':nth-child(n+7)').hide();

          // Add the More button.
          $(filter_list_item, context).closest('div[class*="pane-facetapi-"]').each(function() {
            if ($(this).find('> .item-list > ul > li').length > 6) {
              $(this).find('> .item-list').append('<span class="more search-filters--show-button">' + getFacetText($('h3.pane-title', this).text()).more + '</span>');
            }
          });
          //
          $('.search-filters--show-button', context).click(function() {

            if ($(this).closest('div[class*="pane-facetapi-"]').find('> .item-list > ul > li').length > 6) {
              $(this).closest('div[class*="pane-facetapi-"]').find('> .item-list > ul > li').filter(':nth-child(n+7)').slideToggle('slow');
            }

            var facet_links = getFacetText($('h3.pane-title',  $(this).closest('div[class*="pane-facetapi-"]')).text());
            $(this).html(function(i, html) {
              return html === facet_links.more ? facet_links.less : facet_links.more;
            });
          });
        }

      });

      Response.crossover('width', function() {

        // Small & Medium
        //        if (R.band(Breakpoints.SMALL_MIN, Breakpoints.MEDIUM_MAX)) {
        //          $(search_section_parent, context).find('.sidebar-left--region-title').html('Search Options');
        //        }

        // Large +
        //        if (R.band(Breakpoints.LARGE_MIN)) {
        // Hide Search Options title.
        //          $(search_section_parent, context).find('.sidebar-left--region-title').html('&nbsp;');
        //        }

      });

    }
  };
 

  // Tabbed view on search results page
  Drupal.behaviors.tabbedSearchResults = {
    attach: function(context, settings) {
      Response.ready(function() {
        var menuTabs = $('<ul class="menu-tabs"></ul>');
        var searchOptions = $('.panel-two-col-sidebar-left-mix > .full-page-width > .inner > .sidebar-left');
        var searchResults = $('.panel-two-col-sidebar-left-mix > .full-page-width > .inner > .content-column');
        var searchTabs = [{ 
            tabTitle: "Results",
            tabHref: "#search-results"
        },{
            tabTitle: "Search options",
            tabHref: "#search-options"
        }];
        $(searchOptions).addClass("tab-content").attr('id' , 'search-options');
        $(searchResults).addClass("tab-content").attr('id' , 'search-results');;
        $(menuTabs).prependTo('.panel-two-col-sidebar-left-mix > .full-page-width > .inner');
        $.each(searchTabs, function(i, obj) {
          $(menuTabs).append("<li><a href='"+obj.tabHref+"'>"+obj.tabTitle+"</a></li>")
        });
        $('.menu-tabs a[href="#search-results"]').parent().addClass("current");
            $(".menu-tabs a").click(function(event) {
                event.preventDefault();
                $(this).parent().addClass("current");
                $(this).parent().siblings().removeClass("current");
                var tab = $(this).attr("href");
                $(".tab-content").not(tab).css("display", "none");
                $(tab).fadeIn();
            });
        if (R.band(Breakpoints.SMALL_MIN, Breakpoints.MEDIUM_MAX)) {
          $('#your_search_results').hide();
          $('.pane-search-api-page-search-aclu').insertBefore(menuTabs);
          $('.current-search-item-active').insertBefore(menuTabs);
          $('.current-search-item-reset-filters').insertBefore(menuTabs);
          $('#search-options').css("display", "none");
        }
        if (R.band(Breakpoints.LARGE_MIN)) {
          $(menuTabs).hide();
        }
      })
      Response.crossover('width', function() {
        var menuTabList = $('.menu-tabs');
        var searchOptionsShow = $('.panel-two-col-sidebar-left-mix > .full-page-width > .inner > .sidebar-left');
        var searchResultsShow = $('.panel-two-col-sidebar-left-mix > .full-page-width > .inner > .content-column');
        if (R.band(Breakpoints.SMALL_MIN, Breakpoints.MEDIUM_MAX)) {
          $(menuTabList).show();
          $('#your_search_results').hide();
          if ($('.menu-tabs a[href="#search-options"]').parent().hasClass('current')) {
            $('#search-options').show();
            $('#search-results').css("display", "none");
          }
          else {
            $('#search-options').css("display", "none");
          }
          $('.pane-search-api-page-search-aclu').insertBefore(menuTabList);
          $('.current-search-item-active').insertBefore(menuTabList);
          $('.current-search-item-reset-filters').insertBefore(menuTabList);
        }
        if (R.band(Breakpoints.LARGE_MIN)) {
          $(menuTabList).hide();
          $(searchOptionsShow).show();
          $(searchResultsShow).show();
          $('#your_search_results').show();
          $('.pane-search-api-page-search-aclu').prependTo('.sidebar-left--region-content');
          $('.current-search-item-active').insertBefore('.current-search-item-text');
          $('.current-search-item-reset-filters').insertBefore('.current-search-item-text');
        }
      })
    }
  };
  
  // Move first image after the first paragraph in small widths.
  Drupal.behaviors.moveImage = {
    attach: function(context, settings) {
      $('.content-column > .pane-node-field-image', context).each(function() {
        var $firstImage = $(this);
        // This should point back to the wrapping ".content-column".
        var $originalColumn = $firstImage.parent();

        // Check the content type.
        if ($('body').is('.node-type-asset, .node-type-campaign, .node-type-case, .node-type-chapter, .node-type-job, .node-type-kyr, .node-type-legislation, .node-type-page, .node-type-press-release, .node-type-update')) {
          var $firstParagraph = $('.content-column > .pane-node-body > .field-body > p:first-child');
          var $imageHeight = $firstImage.outerHeight();
          var $contentHeight = $('.pane-node-body').outerHeight();

          // Check to make sure there is more than one paragraph.
          if ($('.content-column > .pane-node-body > .field-body > p + p').length > 0) {

          // Check to make sure the content is longer than the image.
            if ($contentHeight > $imageHeight) {
              Response.ready(function() {
                // On load in small and medium ...
                if (R.band(Breakpoints.SMALL_MIN, Breakpoints.MEDIUM_MAX)) {
                  // ...move image after first paragraph.
                  $firstImage.insertAfter($firstParagraph);
                }
              });
              Response.crossover('width', function() {
                // On crossover to medium/small ...
                if (R.band(Breakpoints.SMALL_MIN, Breakpoints.MEDIUM_MAX)) {
                  // ... move image after first paragraph.
                  $firstImage.insertAfter($firstParagraph);
                }
                // On crossover to large ...
                if (R.band(Breakpoints.LARGE_MIN)) {
                  // ... move image back to initial location.
                  $firstImage.prependTo($originalColumn);
                }
              });
            }
          }
        }
      });
    }
  };

  // Full Bleed Banner Image
  Drupal.behaviors.fullBleedImage = {
    attach: function(context, settings) {

      var fullBleedImage = $('.panel-layout-one-col .full-page-width .banner--hero.with-image', context);

      fullBleedImage.each(function() {
        setImageWidth();
        $(window).resize(function() {
          setImageWidth();
        });

        function setImageWidth() {
          var windowWidth = window.innerWidth;
          // Set image wrapper and image to the width of the window
          fullBleedImage.css('max-width', windowWidth).find('img').css('width', windowWidth);
        }
      });
    }
  };

})(jQuery, Drupal, this, this.document, Response);
;
(function ($) {

Drupal.behaviors.aclu_colorbox = {
  attach: function (context, settings) {
    $(context).bind('cbox_open', function () {
      // Hide close button initially.
      $('#cboxClose', context).css('opacity', 0);
    });
    $(context).bind('cbox_load', function () {
      // Hide close button. (It doesn't handle the load animation well.)
      $('#cboxClose', context).css('opacity', 0);
    });
    $(context).bind('cbox_complete', function () {
      // Show close button with a delay.
      $('#cboxClose', context).fadeTo('fast', 0, function () {$(this).css('opacity', 1)});
    });
  }
};

})(jQuery);
;
