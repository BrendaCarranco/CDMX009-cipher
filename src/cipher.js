const cipher = {
  encode
}
    function encode (word, offset){
        let resultEncode="";
      
      for (var i = 0; i < word.length ;  i++){
        let wordCipher = word.charCodeAt(i); // convierte la letra en numero ascii
      
       if (wordCipher >= 65 && wordCipher <= 90){ // condicion que debe cumplir el texto una vez convertido en ASCII
         let formula = (wordCipher - 65 + offset) % 26 + 65; // aplica la formula a las letras
         let newLetter = String.fromCharCode(formula); //palabra cifrada
         
         resultEncode += newLetter;
       }
      }
      return resultEncode; //
      
      }

export default cipher
      


     /*  function cipher(palabra, mes){
        var result = '';
    
        for (var i = 0; i < palabra.lenght ; i++){
            let palabraCifrada = palabra.charCodeAt(i);
        
            if (palabraCifrada >= 65 && palabraCifrada <=90){
                let formulaa = (palabraCifrada - 65 + mes) % 26 + 65;
                let newLetter = String.fromCharCode(formulaa); 
    
                result += newLetter;
            }
        }    
            return result;
    
    } 
        
    
         */ 