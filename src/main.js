'use strict'

function check_gl_error(gl) {
  var error = gl.getError()

  if (error != gl.NO_ERROR && error != gl.CONTEXT_LOST_WEBGL) {
    const str = 'GL Error: ' + error
    document.body.appendChild(document.createTextNode(str))
    throw str
  }
}

function load_shader(gl, type, shaderSrc) {
  // var shader = gl.attachShader(
  // // Load the shader source
  // gl.shaderSource(shader, shaderSrc)
  // // Compile the shader
  // gl.compileShader(shader)
  // // Check the compile status
  // if (
  //   !gl.getShaderParameter(shader, gl.COMPILE_STATUS) &&
  //   !gl.isContextLost()
  // ) {
  //   var infoLog = gl.getShaderInfoLog(shader)
  //   alert('Error compiling shader:\n' + infoLog)
  //   gl.deleteShader(shader)
  //   return null
  // }
  // return shader
}

const load_texture = (gl, src) => {
  const texture = gl.createTexture()
  const programObject = gl.createProgram()

  const vShaderStr = [
    'attribute vec3 g_Position;',
    'attribute vec2 g_TexCoord0;',
    'varying vec2 texCoord;',
    'void main()',
    '{',
    '   gl_Position = vec4(g_Position.x, g_Position.y, g_Position.z, 1.0);',
    '   texCoord = g_TexCoord0;',
    '}'
  ].join('\n')

  var f_shader_str = [
    'precision mediump float;\n',
    'uniform sampler2D tex;',
    'varying vec2 texCoord;',
    'void main()',
    '{',
    '  gl_FragColor = texture2D(tex, texCoord);',
    '}'
  ].join('\n')

  const vertex_shader = load_shader(gl, gl.VERTEX_SHADER, vShaderStr)
  const fragmentShader = load_shader(gl.FRAGMENT_SHADER, f_shader_str)

  gl.attachShader(programObject, vertex_hader)
  gl.attachShader(programObject, fragment_hader)

  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)

  const image = new Image()

  image.onload = function () {
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)
    checkGLError(gl)
    gl.clear(gl.COLOR_BUFFER_BIT)
    checkGLError(gl)
    gl.useProgram(g_programObject)
    checkGLError(gl)
    gl.bindBuffer(gl.ARRAY_BUFFER, g_vbo)
    gl.enableVertexAttribArray(0)
    gl.vertexAttribPointer(0, 3, gl.FLOAT, gl.FALSE, 0, 0)
    gl.enableVertexAttribArray(1)
    gl.vertexAttribPointer(1, 2, gl.FLOAT, gl.FALSE, 0, g_texCoordOffset)
    checkGLError(gl)
    gl.bindTexture(gl.TEXTURE_2D, g_texture)
    checkGLError(gl)
    gl.uniform1i(g_textureLoc, 0)
    checkGLError(gl)
    gl.drawArrays(gl.TRIANGLES, 0, 6)
    checkGLError(gl)
  }
  image.src = src

  return texture
}

const main = _ => {
  const canvas = document.getElementById('canvas')
  const gl2 =
    canvas.getContext('webgl2') || canvas.getContext('experimental-webgl2')

  if (!gl2) return console.log('WebGL2 not supported. Get another browser!')

  gl2.clearColor(1.0, 0.0, 1.0, 1.0)
  gl2.clear(gl2.COLOR_BUFFER_BIT)

  const creature_block = load_texture(gl2, '../assets/favicon.png')
}

window.onload = _ => main()
