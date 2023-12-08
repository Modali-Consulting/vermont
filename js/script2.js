/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t,e){var i="ui-effects-";t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[c[l].cache]=o[c[l].cache],n=s._rgba=o._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,a.transparent),s):a[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,o,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(o),o=e);var u=this,d=t.type(n),p=this._rgba=[];return o!==e&&(n=[n,o,r,h],d="array"),"string"===d?this.parse(s(n)||a._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var a=s.cache;f(s.props,function(t,e){if(!u[a]&&s.to){if("alpha"===t||null==n[t])return;u[a]=s.to(u._rgba)}u[a][e.idx]=i(n[t],e,!0)}),u[a]&&0>t.inArray(null,u[a].slice(0,3))&&(u[a][3]=1,s.from&&(u._rgba=s.from(u[a])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),a=c[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(t,n){var a=n.idx,o=r[a],l=s[a],c=u[n.type]||{};null!==l&&(null===o?h[a]=l:(c.mod&&(l-o>c.mod/2?o+=c.mod:o-l>c.mod/2&&(o-=c.mod)),h[a]=i((l-o)*e+o,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,a=t[2]/255,o=t[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==o?1:o]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],a=t[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,e+1/3)),Math.round(255*n(r,o,e)),Math.round(255*n(r,o,e-1/3)),a]},f(c,function(s,n){var a=n.props,o=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===e)return this[o].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[o].slice();return f(a,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[o]=d,n):l(d)},f(a,function(e,i){l.fn[e]||(l.fn[e]=function(n){var a,o=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===o?c:("function"===o&&(n=n.call(this,c),o=t.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=c+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var a,o,r="";if("transparent"!==n&&("string"!==t.type(n)||(a=s(n)))){if(n=l(a||n),!d.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&o&&o.style;)try{r=t.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(o),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},a=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function s(e,i){var s,n,o={};for(s in i)n=i[s],e[s]!==n&&(a[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(o[s]=n));return o}var n=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,a,o,r){var h=t.speed(a,o,r);return this.queue(function(){var a,o=t(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var e=t(this);return{el:e,start:i(this)}}),a=function(){t.each(n,function(t,i){e[i]&&o[i+"Class"](e[i])})},a(),l=l.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){a(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,a){return s?t.effects.animateClass.call(this,{add:i},s,n,a):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,a){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,a):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(s,n,a,o,r){return"boolean"==typeof n||n===e?a?t.effects.animateClass.call(this,n?{add:s}:{remove:s},a,o,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:s},n,a,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,a){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,a)}})}(),function(){function s(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.2",save:function(t,e){for(var s=0;e.length>s;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},restore:function(t,s){var n,a;for(a=0;s.length>a;a++)null!==s[a]&&(n=t.data(i+s[a]),n===e&&(n=""),t.css(s[a],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return e.wrap(s),(e[0]===a||t.contains(e[0],a))&&t(a).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var a=e.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),t.fn.extend({effect:function(){function e(e){function s(){t.isFunction(a)&&a.call(n[0]),t.isFunction(e)&&e()}var n=t(this),a=i.complete,r=i.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),s()):o.call(n[0],i,s)}var i=s.apply(this,arguments),n=i.mode,a=i.queue,o=t.effects.effect[i.effect];return t.fx.off||!o?n?this[n](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):a===!1?this.each(e):this.queue(a||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()})(jQuery);;
/*jslint browser: true */ /*global jQuery: true */

/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

// TODO JsDoc

/**
 * Create a cookie with the given key and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String key The key of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function (key, value, options) {

    // key and value given, set cookie...
    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
        options = jQuery.extend({}, options);

        if (value === null) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? String(value) : encodeURIComponent(String(value)),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
;
/**
 * acluTabbedPanels jQuery plugin.
 *
 * Converts a series of elements containing content into panels
 * that can be shown/hidden using tabs.
 *
 * Usage:
 *  To Setup:
 *    $wrapper.acluTabbedPanels({
 *      panel: '.my-panel-wrapper-selector',
 *      label: '.my-panel-label-selector',
 *      tabLinksWrapperClasses: ['my-nav-wrapper']
 *    });
 *
 *  To Destroy:
 *    $wrapper.acluTabbedPanels('destroy');
 */
(function($) {

  // By default, the plugin assumes the panels are wrapped like this:
  //   <div class="tab-panel">
  //     <div class="tab-panel-heading">Heading for this panel</div>
  //     My content...
  //   </div>
  var defaults = {
    // A selector for the element that wraps each panel of content.
    panel: '.tab-panel',
    // A selector for the element that wraps the heading within a panel.
    label: '.tab-panel-heading',
    // One or more classes that can be added to the <ul> wrapper that will be
    // created around the tab links.
    tabLinksWrapperClasses: []
  };

  // A namespace for the plugin settings data.
  var internalPrefix = '_aclu_tabbed_panels';

  var methods = {
    /**
     * Plugin constructor.
     *
     * @param Object options
     *   jQuery plugin options.
     */
    init: function(options) {
      return $(this).each(function() {
        var settings = $.extend({}, defaults, options || {});
        $(this).data(internalPrefix, settings);

        methods.setup.apply(this);
      });
    },

    /**
     * Generates tab links and wrappers for the tabbed panels.
     *
     * @return jQuery
     */
    setup: function () {
      var $wrapper = $(this);
      var settings = $wrapper.data(internalPrefix);

      return $wrapper.each(function() {
        var $component = $(this);

        if (!$component.hasClass('aclu-tabbed-panels-processed')) {
          $component.addClass('aclu-tabbed-panels-processed');

          var links_html = '';
          var $panels = $component.find(settings.panel);

          // Generate unique IDs for panels, generate links,
          // and wrap in divs to help style columns.
          $panels
            .wrapAll('<div class="tab-columns"><div class="tab-panels">')
            .each(function (idx, val) {
              var $panel = $(this);
              var panel_id = 'tab-panel-' + idx;
              var link_id = 'tab-' + panel_id;

              // Give panels a unique ID so we can easily target them later.
              $panel.attr('id', panel_id).attr('role', 'tab-panel')
                .attr('aria-labelled-by', link_id);

              // Generate tab links from text in heading elements.
              var label = $panel.find(settings.label).html();

              links_html += '<li><a aria-controls="' + panel_id + '" id="' + link_id + '" role="tab" tabindex="0" href="#' + panel_id + '">' + label + '</a></li>';
            });

          var classes = ['tab-links'];
          if ($.isArray(settings.tabLinksClasses)) {
            classes = $.merge(classes, settings.tabLinksClasses);
          }
          $component.find('.tab-columns').prepend('<ul role="tablist" class="' + classes.join(' ') + '">' + links_html + '</ul>');

          // Add click handler to nav links.
          var $nav_links = $component.find('.tab-links li a');

          var openTab = function($nav_link, scroll = true) {
            var id = $nav_link.attr('href');
            $nav_link.attr('aria-selected', true).addClass('active');
            $component.find(id).show().attr('hidden', '');
            // Auto-scroll to top of component, for better UX.
            if (scroll) {
              $('html, body').animate({
                scrollTop: $component.offset().top
              }, 300);
            }
          }

          var closeAllTabs = function() {
            $nav_links.attr('aria-selected', false).removeClass('active');
            $component.find(settings.panel).hide().attr('hidden', 'hidden');
          }

          $nav_links.on('click', function (ev) {
            ev.preventDefault();
            closeAllTabs();
            openTab($(ev.target));
          });

          // Add keyboard navigation for accessibility.
          $nav_links.on('keydown', function (ev) {
            var $selected = $(ev.target);

            switch (ev.which) {
              // End:
              case 35:
                ev.preventDefault();
                $nav_links.last().focus();
                break;

              // Home:
              case 36:
                ev.preventDefault();
                $nav_links.first().focus();
                break;

              // Up arrow:
              case 38:
                ev.preventDefault();
                var idx = $selected.parent().index();
                if (idx > 0) {
                  $nav_links.eq(idx - 1).focus();
                }
                else {
                  $nav_links.last().focus();
                }
                break;

              // Down arrow:
              case 40:
                ev.preventDefault();
                var idx = $selected.parent().index();
                if (idx < $nav_links.length - 1) {
                  $nav_links.eq(idx + 1).focus();
                }
                else {
                  $nav_links.eq(0).focus();
                }
                break;
            }
          });

          // Initially, only the first panel is shown.
          closeAllTabs();
          openTab($nav_links.eq(0), false);
        }
      });
    },

    /**
     * Removes tab links, wrappers, and events.
     *
     * @return jQuery
     */
    destroy: function() {
      var $wrapper = $(this);
      var settings = $wrapper.data(internalPrefix);

      return $wrapper.each(function() {
        var $component = $(this);

        if ($component.hasClass('aclu-tabbed-panels-processed')) {
          // Remove nav links from DOM (also removes click handlers.)
          $component.find('.tab-links').remove();
          // Make sure all panels are showing.
          $component.find(settings.panel)
            .attr('role', '')
            .attr('hidden', '')
            .show();
          // Unwrap tab-columns and tab-panels wrappers.
          $component.find(settings.panel).unwrap().unwrap();

          $component.removeClass('aclu-tabbed-panels-processed');
        }
      });
    }
  };

  /**
    * Defines AcluTabbedPanels plugin.
    *
    * @param String method
    *   If null, the plugin will call its initialization function.
    *   Otherwise will call the specified function if it exists.
    */
  $.fn.acluTabbedPanels = function(method) {
    if (methods[method]) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    }
    else if (typeof method === 'object' || ! method) {
      return methods.init.apply(this, arguments);
    }
  };
} (jQuery));
;
/**
 * acluToggleContent jQuery plugin.
 *
 * Converts a series of elements containing content into panes
 * that can be shown/hidden via a click on a trigger such as a heading.
 *
 * Usage:
 *  To Setup:
 *    $wrapper.acluToggleContent({
 *      trigger: 'h2',
 *      panel: '.content-panel',
 *      accordion: true,
 *      toggle_icon: true,
 *      open_first_item: true,
 *      open_speed: 'fast',
 *      close_speed: 'fast',
 *      after: function() { ... }
 *    });
 *
 *  To Destroy:
 *    $wrapper.acluToggleContent('destroy');
 */
(function($) {

  // By default, the plugin assumes the panels are wrapped like this:
  //   <div class="component">
  //     <h2>Heading for this panel</h2>
  //     <p>My content...</p>
  //     <h2>Heading for this panel</h2>
  //     <p>My content...</p>
  //   </div>
  var defaults = {
    // A selector for the element that triggers opening/closing content panel.
    trigger: 'h2',
    // A selector for element that wraps each content panel under a trigger.
    // If left blank, content up until the next trigger will be wrapped
    // in a div and treated as a pane controlled by the trigger above it.
    panel: '',
    // Whether to allow only one content pane to be open at a time.
    accordion: true,
    // Whether to add a <span class="toggle-icon"></span> in the trigger HTML.
    toggle_icon: true,
    // Whether the first item in the list should be opened by default.
    open_first_item: false,
    // Speed at which to open the content pane. In milliseconds or fast/slow.
    open_speed: 'fast',
    // Speed at which to close the content pane. In milliseconds or fast/slow.
    close_speed: 'fast',
    // Function to be called after a pane is opened. Usually used to
    // scroll the document to the pane.
    after: function() {}
  };

  // A namespace for the plugin settings data.
  var internalPrefix = '_aclu_toggle_content';

  var methods = {
    /**
     * Plugin constructor.
     *
     * @param Object options
     *   jQuery plugin options.
     */
    init: function(options) {
      return $(this).each(function(component_idx, component_val) {
        var opts = options || {};
        opts.component_idx = component_idx;
        var settings = $.extend({}, defaults, opts);
        $(this).data(internalPrefix, settings);

        methods.setup.apply(this);
      });
    },

    /**
     * Generates tab links and wrappers for the tabbed panels.
     *
     * @return jQuery
     */
    setup: function () {
      var selfObj = this;
      var $wrapper = $(this);
      var settings = $wrapper.data(internalPrefix);

      return $wrapper.each(function() {
        var $component = $(this);

        if (!$component.hasClass('aclu-toggle-content-processed')) {
          $component.addClass('aclu-toggle-content-processed');

          var $triggers = $component.find(settings.trigger);
          $triggers.each(function (idx, val) {
            var $trigger = $(this);
            var trigger_id = $trigger.attr('id');
            // Assign unique IDs to trigger if it doesn't have one already.
            if (trigger_id == undefined || trigger_id === '') {
              trigger_id = 'toggle-' + settings.component_idx + '-' + idx;
              $trigger.attr('id', trigger_id);
            }
            var content_id = trigger_id + '-content';

            var $content_panel = null;
            if (settings.panel === '') {
              $trigger.nextUntil($component.find(settings.trigger))
                .wrapAll('<div class="toggle-content">');
              $content_panel = $trigger.next('.toggle-content');
            }
            else {
              $content_panel = $trigger.next(settings.content_pane)
                .addClass('toggle-content');
            }
            $content_panel
              .attr('id', content_id)
              .attr('aria-labelledby', trigger_id);

            if (settings.toggle_icon && !$trigger.find('> span.toggle-icon').length) {
              $trigger.append('<span class="toggle-icon">');
            }
            $trigger.addClass('toggle-content-trigger')
              .attr('aria-controls', content_id)
              .wrapInner('<button>');

            // Handle click interactions on the triggers, to show/hide content.
            var $button = $trigger.find('button');
            $button.on('click', function (ev) {
              if ($trigger.hasClass('active')) {
                methods._close.apply(selfObj, [$trigger]);
              }
              else {
                methods._open.apply(selfObj, [$trigger]);
              }
            });

            $button.on('keydown', function (ev) {
              switch (ev.which) {
                // End:
                case 35:
                  ev.preventDefault();
                  $triggers.last().find('button').focus();
                  break;

                // Home:
                case 36:
                  ev.preventDefault();
                  $triggers.first().find('button').focus();
                  break;

                // Up arrow:
                case 38:
                  ev.preventDefault();
                  var trigger_idx = $triggers.index($trigger);
                  if (trigger_idx > 0) {
                    $triggers.eq(trigger_idx - 1).find('button').focus();
                  }
                  else {
                    $triggers.last().find('button').focus();
                  }
                  break;

                // Down arrow:
                case 40:
                  ev.preventDefault();
                  var trigger_idx = $triggers.index($trigger);
                  if (trigger_idx < ($triggers.length - 1)) {
                    $triggers.eq(trigger_idx + 1).find('button').focus();
                  }
                  else {
                    $triggers.first().find('button').focus();
                  }
                  break;
              }
            });

          });

          // Open the first "active" pane, or just the first pane.
          if (settings.open_first_item) {
            var $active_triggers = $triggers.filter('.active');
            var $trigger = $active_triggers.length ? $active_triggers.eq(0) : $triggers.eq(0);
            // Since this is setup, don't run the "after" animation.
            methods._open.apply(selfObj, [$trigger, false]);
          }

          // Ensure all others are closed to begin with.
          $triggers.filter(':not(.active)').each(function () {
            var $trigger = $(this);
            methods._close.apply(selfObj, [$trigger]);
          });

        };
      });
    },

    /**
     * Opens (makes visible) a content pane controlled by the given trigger.
     *
     * @param jQuery $trigger
     *   JQuery object for the trigger that controls a content pane.
     * @param bool do_after
     *   Should the after function be called, if one was defined
     *   in the settings. (Good for setup, where we don't want to animate.)
     */
    _open: function($trigger, do_after = true) {
      var selfObj = this;
      var $component = $(this);
      var settings = $component.data(internalPrefix);
      var $triggers = $component.find(settings.trigger);
      var trigger_id = $trigger.attr('id');
      var content_id = trigger_id + '-content';

      $trigger.addClass('active')
      $component.find('#' + content_id)
        .attr('aria-expanded', 'true')
        .slideDown(settings.open_speed, 'easeOutExpo', do_after ? settings.after: {});

      if (settings.accordion) {
        $triggers.not($trigger).each(function() {
          methods._close.apply(selfObj, [$(this)]);
        });
      }
    },

    /**
     * Closes (hides) a content pane controlled by the given trigger.
     *
     * @param jQuery $trigger
     *   JQuery object for the trigger that controls a content pane.
     */
    _close: function($trigger) {
       var $component = $(this);
       var settings = $component.data(internalPrefix);
       var trigger_id = $trigger.attr('id');
       var content_id = trigger_id + '-content';

       $trigger.removeClass('active');
       $component.find('#' + content_id)
         .attr('aria-expanded', 'false')
         .slideUp(settings.close_speed, 'easeOutExpo');
    },

    /**
     * Removes tab links, wrappers, and events.
     *
     * @return jQuery
     */
    destroy: function() {
      var $wrapper = $(this);
      var settings = $wrapper.data(internalPrefix);

      return $wrapper.each(function() {
        var $component = $(this);

        if ($component.hasClass('aclu-toggle-content-processed')) {
          $component.find(settings.trigger).each(function() {
            var $trigger = $(this);
            $trigger
              .removeAttr('aria-controls')
              .removeClass('toggle-content-trigger')
              .removeClass('active');

            var $button = $trigger.find('> button').contents().unwrap();
          });

          // Unwrap tab-columns and tab-panels wrappers.
          $component.find('.toggle-content')
            .removeAttr('aria-labelledby')
            .removeAttr('aria-expanded')
            .show();
          if (settings.panel === '') {
            $component.find('.toggle-content').contents().unwrap();
          }
          else if (settings.panel !== '.toggle-content') {
            $component.find('.toggle-content').removeClass('toggle-content');
          }

          $component.removeClass('aclu-toggle-content-processed');
        }
      });
    }
  };

  /**
    * Defines AcluToggleContent plugin.
    *
    * @param String method
    *   If null, the plugin will call its initialization function.
    *   Otherwise will call the specified function if it exists.
    */
  $.fn.acluToggleContent = function(method) {
    if (methods[method]) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    }
    else if (typeof method === 'object' || ! method) {
      return methods.init.apply(this, arguments);
    }
  };
} (jQuery));
;
/*! jQuery UI - v1.10.2 - 2013-03-14
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(t){t.effects.effect.slide=function(e,i){var s,n=t(this),a=["position","top","bottom","left","right","width","height"],o=t.effects.setMode(n,e.mode||"show"),r="show"===o,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u={};t.effects.save(n,a),n.show(),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,c?isNaN(s)?"-"+s:-s:s),u[l]=(r?c?"+=":"-=":c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&n.hide(),t.effects.restore(n,a),t.effects.removeWrapper(n),i()}})}})(jQuery);;
(function ($) {

/**
 * Prevents consecutive form submissions of identical form values.
 *
 * Repetitive form submissions that would submit the identical form values are
 * prevented, unless the form values are different from the previously
 * submitted values.
 *
 * This is a simplified re-implementation of a user-agent behavior that should
 * be natively supported by major web browsers, but at this time, only Firefox
 * has a built-in protection.
 *
 * A form value-based approach ensures that the constraint is triggered for
 * consecutive, identical form submissions only. Compared to that, a form
 * button-based approach would (1) rely on [visible] buttons to exist where
 * technically not required and (2) require more complex state management if
 * there are multiple buttons in a form.
 *
 * This implementation is based on form-level submit events only and relies on
 * jQuery's serialize() method to determine submitted form values. As such, the
 * following limitations exist:
 *
 * - Event handlers on form buttons that preventDefault() do not receive a
 *   double-submit protection. That is deemed to be fine, since such button
 *   events typically trigger reversible client-side or server-side operations
 *   that are local to the context of a form only.
 * - Changed values in advanced form controls, such as file inputs, are not part
 *   of the form values being compared between consecutive form submits (due to
 *   limitations of jQuery.serialize()). That is deemed to be acceptable,
 *   because if the user forgot to attach a file, then the size of HTTP payload
 *   will most likely be small enough to be fully passed to the server endpoint
 *   within (milli)seconds. If a user mistakenly attached a wrong file and is
 *   technically versed enough to cancel the form submission (and HTTP payload)
 *   in order to attach a different file, then that edge-case is not supported
 *   here.
 *
 * Lastly, all forms submitted via HTTP GET are idempotent by definition of HTTP
 * standards, so excluded in this implementation.
 */
Drupal.behaviors.formSingleSubmit = {
  attach: function () {
    function onFormSubmit (e) {
      var $form = $(e.currentTarget);
      var formValues = $form.serialize();
      var previousValues = $form.attr('data-drupal-form-submit-last');
      if (previousValues === formValues) {
        e.preventDefault();
      }
      else {
        $form.attr('data-drupal-form-submit-last', formValues);
      }
    }

    $('body').once('form-single-submit')
      .delegate('form:not([method~="GET"])', 'submit.singleSubmit', onFormSubmit);
  }
};

})(jQuery);
;
