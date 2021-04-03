
const _ = {
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  }, 
  inRange(number, start, end) {
    if (end === undefined) {
	    end = start;
	    start = 0;
    }
    if (start > end) {
	    const temp = start;
	    start = end;
	    end = temp;
    }
    if (number === start) {
	    return true;
    } else if (number === end) {
	    return false;
    }
    if (number < start) {
      return false;
    } else if (number > end) {
      return false;
    } else if (number > start && number < end) {
      return true;
    }
  }, 
  words(str1) {
    const temp = str1.split(" ");
    return temp;
    
  }, 
  pad(str1, len) {
    if (len < str1.length) {
      return str1;
    } else if (len === str1.length) {
      return str1;
    } else {
      const temp = len - str1.length;
      if (temp % 2 === 0) {
        let str2 = '';
        for (let i = 0; i < temp; i+=2) {
          str2 = ' ' + str1 + ' ';
        }
      } else {
        let str3 = '';
        for (let i = 0; i < temp; i+=2) {
            str3 = ' ' + str1 + ' ';
        }
        str3 = str1 + ' ';
        return str3;
        }
    }
   
    }, 
    has(obj, key) {
      if (obj.key === 'undefined') {
        return false;
      } 
      return true;
    }, 
    invert(obj) {
      let invertedObject = {}
      for (var key in obj) {
        invertedObject[obj[key]] = key;
      }
      return invertedObject;
    }, 
    findKey(obj, predicate) {
      for (var key in obj) {
        const value = obj.key;
        const predicateReturnValue = predicate(value);
        if (predicateReturnValue) {
          return key;
        }
      }
      return undefined;
    }, 
    drop(arr, numOfItems) {
      if (numOfItems === undefined) {
        arr.shift();
        return arr;
      }
      for (let i = 0; i < numOfItems; i++){
        arr.shift();
      }
      return arr;
    }, 
    dropWhile(arr, predicate) {
      for (let i = 0; i < arr.length -1; i++) {
         while (predicate(arr[i], i, arr) === true) {
           arr.shift();
         }
      }
      return arr;
    }, 
    chunk(arr, size) {
      if (size === undefined) {
        size = 1;
      }
      const tempArr = [];
      for (let i = 0; i < arr.length; i+=size) {
       const arrayChunk = arr.slice(i, i+size);
       tempArr.push(arrayChunk);
      }
      return tempArr;

    }
    
  }

// Do not write or modify code below this line.
module.exports = _;
