(function(){

  function embed() {
    if (!document.querySelector('#esvg-svg-others')) {
      document.querySelector('body').insertAdjacentHTML('afterbegin', '<svg id="esvg-svg-others" data-symbol-class="svg-symbol" data-prefix="svg" version="1.1" style="height:0;position:absolute" data-turbolinks-permanent><defs><linearGradient id="def-svg-others-test-0" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(126.158,-70.2484,70.2484,126.158,126.159,149.85)"><stop offset="0" style="stop-color:#253d54;stop-opacity:0.980392"/><stop offset="1" style="stop-color:#35516a;stop-opacity:0.980392"/></linearGradient><linearGradient id="def-svg-others-test-1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(107.612,-72.8683,72.8683,107.612,68.5533,111.409)"><stop offset="0" style="stop-color:#335774;stop-opacity:0.94902"/><stop offset="1" style="stop-color:#243e57;stop-opacity:0.94902"/></linearGradient></defs><symbol id="svg-others-test" data-name="others-test" viewBox="0 0 253 160" width="253" height="160" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M252.318 86.336l-126.159 72.836L0 86.335l.001-13.499 126.159 72.839 126.158-72.838v13.499z" fill="url(#def-svg-others-test-0)"/><path d="M252.318 72.837L126.16 145.675.001 72.836 126.159 0l126.159 72.837z" fill="url(#def-svg-others-test-1)"/><path d="M252.318 72.837L126.16 145.675.001 72.836 126.159 0l126.159 72.837zM1.001 72.836l125.159 72.261 125.158-72.26L126.16.577 1.001 72.836z" fill="#4d7594"/><path d="M8.355 84.372c0 .955-.67 1.342-1.497.865-.827-.478-1.497-1.638-1.497-2.592 0-.955.67-1.342 1.497-.865.827.477 1.497 1.638 1.497 2.592" fill="#19ca48"/><path d="M119.154 148.774v-.799L21.488 91.597v.81l97.666 56.367z" fill="#3d6484"/><path d="M13.672 87.439c0 .954-.67 1.341-1.497.864-.826-.477-1.496-1.638-1.496-2.592 0-.955.67-1.342 1.496-.864.827.477 1.497 1.637 1.497 2.592M19.059 90.545c0 .955-.67 1.341-1.497.864-.826-.477-1.496-1.637-1.496-2.592 0-.954.67-1.341 1.496-.864.827.477 1.497 1.638 1.497 2.592" fill="#19ca48"/></symbol></svg>')
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