
const _ = {
  // writing the clamp method
  clamp(number, lower, upper) {
	  if (number > lower && number < upper) {
    		return number;
  	} 
	else if (number < lower) {
    		return lower;
  	} else if (number > upper) {
    		return upper;
  	}
  }, 
  // writing the in range method
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
  // splitting a string into words
  words(str1) {
    const temp = str1.split(" ");
    return temp;
    
  },
  // a function for pad, which basically adds padding to strings
   pad (string, length){
    if (length <= string.length){
      return string;
    };
    const addToB = Math.floor((length - string.length) / 2);
    const addToE = length - string.length - addToB;
    const paddedString = ' '.repeat(addToB) + string + ' '.repeat(addToE);

    return paddedString;
   
    }, 
    // return true if an object has a key, false otherwise
    has(obj, key) {
      if (obj.key === undefined) {
        return false;
      } else if (obj.hasOwnProperty(key)) {
	      return true;
      } else {
	      return false;
      }
      return true;
    }, 
    // a method for inverting an object
    // replace the values of keys with keys and vice versa
    invert(obj) {
      let invertedObject = {}
      for (var key in obj) {
        invertedObject[obj[key]] = key;
      }
      return invertedObject;
    }, 
    // return key if it exists in the object
    // undefined otherwise
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
    // input: arr && number of items to drop
    // output: new array with the number of items dropped
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
    // input: an array with a number representing the size
    // output: return a set of arrays split from the original array depending on the size given
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
