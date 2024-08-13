function rotatingCipher(str) {
    return str.split('').map(char => {
      const charCode = char.charCodeAt(0);
  
      if (charCode >= 65 && charCode <= 90) {
        return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
      }
      else if (charCode >= 97 && charCode <= 122) {
        return String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
      }
      return char;
    }).join('');
  }
  
  console.log(rotatingCipher("Lorem ipsum")); 
  