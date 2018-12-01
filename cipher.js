window.cipher = {
  encode: (mensaje, offset) => {
    let mensaje_codificado = "";

    for (let i = 0; i < mensaje.length; i++) {
      let ascii_letra_mensaje = mensaje.toUpperCase().charCodeAt(i);
      if (ascii_letra_mensaje >= 65 && ascii_letra_mensaje <= 90) {

        ascii_letra_mensaje = ((ascii_letra_mensaje - 65 + offset) % 26) + 65;

      }
      mensaje_codificado = mensaje_codificado + String.fromCharCode(ascii_letra_mensaje);

    }
    return mensaje_codificado;
  },


  decode: (mensaje, offset) => {
    let mensaje_decodificado = "";

    for (let i = 0; i < mensaje.length; i++) {
      let ascii_letra_mensaje = mensaje.toUpperCase().charCodeAt(i);
      if (ascii_letra_mensaje >= 65 && ascii_letra_mensaje <= 90) {

        ascii_letra_mensaje = ((ascii_letra_mensaje - 65 - offset) % 26) + 65;
      }
      mensaje_decodificado = mensaje_decodificado + String.fromCharCode(ascii_letra_mensaje);

    }
    return mensaje_decodificado;
  }
};
