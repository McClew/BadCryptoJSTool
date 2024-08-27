// Required!
// npm install crypto-js
const CryptoJS = require("crypto-js");

// Banner
console.log("+--------------------+");
console.log("| CryptoJS Decrypter |");
console.log("+--------------------+");

var key = "";       // Key here
var iv = "";        // Initialisation vector here
var target = "";    // String to decrypt here

// Verbosity
console.log("[?] Key: " + key);
console.log("[?] IV:  " + iv + "\n");
console.log("[?] Target string: \n" + target + "\n");

var key_parsed = CryptoJS.enc.Utf8.parse(key);
var iv_parsed = CryptoJS.enc.Utf8.parse(iv);    

var parameters = CryptoJS.lib.CipherParams.create({
    ciphertext: CryptoJS.enc.Base64.parse(target)
});

var result = CryptoJS.AES.decrypt(parameters, key_parsed, { iv: iv_parsed, mode: CryptoJS.mode.CBC }).toString(CryptoJS.enc.Utf8);

console.log("[!] Result: \n" + result);
