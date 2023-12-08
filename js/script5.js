/*!
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in x[0]&&!x[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),x.focus())}function c(t){c.str!==t&&(x.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!U){U=$=!0,c(_.get("className")),x.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=Math.max((l!==!1?Math.min(h,a(l,"x")):h)-z-D,0),_.h=Math.max((f!==!1?Math.min(s,a(f,"y")):s)-N-j,0),I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),x.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){x||(V=!1,E=t(i),x=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),L=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),y=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),R=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),S=t('<button type="button"/>').attr({id:Z+"Slideshow"}),L),B=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(R).add(S)),e.body&&!x.parent().length&&t(e.body).append(v,x.append(y,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return x?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;U&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),U&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if($=!0,q=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){L.show()},100),_.get("inline")){var c=t(e).eq(0);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),q=_.get("createImg"),t(q).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(q.height=q.height/i.devicePixelRatio,q.width=q.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){q.height-=q.height*e,q.width-=q.width*e},_.mw&&q.width>_.mw&&(e=(q.width-_.mw)/q.width,o()),_.mh&&q.height>_.mh&&(e=(q.height-_.mh)/q.height,o())),_.h&&(q.style.marginTop=Math.max(_.mh-q.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(q.style.cursor="pointer",t(q).bind("click."+Z,function(){J.next()})),q.style.width=q.width+"px",q.style.height=q.height+"px",h(q)},1)}),q.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,x,y,b,T,C,H,k,W,E,I,M,L,F,R,S,K,P,B,O,_,j,D,N,z,A,q,U,$,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullscreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){S.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),x.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),S.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),x.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,S.hide(),t(),ae.unbind(ne,e).unbind(ie,t),x.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),S.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(x[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(x[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=x.offset();if(E.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,x.css({position:"fixed"})):(l=h,d=s,x.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),x.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||x.css(r),x.dequeue().animate(r,{duration:e||0,complete:function(){n(),$=!1,y[0].style.width=_.w+z+D+"px",y[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;U&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if(U){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(q).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var n,o,a=W.length;U&&(o=function(){clearTimeout(Q),L.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&R.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?x.fadeTo(g,1,i):i())},"fade"===_.get("transition")?x.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!$&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!$&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){U&&!G&&(G=!0,U=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),x.stop().fadeTo(_.get("fadeOut")||0,0,function(){x.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){x&&(x.stop(),t[Y].close(),x.stop(!1,!0).remove(),v.remove(),G=!1,x=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);;
/**
 * @file
 * Colorbox module init js.
 */

(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($('a, area, input', context).colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    // Use "data-colorbox-gallery" if set otherwise use "rel".
    settings.colorbox.rel = function () {
      if ($(this).data('colorbox-gallery')) {
        return $(this).data('colorbox-gallery');
      }
      else {
        return $(this).attr('rel');
      }
    };

    $('.colorbox', context)
      .once('init-colorbox').each(function(){
        // Only images are supported for the "colorbox" class.
        // The "photo" setting forces the href attribute to be treated as an image.
        var extendParams = {
          photo: true
        };
        // If a title attribute is supplied, sanitize it.
        var title = $(this).attr('title');
        if (title) {
          extendParams.title = Drupal.colorbox.sanitizeMarkup(title);
        }
        $(this).colorbox($.extend({}, settings.colorbox, extendParams));
      });

    $(context).bind('cbox_complete', function () {
      Drupal.attachBehaviors('#cboxLoadedContent');
    });
  }
};

// Create colorbox namespace if it doesn't exist.
if (!Drupal.hasOwnProperty('colorbox')) {
  Drupal.colorbox = {};
}

/**
 * Global function to allow sanitizing captions and control strings.
 *
 * @param markup
 *   String containing potential markup.
 * @return @string
 *  Sanitized string with potentially dangerous markup removed.
 */
Drupal.colorbox.sanitizeMarkup = function(markup) {
  // If DOMPurify installed, allow some HTML. Otherwise, treat as plain text.
  if (typeof DOMPurify !== 'undefined') {
    var purifyConfig = {
      ALLOWED_TAGS: [
        'a',
        'b',
        'strong',
        'i',
        'em',
        'u',
        'cite',
        'code',
        'br'
      ],
      ALLOWED_ATTR: [
        'href',
        'hreflang',
        'title',
        'target'
      ]
    }
    if (Drupal.settings.hasOwnProperty('dompurify_custom_config')) {
      purifyConfig = Drupal.settings.dompurify_custom_config;
    }
    return DOMPurify.sanitize(markup, purifyConfig);
  }
  else {
    return Drupal.checkPlain(markup);
  }
}

})(jQuery);
;
/**
 * @file
 * Colorbox module inline js.
 */

