// Write class below
class ShiftCipher {
    constructor(num) {
      this._num = num;
    }
    encrypt(str) {
      let length = str.length;
      let temp = 0;
      var str2 = '';
      for (let i = 0; i < length; i++) {
         temp = str.charCodeAt(i) + this._num;
         str2.concat('', String.fromCharCode(temp));
      }
      return str.toUpperCase();
    }
  
    decrypt(str) {
      let length = str.length;
      let temp = 0;
      var str2 = '';
      for (let i = 0; i < length; i++) {
                temp = str.charCodeAt(i) - this._num;
         str2.concat('', String.fromCharCode(temp));
      }
      return str2.toLowerCase();
    }
    
  }



const cipher = new ShiftCipher(1);
console.log(cipher.encrypt('Z'));