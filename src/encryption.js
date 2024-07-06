import CryptoJS from 'crypto-js';

class Encryption {
    constructor(key = "#*/@!*ganji*!@&%*zadeh*&%/*#") {
        this.key = CryptoJS.MD5(key).toString(CryptoJS.enc.Hex);
    }

    encrypt(data) {
        const iv = CryptoJS.lib.WordArray.random(16);
        const encrypted = CryptoJS.AES.encrypt(data, CryptoJS.enc.Hex.parse(this.key), { iv: iv });
        const ivBase64 = iv.toString(CryptoJS.enc.Base64);
        return ivBase64 + encrypted.toString();
    }

    decrypt(data) {
        const iv = CryptoJS.enc.Base64.parse(data.slice(0, 24));
        const encryptedData = data.slice(24);
        const decrypted = CryptoJS.AES.decrypt(encryptedData, CryptoJS.enc.Hex.parse(this.key), { iv: iv });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}

export default Encryption;