(function ($) {

Drupal.behaviors.initColorboxInline = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    $.urlParam = function(name, url){
      if (name == 'fragment') {
        var results = new RegExp('(#[^&#]*)').exec(url);
      }
      else {
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
      }
      if (!results) { return ''; }
      return results[1] || '';
    };
    $('.colorbox-inline', context).once('init-colorbox-inline').colorbox({
      transition:settings.colorbox.transition,
      speed:settings.colorbox.speed,
      opacity:settings.colorbox.opacity,
      slideshow:settings.colorbox.slideshow,
      slideshowAuto:settings.colorbox.slideshowAuto,
      slideshowSpeed:settings.colorbox.slideshowSpeed,
      slideshowStart:settings.colorbox.slideshowStart,
      slideshowStop:settings.colorbox.slideshowStop,
      current:settings.colorbox.current,
      previous:settings.colorbox.previous,
      next:settings.colorbox.next,
      close:settings.colorbox.close,
      overlayClose:settings.colorbox.overlayClose,
      maxWidth:settings.colorbox.maxWidth,
      maxHeight:settings.colorbox.maxHeight,
      innerWidth:function(){
        return $.urlParam('width', $(this).attr('href'));
      },
      innerHeight:function(){
        return $.urlParam('height', $(this).attr('href'));
      },
      title:function(){
        return Drupal.colorbox.sanitizeMarkup(
          decodeURIComponent($.urlParam('title', $(this).attr('href'))));
      },
      iframe:function(){
        return $.urlParam('iframe', $(this).attr('href'));
      },
      inline:function(){
        return $.urlParam('inline', $(this).attr('href'));
      },
      href:function(){
        return $.urlParam('fragment', $(this).attr('href'));
      }
    });
  }
};

})(jQuery);
;
(function(){function C(){var a="{}";if("userDataBehavior"==f){g.load("jStorage");try{a=g.getAttribute("jStorage")}catch(b){}try{r=g.getAttribute("jStorage_update")}catch(c){}h.jStorage=a}D();x();E()}function u(){var a;clearTimeout(F);F=setTimeout(function(){if("localStorage"==f||"globalStorage"==f)a=h.jStorage_update;else if("userDataBehavior"==f){g.load("jStorage");try{a=g.getAttribute("jStorage_update")}catch(b){}}if(a&&a!=r){r=a;var l=p.parse(p.stringify(c.__jstorage_meta.CRC32)),k;C();k=p.parse(p.stringify(c.__jstorage_meta.CRC32));
var d,n=[],e=[];for(d in l)l.hasOwnProperty(d)&&(k[d]?l[d]!=k[d]&&"2."==String(l[d]).substr(0,2)&&n.push(d):e.push(d));for(d in k)k.hasOwnProperty(d)&&(l[d]||n.push(d));s(n,"updated");s(e,"deleted")}},25)}function s(a,b){a=[].concat(a||[]);var c,k,d,n;if("flushed"==b){a=[];for(c in m)m.hasOwnProperty(c)&&a.push(c);b="deleted"}c=0;for(d=a.length;c<d;c++){if(m[a[c]])for(k=0,n=m[a[c]].length;k<n;k++)m[a[c]][k](a[c],b);if(m["*"])for(k=0,n=m["*"].length;k<n;k++)m["*"][k](a[c],b)}}function v(){var a=(+new Date).toString();
if("localStorage"==f||"globalStorage"==f)try{h.jStorage_update=a}catch(b){f=!1}else"userDataBehavior"==f&&(g.setAttribute("jStorage_update",a),g.save("jStorage"));u()}function D(){if(h.jStorage)try{c=p.parse(String(h.jStorage))}catch(a){h.jStorage="{}"}else h.jStorage="{}";z=h.jStorage?String(h.jStorage).length:0;c.__jstorage_meta||(c.__jstorage_meta={});c.__jstorage_meta.CRC32||(c.__jstorage_meta.CRC32={})}function w(){if(c.__jstorage_meta.PubSub){for(var a=+new Date-2E3,b=0,l=c.__jstorage_meta.PubSub.length;b<
l;b++)if(c.__jstorage_meta.PubSub[b][0]<=a){c.__jstorage_meta.PubSub.splice(b,c.__jstorage_meta.PubSub.length-b);break}c.__jstorage_meta.PubSub.length||delete c.__jstorage_meta.PubSub}try{h.jStorage=p.stringify(c),g&&(g.setAttribute("jStorage",h.jStorage),g.save("jStorage")),z=h.jStorage?String(h.jStorage).length:0}catch(k){}}function q(a){if("string"!=typeof a&&"number"!=typeof a)throw new TypeError("Key name must be string or numeric");if("__jstorage_meta"==a)throw new TypeError("Reserved key name");
return!0}function x(){var a,b,l,k,d=Infinity,n=!1,e=[];clearTimeout(G);if(c.__jstorage_meta&&"object"==typeof c.__jstorage_meta.TTL){a=+new Date;l=c.__jstorage_meta.TTL;k=c.__jstorage_meta.CRC32;for(b in l)l.hasOwnProperty(b)&&(l[b]<=a?(delete l[b],delete k[b],delete c[b],n=!0,e.push(b)):l[b]<d&&(d=l[b]));Infinity!=d&&(G=setTimeout(x,Math.min(d-a,2147483647)));n&&(w(),v(),s(e,"deleted"))}}function E(){var a;if(c.__jstorage_meta.PubSub){var b,l=A,k=[];for(a=c.__jstorage_meta.PubSub.length-1;0<=a;a--)b=
c.__jstorage_meta.PubSub[a],b[0]>A&&(l=b[0],k.unshift(b));for(a=k.length-1;0<=a;a--){b=k[a][1];var d=k[a][2];if(t[b])for(var n=0,e=t[b].length;n<e;n++)try{t[b][n](b,p.parse(p.stringify(d)))}catch(g){}}A=l}}var y=window.jQuery||window.$||(window.$={}),p={parse:window.JSON&&(window.JSON.parse||window.JSON.decode)||String.prototype.evalJSON&&function(a){return String(a).evalJSON()}||y.parseJSON||y.evalJSON,stringify:Object.toJSON||window.JSON&&(window.JSON.stringify||window.JSON.encode)||y.toJSON};if("function"!==
typeof p.parse||"function"!==typeof p.stringify)throw Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");var c={__jstorage_meta:{CRC32:{}}},h={jStorage:"{}"},g=null,z=0,f=!1,m={},F=!1,r=0,t={},A=+new Date,G,B={isXML:function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?"HTML"!==a.nodeName:!1},encode:function(a){if(!this.isXML(a))return!1;try{return(new XMLSerializer).serializeToString(a)}catch(b){try{return a.xml}catch(c){}}return!1},
decode:function(a){var b="DOMParser"in window&&(new DOMParser).parseFromString||window.ActiveXObject&&function(a){var b=new ActiveXObject("Microsoft.XMLDOM");b.async="false";b.loadXML(a);return b};if(!b)return!1;a=b.call("DOMParser"in window&&new DOMParser||window,a,"text/xml");return this.isXML(a)?a:!1}};y.jStorage={version:"0.4.12",set:function(a,b,l){q(a);l=l||{};if("undefined"==typeof b)return this.deleteKey(a),b;if(B.isXML(b))b={_is_xml:!0,xml:B.encode(b)};else{if("function"==typeof b)return;
b&&"object"==typeof b&&(b=p.parse(p.stringify(b)))}c[a]=b;for(var k=c.__jstorage_meta.CRC32,d=p.stringify(b),g=d.length,e=2538058380^g,h=0,f;4<=g;)f=d.charCodeAt(h)&255|(d.charCodeAt(++h)&255)<<8|(d.charCodeAt(++h)&255)<<16|(d.charCodeAt(++h)&255)<<24,f=1540483477*(f&65535)+((1540483477*(f>>>16)&65535)<<16),f^=f>>>24,f=1540483477*(f&65535)+((1540483477*(f>>>16)&65535)<<16),e=1540483477*(e&65535)+((1540483477*(e>>>16)&65535)<<16)^f,g-=4,++h;switch(g){case 3:e^=(d.charCodeAt(h+2)&255)<<16;case 2:e^=
(d.charCodeAt(h+1)&255)<<8;case 1:e^=d.charCodeAt(h)&255,e=1540483477*(e&65535)+((1540483477*(e>>>16)&65535)<<16)}e^=e>>>13;e=1540483477*(e&65535)+((1540483477*(e>>>16)&65535)<<16);k[a]="2."+((e^e>>>15)>>>0);this.setTTL(a,l.TTL||0);s(a,"updated");return b},get:function(a,b){q(a);return a in c?c[a]&&"object"==typeof c[a]&&c[a]._is_xml?B.decode(c[a].xml):c[a]:"undefined"==typeof b?null:b},deleteKey:function(a){q(a);return a in c?(delete c[a],"object"==typeof c.__jstorage_meta.TTL&&a in c.__jstorage_meta.TTL&&
delete c.__jstorage_meta.TTL[a],delete c.__jstorage_meta.CRC32[a],w(),v(),s(a,"deleted"),!0):!1},setTTL:function(a,b){var l=+new Date;q(a);b=Number(b)||0;return a in c?(c.__jstorage_meta.TTL||(c.__jstorage_meta.TTL={}),0<b?c.__jstorage_meta.TTL[a]=l+b:delete c.__jstorage_meta.TTL[a],w(),x(),v(),!0):!1},getTTL:function(a){var b=+new Date;q(a);return a in c&&c.__jstorage_meta.TTL&&c.__jstorage_meta.TTL[a]?(a=c.__jstorage_meta.TTL[a]-b)||0:0},flush:function(){c={__jstorage_meta:{CRC32:{}}};w();v();s(null,
"flushed");return!0},storageObj:function(){function a(){}a.prototype=c;return new a},index:function(){var a=[],b;for(b in c)c.hasOwnProperty(b)&&"__jstorage_meta"!=b&&a.push(b);return a},storageSize:function(){return z},currentBackend:function(){return f},storageAvailable:function(){return!!f},listenKeyChange:function(a,b){q(a);m[a]||(m[a]=[]);m[a].push(b)},stopListening:function(a,b){q(a);if(m[a])if(b)for(var c=m[a].length-1;0<=c;c--)m[a][c]==b&&m[a].splice(c,1);else delete m[a]},subscribe:function(a,
b){a=(a||"").toString();if(!a)throw new TypeError("Channel not defined");t[a]||(t[a]=[]);t[a].push(b)},publish:function(a,b){a=(a||"").toString();if(!a)throw new TypeError("Channel not defined");c.__jstorage_meta||(c.__jstorage_meta={});c.__jstorage_meta.PubSub||(c.__jstorage_meta.PubSub=[]);c.__jstorage_meta.PubSub.unshift([+new Date,a,b]);w();v()},reInit:function(){C()},noConflict:function(a){delete window.$.jStorage;a&&(window.jStorage=this);return this}};(function(){var a=!1;if("localStorage"in
window)try{window.localStorage.setItem("_tmptest","tmpval"),a=!0,window.localStorage.removeItem("_tmptest")}catch(b){}if(a)try{window.localStorage&&(h=window.localStorage,f="localStorage",r=h.jStorage_update)}catch(c){}else if("globalStorage"in window)try{window.globalStorage&&(h="localhost"==window.location.hostname?window.globalStorage["localhost.localdomain"]:window.globalStorage[window.location.hostname],f="globalStorage",r=h.jStorage_update)}catch(k){}else if(g=document.createElement("link"),
g.addBehavior){g.style.behavior="url(#default#userData)";document.getElementsByTagName("head")[0].appendChild(g);try{g.load("jStorage")}catch(d){g.setAttribute("jStorage","{}"),g.save("jStorage"),g.load("jStorage")}a="{}";try{a=g.getAttribute("jStorage")}catch(m){}try{r=g.getAttribute("jStorage_update")}catch(e){}h.jStorage=a;f="userDataBehavior"}else{g=null;return}D();x();"localStorage"==f||"globalStorage"==f?"addEventListener"in window?window.addEventListener("storage",u,!1):document.attachEvent("onstorage",
u):"userDataBehavior"==f&&setInterval(u,1E3);E();"addEventListener"in window&&window.addEventListener("pageshow",function(a){a.persisted&&u()},!1)})()})();;
(function ($) {

  Drupal.behaviors.acluComponentsShareIcons = {
    attach: function (context, settings) {

      // Set a class on share icons' original parent, so we can return things to their original position.
      $('.sidebar-right .share-icons', context).parents('.panel-panel').addClass('shared-icons-original-parent');

      // Medium layouts
      Response.action(function() {
        // Move sidebar share icons under page title.
        if (Response.band(0, 960)) {
          $('.sidebar-right .share-icons', context).insertAfter('.pane-node-title');
          $('.sidebar-right .share-icons', context).prependTo('.panel-main-1');
        }
      });
      // Large layouts
      Response.action(function() {
        if (Response.band(961)) {
          // Move back to original location.
          $('.pane-node-title + .share-icons', context).prependTo('.shared-icons-original-parent');
          $('.panel-main-1 .share-icons', context).prependTo('.shared-icons-original-parent');
        }
      });

    }
  };

})(jQuery);
;
(function ($) {
  /**
   * Sets up glossary content as tabbed panels when in desktop and wide
   * mode, and as an accordion when in small and medium mode.
   *
   * DEPENDENCIES:
   * - responsive.js from the 'affiliates theme,
   *   for triggering responsive:ready and responsive:crossed
   *   events and setting 'layout-{breakpoint}' classes on body element.
   * - acluTabbedPanels jQuery plugin, for setting up tabbed panels.
   * - acluToggleContent plugin, for setting up accordions.
   */
  Drupal.behaviors.acluGlossary = {
    /**
     * Implements Drupal.behaviors.COMPONENT.attach().
     */
    attach: function (context, settings) {
      var selfObj = this;

      $('.glossary').once('aclu-glossary', function () {
        var $component = $(this);
        var $body = $('body');

        $(window).on('responsive:ready responsive:crossed', function () {
          if ($body.hasClass('layout-medium') || $body.hasClass('layout-small')) {
            selfObj.destroyTabbedPanels($component);
            selfObj.setupAccordion($component);
          }
          else {
            selfObj.destroyAccordion($component);
            selfObj.setupTabbedPanels($component);
          }
        });
      });
    },

    /**
     * Initializes acluTabbedPanels on the given jQuery object.
     *
     * @param jQuery $component
     */
    setupTabbedPanels: function ($component) {
      $component.acluTabbedPanels({
        panel: '.glossary-item',
        label: '.question',
        tabLinksClasses: ['in-page-nav']
      });
    },

    /**
     * Removes acluTabbedPanels from the given jQuery object.
     *
     * @param jQuery $component
     */
    destroyTabbedPanels: function ($component) {
      $component.acluTabbedPanels('destroy');
    },

    /**
     * Initializes jQuery UI Accordion on the given jQuery object.
     *
     * @param jQuery $component
     */
    setupAccordion: function ($component) {
      $component.acluToggleContent({
        trigger: '.question',
        panel: '.glossary-item-content',
        toggle_icon: false,
        open_first_item: true,
        // After opening a content pane, scroll upward to 50px from top.
        after: function() {
          $('html:not(:animated), body:not(:animated)')
            .animate({ scrollTop: $(this).offset().top - 50}, 'slow');
        }
      });

      // Add some help text so visitors know what to do.
      if (!$component.find('.glossary-accordion-description').length) {
        $component.find('.glossary-item').first()
          .before('<div class="glossary-accordion-description">' + Drupal.t('Select from menu') + '</div>');
      }
    },

    /**
     * Removes jQuery UI Accordion from the given jQuery object.
     *
     * @param jQuery $component
     */
    destroyAccordion: function ($component) {
      $component.acluToggleContent('destroy');
      $component.find('.glossary-accordion-description').remove();
    }
  };
})(jQuery);
;
(function ($, Drupal, window, document, undefined) {

  Drupal.behaviors.breakingNews = {
    attach: function(context, settings) {

      var breakingNewsIsNew = false;
      var expirationDays = 14;

      if ($.cookie('aclu_components_breaking_news_animation_loads') != null) {
        var current_animation_loads = parseInt($.cookie('aclu_components_breaking_news_animation_loads'));
      }
      else {
        var current_animation_loads = 0;
      }

      // Set a cookie with the Breaking News Drawer version.
      // Update the cookie if the version stored in the cookie doesn't match up with what Drupal.settings knows.
      if (settings.aclu_components_breaking_news_version !== $.cookie('aclu_components_breaking_news_version')) {
        $.cookie('aclu_components_breaking_news_version', null);
        $.cookie('aclu_components_breaking_news_version', settings.aclu_components_breaking_news_version, { expires: expirationDays, path: '/' });
        breakingNewsIsNew = true;
      }

      // If the News Drawer version is new, or if we don't have a cookie yet, set the count back to zero.
      if (breakingNewsIsNew || $.cookie('aclu_components_breaking_news_animation_loads') === null) {
        $.cookie('aclu_components_breaking_news_animation_loads', 0, { expires: expirationDays, path: '/' }); // Then set to 0 so we can increment it.
      }

      var $message = $('#block-bean-breaking-news-drawer', context);
      var $title = $('#block-bean-breaking-news-drawer .field-breaking-news-title', context);
      $('#block-bean-breaking-news-drawer .field-teaser, #block-bean-breaking-news-drawer .field-breaking-news-more-link').once().wrapAll('<div class="field-breaking-news-teaser-wrapper"></div>');
      var $teaser = $('#block-bean-breaking-news-drawer .field-breaking-news-teaser-wrapper', context);
      var $height = $message.outerHeight() - $teaser.outerHeight() + 21;
      
      // Animate the Breaking News message.
      if (current_animation_loads < 2) {
        
        $message.css({
          'margin-top': -$height,
          'display': 'block'
        });

        if ($teaser.length == 0) {
          $message.addClass('empty');
          $('body').addClass('breaking-news-empty');
        }

        if ($teaser.length > 0) {
          $message.delay( 3000 ).animate({
            'margin-top': '-21px'
          }, 1000, function() {
            // Animation complete. Increment the value of the cookie.
            var updated_animation_loads = current_animation_loads + 1;
            $.cookie('aclu_components_breaking_news_animation_loads', updated_animation_loads, { expires: expirationDays, path: '/' });
          });
        }
      }
      else {
        $message.css({
          'display': 'block'
        });
      }

      // Toggle for the drawer.
      var breakingToggle = function() {
        $(this).toggleClass('open');
        $teaser.slideToggle( "slow", function() {
        });
      };

      // Add tabIndex to elements.
      $('#block-bean-breaking-news-drawer .field-breaking-news-title').attr('tabIndex', 1);
      $('#block-bean-breaking-news-drawer .field-breaking-news-more-link a').attr('tabIndex', 1);

      if ($teaser.is(':hidden')) {
        $('#block-bean-breaking-news-drawer .field-breaking-news-title').keypress(function(e) {
          if (e.which == 13) breakingToggle();
        });
        $('#block-bean-breaking-news-drawer .field-breaking-news-title').click(breakingToggle);
      }
    }
  }

})(jQuery, Drupal, this, this.document);
;
/**
 * @file
 * A JavaScript file for custom ACLU menu behaviors.
 */

