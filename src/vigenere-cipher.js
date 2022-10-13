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
  constructor(type) {
    this.type = arguments.length == 0 || type === true ? true : false;
  }
  encrypt(message, key) {
    if (
      arguments.length == 0 ||
      typeof message !== 'string' ||
      typeof key !== 'string'
    )
      throw new Error('Incorrect arguments!');
    let k = key.split('');
    let i = 0;
    let m = message.split('');
    let kl = m.filter((e) => {
      let ch = e.charCodeAt();
      return (ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122);
    }).length;
    while (k.length < kl) {
      k.push(k[i]);
      i++;
    }
    k = k
      .map((e) => {
        let ch = e.charCodeAt();
        if (ch >= 65 && ch <= 90) ch -= 65;
        else if (ch >= 97 && ch <= 122) ch -= 97;
        return ch;
      })
      .reverse();

    m = message.split('').map((e) => {
      let ch = e.charCodeAt();
      if (ch >= 65 && ch <= 90) {
        ch -= 65;
        ch += k.pop(k.length - 1);
        if (ch > 25) ch -= 26;
        ch += 65;
        return String.fromCharCode(ch);
      } else if (ch >= 97 && ch <= 122) {
        ch -= 97;
        ch += k.pop(k.length - 1);
        if (ch > 25) ch -= 26;
        ch += 65;
        return String.fromCharCode(ch);
      } else return e;
    });

    return this.type ? m.join('') : m.reverse().join('');
  }
  decrypt(message, key) {
    if (
      arguments.length == 0 ||
      typeof message !== 'string' ||
      typeof key !== 'string'
    )
      throw new Error('Incorrect arguments!');
    let k = key.split('');
    let i = 0;
    let m = message.split('');
    let kl = m.filter((e) => {
      let ch = e.charCodeAt();
      return (ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122);
    }).length;
    while (k.length < kl) {
      k.push(k[i]);
      i++;
    }
    k = k
      .map((e) => {
        let ch = e.charCodeAt();
        if (ch >= 65 && ch <= 90) ch -= 65;
        else if (ch >= 97 && ch <= 122) ch -= 97;
        return ch;
      })
      .reverse();

    m = message.split('').map((e) => {
      let ch = e.charCodeAt();
      if (ch >= 65 && ch <= 90) {
        ch -= 65;
        ch -= k.pop(k.length - 1);
        if (ch < 0) ch += 26;
        ch += 65;
        return String.fromCharCode(ch);
      } else if (ch >= 97 && ch <= 122) {
        ch -= 97;
        ch -= k.pop(k.length - 1);
        if (ch < 0) ch += 26;
        ch += 65;
        return String.fromCharCode(ch);
      } else return e;
    });

    return this.type ? m.join('') : m.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
