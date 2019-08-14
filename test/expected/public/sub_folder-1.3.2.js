(function(){

  function embed() {
    if ( !document.body ) return requestAnimationFrame( embed )
    if (!document.querySelector('#esvg-svg-sub-folder')) {
      document.querySelector('body').insertAdjacentHTML('afterbegin', '<svg id="esvg-svg-sub-folder" data-symbol-class="svg-symbol" data-prefix="svg" version="1.1" style="height:0;position:absolute" data-turbolinks-permanent><symbol id="svg-sub-folder-test" data-name="sub-folder-test" viewBox="0 0 512 512" width="512" height="512" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path d="M334.95,40.28l-149.954,0c-90.954,0 -164.947,73.996 -164.947,164.947c0,80.714 58.268,148.074 134.957,162.213l0,62.716c0,12.129 7.306,23.064 18.513,27.707c3.71,1.537 7.607,2.283 11.47,2.283c7.805,0 15.475,-3.046 21.214,-8.785l81.187,-81.186l47.561,0c90.949,0 164.945,-74 164.945,-164.947c0,-90.952 -73.996,-164.947 -164.945,-164.947M334.95,70.271c74.534,0 134.955,60.421 134.955,134.957c0,74.531 -60.421,134.953 -134.955,134.955l0,0.001l-59.983,0l-89.971,89.972l0,-89.972l0,-0.003c-74.538,0 -134.957,-60.422 -134.957,-134.953c0,-74.536 60.42,-134.957 134.957,-134.957l149.952,0" /></symbol></svg>')
    }
  }
  

  embed()
})()