(function ($, Drupal, window, document, undefined) {

  Drupal.behaviors.aclu_menu = {
    attach: function(context, settings) {
      var selfObj = this;

      $('#block-superfish-1').once(function() {
        selfObj.initMobileMenuLinks($(this));
      });

      $('.block-superfish').once(function() {
        var $nav_wrap = $(this);
        selfObj.initResponsiveBehaviors($nav_wrap);
        selfObj.initHoverBehaviors($nav_wrap);
        selfObj.initClickBehaviors($nav_wrap);
        selfObj.initKeyboardBehaviors($nav_wrap);
      });

      $('.branded-nav').once(function() {
        selfObj.initAccessibilityOutlineBehaviors($(this));
      });
    },

    /**
     * Should the "desktop" (full) version of menu be visible?
     */
    isDesktop: function() {
      return $('body').is('.layout-large, .layout-wide');
    },

    /**
     * Should the mobile version of menu be visible?
     */
    isMobile: function() {
      return $('body').is('.layout-medium, .layout-small');
    },

    /**
     * Is this element the last visible option in a menu?
     */
    isLastVisibleMenuOption: function($item) {
      var $link_wrap = $item.closest('li');
      var $tab_wrap = $item.closest('li.sf-depth-1');

      if ($tab_wrap.hasClass('last')) {
        // If it's not a menu that has submenus,
        // Or if menu has submenu but is closed,
        // Or if link is last one in a submenu.
        if (!$tab_wrap.hasClass('menuparent') || !$tab_wrap.hasClass('sfHover') || ($link_wrap.hasClass('last') && !$link_wrap.hasClass('sf-depth-1'))) {
          return true;
        }
      }

      return false;
    },

    closeSubmenu: function($submenu) {
      var $tab_wrap = $submenu.closest('li.menuparent');

      $tab_wrap.removeClass('sfHover');
      if ($tab_wrap.hasClass('menuparent')) {
        $tab_wrap.attr('aria-expanded', 'false');
      }
      $submenu.addClass('sf-hidden');
    },

    /**
     * Close all submenus under level 1 within the given menu wrapper.
     */
    closeSubmenus: function($nav_wrap) {
      var $tabs_wrap = $nav_wrap.find('li.sf-depth-1');
      var $submenus = $tabs_wrap.find('> ul');
      $tabs_wrap.removeClass('sfHover');
      if ($tabs_wrap.hasClass('menuparent')) {
        $tabs_wrap.attr('aria-expanded', 'false');
      }
      $submenus.addClass('sf-hidden');
    },

    /**
     * Open the submenu within the given wrapper.
     */
    openSubmenu: function($tab_wrap) {
      var $submenu = $tab_wrap.find('> ul');

      $tab_wrap.addClass('sfHover');
      if ($tab_wrap.hasClass('menuparent')) {
        $tab_wrap.attr('aria-expanded', 'true');
      }
      $submenu.removeClass('sf-hidden');
    },

    /**
     * Add mobile menu open & close links.
     */
    initMobileMenuLinks: function($nav_wrap) {
      var selfObj = this;

      $nav_wrap.before(
        '<a href="#" class="mobile-nav-link" role="button">' + Drupal.t('Menu') + '</a>' +
        '<a href="#" class="mobile-close-x" role="button"><span>' + Drupal.t('Close menu') + '</span></a>'
      );

      $('.mobile-nav-link').on('touchstart click keydown', function(ev) {
        var focus_class = 'js-mouse-active';

        // If this <enter> was used to select the link,
        // do not add the 'js-mouse-active' class.
        if (ev.type == 'keydown') {
          if (ev.which !== 13) {
            return;
          }
          focus_class = '';
        }

        ev.preventDefault();

        $('body').addClass('mobile-menu--visible');
        $('.field-site-logo > a').attr('tabindex', '0')
          .addClass(focus_class).focus();
        $(window).trigger('nav:mobile-toggle');
      });

      $('.mobile-close-x').on('touchstart click', function(ev) {
        ev.preventDefault();
        $('body').removeClass('mobile-menu--visible');
        $(window).trigger('nav:mobile-toggle');
      });

      $(window).on('responsive:crossed', function() {
        if (selfObj.isDesktop() && $('body').hasClass('mobile-menu--visible')) {
          selfObj.closeSubmenus($nav_wrap);
          $('body').removeClass('mobile-menu--visible');
          $(window).trigger('nav:mobile-toggle');
        }
      });
    },

    /**
     * Make submenus inaccesible when top-level menu items are links.
     * Typically used when entering mobile mode.
     */
    hideSpecialSubmenus: function($nav_wrap) {
      var $tabs = $nav_wrap.find('li.sf-depth-1.menuparent > a');
      var $tabs_wrap = $tabs.closest('li');

      $tabs_wrap.removeClass('menuparent').addClass('sf-no-children');
      $tabs.removeClass('menuparent').addClass('sf-no-children js-menuparent-hidden');
    },

    /**
     * Reset any submenus that had been made inaccessible.
     * Typically called when entering desktop mode.
     */
    resetSpecialSubmenus: function($nav_wrap) {
      var $tabs = $nav_wrap.find('li.sf-depth-1 > a.js-menuparent-hidden');
      var $tabs_wrap = $tabs.closest('li');

      $tabs_wrap.addClass('menuparent').removeClass('sf-no-children');
      $tabs.addClass('menuparent').removeClass('sf-no-children js-menuparent-hidden');
    },

    /**
     * Set up behaviors that are specific to the breakpoint the user is in.
     */
    initResponsiveBehaviors: function($nav_wrap) {
      var selfObj = this;

      var updateSpecialSubmenus = function() {
        if (selfObj.isMobile()) {
          selfObj.hideSpecialSubmenus($nav_wrap);
        }
        else {
          selfObj.resetSpecialSubmenus($nav_wrap);
        }
      };

      $(window).on('responsive:ready responsive:crossed', updateSpecialSubmenus);
    },

    /**
     * Set up hover behaviors for opening/closing submenus.
     */
    initHoverBehaviors: function($nav_wrap) {
      var selfObj = this;
      var $tabs_wrap = $nav_wrap.find('li.sf-depth-1');
      var $tabs = $tabs_wrap.find('.sf-depth-1');

      $tabs_wrap.hover(
        function(ev) {
          var $tab_wrap = $(this);

          if (selfObj.isDesktop()) {
            selfObj.closeSubmenus($nav_wrap);
            selfObj.openSubmenu($tab_wrap);
          }
        },
        function(ev) {
          if (selfObj.isDesktop()) {
            selfObj.closeSubmenus($nav_wrap);
          }
        }
      );
    },

    /**
     * Set up click/touch behaviors for opening/closing submenus.
     */
    initClickBehaviors: function($nav_wrap) {
      var selfObj = this;
      var $tabs_wrap = $nav_wrap.find('li.sf-depth-1');

      $tabs_wrap.on('touchstart click', function(ev) {
        var $target = $(ev.target);
        var $tab_wrap = $(this);
        var is_link = $target.is('a, a *');

        // If a link was clicked and it's not a menu parent,
        // OR link was clicked and it's a menu parent with open submenu,
        // do the default action (follow the link.)
        if (is_link && ($tab_wrap.hasClass('sf-no-children') || $tab_wrap.is('.menuparent.sfHover'))) {
          return;
        }
        // Otherwise if the click is w/in a tab wrap that is a menu parent,
        // either open or close the submenu.
        else if ($tab_wrap.hasClass('menuparent')) {
          ev.preventDefault();

          // Test for 'sfHover' class first, because closeSubmenus() removes it.
          var has_hover = $tab_wrap.hasClass('sfHover');
          selfObj.closeSubmenus($nav_wrap);
          if (!has_hover) {
            selfObj.openSubmenu($tab_wrap);
          }
        }
      });
    },

    /**
     * Ensure accessiblity outline only shows up with keyboard nav, not clicks.
     */
    initAccessibilityOutlineBehaviors: function($nav) {
      var selfObj = this;
      var $all_clickables = $nav.find('a, span.nolink');
      $all_clickables
        .on('touchstart mousedown', function(ev) {
          $(this).addClass('js-mouse-active');
        })
        .on('keydown', function(ev) {
          $all_clickables.removeClass('js-mouse-active');
        });
    },

    /**
     * Set up keyboard-based navigation behaviors.
     */
    initKeyboardBehaviors: function($nav_wrap) {
      var selfObj = this;

      $nav_wrap.find('a, span.nolink').on('keydown', function(ev) {
        // <enter> keydown on menu parents wll open or close submenu.
        if (ev.which == 13) {
          var $tab_wrap = $(ev.target).closest('li');

          if ($tab_wrap.is('.sf-depth-1.menuparent')) {
            ev.preventDefault();

            if (!$tab_wrap.hasClass('sfHover')) {
              selfObj.closeSubmenus($nav_wrap);
              selfObj.openSubmenu($tab_wrap);
            }
            else {
              selfObj.closeSubmenus($nav_wrap);
            }
          }
        }

        // Special <tab> key behaviors when navigating through links.
        else if (ev.which == 9) {
          var $target = $(ev.target);
          var $link_wrap = $target.closest('li');

          // If user <tab>s forward or backward off submenu,
          // close the submenu.
          if (!$target.hasClass('sf-depth-1')) {
            if (!ev.shiftKey) {
              if (!$link_wrap.next().length) {
                selfObj.closeSubmenus($nav_wrap);
              }
            }
            else {
              if (!$link_wrap.prev().length) {
                selfObj.closeSubmenus($nav_wrap);
              }
            }
          }

          // In mobile mode, if user <tabs> forward off of last nav tab,
          // return focus to logo.
          else if (selfObj.isMobile() && !ev.shiftKey) {
            var $target = $(ev.target);

            if (selfObj.isLastVisibleMenuOption($target)) {
              ev.preventDefault();
              $('.field-site-logo a').focus().addClass('js-mouse-active');
            }
          }
        }

        // <down> arrow key will navigate through submenu links.
        else if (ev.which == 40) {
          var $target = $(ev.target);
          var $link_wrap = $target.closest('li');

          if ($link_wrap.is('.menuparent.sfHover')) {
            ev.preventDefault();
            $link_wrap.find('> ul > li:first').find('> a, > span.nolink').focus();
          }
          else if (!$target.hasClass('sf-depth-1')) {
            // Be careful about <hr> or the <span class="separator"><hr></span>
            // that might be in the way before next <li> that is a menu item.
            var $next = $link_wrap.nextAll('li:not(:has(>.separator))').first();

            if ($next.length) {
              ev.preventDefault();
              $next.find('a, span.nolink').focus();
            }
            else {
              ev.preventDefault();
              selfObj.closeSubmenus($nav_wrap);
              $target.closest('li.menuparent').next().find('> a, > span.nolink').focus();
            }
          }
        }

        // <up> arrow key will navigate through submenu links.
        else if (ev.which == 38) {
          var $target = $(ev.target);
          var $link_wrap = $target.closest('li');

          if (!$target.hasClass('sf-depth-1')) {
            // Be careful about <hr> or the <span class="separator"><hr></span>
            // that might be in the way before prev <li> that is a menu item.
            var $prev = $link_wrap.prevAll('li:not(:has(>.separator))').first();

            if ($prev.length) {
              ev.preventDefault();
              $prev.find('a, span.nolink').focus();
            }
            else {
              ev.preventDefault();
              $target.closest('li.menuparent.sfHover').find('> a, > span.nolink').focus();
            }
          }
        }
      });
    }
  }; // end Drupal.behaviors.aclu_menu().

})(jQuery, Drupal, this, this.document);
;
