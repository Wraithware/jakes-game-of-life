'use strict'

const main = _ => {
  const canvas = document.getElementById('canvas')
  const gl2 =
    canvas.getContext('webgl2') || canvas.getContext('experimental-webgl2')

  if (!gl2) return console.log('WebGL2 not supported. Get another browser!')

  gl2.clearColor(1.0, 0.0, 1.0, 1.0)
  gl2.clear(gl2.COLOR_BUFFER_BIT)
}

window.onload = _ => main()
