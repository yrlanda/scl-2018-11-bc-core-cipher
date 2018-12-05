window.cipher = {
  encode: (mensaje, offset) => {
    let mensaje_codificado = "";

    for (let i = 0; i < mensaje.length; i++) {
      let ascii_letra_mensaje = mensaje.charCodeAt(i);
      if (ascii_letra_mensaje >= 65 && ascii_letra_mensaje <= 90) {

        ascii_letra_mensaje = ((ascii_letra_mensaje - 65 + offset) % 26) + 65;

      }
      if (ascii_letra_mensaje >= 97 && ascii_letra_mensaje <= 122) {

        ascii_letra_mensaje = ((ascii_letra_mensaje - 97 + offset) % 26) + 97;

      }
      if (ascii_letra_mensaje >= 48 && ascii_letra_mensaje <= 57) {
        
        ascii_letra_mensaje = ((ascii_letra_mensaje - 48 + offset) % 10) + 48;

      }
      mensaje_codificado = mensaje_codificado + String.fromCharCode(ascii_letra_mensaje);

    }
    return mensaje_codificado;
  },


  decode: (mensaje, offset) => {
    let mensaje_decodificado = "";
    let offset_char = offset;
    let offset_num = offset;

    for (let i = 0; i < mensaje.length; i++) {
      let ascii_letra_mensaje = mensaje.charCodeAt(i);
      if (ascii_letra_mensaje >= 65 && ascii_letra_mensaje <= 90) {

        ascii_letra_mensaje = ((ascii_letra_mensaje - 90 - offset_char + 26) % 26) + 90;
      }
      if (ascii_letra_mensaje >= 97 && ascii_letra_mensaje <= 122) {

        ascii_letra_mensaje = ((ascii_letra_mensaje - 97 - offset_char + 26) % 26) + 97;
      }
      if (ascii_letra_mensaje >= 48 && ascii_letra_mensaje <= 57) {

        ascii_letra_mensaje = ((ascii_letra_mensaje - 57 - offset_num + 10) % 10) + 57;
      }


      mensaje_decodificado = mensaje_decodificado + String.fromCharCode(ascii_letra_mensaje);

    }
    return mensaje_decodificado;
  }
};
