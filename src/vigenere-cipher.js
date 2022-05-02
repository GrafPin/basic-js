const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(boolValue) {
    this.boolValue = boolValue;
  }

  encrypt(message, key) {
    let error = new Error("Incorrect arguments!");
    if (message === undefined || key === undefined) {
      throw error;
    }
    let arr = [];
    let a;
    let j = 0;
    let x = 0;
    let str = "";
    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Za-z]/g) !== null) {
        if (message[i] === message[i].toUpperCase()) {
          x = message.charCodeAt(i) - 65;
        }
        else {
          x = message.charCodeAt(i) - 97;
        }

        for (; ;) {
          if (j == key.length) { j = 0; }
          if (key[j].match(/[A-Za-z]/g) !== null) {
            if (key[j] === key[j].toUpperCase()) {
              a = (x + (key.charCodeAt(j) - 65)) % 26
              arr.push(String.fromCharCode(a + 65));
            }
            else {
              a = (x + (key.charCodeAt(j) - 97)) % 26
              arr.push(String.fromCharCode(a + 97));
            }
            j++;
            break;
          }
        }
      }
      else { arr.push(message[i]); }
    }
    if (this.boolValue === false) {
      arr.reverse();
    }
    str = arr.join("");
    return str.toUpperCase();
  }



  decrypt(message, key) {
    let error = new Error("Incorrect arguments!");
    if (message === undefined || key === undefined) {
      throw error;
    }
    message = message.toLowerCase();
    let arr = [];
    let a;
    let j = 0;
    let x = 0;
    let str = "";
    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Za-z]/g) !== null) {
        if (message[i] === message[i].toUpperCase()) {
          x = message.charCodeAt(i) - 65;
        }
        else {
          x = message.charCodeAt(i) - 97;
        }

        for (; ;) {
          if (j == key.length) { j = 0; }
          if (key[j].match(/[A-Za-z]/g) !== null) {
            if (key[j] === key[j].toUpperCase()) {
              a = (x - (key.charCodeAt(j) - 65) + 26) % 26;
              arr.push(String.fromCharCode(a + 65));
            }
            else {
              a = (x - (key.charCodeAt(j) - 97) + 26) % 26;
              arr.push(String.fromCharCode(a + 97));
            }
            j++;
            break;
          }
        }
      }
      else { arr.push(message[i]); }
    }
    if (this.boolValue === false) {
      arr.reverse();
    }
    str = arr.join("");
    return str.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
