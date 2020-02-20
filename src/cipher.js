const cipher = {
  encode: (word, offset) => {
    let result = '';
    for (let i = 0; i < word.length; i++) {                        
      let wordCipher = word.charCodeAt(i);                      
      if (wordCipher >= 65 && wordCipher <= 90) {                  
        result += String.fromCharCode((wordCipher - 65 + offset) % 26 + 65);
      } else
        if (wordCipher >= 97 && wordCipher <= 122) {
          wordCipher = word.charCodeAt(i);
          result += String.fromCharCode((wordCipher - 97 + offset) % 26 + 65);
          console.log(result)
        }
    }
    return result;
  },

  decode: (word, offset) => {
    let result = ''
    decode: (word, offset) => {
      let result = ''
      for (let i = 0; i < word.length; i++) {
        let wordCipher = word.charCodeAt(i);

        if (wordCipher >= 65 && wordCipher <= 90) {
          let formula = (wordCipher - 65 - offset) % 26 + 65;
          return result;
        }
      }
    }
  }
}
export default cipher