const { NotImplementedError } = require("../extensions/index.js");
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.regex = new RegExp(/[a-z]/gi);
  }

  checkArguments() {
    if (arguments.length !== 2 || typeof arguments[0] !== "string" || typeof arguments[1] !== "string") {
      throw new Error("Incorrect arguments!");
    }
  }

  generateKeyword(message, key) {
    let keyword = "";

    for (let i = 0, j = 0; i < message.length && j < key.length; i++, j++) {
      if (message[i].match(this.regex)) {
        keyword += key[j];
        j === key.length - 1 ? (j = -1) : j;
      } else {
        keyword += "*";
        j--;
      }
    }
    return keyword.toUpperCase();
  }

  encrypt(message, key) {
    this.checkArguments(message, key);
    let keyword = this.generateKeyword(message, key);
    message = message.toUpperCase();

    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
      if (message[i].match(this.regex)) {
        let encryptedLetterCode = 65 + ((message.charCodeAt(i) + keyword.charCodeAt(i)) % 26);
        encryptedMessage += String.fromCharCode(encryptedLetterCode);
      } else {
        encryptedMessage += message[i];
      }
    }
    return this.direct ? encryptedMessage : encryptedMessage.split("").reverse().join("");
  }
  decrypt(message, key) {
    this.checkArguments(message, key);
    let keyword = this.generateKeyword(message, key);
    message = message.toUpperCase();

    let decryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
      if (message[i].match(this.regex)) {
        let decryptedLetterCode = 65 + ((message.charCodeAt(i) - keyword.charCodeAt(i) + 26) % 26);
        decryptedMessage += String.fromCharCode(decryptedLetterCode);
      } else {
        decryptedMessage += message[i];
      }
    }
    return this.direct ? decryptedMessage : decryptedMessage.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
