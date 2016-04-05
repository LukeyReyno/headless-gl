var BLACKLIST = [
  // BROKEN Uses RGB texture FBOs
  'rendering_framebuffer-texture-switch',
  'rendering_framebuffer-switch',

  // Fails on travis, not sure what is happening
  'rendering_polygon-offset'
]

require('./util/conformance')(function (str) {
  return str.indexOf('rendering') === 0 && BLACKLIST.indexOf(str) < 0
})
