// Sakura plugin code
(function($) {
  // requestAnimationFrame Polyfill
  var lastTime = 0;
  var vendors = ['webkit', 'o', 'ms', 'moz', ''];
  var vendorCount = vendors.length;
  for (var x = 0; x < vendorCount && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function(callback) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }

  $.fn.prefixedEvent = function(type, callback) {
    for (var x = 0; x < vendorCount; ++x) {
      if (!vendors[x]) {
        type = type.toLowerCase();
      }
      el = (this instanceof jQuery ? this[0] : this);
      el.addEventListener(vendors[x] + type, callback, false);
    }
    return this;
  };

  function elementInViewport(el) {
    if (el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth));
  }

  function randomArrayElem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  $.fn.sakura = function(event, options) {
    var target = this.selector == "" ? $('body') : this;
    var defaults = {
      blowAnimations: ['blow-soft-left', 'blow-medium-left', 'blow-soft-right', 'blow-medium-right'],
      className: 'sakura',
      fallSpeed: 1,
      maxSize: 14,
      minSize: 10,
      newOn: 300,
      swayAnimations: ['sway-0', 'sway-1', 'sway-2', 'sway-3', 'sway-4', 'sway-5', 'sway-6', 'sway-7', 'sway-8']
    };
    var options = $.extend({}, defaults, options);

    if (typeof event === 'undefined' || event === 'start') {
      target.css({'overflow-x': 'hidden'});

      var petalCreator = function() {
        if (target.data('sakura-anim-id')) {
          setTimeout(function() {
            requestAnimationFrame(petalCreator);
          }, options.newOn);
        }

        var blowAnimation = randomArrayElem(options.blowAnimations);
        var swayAnimation = randomArrayElem(options.swayAnimations);
        var fallTime = ((document.documentElement.clientHeight * 0.007) + Math.round(Math.random() * 5)) * options.fallSpeed;

        var animations =
          'fall ' + fallTime + 's linear 0s 1' + ', ' +
          blowAnimation + ' ' + (((fallTime > 30 ? fallTime : 30) - 20) + randomInt(0, 20)) + 's linear 0s infinite' + ', ' +
          swayAnimation + ' ' + randomInt(2, 4) + 's linear 0s infinite';

        var petal = $('<div class="' + options.className + '" />');
        var height = randomInt(options.minSize, options.maxSize);
        var width = height - Math.floor(randomInt(0, options.minSize) / 3);

        petal.prefixedEvent('AnimationEnd', function() {
          if (!elementInViewport(this)) {
            $(this).remove();
          }
        })
        .prefixedEvent('AnimationIteration', function(ev) {
          if (($.inArray(ev.animationName, options.blowAnimations) != -1 ||
            $.inArray(ev.animationName, options.swayAnimations) != -1) &&
            !elementInViewport(this)) {
            $(this).remove();
          }
        }).css({
          '-webkit-animation': animations,
          animation: animations,
          'border-radius': randomInt(options.maxSize, (options.maxSize + Math.floor(Math.random() * 10))) + 'px ' + randomInt(1, Math.floor(width / 4)) + 'px',
          height: height + 'px',
          left: (Math.random() * document.documentElement.clientWidth - 100) + 'px',
          'margin-top': (-(Math.floor(Math.random() * 20) + 15)) + 'px',
          width: width + 'px'
        });
        target.append(petal);
      };

      target.data('sakura-anim-id', requestAnimationFrame(petalCreator));
    }
    else if (event === 'stop') {
      var animId = target.data('sakura-anim-id');
      if (animId) {
        cancelAnimationFrame(animId);
        target.data('sakura-anim-id', null);
      }
      setTimeout(function() {
        $('.' + options.className).remove();
      }, (options.newOn + 50));
    }
  };
}(jQuery));

$(document).ready(function() {
  $('body').sakura();
});
