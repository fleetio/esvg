(function(){

  function embed() {
    if (!document.querySelector('#esvg-symbols')) {
      document.querySelector('body').insertAdjacentHTML('afterbegin', '<svg id="esvg-symbols" data-symbol-class="svg-symbol" data-prefix="svg" version="1.1" style="height:0;position:absolute" data-turbolinks-permanent><symbol id="svg-flatten-comment-bubble" data-name="comment-bubble" viewBox="0 0 512 512" width="512" height="512" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path d="M334.95,70.271c74.534,0 134.955,60.421 134.955,134.957c0,74.531 -60.421,134.953 -134.955,134.955l0,0.001l-59.983,0l-89.971,89.972l0,-89.972l0,-0.003c-74.538,0 -134.957,-60.422 -134.957,-134.953c0,-74.536 60.42,-134.957 134.957,-134.957l149.954,0Z" fill-opacity="0.435294" /></symbol><symbol id="svg-root" data-name="root" viewBox="0 0 512 512" width="512" height="512" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path d="M334.95,70.271c74.534,0 134.955,60.421 134.955,134.957c0,74.531 -60.421,134.953 -134.955,134.955l0,0.001l-59.983,0l-89.971,89.972l0,-89.972l0,-0.003c-74.538,0 -134.957,-60.422 -134.957,-134.953c0,-74.536 60.42,-134.957 134.957,-134.957l149.954,0Z" fill-opacity="0.435294" /></symbol></svg>')
    }
  }

  // If DOM is already ready, embed SVGs
  if (document.readyState == 'interactive') { embed() }

  // Handle Turbolinks page change events
  if ( window.Turbolinks ) {
    document.addEventListener("turbolinks:load", function(event) { embed() })
  }

  // Handle standard DOM ready events
  document.addEventListener("DOMContentLoaded", function(event) { embed() })
})()